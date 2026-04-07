# Networking Fundamentals
*How data moves from one machine to another — the concepts behind everything in networking*

---

## What Is It

Networking is the set of protocols, hardware, and software that allows computers to communicate. Every time you load a webpage, send a message, or SSH into a server, a specific sequence of layered processes translates your intent into electrical signals, routes them across potentially thousands of devices, and reassembles them correctly on the other end.

Understanding this well enough to reason about it — not just follow instructions — is what separates someone who can configure a network from someone who can design and troubleshoot one. The concepts here are the substrate for everything in home networking, home labs, security, and professional infrastructure work.

## Why It Matters

Romi is a tech professional. Networking is infrastructure — it underlies every system, every service, every cloud architecture. Gaps here show up during system design interviews, when debugging production issues that turn out to be DNS, when setting up a home lab, and when making sense of security vulnerabilities. Unlike frameworks that change every few years, TCP/IP and the fundamentals covered here have been stable for decades and will remain so.

For self-reliance and home lab purposes: understanding subnets, VLANs, and DNS is what lets you build a properly segmented home network, self-host services securely, and stop treating the home router as a black box.

## Core Concepts

### The OSI Model — A Mental Map, Not a Law

The OSI (Open Systems Interconnection) model is a 7-layer framework for thinking about how networking works. You'll see it referenced constantly. Think of it as a stack — each layer adds something and talks only to the layer above and below it.

| Layer | Name | What it does | Examples |
|-------|------|-------------|---------|
| 7 | Application | User-facing protocols | HTTP, DNS, SMTP, SSH |
| 6 | Presentation | Encoding, encryption, compression | TLS/SSL, JPEG encoding |
| 5 | Session | Opening/closing communication sessions | NetBIOS, RPC |
| 4 | Transport | End-to-end delivery, ports, reliability | TCP, UDP |
| 3 | Network | Logical addressing, routing between networks | IP, ICMP |
| 2 | Data Link | Physical addressing, local delivery | Ethernet (MAC addresses), WiFi |
| 1 | Physical | Raw bits over wire or radio | Ethernet cables, fiber, radio waves |

**In practice**, you mostly reason in terms of:
- **Layer 3** (IP — where routing decisions are made)
- **Layer 4** (TCP/UDP — where ports live)
- **Layer 7** (Application — where HTTP, DNS, etc. live)

The common shorthand: "layer 3 problem" means a routing or IP issue. "Layer 7 problem" means an application-level issue (like a misconfigured web server). Knowing where to look based on symptoms is the skill the model develops.

The real-world stack used on the internet is TCP/IP, which collapses the OSI layers into four: Network Access (L1+2), Internet (L3), Transport (L4), Application (L5-7).

### IP Addresses and Subnets

