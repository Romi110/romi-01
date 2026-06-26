# E-Reader Guide
*Kindle vs. Kobo, the DRM question, e-ink note-taking devices, and how to build a device-agnostic reading library*

---

## What Is It

An e-reader buying guide covering the full decision: which ecosystem, which model, and whether an e-ink note-taking device (reMarkable, Kindle Scribe) is worth the upgrade. The basic Kobo vs. Kindle recommendation lives in [mind/reading-deeply.md](../mind/reading-deeply.md); this file expands that into a full buyer's guide with specs, model comparisons, and the sideloading/DRM layer that determines long-term ownership.

---

## Core Concepts

### The Ecosystem Decision: Kobo vs. Kindle

This is the most important decision, and it's not primarily about hardware — it's about which digital library you want to own.

**Kindle (Amazon ecosystem)**:
- Books purchased from Amazon are in `.azw3` or `.mobi` format with Amazon's Fairplay DRM
- DRM means you license the book — you don't own it. Amazon can revoke access, and has. Books can't be moved to another device outside Amazon's ecosystem.
- Excellent hardware (especially Paperwhite). Seamless integration with Amazon's catalog and Audible.
- Readwise integration is the best in the industry — highlights sync automatically and surface on spaced repetition schedules.
- Sending epub files to Kindle requires conversion or Amazon's "Send to Kindle" tool; the experience is functional but adds friction.

**Kobo (Rakuten ecosystem)**:
- Kobo's store sells DRM-protected books, but the key advantage: Kobo devices natively read **DRM-free epub files**. Side-load any epub directly via USB and it works immediately.
- Standard Ebooks and Project Gutenberg files (the best-formatted free public domain books) load onto Kobo without any conversion or tool.
- Libby/OverDrive integration is better on Kobo than Kindle — you borrow an epub from the library and it sends directly to your Kobo, no extra steps.
- The Kobo store allows purchasing DRM-free ebooks from some publishers (primarily smaller presses and some technical publishers via Humble Bundle).
- No ads anywhere on the device (Kindle's base price includes "Special Offers" lock screen ads; removing them costs $20).

**Which to choose**: If you use the public library heavily (Libby), read Standard Ebooks and public domain texts, or want to own your books permanently — Kobo. If you already have a significant Amazon book library, want the best Audible integration, or use Readwise heavily — Kindle. Most serious readers who aren't already deep in the Amazon ecosystem should choose Kobo.

---

### Kindle Model Lineup

**Kindle (base model, $110)**: 6-inch screen, 300 ppi, front light, no warm light. The one to skip — same form factor as the Paperwhite at an inferior spec for $30 less. Not worth the trade-off.

**Kindle Paperwhite (11th gen, $140)**: The standard recommendation. 6.8-inch screen, 300 ppi, adjustable warm light, IPX8 waterproof, 3-month battery. A meaningful upgrade from the base Kindle. This is the right Kindle for almost everyone — the Signature Edition ($190) adds wireless charging and auto-adjusting light, which are minor conveniences at a $50 premium. Skip the Signature Edition unless wireless charging matters to you.

**Kindle Paperwhite Signature Edition ($190)**: Same screen, adds wireless charging and automatic light sensor. Not materially better for reading.

**Kindle Oasis ($250+, discontinued)**: 7-inch screen, physical page-turn buttons, aluminum back. Amazon discontinued it in 2024. Available used — the physical buttons are genuinely better for one-handed reading, but at used prices the Paperwhite offers better value.

**Kindle Colorsoft ($280)**: Amazon's color e-ink Kindle. 7-inch color e-ink display, 300 ppi monochrome / 150 ppi color. Colors are muted compared to LCD (this is e-ink's physical limitation) but useful for comics, graphic novels, textbooks with figures, and cookbooks. For pure text reading, color e-ink adds no value — save the money.

---

### Kobo Model Lineup

**Kobo Clara BW ($130)**: 6-inch screen, 300 ppi, adjustable warm light, IPX8 waterproof. Kobo's entry model. Equivalent to the Kindle Paperwhite functionally. The right choice if you want Kobo on a budget.

**Kobo Clara Colour ($150)**: 6-inch color e-ink screen, 300 ppi mono / 150 ppi color. Same hardware as Clara BW, color display. Makes sense if you read comics, illustrated books, or colorful non-fiction. Unnecessary for pure text.

