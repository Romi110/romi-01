# Video Workflow
*File organization, card backup, proxy editing for 4K, project naming, and the full pipeline from camera to archive*

---

## What Is It

Video workflow is the system that runs between your camera and your finished video — every step from pulling a card to storing a final export. A bad workflow costs you hours on every project: footage in the wrong place, missing backups, re-rendering proxies you already made, exports you can't find a year later. A good workflow becomes invisible.

[video-editing-basics.md](video-editing-basics.md) covers the NLE interface and export settings. This file covers everything around the edit: how footage gets from the camera to the editor, how projects are organized, what proxies are and when you need them, and how to maintain an archive you can actually find things in.

---

## Core Concepts

### The Full Pipeline

Every project follows the same sequence regardless of length or complexity:

```
Camera cards
    ↓
Ingest + backup (two locations)
    ↓
Organized project folder
    ↓
Create proxies (if needed)
    ↓
Edit
    ↓
Color + audio polish
    ↓
Export (delivery files)
    ↓
Archive (master + raw footage)
    ↓
Delete camera card
```

The camera card is deleted last — only after backup is confirmed and the final export exists. This is the rule that prevents losing footage.

---

### Project Folder Structure

Before importing a single clip, build the folder. Consistent structure means you can navigate any project from memory:

```
2026-06-28_project-name/
├── raw/               ← Camera card contents, untouched
│   ├── card-01/
│   └── card-02/
├── audio/             ← Separate audio recordings (if any)
├── assets/            ← Music, graphics, fonts, logos
├── exports/           ← Final rendered files
│   ├── master/        ← Highest quality export
│   └── delivery/      ← Platform-optimized (YouTube, Instagram)
└── project/           ← NLE project file(s)
```

**Naming convention**: `YYYY-MM-DD_short-description`. Date-first means folders sort chronologically in any file explorer without additional sorting. The short description is enough to remind you what the project was: `2026-06-28_garden-timelapse`, not `Garden Video Final 3 FINAL`.

**Where the project folder lives**: On your fast working drive (SSD, ideally NVMe). Not your archive drive; not your desktop. Working drives are fast and local; archive drives are large and slow.

---

### Card Backup: The Two-Location Rule

A camera card is a single copy. A single copy is not a backup. Before you delete a card, you need two copies in two different locations.

**Minimum viable backup**:
1. Copy card contents to your working project folder (the `raw/` subfolder above)
2. Copy card contents to a backup drive (external HDD or NAS) or cloud storage

Only after both copies exist and you've spot-checked that the files are readable — open a few clips and confirm they play — do you format the card.

**Ingest software**: For professional-grade backup with checksum verification (confirming the copied files are bit-for-bit identical to the original), use:
- **Hedge** ($80/year, Mac/Windows): The most reliable ingest tool; copies to multiple destinations simultaneously with checksum verification. The standard in professional production.
- **ShotPut Pro** ($150/year): Similar functionality, longer history.
- For casual use: a manual copy with verification is sufficient. Drag to destination, then manually spot-check 3–5 clips from the copy.

**Cloud backup**: For footage you care about, upload a copy to cloud storage (Backblaze B2, Google Drive, iCloud). At 4K, a typical project is 50–200GB — cloud backup is slow but provides off-site protection. Backblaze B2 is the cheapest option at ~$6/TB/month.

---

### Proxy Workflow for 4K

4K footage is large and computationally expensive. Editing raw 4K on a mid-range laptop produces stuttering playback and slow timeline scrubbing — which makes editing miserable.

**What proxies are**: Lower-resolution, highly compressed versions of your footage that link back to the original high-resolution files. You edit with the proxies (small, fast); when you export, the NLE automatically uses the original high-resolution files for the final output. The proxy is a working copy, not the deliverable.

**When you need proxies**:
- 4K footage on any laptop or mid-range desktop without dedicated GPU
- H.265 (HEVC) footage, which is more compressed but harder to decode than H.264
- Multiple 4K streams in the timeline (multi-cam or picture-in-picture)
- The test: if playback stutters or drops frames in your NLE, you need proxies

**Setting up proxies in DaVinci Resolve**:
1. In Project Settings → Master Settings → Optimized Media and Render Cache: set format to DNxHR LB or ProRes Proxy (these are fast-to-decode intermediary codecs)
2. Right-click clips in the Media Pool → Generate Optimized Media
3. Playback → Use Optimized Media if Available (toggle on)
4. When exporting: proxies are automatically bypassed; the original files are used

**Setting up proxies in Premiere Pro**:
1. Right-click clips in Project panel → Proxy → Create Proxies → choose resolution (720p is sufficient)
2. Premiere creates proxy files in a subdirectory next to the originals
3. Toggle proxies on/off with the Proxy button in the Program Monitor

