# Travel Tech
*The digital layer of travel — connectivity, navigation, translation, and backups — separate from the flight-mechanics electronics covered in flying-guide.md.*

---

## What Is It

Travel tech is the set of digital tools and setups that solve specifically travel problems: staying connected without a crippling roaming bill, finding your way without signal, communicating across a language barrier, and not losing your photos if a phone is lost or stolen. None of this is the homelab/AI infrastructure covered elsewhere in the wiki's [Tech](../CATALOG.md) domain — this is travel-specific and largely about phone configuration and a handful of apps, not hardware builds.

Power bank rules, in-flight electronics, and TSA battery limits are already covered in [flying-guide.md](flying-guide.md) — this file picks up everything else.

## Why It Matters

Bad connectivity planning is one of the most common avoidable travel costs — a $300 roaming bill or a phone that's useless the moment you land. Good planning here is a single setup session before departure, not an ongoing chore during the trip.

---

## Core Concepts

### Connectivity: eSIM vs. Local SIM vs. Roaming

**eSIM (Airalo, Holafly, or carrier-direct):** A digital SIM profile installed before you travel, active the moment you land — no physical SIM swap, no airport kiosk line. Buy a data package for the destination country (often $5–25 for a week of data) through an app, install it before departure, and it activates on arrival. Best for trips under 2 weeks or when you want connectivity the instant you land, before you've had a chance to find a local SIM vendor.

**Local physical SIM:** Cheaper per GB for longer stays — buying an Airtel or Jio SIM in India, for example, costs a fraction of an eSIM data package for the same data volume over a multi-week trip. Requires passport ID at purchase in most countries. The tradeoff is the setup friction (finding a vendor, possibly a wait) versus the eSIM's instant-on convenience.

**Carrier day-pass roaming (T-Mobile, Verizon, AT&T international plans):** Simplest option — no setup, your existing number and plan just extend abroad for a daily or per-trip fee. Most expensive per GB of the three options, but zero friction. Reasonable for short trips (under a week) where saving $20–30 isn't worth any setup time.

**The practical rule:** eSIM for arrival-day connectivity and short trips, local SIM for anything longer than 2 weeks where the cost difference adds up, carrier roaming when simplicity matters more than cost.

### Offline Maps

Download the relevant region in Google Maps (or Maps.me, which is more thorough for offline use) before departure — search the city/region, tap the profile photo, "Offline maps," select the area. This works without any data connection and covers navigation, basic search, and saved pins. Star points of interest while researching (see [trip-planning.md](trip-planning.md)) — those pins stay available offline too.

**Maps.me / Organic Maps** are better than Google Maps specifically for offline reliability in areas with patchy data infrastructure — worth having as a backup app for international trips, especially rural areas.

### Translation

**Google Translate's camera mode** translates signs and menus in real time by pointing the camera — download the destination language pack offline before the trip so this works without signal. **Conversation mode** handles two-way spoken translation for basic exchanges — useful but not a substitute for the effort of learning a few key phrases, which lands better socially than holding up a phone.

For a trip to a country where the script itself is unfamiliar (India's regional scripts, for instance), the camera mode is more valuable than for European languages where you can at least sound out words.

### Power and Adapters

**Plug type and voltage** vary by country — check both before departure, not just the plug shape. Most modern electronics (phone chargers, laptop chargers) are dual-voltage (100–240V) and only need a plug shape adapter, not a voltage converter. Check the fine print on the charger brick itself ("INPUT: 100-240V") to confirm — devices that aren't dual-voltage (some hair dryers, some older electronics) need an actual voltage converter, which is bulkier and a different product entirely.

**A single universal adapter** (one with interchangeable prongs for US/UK/EU/AU outlets) covers nearly all destinations — buy one with built-in USB-A/USB-C ports to reduce the number of bricks needed.

### Photo and Data Backup

Losing a phone mid-trip shouldn't mean losing the trip's photos. **Automatic cloud backup** (iCloud Photos, Google Photos) set to back up over wifi and cellular before departure means photos are safe the moment they're taken, not at the end of the day. For trips where storage or connectivity is uncertain, a **portable SSD with a phone-compatible connector** (SanDisk or Samsung portable SSD) provides a manual backup layer independent of any cloud service.

**Digital document backups:** Photograph or scan passport, visa/OCI documents, insurance cards, and itinerary confirmations, then store them in a password-protected note or encrypted cloud folder accessible offline. If physical documents are lost or stolen, this is the fastest path to replacement.

### VPN While Traveling

Two distinct use cases, often confused:

- **Accessing home-region content** (streaming services that geo-restrict by location) — a VPN set to a US server location handles this.
- **Security on untrusted networks** (hotel wifi, airport wifi) — a VPN encrypts traffic on networks you don't control. Lower risk than it's often made out to be for casual browsing, but worth it if doing anything sensitive (banking) on public wifi.

A consumer VPN (Mullvad, ProtonVPN) installed and tested before departure covers both cases — testing it after landing in a country with VPN restrictions (China, UAE) can be too late.

### Digital Wallet and Boarding Passes

Add boarding passes, hotel confirmations, and any event tickets to **Apple Wallet/Google Wallet** before departure — they show up automatically based on location and time, work without opening an app or finding a PDF, and survive a dead data connection since they're stored locally once added.

---

## Key Considerations

**Set up before you leave, not at the gate.** eSIM installation, offline map downloads, and translation language packs all require a data connection to set up — doing this at the airport on departure-day wifi is the right time, doing it after landing with no connectivity yet is the wrong time.

**International data is for navigation and communication, not streaming.** Even a generous eSIM data package is easy to burn through on video — download entertainment in advance (see [travel-hobbies.md](travel-hobbies.md)) rather than planning to stream on the road.

**Test the VPN and translation app before the trip, not during it.** A VPN that doesn't connect or a language pack that didn't actually download offline are problems you want to discover at home.

---

## Getting Started

1. Decide eSIM vs. local SIM vs. roaming based on trip length (see the practical rule above) and set it up before departure.
2. Download offline maps for the destination region.
3. Download the relevant language pack in Google Translate if needed.
4. Confirm phone/laptop chargers are dual-voltage; pack one universal plug adapter.
5. Turn on automatic cloud photo backup; photograph key documents into a secure note.
6. Add boarding passes and confirmations to your phone's wallet app.

---

## Common Mistakes

**Landing with no connectivity plan and paying for airport wifi or an overpriced kiosk SIM.** Five minutes of setup before departure avoids this entirely.

**Discovering the VPN doesn't work after landing in a restrictive country.** Test it before you leave — switching providers from inside a restrictive network is much harder.

**Relying on cellular data for offline maps that were never actually downloaded.** Confirm the offline region is downloaded — Google Maps sometimes requires re-confirming the download succeeded before it works without signal.

**Not checking voltage on a device that needs an actual converter.** A hair dryer or older non-dual-voltage device plugged into a plug adapter alone (no voltage conversion) can damage the device or trip a breaker.

---

## Resources

- **Airalo** (airalo.com) — eSIM marketplace covering most countries, the simplest entry point for first-time eSIM use.
- **Organic Maps / Maps.me** — offline-first mapping apps, more reliable than Google Maps in low-connectivity regions.

---

## Connections

- [flying-guide.md](flying-guide.md) — power bank rules, TSA electronics handling, and in-flight charger logistics that complement this file's broader connectivity focus
- [travel-hobbies.md](travel-hobbies.md) — offline content downloads (books, language lessons) depend on the connectivity setup covered here
- [india.md](india.md) — applies this file's eSIM/local SIM guidance to a specific destination

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-06-17*
