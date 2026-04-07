# Home Lab Overview
*What a home lab is, what it gets you, and how to build one that actually gets used*

---

## What Is It

A home lab is a personal infrastructure environment — servers, networking gear, and software running in your home — used for learning, self-hosting services, and experimenting without consequences. It's a sandbox where you can break things, rebuild them, and develop skills that transfer directly to professional work.

At the minimal end: a Raspberry Pi running Pi-hole and a few Docker containers. At the serious end: a rack with Proxmox virtualization, pfSense for routing, managed switches with VLANs, a NAS, and dozens of self-hosted services. Most useful home labs live somewhere in between.

The core value isn't the hardware — it's the learning environment and the data sovereignty it enables.

## Why It Matters

**Career value**: home labs are where you build the skills you can't develop in a day job unless your job specifically involves infrastructure. System administration, networking, virtualization, Kubernetes, security — these are learned by doing, and a home lab gives you the environment to do them. Senior engineers who understand systems deeply often developed that understanding through home labs.

**Self-reliance and data sovereignty**: your photos, passwords, documents, calendar, and notes are currently on someone else's servers. Self-hosting Nextcloud, Vaultwarden, and Immich means your data stays yours — on hardware you own, in your home, with backups you control. This isn't paranoia; it's the same principle applied to data that applies to food production.

**Practical compounding**: every hour spent in a home lab builds on the last. Troubleshooting a networking issue teaches TCP/IP better than any course. Setting up Proxmox teaches virtualization concepts that apply directly to AWS EC2 and Azure VMs. The skills are transferable and durable.

## Core Concepts

### What a Home Lab Is Actually For

There are two distinct use cases that often overlap:

**1. Learning environment** — a place to practice skills:
- Set up and break Kubernetes clusters without consequences
- Practice Linux system administration (user management, cron, systemd, logging)
- Learn networking by configuring VLANs, routing, and firewall rules on real equipment
- Run penetration testing labs (isolated networks for CTF practice, security research)
- Experiment with databases, message queues, monitoring stacks

**2. Self-hosted services** — replacing cloud services with local ones:
- Nextcloud (Google Drive/Docs alternative)
- Vaultwarden (Bitwarden self-hosted — password manager)
- Jellyfin (Plex alternative — local media server)
- Home Assistant (home automation, local-only)
- Immich (Google Photos alternative)
- Gitea/Forgejo (GitHub alternative for private repos)
- Uptime Kuma (service monitoring)

Most home labs do both — the services are useful, and maintaining them teaches you the underlying systems.

### Hardware Options

**Where to start** (in order of cost/complexity):

**Tier 1 — Minimal ($50-150)**
- **Raspberry Pi 4/5** (4-8GB): enough for Pi-hole, a few Docker containers, and light services. ARM architecture; some software doesn't have ARM builds. Limited RAM caps what you can run.
- **Old PC or laptop**: whatever you have. 8GB RAM minimum; 16GB to run multiple VMs. Power draw matters — a gaming PC running 24/7 is $20-40/month in electricity.

**Tier 2 — Capable ($150-400)**
- **Mini PC with N100/N200 Intel processor**: the current sweet spot. Beelink EQ12, Minisforum MS-01 equivalents — low power (10-15W), 16-32GB RAM, fast NVMe. Runs Proxmox with several VMs comfortably.
- **Intel NUC** (used): previous-gen NUCs are available used for $100-200. Solid, low power, well-supported under Linux.

**Tier 3 — Serious ($400+)**
- **Used enterprise servers** (Dell PowerEdge R710/R720/R730, HP ProLiant DL380): enormous CPU and RAM capacity (128-512GB RAM), ECC memory, redundant power supplies. Downsides: loud (designed for data centers), high power draw (100-200W idle), requires rack space. Great for learning enterprise-grade infrastructure.
- **Custom mini-ITX builds**: if you want specific hardware (more NVMe slots, 10GbE networking), a custom build gives you control.

**NAS/Storage**:
- **Synology DS223/DS423+**: consumer NAS, excellent software (DSM), built-in Docker, straightforward setup. Good for non-technical family members also using the data.
- **TrueNAS SCALE**: free, open-source, ZFS-based, more control. Runs on commodity hardware. Steeper learning curve than Synology but better for a lab context.
- **Storage minimum**: 2 drives in at least RAID 1 (mirroring) for anything you care about. RAID is not backup — it protects against drive failure, not against accidental deletion or ransomware.

**Networking hardware**: covered in `network-hardware.md`, but briefly:
- **UniFi** (Ubiquiti) is the home lab standard — enterprise-grade features (VLANs, traffic inspection, client isolation), managed via a local controller or cloud, prosumer price point
- **pfSense/OPNsense** on a mini PC: free, full-featured open-source firewall/router. Steep learning curve; deep control.

