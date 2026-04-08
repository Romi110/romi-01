# Network Security
*Firewall rules, VLAN isolation, intrusion detection, and VPN — defending a home network that actually matters*

---

## What Is It

Network security at the home level is the set of controls that determine what traffic can reach what, who can get in from outside, and what you can detect when things go wrong. It's the difference between a flat network where your smart TV can reach your NAS, and a segmented network where IoT devices are isolated, internet-facing services are in a DMZ, and remote access is authenticated and encrypted.

This isn't about paranoia — it's about eliminating obvious attack surface and making your network behave according to explicit policy rather than implicit defaults.

## Why It Matters

Home networks have become meaningful targets. A flat home network where all devices share a subnet means a compromised smart TV, IP camera, or cheap IoT device has a clear path to your laptops, NAS, and password manager. The historical argument "home networks aren't worth attacking" is dead — home offices, self-hosted services, and NAS drives containing sensitive data make home networks worth targeting.

For Romi specifically: a self-hosted setup with Nextcloud, Vaultwarden, and a NAS full of personal data is a meaningful target. The security controls in this file are what make that setup defensible, not just aspirational.

## Core Concepts

### Threat Model — What Actually Threatens a Home Network

Before building controls, name the threats. For a private individual:

**Realistic threats**:
- **Compromised IoT device** — a vulnerable smart speaker or camera gives lateral access to your LAN
- **Exposed services** — port-forwarded services reachable from the internet; CVEs against Plex, Nextcloud, etc.
- **Credential theft** — weak passwords, reused passwords, phishing
- **Remote access compromise** — VPN or RDP with weak authentication
- **DNS hijacking** — malicious DNS responses redirecting traffic

**Lower-probability threats** (but worth understanding):
- Targeted attacks on your home network specifically
- ISP-level compromise
- Physical access to your router or switch

**Out of scope** (for a private individual; relevant to professionals):
- Nation-state attacks, advanced persistent threats
- Supply-chain attacks on firmware

This threat model says: **VLAN isolation and firewall rules address your highest-probability threats.** IDS/IPS and deep packet inspection are the next layer, not the first.

### Firewall Rule Design

The fundamentals of firewall rules are covered in [networking-fundamentals.md](networking-fundamentals.md). This section covers how to design rules at the VLAN level.

**Zone-based model**: instead of per-IP rules, define zones (VLANs) and write rules between zones. Four zones for a home: Trusted, IoT, Guest, Lab. See [home-network-design.md](home-network-design.md) for the subnet plan.

**Default deny**: every zone defaults to blocked. You explicitly permit what you need. This is the only correct default.

**Rule order matters**: rules are evaluated top to bottom; first match wins. Put specific rules before general ones. Permit rules for specific services come before the default deny.

**Rules for each zone**:

*Trusted (VLAN 10)*:
- Allow → Internet (outbound, all ports)
- Allow → Lab (to reach self-hosted services by IP or hostname)
- Allow → IoT (to control devices from trusted LAN — e.g., Home Assistant polling)
- Block → everything from IoT/Guest toward Trusted

*IoT (VLAN 20)*:
- Allow → Internet (DNS, HTTP/HTTPS — smart devices need cloud access)
- Block → Trusted
- Block → Lab
- Block → Guest
- Allow DNS queries to the router's VLAN 20 interface only (prevents DNS hijacking to a rogue server)

*Guest (VLAN 30)*:
- Allow → Internet (HTTP/HTTPS only, or all outbound)
- Block → everything else
- DNS goes to public resolver (8.8.8.8 or 1.1.1.1), not your local Pi-hole