Every device on a network has an **IP address** — a 32-bit number written as four octets (e.g., `192.168.1.50`). IP addresses have two parts: the **network portion** (which network you're on) and the **host portion** (which device on that network).

**Subnet masks** define the split. Written as `/24` (CIDR notation) or `255.255.255.0`:
- `/24` means the first 24 bits identify the network, the last 8 bits identify the host
- A `/24` network has 256 addresses (0-255), with 254 usable (0 is the network address, 255 is broadcast)
- `/16` gives you 65,536 addresses; `/8` gives 16 million

**Common home network ranges** (private IP space, not routable on the internet):
- `192.168.0.0/16` — most home routers default to `192.168.1.x` or `192.168.0.x`
- `10.0.0.0/8` — large private space; used in home labs and enterprise
- `172.16.0.0/12` — less common, but valid private range

**How to read CIDR notation quickly**:
- `/24` = 254 hosts (typical home LAN)
- `/25` = 126 hosts (split a /24 in half)
- `/28` = 14 hosts (small VLAN, like a DMZ)
- `/32` = exactly one host (specific host route)

**Why subnets matter**: networks are divided into subnets to control traffic flow, apply firewall rules between segments, and limit broadcast domains. When you set up a home lab with VLANs, you're creating separate subnets — e.g., `10.0.10.0/24` for trusted devices, `10.0.20.0/24` for IoT, `10.0.30.0/24` for lab machines.

### DNS — The Internet's Phone Book

DNS (Domain Name System) translates human-readable names (`google.com`) into IP addresses (`142.250.80.46`). Without DNS, you'd need to remember IPs for everything.

**How a DNS lookup works**:
1. You type `google.com` in your browser
2. Your machine asks your configured DNS resolver (usually your router, or 8.8.8.8)
3. If the resolver has it cached, it answers immediately
4. If not, it asks a root nameserver → TLD nameserver (`.com`) → authoritative nameserver for `google.com`
5. Returns the IP; your browser connects

**DNS record types**:
- `A` — maps a hostname to an IPv4 address (`example.com → 93.184.216.34`)
- `AAAA` — same for IPv6
- `CNAME` — alias; points one hostname to another (`www.example.com → example.com`)
- `MX` — mail server for a domain
- `TXT` — arbitrary text; used for SPF, DKIM (email authentication), domain verification
- `PTR` — reverse DNS; IP → hostname (used in logging, spam checks)

**TTL (Time to Live)**: every DNS record has a TTL in seconds. After that time, resolvers must re-query. Low TTL = faster propagation of changes; high TTL = less DNS traffic.

**Local DNS**: in a home lab, you want local DNS so `nas.home` resolves to `10.0.10.5` instead of using IPs everywhere. Pi-hole and AdGuard Home do this alongside ad blocking. See `dns-and-pihole.md`.

### DHCP — Automatic IP Assignment

DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network. When your laptop connects to WiFi:
1. Your laptop sends a broadcast: "I need an IP address"
2. The DHCP server (usually your router) offers one from its pool
3. Your laptop accepts and gets: IP address, subnet mask, default gateway, DNS server

**DHCP lease**: IPs are assigned for a time period (the lease). When it expires, the device renews or gets a new IP. This is why IPs can change on a home network.

**Static DHCP (reservations)**: assign a fixed IP to a specific MAC address. The device still uses DHCP, but always gets the same IP. Do this for servers, printers, and anything you reference by IP — you want `nas.home` to always be `10.0.10.5`, not whatever it was assigned this boot.

**DHCP pools vs. static range**: good practice is to divide your subnet — give DHCP a range (e.g., `10.0.10.100–200`) and keep `10.0.10.1–99` for static/reserved devices. This makes the IP scheme readable.

### Routing — Moving Traffic Between Networks

A **router** connects different networks and moves traffic between them. Your home router connects your LAN (`192.168.1.0/24`) to the internet (your ISP's network).

**How routing decisions are made**: a router has a routing table — a list of "to reach this network, send traffic to this next hop." When a packet arrives, the router looks up the destination IP, finds the most specific matching route, and forwards it.

**Default gateway**: the router your device sends traffic to when the destination IP isn't on its local subnet. For most home devices, this is `192.168.1.1` — your router sends everything it doesn't know locally out to the ISP.

**NAT (Network Address Translation)**: your home has one public IP (from your ISP). All your internal devices share it. NAT translates outbound requests so the source IP appears to be your public IP, then maps responses back to the correct internal device. This is why you can have 20 devices on a `192.168.x.x` network with one public IP.

**Static routes**: in a home lab with multiple subnets, you may need to tell your router how to reach machines on subnets it doesn't know about directly. A static route says "to reach `10.0.30.0/24`, send traffic to `10.0.10.2`" (where `10.0.10.2` might be a VM acting as a router).

### TCP vs. UDP

The transport layer has two main protocols:

**TCP (Transmission Control Protocol)**:
- Connection-oriented: establishes a connection (three-way handshake: SYN, SYN-ACK, ACK) before sending data
- Reliable: guarantees delivery, in-order, with error checking and retransmission
- Used when you need every byte to arrive correctly: HTTP/HTTPS, SSH, SMTP, database connections

**UDP (User Datagram Protocol)**:
- Connectionless: fire and forget
- No delivery guarantee, no ordering, no retransmission
- Lower overhead, lower latency
- Used when speed matters more than reliability: DNS queries, video streaming, VoIP, games, DNS

**The mental model**: TCP is a phone call — you establish a connection, talk, confirm understanding, hang up. UDP is a flyer — you send it out and hope it arrives.

**Ports**: both TCP and UDP use ports (0-65535) to identify which service a packet is for. Well-known ports:
- `22` — SSH
- `53` — DNS (UDP mostly, TCP for large responses)
- `80` — HTTP
- `443` — HTTPS
- `3306` — MySQL
- `5432` — PostgreSQL
- `8080`, `8443` — common alternative HTTP/HTTPS ports for apps

A service is identified by IP + port + protocol: `192.168.1.50:22/TCP` means SSH on a specific machine.

### Ethernet and MAC Addresses

At Layer 2, devices on the same local network communicate using **MAC addresses** — 48-bit hardware identifiers burned into network interfaces (e.g., `AA:BB:CC:DD:EE:FF`). Unlike IP addresses, MACs don't change with network location (though they can be spoofed).

**ARP (Address Resolution Protocol)**: translates IP addresses to MAC addresses within a subnet. When your machine wants to send to `192.168.1.50`, it broadcasts "who has `192.168.1.50`?" The device responds with its MAC, and your machine caches this in its ARP table.

**Switches** operate at Layer 2 — they forward traffic between devices on the same network using MAC addresses. An **unmanaged switch** just forwards everything. A **managed switch** lets you configure VLANs, port mirroring, QoS, and monitoring.

**VLANs (Virtual LANs)**: a way to logically segment a network at Layer 2 without separate physical hardware. A VLAN tag (802.1Q) is added to Ethernet frames to identify which VLAN they belong to. Traffic between VLANs must pass through a router (Layer 3). This is how you separate IoT devices from your trusted LAN on the same physical switch — see `home-network-design.md`.

### WiFi Basics

WiFi is Layer 2 over radio. Key concepts:

**Standards and speeds**:
- WiFi 5 (802.11ac) — up to ~3.5 Gbps theoretical, practically 200-600 Mbps per device
- WiFi 6 (802.11ax) — better in dense environments, more efficient, practical gains in congested areas
- WiFi 6E — extends into 6 GHz band, less interference, shorter range

**Frequencies**:
- **2.4 GHz**: longer range, better wall penetration, more congested (shared with microwaves, neighbors), max 72-150 Mbps per device
- **5 GHz**: shorter range, less congestion, much faster (practical 400-900+ Mbps per device)
- **6 GHz** (WiFi 6E): cleanest spectrum, limited range, best for dense/high-throughput use

**Practical home rule**: use 5 GHz for devices within range, 2.4 GHz for IoT devices and anything at range limits. Don't let consumer "mesh" systems auto-pick this — if you have a managed system (UniFi), separate the SSIDs.

### Firewalls

A firewall controls what traffic is allowed to flow between networks based on rules. Rules are evaluated in order; first match wins.

**Stateful vs. stateless**:
- **Stateful**: tracks connection state. If you initiate a connection outbound, return traffic is automatically allowed. Most modern firewalls.
- **Stateless**: evaluates every packet independently against rules. More CPU-intensive, less common except in specialized contexts.

**Basic rule structure**: `[action] [source] [destination] [port/protocol]`
- Allow `192.168.1.0/24` → `any` on port `443` (trusted LAN can browse HTTPS)
- Block `10.0.20.0/24` → `10.0.10.0/24` (IoT VLAN cannot reach trusted LAN)
- Allow `any` → `10.0.10.5` on port `32400` (anyone can reach Plex from outside the trust zone)

**Default deny**: the right default is block everything not explicitly allowed. Start from "nothing works," then open what you need. The opposite (allow everything, block what's bad) misses things you didn't think to block.

## Key Considerations

**Most home network problems are DNS.** If something works by IP but not by hostname, it's DNS. If everything suddenly stops working after a change, check DNS first. "It's always DNS" is a cliché because it's true.

**Understand before you configure.** Copying configs from tutorials without understanding them produces setups you can't debug. The concepts above let you reason about what each setting does.

**Logs are how you learn what's actually happening.** When building or troubleshooting, look at firewall logs, DHCP logs, and DNS query logs. You'll understand your network far better than assuming everything works as configured.

**IPv6 exists and will matter more.** IPv6 is 128-bit addresses, essentially unlimited address space — no NAT needed. Most ISPs now dual-stack (both IPv4 and IPv6). If you're not thinking about IPv6, you're ignoring half your traffic. Home lab setups should account for it.

## Getting Started

1. **Map your current network**: what's your subnet? What's your router's IP? What's your DNS server? Run `ipconfig` (Windows) or `ip addr` (Linux) and understand every field.
2. **Install Wireshark** and capture traffic on your own machine for 5 minutes. Filter by `dns` and watch what your machine is asking. This is more educational than reading.
3. **Subnet practice**: use a subnet calculator (subnettingpractice.com or ipcalc) and do 20 problems until CIDR notation is intuitive.
4. **Build toward the next file**: `home-network-design.md` applies all of this — VLANs, routing between subnets, DNS — to an actual home setup.

## Common Mistakes

**Confusing subnets with VLANs.** A subnet is a Layer 3 concept (IP range). A VLAN is a Layer 2 concept (logical network segment). They work together — each VLAN typically gets its own subnet — but they're different things at different layers.

**Using ISP-provided routers as the only device.** ISP routers are designed for mass-market convenience, not control. They typically don't support VLANs, have limited firewall options, and can't be configured as seriously as a dedicated router (pfSense, OPNsense, UniFi Dream Machine).

**Not documenting your IP scheme.** Once you have VLANs, static IPs, and firewall rules, undocumented changes accumulate and the network becomes opaque. A simple spreadsheet or Netbox instance pays for itself in debugging time avoided.

**Ignoring security by default.** "I'll add firewall rules later" becomes never. Build the network with correct segmentation from the start — it's much harder to retrofit.

## Resources

- *Computer Networks* — Andrew Tanenbaum. The textbook; comprehensive and precise. Read selectively by topic rather than cover-to-cover.
- **Professor Messer's Network+** (free on YouTube) — structured, clear, covers all fundamentals; originally for the CompTIA cert but valuable regardless
- **Julia Evans' networking zines** (jvns.ca) — her DNS and networking explainers are the clearest visual breakdowns available online
- **Wireshark** — the tool itself teaches you more than any book. Capture and analyze your own traffic.

## Connections

- [home-network-design.md](home-network-design.md) — Applies subnets, VLANs, and routing to designing an actual home network
- [network-security.md](network-security.md) — Firewall rules, VLAN isolation, and threat modeling for a home/lab environment
- [homelab-overview.md](homelab-overview.md) — Home labs require multiple subnets, routing between VMs, and DNS — all built on what's here
- [dns-and-pihole.md](dns-and-pihole.md) — Deep-dive on DNS in practice, local DNS resolution, and ad blocking

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-05*