### Proxmox — The Virtualization Foundation

Proxmox VE is the dominant home lab hypervisor. It's open-source, runs on bare metal, and supports both **full VMs** (KVM) and **lightweight containers** (LXC).

**Why Proxmox over alternatives**:
- Free (with optional paid support subscription)
- Web UI is functional and complete
- Both VMs and LXC containers in the same interface
- Built-in clustering (run multiple physical nodes as one)
- Good community documentation; huge home lab adoption

**VMs vs LXC containers**:
- **VMs** (KVM): full OS virtualization. Complete isolation. Can run any OS. Higher overhead. Use for: Windows guests, anything that needs kernel isolation, security-sensitive services.
- **LXC containers**: share the host kernel. Much lower overhead — can run dozens on the same hardware that handles 4-5 VMs. Use for: Linux services where you don't need full isolation, services where resource efficiency matters.

**Not the same as Docker**: Proxmox VMs and LXC are machine-level virtualization. Docker is process-level containerization — runs on top of a VM or bare metal. Most home labs run Docker *inside* a Proxmox VM or LXC.

**Resource sizing**: a 16GB RAM mini PC can comfortably run 4-6 LXC containers plus 1-2 VMs. A 32GB machine handles a significantly larger stack.

### Docker and Compose — Service Deployment

Docker is how most home lab services are deployed. Instead of manually installing software, configuring dependencies, and managing conflicts, you pull a pre-built container image and run it.

**Docker Compose**: define multi-service applications in a `docker-compose.yml` file. The standard pattern for home lab services — one file describes the entire application stack (service, ports, volumes, networking, environment variables).

Example for Vaultwarden (Bitwarden self-hosted):
```yaml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    volumes:
      - ./data:/data
    ports:
      - "8080:80"
    environment:
      - DOMAIN=https://vault.home.local
    restart: unless-stopped
```

Pull, run, done. The complexity is in configuration and networking — getting reverse proxies, SSL, and DNS working — not the installation.

**Portainer**: a web UI for managing Docker containers and Compose stacks. Useful for visual oversight if you're not comfortable with CLI-only Docker management.

Full depth on Docker in `docker-and-containers.md`.

### Self-Hosted Services — The Practical Payoff

The most immediately useful home lab services, prioritized:

**Tier 1 — High value, quick setup**:
- **Pi-hole / AdGuard Home**: DNS-level ad blocking for the entire network. 10 minutes to set up, immediate value. Also serves as your local DNS resolver.
- **Vaultwarden**: self-hosted Bitwarden. Password manager where you own the vault. Lightweight, easy setup.
- **Uptime Kuma**: monitors all your services and sends alerts when something is down. 5-minute setup.

**Tier 2 — Solid services once infrastructure is working**:
- **Nextcloud**: file sync, calendar, contacts — Google Drive/Calendar/Contacts replacement. More involved setup; requires reverse proxy and SSL for usability.
- **Immich**: photo backup from phone, Google Photos experience. Requires more storage; the Immich mobile app does automatic backup.
- **Jellyfin**: local media server. Stream your movie/music/TV collection anywhere.

**Tier 3 — Deeper infrastructure**:
- **Home Assistant**: home automation. Local-first, massive integration library. Covered in `home-automation.md`.
- **Gitea/Forgejo**: self-hosted Git. Private repos, CI/CD (Gitea Actions).
- **Monitoring stack** (Grafana + Prometheus + node_exporter): full visibility into server metrics, service health, and history.

**Reverse proxy**: most services need a reverse proxy (Nginx Proxy Manager, Traefik, Caddy) to handle routing traffic by hostname and terminating TLS. This is what makes `nextcloud.home.local` work over HTTPS instead of `192.168.1.50:8080`.

### Networking in the Lab

A home lab with multiple services needs proper network design:

**VLAN segmentation** (see `home-network-design.md` for full detail):
- **Management VLAN** (`10.0.10.0/24`): Proxmox, router, switches — infrastructure management interfaces
- **Services VLAN** (`10.0.20.0/24`): Docker hosts, self-hosted services
- **Trusted VLAN** (`10.0.30.0/24`): personal devices (laptops, phones)
- **IoT VLAN** (`10.0.40.0/24`): smart home devices — isolated from everything else

**Lab-specific networking**: VMs in Proxmox connect to virtual bridges that map to physical interfaces or VLANs. A VM on VLAN 20 can communicate with your Docker host on the same VLAN, but is blocked from your trusted device VLAN by firewall rules.