**Kobo Libra Colour ($180)**: 7-inch color e-ink screen, physical page-turn buttons on the side, IPX8 waterproof. The best mid-range Kobo. The physical buttons matter — one-handed reading while lying down, commuting, or eating is dramatically more comfortable with page-turn buttons vs. touchscreen-only. Color e-ink is the default now in this tier. The recommended Kobo for most buyers.

**Kobo Elipsa 2E ($400)**: 10.3-inch e-ink display with a stylus for handwriting and annotation. Kobo's e-ink note-taking device. Not the most capable in this category (see below) but integrates well with the Kobo reading ecosystem. For someone already invested in Kobo who wants annotation capability.

---

### E-Ink Note-Taking Devices: A Separate Category

Beyond standard e-readers, there's a category of larger e-ink tablets designed specifically for handwriting, annotation, and note-taking — not just passive reading. These cost more and serve a different function.

**reMarkable 2 ($300, $350 with stylus)**: 10.3-inch e-ink display, stylus-based writing, paper-like surface that resists the stylus in a way that feels like writing on paper. The best writing feel of any e-ink device. Cloud sync, handwriting recognition, PDF annotation. No backlight. The battery lasts weeks.

*The limitation*: reMarkable is a closed ecosystem with a subscription model. Reading epubs is supported but the experience is not as polished as a Kobo or Kindle. No backlight means no use in the dark. The cloud sync requires their subscription ($3/month) for full functionality; without it, you can sync via USB only.
*Best for*: people who want an analog-feeling writing and annotation tool. Works well for annotating PDFs (academic papers, technical documents) and taking handwritten notes. Not the best primary e-reader.

**Kindle Scribe ($340, $370 with premium pen)**: 10.2-inch e-ink display with stylus input. Amazon's entry into the note-taking e-ink category. Reads Kindle books well — the best integration with Kindle's ecosystem. Annotation of Kindle books syncs to the app. Handwriting is acceptable but the feel is less paper-like than reMarkable.
*Best for*: deep Kindle users who want to annotate their existing Kindle library with a stylus. The 10-inch form factor makes it better for reading PDFs and textbooks than a standard 6-inch Kindle.

**Supernote A5X ($499) / A6X2 ($419)**: Made by Ratta, a smaller Chinese company. The cult favorite among serious users. The A6X2 is 7.8-inch; the A5X is 10.2-inch. Known for exceptional build quality, strong community, and a business model that doesn't require a subscription. The stylus feel is the most refined of any e-ink tablet. Excellent for structured note-taking.
*Best for*: power users who want the highest quality e-ink writing experience and don't want subscription dependencies. Higher cost, but no ongoing fees.

**Summary**: if your primary use is reading with occasional annotation, get a Kobo Libra Colour. If you want to write and annotate heavily in a paper-like format, get the reMarkable 2 (for the writing feel) or Supernote A6X2 (for the ecosystem quality). The Kindle Scribe is a reasonable compromise for Kindle users only.

---

### DRM, Calibre, and Building a Permanent Library

DRM (Digital Rights Management) means your books can be taken away. When Amazon or Kobo closes an account, your books go with it. This is not hypothetical — Amazon has remotely deleted books from Kindles without warning (the Orwell incident in 2009 is the most cited example).

The solution: **Calibre** (calibre-ebook.com). Free, open-source software that manages your ebook library. What it does:

**Format conversion**: converts between epub, mobi, azw3, PDF, and a dozen other formats. Any ebook you own can be converted to any other format.

**Library management**: catalogs your books with metadata, cover art, tags, and series information. The iTunes for ebooks.

**DRM removal** (via plugins): DeDRM and Obok DeDRM plugins (maintained by the Calibre community) remove DRM from Kindle and Kobo books you've legitimately purchased, converting them to DRM-free epub files you own permanently. Legal in personal use for books you purchased; check your jurisdiction. The workflow: download your purchased books via the Kindle or Kobo desktop app, run through Calibre with the plugin, convert to epub, save locally.

**Send to device**: connects to your e-reader via USB and sends converted/organized books directly.

**The end state**: a local folder of DRM-free epub files, backed up to wherever you back up important files, that works on any device forever and can't be revoked.