*Lab (VLAN 40)*:
- Allow → Internet (selective — servers pulling updates need it; experimental VMs may not)
- Block by default → Trusted (you decide per service what's accessible)

**Inbound from the internet**: block everything by default. Only open ports for services you intentionally expose, and only from specific IPs if possible. Every open port is attack surface.

### VLAN Isolation

VLAN isolation is the structural security control — it limits what a compromised device can reach. Concepts are in [networking-fundamentals.md](networking-fundamentals.md); the security logic is here.

**IoT isolation is not optional.** IoT devices have historically terrible security: default credentials, unpatched firmware, no update lifecycle. They need internet access to function; they do not need access to your laptop. Putting them on VLAN 20 with firewall rules blocking VLAN 10 access is the single highest-value security change on a flat home network.

**One-way access**: Trusted → IoT is often needed (Home Assistant polling sensors, phone controlling a smart bulb). IoT → Trusted never is. Model these as one-way firewall rules.

**The guest VLAN is about isolation, not kindness.** A friend's phone on your guest network shouldn't be able to reach your NAS. The guest VLAN ensures this with no manual action required.

**Lab isolation**: homelab VMs and containers are where you run untrusted workloads and experiment. A compromised container should reach the internet but not your trusted LAN. Block Lab → Trusted; allow Trusted → Lab selectively (specific ports for accessing services).

### DNS Security

DNS is the first thing attackers manipulate and the first thing defenders should lock down.

**Local DNS resolver**: running Pi-hole or AdGuard Home locally means you control all DNS queries on your network. You can block ad/tracking/malware domains network-wide, set local hostnames (`nas.home → 10.0.40.5`), and log every DNS query. See `dns-and-pihole.md` (planned) for setup.

**Force DNS through your resolver**: configure firewall rules to intercept any DNS query on port 53 and redirect it to your local resolver. This prevents a device from bypassing Pi-hole by hardcoding 8.8.8.8. IoT devices frequently do this.

**DNS-over-HTTPS / DNS-over-TLS (DoH/DoT)**: encrypts DNS queries between your resolver and the upstream server, preventing ISP snooping and DNS hijacking in transit. Set your Pi-hole or AdGuard Home upstream to use 1.1.1.1 with DoH or Cloudflare over TLS. Note: DoH on port 443 can't be trivially intercepted by firewall rules — another reason to run a local resolver that handles this upstream.

**Split-horizon DNS**: your local resolver returns internal IPs for local services (`nextcloud.home → 10.0.40.10`); external DNS returns the public IP. This lets you access self-hosted services by name whether inside or outside the network.

### IDS / IPS

**What it is**: Intrusion Detection System (IDS) watches traffic and alerts on suspicious patterns; Intrusion Prevention System (IPS) blocks it. The tools: **Suricata** and **Snort** are the two main open-source options. Both run in pfSense/OPNsense natively. UniFi Dream Machine Pro/SE has a built-in IDS/IPS (Threat Management) powered by Suricata under the hood.

**What it catches**: known malware signatures, exploit attempts against known CVEs, port scans, known C2 communication patterns. It matches traffic against rulesets (Emerging Threats is the main free ruleset).

**What it doesn't catch**: zero-days, encrypted C2 traffic (HTTPS), anything not in the ruleset, protocol anomalies without a matching rule.

**Performance cost**: IDS/IPS inspects packet contents, which is CPU-intensive. On a Gigabit line with pfSense on a capable CPU (N100 or better), you'll still hit full throughput. On underpowered hardware, it'll cap your speed.

**Practical recommendation**: enable IDS in monitoring-only mode first. Review alerts for a week to understand your baseline (expect false positives from normal traffic). Then enable blocking selectively. Don't run IPS in block mode on a shared network without understanding your alerts — false positives will break services.

### VPN and Remote Access

VPN lets you reach your home network from outside as if you were local. Two realistic options:

**WireGuard**: modern, fast, minimal (~4000 lines of code vs. OpenVPN's ~70,000). Lower attack surface. Built into pfSense, OPNsense, and most Linux systems. Set up the server on your router; clients generate keypairs; the server has a list of allowed public keys. No username/password — key-based only. See `vpn-and-remote-access.md` (planned) for full setup.

**Tailscale**: managed WireGuard. You install an agent on each device; Tailscale handles the key exchange, NAT traversal, and access control via their control plane. Works even behind CGNAT (carrier-grade NAT where you don't have a real public IP). The trade-off: your access control policy lives on Tailscale's servers, not yours. For most home users this is acceptable; for maximum self-reliance, self-host Headscale (the open-source Tailscale control server).

**Never expose RDP or SSH directly to the internet.** These services get probed constantly. SSH behind a VPN, or use Tailscale — never put them on a public port.

## Key Considerations

**Security theater vs. security.** Complex firewall rules that you don't maintain are worse than simple ones you understand. Start with VLAN isolation and default deny. Add IDS when your hardware supports it without degrading throughput. Don't install controls you won't monitor.

**Log everything, review periodically.** Your firewall logs are your visibility. Set up pfSense/OPNsense or UniFi to send logs to a syslog server. Review blocked traffic weekly when starting out — you'll discover devices reaching out in unexpected ways.

**Certificates for local services.** If you're running Nextcloud or other services locally, don't click through SSL warnings — get real certificates. Caddy with Let's Encrypt or a local CA with self-signed certs added to your trust store are both solutions. Split-horizon DNS makes this work cleanly.

## Getting Started

**Day one hardening** (no new hardware required):
1. Change default router admin password and disable remote admin access
2. Enable WPA3 or WPA2-AES on WiFi (not TKIP)
3. Disable UPnP on your router — it lets devices open ports without your knowledge
4. Create a guest WiFi network and put IoT devices on it (even if it's just a separate SSID, not a full VLAN)
5. Put all internet-facing services behind authentication; no open ports that aren't necessary

**With managed hardware** (UniFi/pfSense):
1. Implement the four-VLAN design from [home-network-design.md](home-network-design.md)
2. Write firewall rules: IoT → Trusted block, Guest → all internal block
3. Force DNS through your local resolver; consider Pi-hole
4. Set up WireGuard or Tailscale for remote access; remove any direct port-forwards for SSH/admin interfaces
5. Enable IDS in monitoring mode; review after a week

## Common Mistakes

**Flat network "for simplicity."** The first IoT device you put on the same network as your NAS is a flat network security problem. The cost of VLANs is 2 hours of setup. The cost of a compromised flat network is much higher.

**UPnP enabled.** UPnP lets any device on your network open firewall holes. Disable it. If an app stops working, add a specific port-forward rule — you'll know exactly what you've opened.

**Unused open ports.** "I set up port forwarding for X and forgot about it." Audit your port-forward rules quarterly. Every unused rule is attack surface.

**VPN with weak credentials.** If you're running an OpenVPN server with username/password, use strong passwords and enable MFA. Better: switch to WireGuard (key-based only, no passwords).

## Resources

- **Lawrence Systems** (YouTube) — pfSense/OPNsense configuration, IDS setup, firewall rule walkthroughs. Practical and current.
- **Troy Hunt** (haveibeenpwned.com) — credential exposure context; his blog posts on IoT security are concrete and non-alarmist.
- *The Practice of Network Security Monitoring* — Richard Bejtlich. Heavy, but the chapters on network visibility and logging directly apply to a home setup running Suricata.

## Connections

- [networking-fundamentals.md](networking-fundamentals.md) — Firewall fundamentals, VLAN concepts, the protocol knowledge behind these controls
- [home-network-design.md](home-network-design.md) — The VLAN design that firewall rules enforce
- [network-hardware.md](network-hardware.md) — pfSense vs. UniFi capability differences in IDS, firewall, and VPN
- [homelab-overview.md](homelab-overview.md) — Self-hosted services in the lab are the things this security architecture is protecting

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-08*
