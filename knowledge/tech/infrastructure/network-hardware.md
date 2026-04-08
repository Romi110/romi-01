# Network Hardware
*Routers, managed switches, and access points — what to buy and why*

---

## What Is It

Network hardware is the physical layer of your home network: the router/firewall that connects to the internet and enforces rules, the switch that connects wired devices together, and the access points that provide WiFi. Most people have one device (the ISP combo unit) doing all three jobs poorly. A real setup separates these roles, uses hardware capable of the features you actually need (VLANs, PoE, firewall rules), and gives you full control over configuration.

The three main ecosystems to know: **consumer gear** (Eero, Netgear, ASUS), **Ubiquiti UniFi** (prosumer, unified management, excellent hardware), and **pfSense/OPNsense** (open-source software firewalls on dedicated hardware).

## Why It Matters

Your choice of hardware determines what you can actually do. VLAN segmentation, proper firewall rules, DHCP reservations per VLAN, QoS, and network visibility all require hardware that supports them. A $60 consumer router supports none of this. A properly chosen setup at $300–500 supports all of it and lasts 5–8 years.

## Core Concepts

### Consumer All-in-One Routers

**What they are**: devices like the ASUS RT-AX88U, Netgear Nighthawk, or any ISP-provided gateway that combine router, switch, and WiFi in one unit.

**What they can do**: basic NAT, DHCP, guest WiFi, simple port forwarding. Adequate for one device that just needs to be online.

**What they can't do**: proper VLAN support (or limited/broken implementation), advanced firewall rules, network-wide visibility, integration with a separate managed switch, or serious QoS. ISP-provided routers are worse — they're designed for mass-market use, often have locked firmware, and prioritize the ISP's management access over yours.

**When they're OK**: a rental apartment, one person, no homelab ambitions, no IoT concerns. Otherwise, outgrow them quickly.

**Mesh systems** (Eero, Orbi, Google WiFi): solve WiFi coverage in large homes but sacrifice control. No VLANs, limited visibility, cloud-dependent management. If you need coverage, use UniFi APs instead — they give you the coverage with full control.

### pfSense / OPNsense

**What they are**: open-source software firewalls/routers that run on dedicated x86 hardware (or a VM). pfSense is the older, more established project; OPNsense forked from pfSense in 2015 and has a cleaner UI and more frequent updates. Both are BSD-based.

**Capabilities**: full enterprise-grade firewall, VLAN routing, VPN server (WireGuard, OpenVPN, IPsec), traffic shaping, IDS/IPS (Suricata/Snort), DNS resolver, DHCP server with VLAN-aware pools, detailed logging. This is the most capable option for a home network.

**Hardware options**:
- **Netgate appliances**: the official pfSense hardware. The Netgate 2100 (~$189) handles Gigabit with IDS enabled. Overkill for most homes on basic routing.
- **DIY/mini PC**: a Protectli Vault, Beelink mini PC, or old business desktop running OPNsense. An N100-based mini PC ($150–200) has more than enough CPU for Gigabit routing with IDS.
- **VM option**: run pfSense/OPNsense as a VM in Proxmox, with a PCIe NIC passed through. Works well; one less physical box.

**Trade-off**: steep learning curve. The UI is not friendly to beginners, documentation is extensive but assumes networking knowledge, and misconfiguration can lock you out. If you want deep control and are willing to learn, this is the ceiling for home networking. See [networking-fundamentals.md](networking-fundamentals.md) for the concepts needed to configure it.

### UniFi Ecosystem

**What it is**: Ubiquiti's prosumer networking line. Hardware that covers routers (Dream Machine line), managed switches, and access points — all managed through a single software controller (UniFi Network Application, runs locally or on the cloud).

**Dream Machine line** (the router/firewall):
- **UniFi Express** (~$149): WiFi 6 AP + router in one small device. Good for small apartments or as a travel router. No built-in managed switch ports.
- **Dream Machine SE** (~$499): all-in-one with 2.5G WAN, 8-port PoE switch built in, and WiFi 6. Handles Gigabit+ easily. The best single-box solution for a serious home setup.
- **Dream Machine Pro** (~$379): no WiFi, no built-in PoE switch, just a router/firewall with 10G SFP+ ports. The right choice if you want separate switches and APs.
- **Dream Router** (~$199): mid-tier, 1.3 Gbps max throughput, WiFi 6. Fine for most homes.

**UniFi Switches**:
- **USW-Lite-8-PoE** (~$109): 8 ports, 4 PoE, 52W budget. Fine for 2–3 APs.
- **USW-24-PoE** (~$299): 24 ports, 16 PoE, 95W. The workhorse switch for a real home setup.
- **USW-Pro-24-PoE** (~$599): 24 ports, 10G uplinks, higher PoE budget. Enterprise-grade for a home.