**Storage for proxies**: Proxies are large enough to need a dedicated folder. Put them in a `proxies/` folder inside your project directory. They're disposable — regeneratable from originals — so they don't go to archive.

---

### Naming and Version Control for Exports

Export names contain the information needed to identify the file without opening it:

```
2026-06-28_project-name_v01_4K-master.mp4
2026-06-28_project-name_v01_1080p-youtube.mp4
2026-06-28_project-name_v01_1080p-instagram.mp4
```

**Version numbers**: Increment on any substantive change. `v01` is the first complete export; `v02` if feedback requires a revision. Never overwrite an existing export — add a new version. Storage is cheap; reconstructing "which version did we send?" is expensive.

**Export preset library**: Build presets in your NLE for each delivery format and reuse them. In DaVinci Resolve, save custom presets in the Deliver page. In Premiere, save presets in Media Encoder. The goal: changing the output file name and hitting render — not reconfiguring settings every time.

**Common export formats:**

| Destination | Resolution | Codec | Bitrate |
|-------------|-----------|-------|---------|
| YouTube (HD) | 1920×1080 | H.264 | 12–15 Mbps |
| YouTube (4K) | 3840×2160 | H.264 or H.265 | 35–45 Mbps |
| Instagram Reels | 1080×1920 (9:16) | H.264 | 10–15 Mbps |
| Archive/master | Native res | ProRes 422 or DNxHR | 100–400+ Mbps |

Always export a master (large, lossless) before exporting delivery formats. The master is the source for any future re-export or re-edit.

---

### Storage Planning

4K footage is large and accumulates fast. Plan storage before you're in a crisis.

**Codecs and file sizes per hour of footage**:
- H.264 4K 30fps (typical camera output): 25–35 GB/hour
- H.265/HEVC 4K 30fps (Sony, GoPro): 15–25 GB/hour
- ProRes 4K 30fps (in-camera or transcoded): 100–200 GB/hour
- ProRes 422 master export (1080p): 15–40 GB/hour

**Tiered storage**:
- **Working SSD** (NVMe, 1–2TB): Active project footage and project file. Fast for editing. Not for archive.
- **Backup HDD** (4–8TB external): Copy of raw footage and exports. Slow but large. This is your first backup layer.
- **Archive HDD** (separate from backup): Long-term storage of completed project folders. Accessed rarely; stored off-site if possible.

**The rule**: raw footage on three locations (card + working drive + backup) until the project is complete; then two locations (archive drive 1 + archive drive 2 or cloud) indefinitely.

---

### When to Delete

**Camera cards**: After raw footage is confirmed copied to two locations. Never before.

**Proxies**: After the project is complete and the final export is archived. Proxies are regeneratable from originals — they're working copies, not archives.

**Rough cuts and intermediate exports**: After the final version is approved and archived. Keep the project file; delete intermediate exports.

**Raw footage**: Never, if storage allows. Raw footage is irreplaceable. If storage is the constraint, keep the final export and project file; archive compressed (not lossy) versions of selects; delete obvious rejects. But think carefully before deleting any raw footage — storage is cheap; reshooting is not.

---

## Getting Started

1. **Create your project folder structure** before importing anything from a card.
2. **Copy the card to your working drive** using Hedge or manual copy.
3. **Verify the copy** — spot-check 3–5 clips in the destination folder.
4. **Copy to your backup drive** — confirm the second copy exists.
5. **Import to your NLE from the working drive**, not the card.
6. **Generate proxies** if you're on a mid-range machine editing 4K.
7. **Export master first**, delivery formats second.
8. **Archive project folder** (including project file, exports folder, and raw footage) to your archive drive.
9. **Format the camera card**.

---

## Common Mistakes

**Working from the camera card directly.** Editing off a card is slow, and the card is the only copy of your footage. Import first, edit second.

**One-location backup.** A single hard drive fails eventually. A drive failure with your only copy of raw footage is a total loss. Two locations, minimum, before the card gets formatted.

**Losing the project file.** The project file points to the footage; without it, you'd have to reassemble the edit from scratch. Back up the project file with the footage. In DaVinci Resolve, the database is separate from the project folder — export the project as a `.drp` file and save it alongside the footage.

**Letting footage accumulate unorganized.** A folder of 200 unnamed clips from a dozen sessions is unfindable. Organize immediately after ingest, while you remember what everything is.

---

## Connections

- [video-editing-basics.md](video-editing-basics.md) — export settings, NLE interface, the editing workflow that this pipeline delivers footage to
- [pov-and-daily-filming.md](pov-and-daily-filming.md) — continuous capture generates high-volume footage; the two-location backup rule and storage planning matter more at that volume
- [consumerism/home-appliance-buying.md](../consumerism/home-appliance-buying.md) — NAS and storage hardware decisions

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-06-28*
