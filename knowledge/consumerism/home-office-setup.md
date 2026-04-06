# Home Office Setup
*Building a functional, ergonomic, distraction-free home workspace — the full buying guide for a tech professional*

---

## What Is It

A home office setup is the physical infrastructure you work in 8+ hours a day. Most people cobble one together reactively — a kitchen table, a laptop on a stack of books, whatever chair was cheapest. A proper setup is designed: monitor at the right height, body positioned correctly, audio clear, internet reliable, cables managed, lighting deliberate.

The cumulative health and productivity impact of a good workspace compounds over years. A bad setup does the same in the other direction.

Note: [quality-life-upgrades.md](quality-life-upgrades.md) already covers chair, standing desk, monitor arm, keyboard, and mouse in detail with specific recommendations. This file covers the full picture — what those pieces integrate into — plus the areas that file doesn't touch: monitors, webcam, audio, networking, and configuration.

---

## Why It Matters

You spend more waking hours at your desk than almost anywhere else. A tech professional's workspace is as much health infrastructure as gym equipment — and the ROI is higher, because it affects every hour of every workday.

From a Stoic frame: bad tools don't excuse poor work, but eliminating unnecessary friction is simply rational. You can't control the quality of the problems you're given; you can control the quality of the environment you solve them in.

---

## Core Concepts

### The Monitor

The single highest-impact peripheral purchase for a developer. A proper monitor changes posture (eye level), reduces context switching (screen real estate), and affects every hour of focused work.

**Size and resolution:**
- **27" 1440p (2560x1440)** — The sweet spot for most setups. Pixel density is high enough that individual pixels aren't visible at normal viewing distance, text is sharp without scaling tricks, and the size is manageable without requiring head movement. Dominant choice in software engineering.
- **32" 4K (3840x2160)** — Right choice if you're on a Mac with HiDPI (Retina equivalent at 2x scaling, renders at native 1920x1080 equivalent with perfect sharpness). On Windows, 4K at 32" is usable at 125% scaling. More screen real estate at the cost of needing a GPU that can drive it cleanly.
- **Ultrawide 34" 3440x1440** — One wide screen instead of two monitors. Eliminates the bezel gap, better for single-monitor setups. Worse for two-window side-by-side snapping compared to dual 27" panels. Personal preference; try before committing.

**Panel type:**
- **IPS** — Best color accuracy, wide viewing angles. The right choice for most people.
- **VA** — Higher contrast ratio (better blacks), narrower viewing angle, slightly slower response. Better for dark-mode dev environments and media. Acceptable for professional work.
- **OLED** — Perfect blacks, best contrast, most vivid color. Expensive; burn-in risk with static UI elements (menu bars, taskbars). Not yet the safe default for an all-day work monitor; reassess in 2–3 years.

**Refresh rate:** 60Hz is sufficient for code work. 144Hz matters for gaming. Don't pay the premium unless you need it for gaming on the side.

**Specific recommendations:**
- **LG 27GP850-B** — 27" 1440p IPS, 165Hz, ~$300. The benchmark mid-range gaming-to-productivity monitor. Excellent color, fast panel. Anti-glare coating is good.
- **Dell U2722D** — 27" 4K IPS, 60Hz, USB-C 90W charging. ~$550. The business/professional standard. Built-in USB hub saves cables. Ideal for MacBook users who want one cable to desk (power + display).
- **LG 32UN880-B Ergo** — 32" 4K IPS with a built-in adjustable arm. ~$700. The premium pick if you want 4K without buying a separate arm; the arm pivots like an Ergotron.
- **Samsung Odyssey G7 34"** — 34" ultrawide 1440p, curved, 165Hz. ~$600. Best ultrawide for someone who works and games on the same machine.