**UniFi Access Points**:
- **U6-Lite** (~$99): WiFi 6, ceiling-mount, ~1500 sq ft coverage. Good all-around AP.
- **U6-LR** (~$149): longer range, better for open-plan spaces.
- **U6-Pro** (~$179): high-density, 4x4 MIMO. More for offices or dense environments than typical homes.

**The UniFi case**: the controller gives you a single pane of glass for VLANs, firewall rules, DHCP, WiFi SSIDs, and network topology. VLAN configuration that would take hours in pfSense takes 10 minutes in UniFi. The trade-off is less raw capability than pfSense and hardware that's priced for its integration value.

**Controller hosting**: UniFi Network Application can run on the Dream Machine itself, on a VM, on a Raspberry Pi, or in Ubiquiti's cloud. Self-hosted on the Dream Machine or a local VM is the right call for self-reliance — you don't want your network management dependent on Ubiquiti's servers.

### TP-Link Omada

**What it is**: TP-Link's prosumer ecosystem, directly competing with UniFi. Similar architecture: software controller + hardware (routers, switches, APs).

**Why consider it**: ~20–30% cheaper than UniFi across the board. VLAN support, PoE switches, WiFi 6 APs, and centralized management. The controller is slightly less polished than UniFi but functional.

**The trade-off**: smaller community, less documentation, fewer advanced features (no built-in IDS, less capable firewall). If you don't need UniFi's advanced features and price is a constraint, Omada is a legitimate choice.

### Managed Switches: What to Look For

Whether buying UniFi, Omada, or a standalone managed switch (Cisco SG series, Netgear Plus):

- **VLAN 802.1Q support** — required. This is how VLANs work.
- **PoE** — required if you're powering APs from the switch. Budget: 15W per AP, total budget should be 2x your expected load.
- **Port count** — 8-port for small setups, 24-port for a real home with multiple rooms and APs.
- **10G uplink** — useful if your router supports 10G and you're running a NAS or moving large files. The link between switch and router should be 10G if you have the option.
- **Layer 3 (routing)** — most home switches are Layer 2 only (no routing between VLANs). Inter-VLAN routing happens at the router/firewall. Layer 3 switches are useful in larger setups.

## Key Considerations

**Ecosystem lock-in**: UniFi hardware works best with a UniFi controller, but it's not required — individual UniFi switches and APs can be configured standalone. pfSense/OPNsense works with any switch or AP. Omada requires the Omada controller for full features. Mixing ecosystems is possible; full integration requires staying in one.

**The used equipment market**: UniFi gear holds its value but depreciates. eBay has U6-Lite APs for $50–70 and older USW-24-PoE switches for $80–120. Generation-old hardware is fully supported and often the best value. Avoid non-working listings and always check firmware support dates.

**ISP modem placement**: most ISPs give you a modem/router combo. Put it in bridge mode (if your ISP allows it) to disable its routing and use your own router. If bridge mode isn't available, put it in DMZ mode pointing to your router, or accept double NAT (minor latency cost, not practically a problem for most uses).

## Getting Started

Starter setup for a 2–3 bedroom home, Gigabit internet:
1. **Dream Machine SE** or Dream Machine Pro + USW-24-PoE — covers routing, firewall, and switching
2. **2× U6-Lite APs** — one per floor, ceiling-mounted
3. Wire APs via ethernet back to the panel switch (PoE from the switch)
4. Configure VLANs per [home-network-design.md](home-network-design.md)

Total cost: ~$600–800 new, ~$400 used. Lasts 5–7 years.

## Common Mistakes

**Buying the AP first.** APs depend on the network below them (switch, VLANs, DHCP). Design the network architecture first, buy APs last.

**Ignoring PoE budget.** Add up the PoE draw of all devices the switch will power. Exceeding the budget causes random device reboots or devices not powering on.

**Over-speccing for today, under-speccing for tomorrow.** A 5-port unmanaged switch seems fine until you add a NAS, two APs, and a homelab. Buy a 24-port managed switch once.

**Consumer mesh for a home with ethernet runs.** If you've already run ethernet drops, mesh is pointless — wire the APs directly and use a proper managed AP system.

## Resources

- **Crosstalk Solutions** (YouTube, Jeff Wettlaufer) — the most practical UniFi and home networking channel. Covers real setups, not just spec recitations.
- **Lawrence Systems** (YouTube) — pfSense/OPNsense deep dives, regular update videos, realistic home and small business scenarios.
- **Ubiquiti Community** (community.ui.com) — official forum. Surprisingly useful for specific configuration questions.

## Connections

- [home-network-design.md](home-network-design.md) — Physical wiring and VLAN plan this hardware implements
- [networking-fundamentals.md](networking-fundamentals.md) — VLANs, subnets, PoE — the concepts behind the hardware features
- [network-security.md](network-security.md) — Firewall and IDS capabilities differ significantly between pfSense and UniFi
- [homelab-overview.md](homelab-overview.md) — The homelab attaches to this network infrastructure

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-08*
