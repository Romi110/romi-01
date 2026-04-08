# Home Network Design
*How to wire your home with ethernet and design a network you'll actually want to live on*

---

## What Is It

Home network design is the combination of physical infrastructure (running ethernet drops, installing patch panels, terminating keystones) and logical architecture (VLANs, subnets, firewall zones) that produces a network that's fast, reliable, and controllable. Most people have neither — they have a router/modem combo from the ISP and a few WiFi extenders. This file covers building the real thing: wired drops throughout the house, proper network termination, and a logical design that actually separates your traffic.

The physical and logical layers are independent decisions that feed each other. You can have great physical wiring with a dumb router, or good VLAN design on bad WiFi. The goal is both.

## Why It Matters

WiFi is a shared medium — every device on the same channel competes for airtime. A single wired Gigabit connection is dedicated, deterministic, and faster in practice than anything WiFi delivers. For anything stationary (desktop, NAS, smart TV, access point, game console), wired is strictly better. WiFi should be reserved for devices that actually move.

For Romi specifically: a properly wired home is infrastructure that compounds. It's the foundation for the homelab, for self-hosted services, for reliable backups, and for the network segmentation that makes IoT devices safe to own. Retrofitting this later (through walls that are already drywalled) is significantly harder and more expensive than doing it before or during renovation.

## Core Concepts

### Ethernet Cable Types

**Cat5e** — the old standard. Rated for Gigabit at 100m. Perfectly adequate for any home that doesn't need 10G. If you already have Cat5e throughout, there's no reason to replace it.

**Cat6** — the current standard for new installs. Same Gigabit at 100m, but also supports 10 Gbps up to 55m. Better crosstalk rejection (internal conductor arrangement). Slightly thicker and stiffer than Cat5e. Good choice for any new run.

**Cat6a** — "augmented" Cat6. Full 10 Gbps at 100m. Significantly thicker (heavier, harder to pull through walls), more expensive. Only worth it if you're wiring a room that will host servers or a 10G switch. Most bedrooms and living room drops don't need it.

**Practical rule**: run Cat6 everywhere. It's cheap (~$0.10–0.20/ft), supports everything you need now and for the next decade, and the incremental cost over Cat5e is negligible on a whole-home run. The labor cost dominates.

**UTP vs STP**: unshielded twisted pair (UTP) is correct for residential installs. Shielded (STP) requires grounding to be effective and is meant for industrial environments with real RF interference. STP in a home causes more problems than it solves.

### Running Drops

A "drop" is a single ethernet run from the network panel to a wall outlet. Planning drops:

- **Where to put them**: every room that will have stationary devices (bedroom desks, living room entertainment center, home office, garage/workshop), plus one per access point location.
- **Access point drops**: APs should be wired via ethernet (they'll use PoE from the switch). Place them centrally per floor — wall-mounted or ceiling-mounted. Avoid corner placement.
- **Route planning**: runs go through walls either via the attic above, the basement/crawl space below, or through interior wall cavities. Attic and basement routes are easiest. Wall cavity fishing requires a fish tape and patience.
- **Conduit**: if walls are open (during construction or renovation), run conduit — even 3/4" ENT through walls. It costs almost nothing and makes future cable pulls trivial.

**Tools needed**:
- Fish tape or fish sticks (for running cable through finished walls)
- Drill with long bit for drilling through plates (wood fire blocks in walls)
- Stud finder
- Voltage tester (before drilling near switches/outlets)
- Low-voltage mounting brackets for wall plates

### Termination: Keystones and Patch Panels

Cable runs terminate at two ends: the wall outlet (keystone) and the network panel (patch panel).

**Keystones** snap into wall plates. You punch the wires down onto the keystone terminals using a punch-down tool. Either 568A or 568B wiring standard works — just be consistent on both ends. Most keystones are 568B by default.

**Patch panel**: a 1U rack panel (24-port is the common size) where all your drops terminate. The patch panel lives in your network closet/panel. From the patch panel, short patch cables connect to the switch. This is the clean way — you can re-patch any port to any switch port without touching the in-wall cables.

**Punch-down tool**: required for keystone and patch panel termination. A decent one costs $15. Use the blade side correctly or you'll cut the wires.

**Cable tester**: after every run, test continuity. A basic tester (Monoprice, ~$20) confirms all 8 conductors are connected correctly. A Fluke MicroScanner or similar does length measurement and detailed diagnostics — worth it if you're doing a whole house, not necessary for a few drops.

### Network Panel / Closet

All your structured wiring should terminate in one place. Ideal location: a closet on the main floor or basement near where the ISP service enters. Equipment that lives here:

- **Patch panel** — where all your drops terminate
- **Switch** — PoE managed switch that feeds all your drops and powers APs
- **Router/firewall** — connects to the ISP modem and the switch
- **Modem** (if separate from router) — ISP-provided, sits before the router

A small wall-mount rack (6U or 9U open-frame) organizes this cleanly and is inexpensive (~$50–80). A 1U patch panel + 1U switch + 1U router fits in a 6U rack with room to grow.

**PoE budget**: if your switch is PoE, each powered AP draws ~6–13W. A 24-port PoE switch with 150W total budget supports 10+ APs comfortably.

### VLAN Design for a Home

A VLAN is a logical network segment. Each VLAN gets its own subnet and its own firewall rules. See [networking-fundamentals.md](networking-fundamentals.md) for how VLANs work at Layer 2/3 — this section covers the practical design.

Four VLANs cover most home setups:

| VLAN | Name | Subnet | Purpose | Internet | Access to others |
|------|------|--------|---------|---------|-----------------|
| 10 | Trusted | 10.0.10.0/24 | Laptops, phones, desktops | Yes | Full |
| 20 | IoT | 10.0.20.0/24 | Smart TVs, speakers, thermostats | Yes | Blocked from Trusted |
| 30 | Guest | 10.0.30.0/24 | Visitor WiFi | Yes | Isolated completely |
| 40 | Lab | 10.0.40.0/24 | Homelab servers, VMs | Selective | Selective |

IoT isolation is the highest-value rule here. IoT devices have terrible security track records and don't need to reach your laptop or NAS. Put them on VLAN 20, give them internet access, block everything else.

### Network Map and Documentation

Document your network or you'll regret it. Minimum useful documentation:
- A simple diagram showing VLANs, subnets, and where devices sit
- IP address scheme (DHCP range vs. static range per VLAN)
- Which physical port maps to which room (label the patch panel)
- Firewall rules in plain English

A spreadsheet works. Netbox is the professional tool for this. The point is to have something you can read six months later.

## Key Considerations

**Cable runs during construction or renovation are cheap; after drywall they're labor-intensive.** If you're doing any wall work — even a bathroom renovation that opens adjacent walls — think about running conduit or cable nearby. A single afternoon when walls are open saves days of fishing later.

**Over-build the physical layer, right-size the logical.** Run more drops than you think you need (at least 2 per room). Wiring a room twice is painful. But don't add more VLANs than you have a reason for — complexity compounds in firewall rules and DHCP configs.

**PoE simplifies AP wiring.** A PoE switch eliminates the need to run power to AP locations — just ethernet. This matters for ceiling-mount APs especially.

## Getting Started

1. **Draw a floor plan** and mark every room where you want a wired drop. Add AP locations (one per floor, central placement).
2. **Find your service entry point** and decide where the network panel goes.
3. **Plan cable routes**: attic or basement? Which walls need to be fished? Where are the fire blocks?
4. **Buy materials**: Cat6 bulk cable (500ft or 1000ft spool), keystones, wall plates, patch panel, punch-down tool, cable tester.
5. **Run one drop first** as practice — from panel to the nearest room. Terminate, test, label.
6. **Install the equipment** (router, switch) before finishing all drops so you can test as you go.

## Common Mistakes

**Running cable without testing.** Always test after termination. Finding a bad punch-down after the wall is closed is a bad day.

**No patch panel — running switch ports directly to rooms.** You can do this, but it means re-routing cables if you change the switch. A patch panel costs $20 and makes every port in every room re-patchable from one place.

**Not labeling drops.** Label both ends of every run immediately. After 12 drops, unlabeled cables are indistinguishable.

**WiFi everywhere, wired nowhere.** Mesh systems are convenient and bad for stationary devices. Anything that doesn't move should be wired.

**Single SSID for all devices.** Don't put your smart speakers on the same network as your NAS. VLAN separation is the fix.

## Resources

- **Crosstalk Solutions** (YouTube) — the best practical channel for home networking and structured wiring. David Bombal for deeper networking.
- *Network Warrior* — Gary Donahue. More enterprise-focused but the VLANs, switching, and routing chapters are directly applicable.
- **r/homelab and r/HomeNetworking** — real builds with real constraints; useful for seeing how people solve routing problems in practice.

## Connections

- [networking-fundamentals.md](networking-fundamentals.md) — VLANs, subnets, routing, and DNS — the logical layer this file applies
- [network-hardware.md](network-hardware.md) — Which router, switch, and AP to actually buy
- [network-security.md](network-security.md) — Firewall rules and VLAN isolation policy
- [homelab-overview.md](homelab-overview.md) — The home network is the foundation the homelab sits on

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-08*