**Dual monitors:** Two 27" 1440p IPS monitors is the most common serious developer setup. Primary directly in front, secondary slightly to the side. Use Ergotron LX arms for both (saves desk space, independent positioning). The setup cost is ~$600 for monitors + $90 for two arms — worth it if you're context-switching between multiple windows/terminals constantly.

### Desk Configuration

The goal is a clean, stable surface with minimal clutter and cables off the desk surface.

**Desk size:** Minimum 60" wide for a dual-monitor setup. 72" is comfortable. Anything under 55" forces compromises. Depth: 30" minimum; 30–32" is ideal for keeping monitors at proper viewing distance.

**Ergotron LX arm (or dual arm for two monitors):** Mounts monitors off the desk surface, freeing space underneath for a keyboard + mouse surface only. The dual Ergotron LX arm (~$150) handles two monitors up to 25 lbs each. Adjust so the top of the monitor is at or slightly below eye level when sitting upright.

**Cable management:**
- **Wiremold CordMate Channel** — Adhesive raceway that runs along desk edges or walls. Hides cables in a clean run without drilling. ~$15 for 5 feet.
- **Under-desk cable tray** — Mounts under the desk surface, holds power strip + excess cable. Monoprice and VIVO both make good options for ~$20.
- **Velcro cable ties** — Replace zip ties. Reusable, don't cut cables. ~$10 for 100. Use them to bundle cables going to the same destination.
- **Cable labels** — Dymo or paper folded tags. Label every cable at both ends. Non-negotiable if you'll ever need to trace anything.

**Desk mat:** A large desk mat (80x40cm minimum) unifies the keyboard/mouse zone, protects the desk surface, and reduces wrist fatigue on hard surfaces. **Artisan Hayate Otsu** or **Logi Desk Mat Studio Series** — ~$30–$80. Not a luxury; it changes how the workspace feels.

### Networking: Wired First

Wi-Fi is fine for video calls. For latency-sensitive work (SSH, remote desktop, pair programming, large file transfers), wired Ethernet is meaningfully better — lower latency, no interference, consistent throughput.

**Ethernet switch:** If your router is across the house, run a cable from it to your office. A cheap 5-port gigabit switch (~$15, TP-Link TL-SG105) at your desk lets you plug in multiple devices without running multiple long runs.

**Cat6 cable:** Flat cable runs neatly under rugs or along baseboards. Pre-made flat Cat6 cables in 25–50ft lengths (~$10–$15) can reach most rooms from a central router location.

**USB-C dock with ethernet:** If you're on a laptop (MacBook, ThinkPad), a quality dock adds wired ethernet plus extra ports through a single USB-C cable. **CalDigit TS4** (~$350) is the benchmark Mac dock — Thunderbolt 4, 98W laptop charging, 18 ports. **Anker 777 Thunderbolt Dock** (~$250) is the value alternative. One cable from laptop to dock; everything else (monitors, ethernet, USB peripherals, power) connects at the dock.

### Audio: Calls and Focus

**Headphones for calls:**
- **Sony WH-1000XM5 (Japan)** — The benchmark ANC headphone, ~$280. Best-in-class active noise cancellation, clear microphone, 30-hour battery. For anyone on back-to-back calls in a home environment with ambient noise. ANC protects attention in a way that's hard to appreciate until you try it.
- **Apple AirPods Pro 2 (China)** — ~$250. Better microphone than XM5 for call quality on iOS/Mac. Worse sustained comfort for 4-hour sessions. Right choice if you're deep in the Apple ecosystem and care about call mic more than focus ANC.
- **Bose QuietComfort 45 (USA/China)** — ~$280. Softer on ears than XM5; some people find it more comfortable for long sessions. ANC is slightly behind XM5; call mic is similar.

**Dedicated microphone (optional but noticeable):**
- **Blue Yeti USB (USA)** — The default USB microphone recommendation, ~$130. Large diaphragm, multiple polar patterns, USB. Your voice will noticeably improve to others on calls vs any laptop or headphone mic.
- **Rode NT-USB Mini** — More compact, cardioid-only, ~$100. Better desk footprint, comparable quality for calls and recording.
- Only necessary if you're on video calls frequently where your voice quality matters, recording audio, or podcasting/streaming on the side.