**DNS**: local DNS makes the lab usable. `proxmox.home.local`, `nas.home.local`, `nextcloud.home.local` are far more usable than IPs. Set up AdGuard Home or Pi-hole as the DNS server and create local DNS entries for every service.

### The 3-2-1 Backup Rule

A home lab creates data you care about — your self-hosted photos, passwords, documents. Treat it like infrastructure that needs backup:

- **3** copies of data
- **2** different storage media
- **1** offsite

Practical implementation: data on the NAS (copy 1), NAS RAID mirror (copy 2 on same hardware — not truly separate), plus automated backup to Backblaze B2 or Wasabi object storage ($0.006/GB/month — a 2TB backup is $12/month). The offsite backup is what saves you if the house burns down or you get ransomware.

## Key Considerations

**Start smaller than you think.** A Raspberry Pi 4 with Pi-hole and Vaultwarden is a home lab. You don't need a rack of servers. The goal is to be learning and using it — not to have impressive hardware sitting idle.

**Power and noise matter.** A $200 used PowerEdge R720 draws 150-200W idle and sounds like a hair dryer. Your partner will have opinions about this. Mini PCs and Raspberry Pis draw 5-15W and make no noise. Match hardware ambition to living situation.

**Reliability matters more for services you depend on.** If you self-host Vaultwarden and it goes down, you can't get into your passwords. Services you depend on daily need: reliable hardware, automatic restart policies, and monitoring. Don't self-host critical services until you understand the uptime requirements.

**Documentation compounds.** Write down your IP scheme, VLAN assignments, what each service does, and any non-obvious configurations. Future you will forget. Obsidian, a private wiki (BookStack), or even a text file in your Git repo is fine.

**Learn Linux seriously alongside this.** A home lab runs on Linux. The more fluent you become with systemd, journalctl, iptables, cron, and the shell, the faster you can build and fix things.

## Getting Started

**Minimum viable lab** (one weekend):
1. Get a Raspberry Pi 4 (4GB) or a cheap mini PC — or use an old PC
2. Install AdGuard Home for network-wide ad blocking + local DNS
3. Install Vaultwarden and migrate your passwords to self-hosted Bitwarden
4. Set up Uptime Kuma to monitor your services

This is enough to learn the basics (Linux, Docker, DNS, service management) and get immediate practical value.

**Next steps after that**:
1. Set up Proxmox on more capable hardware (mini PC 16GB+)
2. Migrate Docker workloads into Proxmox LXC containers
3. Add proper VLAN segmentation with a managed switch and pfSense/OPNsense or UniFi router
4. Set up a NAS with TrueNAS for centralized storage and automated backups

## Common Mistakes

**Buying too much hardware too soon.** You don't know what you need until you've used a smaller setup. Start cheap, learn what you actually want, then invest.

**No backups.** Self-hosted means self-responsible. If the drive fails and you have no backup, you lose everything. Set up offsite backup before you put data you care about on any self-hosted service.

**Not using version control for configs.** Your Docker Compose files, Nginx configs, and any custom scripts should be in a Git repo. When something breaks after a change, `git diff` tells you exactly what changed. And if hardware fails, you can rebuild from configs in minutes.

**Running everything on one machine with no redundancy.** Fine for learning; not fine for services you depend on. Separate hardware for services you care about from hardware you experiment on.

**Security theater instead of real security.** Don't expose services to the internet via port forwarding if you can use Tailscale or WireGuard instead. If you do expose services publicly, they need proper authentication, updated software, and a reverse proxy with TLS. Unpatched Nextcloud instances get compromised.

## Resources

- **r/homelab** — the community reference; hardware recommendations, configs, and build showcase
- **TechnoTim on YouTube** — the best practical home lab tutorial channel; covers Proxmox, Docker, UniFi, self-hosted services with full walkthroughs
- **Wolfgang's Channel on YouTube** — higher-level, thoughtful home lab content; good for architecture thinking
- **selfh.st** — curated directory of self-hosted services with descriptions and links

## Connections

- [networking-fundamentals.md](networking-fundamentals.md) — The TCP/IP, subnets, DNS, and VLAN concepts that underlie all home lab networking
- [home-network-design.md](home-network-design.md) — Designing the VLAN structure and firewall rules the home lab plugs into
- [docker-and-containers.md](docker-and-containers.md) — How Docker and Compose work; the deployment model for most home lab services
- [virtualization.md](virtualization.md) — Proxmox in depth: VM vs LXC, resource allocation, clustering, storage
- [self-hosted-services.md](self-hosted-services.md) — The full service catalog with setup guidance for each

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-05*