---

### Format Notes

**EPUB**: the standard. All Kobo devices, Apple Books, and most reading apps. The right format for long-term storage.

**MOBI / AZW3**: Amazon's formats. Kindles. Calibre converts to/from these.

**PDF**: readable on all e-readers but poor experience on small screens — text doesn't reflow to fill the screen. PDFs on a 6-inch Kindle require zooming and panning. A 10-inch device (Kindle Scribe, reMarkable, Supernote) handles PDFs much better. For PDF-heavy use (academic papers, technical manuals), the 10-inch category is the right choice.

**CBZ / CBR**: comic book formats. Most e-readers handle these with a plugin or through Calibre conversion. Kobo handles them natively.

---

### Lighting, Battery, and Specs That Matter

**Screen size**: 6–6.8 inch is the standard for novel reading. 7–8 inch is more comfortable for PDFs and larger-format non-fiction. 10-inch is for annotation and PDF-heavy work. Bigger isn't always better for pure text reading — the Kobo Libra Colour at 7 inches is ideal for most contexts.

**Warm light / color temperature**: all current mid-range+ devices have adjustable warm/cool light. This matters for reading at night — a warm orange-tinted light at low brightness is far less disruptive to sleep than white light. Adjusting to warm in the evenings is worth doing.

**Waterproofing**: IPX8 (submersible to 2 meters for 60 minutes) is standard on most mid-range+ devices. Worth having for bathtub reading and outdoor summer use. The Kobo Clara and Libra series are both IPX8.

**Battery life**: all current e-readers last weeks on a charge with moderate daily reading. Battery life is not a meaningful differentiator among current generation devices.

**Storage**: 8GB stores thousands of books (an average ebook is 1–2MB; a typical audiobook is 60–200MB; audiobooks aren't on e-readers anyway). 32GB is more relevant if you're storing PDFs with images or extensive libraries. For most readers, 8GB is fine.

---

## Getting Started

**For a first e-reader**: Kobo Libra Colour ($180) if you use the library or want maximum flexibility. Kindle Paperwhite ($140) if you're already in the Amazon ecosystem or want Readwise.

**For annotation and PDFs**: reMarkable 2 if the writing feel matters most. Kindle Scribe if you're a Kindle user who wants stylus annotation. Supernote A6X2 if you want the best long-term ecosystem with no subscriptions.

**Setup sequence**:
1. Install Calibre on your computer
2. For Kobo: plug in via USB, Calibre connects automatically
3. Install Standard Ebooks app or browse standardebooks.org — download everything you want to read from the public domain immediately (it's free, and the formatting is better than Project Gutenberg)
4. Connect Libby to your library account; on Kobo, authorize OverDrive in Settings — library borrows send directly to device
5. For any purchased books: run through Calibre with DeDRM plugin, save as epub locally

---

## Common Mistakes

**Buying a base Kindle.** The Paperwhite is only $30 more and meaningfully better in every spec. The base model feels noticeably worse to use over time.

**Defaulting to Kindle without considering the DRM question.** If you plan to read extensively for 10–20 years, owning your books permanently matters more than it seems when you're buying the first one.

**Buying a large device for all reading.** The 10-inch note-taking devices are excellent for what they do and poor substitutes for a dedicated reading device. They're heavy, require two hands, and aren't designed for lying-in-bed fiction reading. If you want both: a 7-inch Kobo for reading and a reMarkable for work annotation.

**Not setting up Calibre.** The most common regret among people who read heavily on e-readers is not having set up a local library earlier. Format conversion and DRM removal are both easier early than after accumulating hundreds of books in a locked ecosystem.

---

## Connections

- [mind/reading-deeply.md](../mind/reading-deeply.md) — the core recommendation (Kobo for library users, Kindle for Amazon ecosystem) plus annotation workflow, physical vs. digital trade-offs, and Readwise
- [meta/free-books.md](../meta/free-books.md) — Libby/OverDrive, Project Gutenberg, Standard Ebooks: all the sources whose files load directly onto a Kobo without friction
- [consumerism/considered-luxuries.md](considered-luxuries.md) — an e-reader used daily for years is a high-ROI considered luxury; the framework for evaluating it

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-06-25*