**Speakers (optional):**
- **Audioengine A2+ (USA)** — Powered bookshelf speakers, ~$270. Significantly better than any monitor speaker. For music and media when not on calls. Connects via USB or 3.5mm. The entry-level step to real desktop audio without going full audiophile.

### Webcam

Built-in laptop cameras range from mediocre to acceptable. A dedicated webcam is a signal investment: it tells whoever you're speaking to that you take the interaction seriously.

- **Logitech Brio 4K (Switzerland/China)** — 4K at 30fps, 1080p at 60fps, HDR, wide field of view. ~$200. The benchmark webcam. Automatic low-light correction makes it usable in any office lighting. Mount on top of monitor via included clip.
- **Logitech C920x** — 1080p/30fps, ~$70. The value benchmark. Used by professional streamers and remote workers for years. If you're not regularly on video calls where quality is visible, this is enough.
- **Opal C1 (USA)** — $300. Native Apple Silicon integration, Studio Display-level image quality in a compact form. Overkill for most; right for anyone who presents video frequently and cares about image quality as professional signal.

### Lighting

See [quality-life-upgrades.md](quality-life-upgrades.md) for the BenQ ScreenBar and Elgato Key Light recommendations. The short version:

- **BenQ ScreenBar Plus** (~$150) — Monitor-mounted bar + a separate touch dial for control. The best desk lighting for code + document work. No glare on screen, wide coverage, adjustable color temperature.
- **Elgato Key Light** (~$200) — LED panel behind/above the camera plane. Makes you look good on video. Pair this with the BenQ if you're on calls frequently.
- **Govee bias lighting** behind the monitor — reduces eye strain from contrast between bright screen and dark room. ~$30.

**Rule of thumb:** Bias light behind the monitor for eye strain, BenQ bar for desk illumination, key light for calls. All three together is ~$380 and solves every lighting problem in a home office.

### Ergonomics Summary

The chair, desk height, monitor position, and keyboard placement are all interconnected:

1. **Feet flat on floor, hips at ~90°** — Chair height first, then everything else
2. **Forearms roughly parallel to floor** — Desk height follows
3. **Monitor top at or slightly below eye level** — Arm height follows
4. **Monitor at arm's length** (20–28") — Closer for smaller text, further for larger
5. **Keyboard close, mouse right next to keyboard** — Reaching for mouse at an angle is a common source of shoulder strain

See [quality-life-upgrades.md](quality-life-upgrades.md) for specific chair and desk recommendations (Herman Miller Aeron, Uplift V2, Ergotron LX).

### The Minimal Viable Upgrade Path

If starting from nothing, in investment order by impact:

1. **Monitor at eye level** — Raise your existing monitor on a $15 riser stack or a $45 Ergotron LX arm. Fix posture immediately.
2. **Chair** — A used Aeron or Steelcase Leap for $400–$600 changes your physical baseline. Non-negotiable before anything else.
3. **27" 1440p monitor** — LG 27GP850 or Dell U2722D. ~$300–$550.
4. **Standing desk** — Uplift V2 or Flexispot E7. ~$400–$900. Alternating positions is the point.
5. **Keyboard + mouse** — MX Keys + MX Master 3. ~$200 total.
6. **Lighting** — BenQ ScreenBar first. Add Elgato if on calls daily.
7. **Wired ethernet + dock** — One cable setup, no Wi-Fi variability.
8. **Webcam** — Logitech C920x to start, Brio 4K if it matters to your role.
9. **ANC headphones** — Sony XM5 or AirPods Pro 2. The focus investment.

---

## Key Considerations

**Buy used for chairs and desks.** Herman Miller and Steelcase office chairs are built to outlast a decade of use. A refurbished Aeron at $500 is a better chair than anything new under $800. Office liquidators, eBay, and local FB Marketplace are where these land when companies downsize.

**One cable to the desk.** If you're on a laptop, a Thunderbolt dock should mean a single cable plugged in when you sit down — and everything (power, monitors, ethernet, peripherals) is live. The friction of plugging in three things every morning is real; the one-cable experience is worth the dock cost.

**Wired when it matters.** Keep Wi-Fi as backup. One Cat6 cable from your router makes every SSH session, video call, and large download better.

**Don't optimize prematurely.** Get the chair and monitor right first. Most other upgrades are meaningful but secondary. A $2,000 audio stack doesn't fix chronic back pain from a bad chair.

---

## Getting Started

1. Fix your monitor position this week — a stack of books or a $15 riser is enough to test whether eye-level monitor actually changes your neck and shoulders. It will.
2. Source a used Aeron or Steelcase Leap locally. Set a search alert on eBay.
3. Decide: laptop dock + single monitor, or desktop. This determines whether you need a dock and what cable management looks like.
4. Order a 27" 1440p IPS monitor. Use the LG 27GP850 or Dell U2722D as defaults.
5. Add a desk mat. Changes how the whole desk feels immediately.

---

## Common Mistakes

**Spending on peripherals before fixing the chair.** A $200 keyboard on a $79 office chair is the wrong priority order. The chair is the health purchase; everything else is preference.

**Using a laptop screen as the primary display.** Laptop screens are 13–16" at 1080p or 1440p, placed on the desk surface — forcing you to look down and compress your neck. An external monitor at eye level eliminates this. Even a $200 used monitor on an arm is categorically better.

**Ignoring cable management.** Cable chaos causes friction every day (something gets unplugged, tangled, hard to trace). 2 hours of cable management with velcro ties and a cable tray solves this permanently.

**Buying a gaming chair.** The race-car bucket shape is bad for posture. Gaming chairs are built to look ergonomic, not to be ergonomic. The foam compresses within a year. Herman Miller and Steelcase are built for 8-hour-a-day professional use.

**Not running ethernet.** Wi-Fi has gotten good enough that most people never notice the difference — until they're on a critical call, in a big download, or SSH debugging something. Running one flat cable under a rug takes 15 minutes and removes a variable forever.

---

## Resources

- *The Wirecutter (NYT)* — Use their monitor, chair, and keyboard reviews as a starting point. Cross-reference with Reddit r/homeoffice and r/battlestations for real-world setups. Wirecutter recommendations are reliable but often conservative; Reddit shows what pushing the category looks like.
- *Ergotron's monitor ergonomics calculator* — Enter your height and chair height; it outputs the ideal monitor arm height. More precise than guessing.
- [quality-life-upgrades.md](quality-life-upgrades.md) — Covers chair, desk, keyboard, mouse, and lighting in more depth than here. The full ergonomics and workspace section is there.

---

## Connections

- [consumerism/quality-life-upgrades.md](quality-life-upgrades.md) — Chair, standing desk, monitor arm, keyboard/mouse, and desk lighting are covered there. This file is the integration layer and fills in monitors, audio, webcam, networking.
- [consumerism/considered-luxuries.md](considered-luxuries.md) — Audio equipment (headphones, speakers) sits at the intersection of home office and considered luxury.
- [health/mobility-and-flexibility.md](../health/mobility-and-flexibility.md) — The ergonomics section connects directly to hip flexor, thoracic, and neck mobility work — the failure modes of sitting all day.
- [homelab/homelab-overview.md](../homelab/homelab-overview.md) — Networking, NAS, and self-hosted services connect to the home office infrastructure layer.
- [networking/networking-fundamentals.md](../networking/networking-fundamentals.md) — The background for understanding wired vs Wi-Fi, switch selection, and what a Cat6 run actually gives you.

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-05*
