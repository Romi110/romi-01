# Video Editing Basics
*The timeline, the cut, pacing, color, and audio — the core skills in any editing software*

---

## What Is It

Video editing is the process of selecting, sequencing, and refining raw footage into a finished video. It happens in a **Non-Linear Editor (NLE)** — software that lets you arrange clips in any order on a timeline without altering the original files. The major NLEs are DaVinci Resolve (free, industry-grade), Adobe Premiere Pro (subscription, industry standard), and Final Cut Pro (Mac-only, one-time purchase).

This file covers the skills that transfer across all NLEs — the concepts and judgment calls of editing, not the software-specific button locations. Learn the concepts here; learn the keyboard shortcuts in the specific software you choose.

---

## Why It Matters

Editing is where the vlog is actually made. Raw footage is material; the edit is the film. The difference between engaging and unwatchable is almost always the edit — pacing, cut timing, music, transitions, and the removal of dead space. Good footage edited badly produces a bad video. Mediocre footage edited well produces a watchable one.

Editing is also where technical skills compound with creative judgment. The technical floor is low (anyone can drag clips to a timeline); the ceiling on pacing, color, and storytelling is high and takes time to develop.

---

## Core Concepts

### The NLE Interface — Mental Model

Every NLE has the same fundamental structure:

**Project panel / Media bin**: Where your imported raw files live. Think of it as the filing cabinet.

**Source monitor**: Preview a clip before placing it on the timeline. Mark in/out points to select only the section you want.

**Timeline**: Where editing happens. A horizontal representation of time. Clips are placed left-to-right in the order they'll play. Multiple tracks stack vertically — video tracks above, audio tracks below.

**Program monitor**: Shows what's currently on the timeline at the playhead position. This is your output preview.

**Inspector / Effect controls**: Settings for selected clips — speed, opacity, color adjustments, motion, effects.

**The fundamental workflow**:
1. Import raw footage into the project
2. Review footage, mark good sections
3. Assemble rough cut — place clips in sequence on the timeline
4. Refine — tighten timing, remove dead air, rearrange
5. Add B-roll over narration tracks
6. Color grade
7. Mix audio
8. Add titles/graphics
9. Export

### The Cut — The Basic Edit Decision

Every edit decision is a choice about where to cut and why. The two most important properties of a cut:

**When to cut**: Cut on action (motion helps disguise cuts — cut mid-gesture rather than at rest), on a beat in the music, or when the current shot has delivered its information and staying longer adds nothing. The common beginner mistake is holding shots too long because the footage is there. If you wouldn't keep watching, cut.

**Why to cut**: Each cut should have a purpose — advance the story, change perspective, show a reaction, add information, or adjust the pace. Random cutting is visual noise.

**Types of cuts**:
- *Hard cut*: Abrupt, direct transition from one clip to the next. The default. Use it 90% of the time.
- *Jump cut*: Cut between two clips of the same subject from a similar angle — creates a jarring, time-jumping effect. Often used intentionally in vlogging and talking-head content to compress time. YouTube vlogging culture normalized jump cuts as a style choice.
- *Cutaway*: Cut from the main shot to a related but different shot (B-roll) then back. Masks time compression and adds visual variety.
- *J-cut*: Audio from the next clip begins before the video switches to it. Creates smooth, less jarring transitions — the audio bridges the edit.
- *L-cut*: Audio from the previous clip continues after the video moves to the next clip. Natural for dialogue and interview content.
- *Cross-cut*: Alternating between two simultaneous locations (intercutting). Used to show parallel action.

**Transitions**: The temptation to use dissolves, wipes, and built-in transition effects is strong for beginners. Resist it. Hard cuts and well-timed J/L cuts look more professional than decorative transitions. Save dissolves for genuine time jumps or section breaks.

### Pacing — The Feel of the Edit

Pacing is how fast or slow a video moves — the rhythm of cuts. It's one of the most important and hardest-to-teach aspects of editing.

**Fast pacing**: Short clips, frequent cuts, quick music. Creates energy, urgency, excitement. Works well for action, montages, product reveals.

**Slow pacing**: Longer holds, fewer cuts, space in the edit. Creates weight, contemplation, intimacy. Works for emotional moments, scenery, storytelling beats.

**Match the pacing to the content and music**: Fast music with slow cuts feels off; slow music with rapid cuts feels chaotic. The edit rhythm and the music rhythm should align.

**The "10 seconds" test**: If a clip hasn't added new information or held attention for 10 seconds, it's probably too long. Watch your rough cut with fresh eyes and note every moment you feel impatient — those are your cuts.

**Remove dead air aggressively**: Silence before speaking, pauses mid-sentence, awkward transitions — cut them. In vlogging, a 1-second pause feels like 5 seconds to the viewer. In DaVinci Resolve, the "remove silent sections" feature automates this; in Premiere, the "Auto Reframe" and "Remix" tools help.

### B-Roll — The Most Impactful Single Upgrade

B-roll is supplemental footage cut over your primary audio track (talking, narration). It's the footage of what you're talking about rather than you talking about it.

**Why B-roll matters**: A talking head for 10 minutes is hard to watch. B-roll breaks it up, illustrates the narration visually, and makes a video feel produced rather than recorded. The standard professional ratio for documentary/vlog content is roughly 60–70% B-roll, 30–40% talking head.

**How to layer B-roll**:
1. Lock your primary audio track (talking, narration, interview)
2. Where the narration mentions something visible, find B-roll of that thing and place it on a video track above the talking-head clip
3. The B-roll plays over the audio, masking the talking-head cut point underneath

**Common B-roll shots for vlogging**:
- Hands doing things (cooking, typing, building)
- Environment and location shots (establishing context)
- Close-ups of objects being discussed
- Reaction shots
- Time-lapses of slow processes

### Color Grading — Visual Consistency and Mood

Raw footage from most cameras looks flat and desaturated — this is intentional. Flat color profiles (log or flat picture profiles) preserve more dynamic range for grading in post.

**Two-stage grading**:
1. *Color correction*: Make the footage look accurate and balanced. Correct exposure (luminance), white balance (color temperature), and match shots so they look consistent across the edit.
2. *Color grading*: Apply a creative look — mood, style, tone. This is where you add warmth, coolness, contrast, or a cinematic feel.

**The scopes**: Use the waveform (exposure), parade (color balance), and vectorscope (saturation/hue) rather than eyeballing on your monitor. Monitor calibration is never perfect; scopes are objective.

**The basics of the color wheels**:
- *Lift*: Controls the shadows. Lifting the lift wheel brightens the darkest tones.
- *Gamma*: Controls the midtones.
- *Gain*: Controls the highlights.
- Each wheel has a color component — pushing the wheel toward blue cools the shadows, toward orange warms them.

**LUTs (Look Up Tables)**: Pre-built color grades that transform footage in one click. Purchase or download LUTs for your camera and apply them as a starting point, then adjust. LUTs are shortcuts, not replacements for understanding grading — blindly applying them to the wrong exposure produces bad results.

**Skin tones are the constraint**: Whatever grade you apply, skin tones should look natural. This is the limiting constraint on creative color choices for vlog content.

**Match your shots**: Footage shot in different lighting conditions at different times needs to be matched before applying a consistent grade. This is color correction before color grading.

### Audio Mixing

Bad audio ruins good video. Good audio makes mediocre video watchable. The edit's audio track is usually more important than the visual.

**Levels**: Your primary audio (dialogue, narration) should peak around -6dB with average levels around -12 to -18dB in the edit. Peaks above -3dB clip (distort). Levels too low require the viewer to turn up their volume, then get blasted by music.

**The standard audio layout**:
- Primary audio track (voice): Set to a consistent level throughout
- Music track: Mixed significantly lower than voice when voice is present — typically -20 to -30dB under dialogue
- Sound effects: Mixed to blend naturally with dialogue

**Music ducking**: When the voice track starts, the music volume drops (ducks); when the voice ends, it comes back up. This can be done manually or with keyframes. In DaVinci Resolve, there's an auto-ducking feature. In Premiere, use Essential Sound panel.

**Noise reduction**: Most NLEs have noise reduction tools. DaVinci Resolve's Fairlight audio tools include excellent noise reduction. Apply to footage recorded in noisy environments — it removes consistent background noise (HVAC hum, wind rumble, room tone).

**Normalize clips**: Most NLEs can auto-normalize audio clips to a consistent level. Use this as a starting point, then fine-tune manually.

**EQ basics**: 
- Roll off below 80Hz on dialogue (low cut/high-pass filter) — removes rumble that isn't voice
- A slight boost around 3–5kHz adds clarity and intelligibility to speech
- Cut muddy frequencies around 200–400Hz if voice sounds boxy

### Titles and Graphics

**Lower thirds**: Text overlays at the bottom of the frame identifying people, places, or context. Standard in documentary and vlog content. Should be readable in 2–3 seconds.

**Title cards**: Full-screen text, often used to open a video, introduce sections, or provide context. Keep text brief — if the viewer has to read more than one sentence, it'll be skipped.

**Text on screen (captions-style)**: Popular in YouTube content — key words or phrases appear on screen while the person speaks. Increases engagement and accessibility. Can be added manually or generated automatically (DaVinci Resolve has AI captions; CapCut's auto-caption feature is fast).

**Subtitles/Captions**: Auto-generated captions have improved dramatically. DaVinci Resolve 18+ generates them from audio directly. YouTube also auto-generates on upload. These can be exported and corrected if needed.

### Export Settings

**The common output formats**:
- For YouTube: H.264 or H.265, 1080p or 4K, 24 or 30fps, bitrate 15–25Mbps for 1080p / 35–45Mbps for 4K, AAC audio at 320kbps
- For archival: ProRes or DNxHR (much larger files but lossless quality — keep as master)
- For Instagram/Reels: H.264, vertical (9:16) or square (1:1), 1080p, max 60fps

**Color space**: If you shot in a log or flat profile, your NLE needs to know the color space to display and export correctly. DaVinci Resolve handles this with color science settings; Premiere uses LUTs or color space transforms.

**Export from DaVinci Resolve** (most common free NLE for this workflow): Deliver page → select YouTube or custom preset → set resolution and bitrate → Add to Render Queue → Start Render.

---

## Key Considerations

**Learn one NLE deeply.** Switching between editors resets your fluency. DaVinci Resolve is the best starting point for most — free, no subscription, professional-grade, strong on color. Premiere Pro makes sense if you're already in the Adobe ecosystem.

**Keyboard shortcuts are the skill gate.** Professional editors don't use mouse menus — they use keyboard shortcuts for every common operation. In Premiere and Resolve, the J/K/L keys control playback (rewind/pause/fast-forward). I/O mark in/out points. This matters because slow editing is painful editing — people who hate editing usually edit slowly.

**Watch your edit back before exporting.** Always watch the complete cut before export. Things that slipped through in small-screen editing become obvious at full attention.

**Storage pipeline**: Raw footage → SSD working drive (fast) → Export to a separate drive → Archive to HDD. Never work from the same drive you're exporting to.

---

## Getting Started

1. **Download DaVinci Resolve** (free at blackmagicdesign.com). Import 5–10 clips. Assemble them into a 1-minute sequence. Don't touch color or audio — just cut.
2. **Learn J/K/L + I/O + C (cut tool)** in your NLE. These five keys are 80% of the editing workflow.
3. **Edit one video end-to-end**: rough assembly → B-roll → audio levels → basic color → titles → export. Identify the weakest part. That's what to focus on next.
4. **Watch a speed edit or process video** from a YouTuber you want to emulate. Note their cut rhythm, color palette, B-roll ratio, and text style. These are the choices you'll make consciously.

---

## Common Mistakes

**Leaving too much in.** The edit's job is selection. Most first cuts are 2–3× longer than they should be. Cutting is not failure — it's the work.

**Using every transition in the menu.** Wipes, spins, and star-wipe transitions look like a demo reel for the effects panel. Hard cuts and J/L cuts are almost always better.

**Mixing audio by ear on headphones without reference monitors.** Headphones distort the perceived bass balance. If possible, check audio on multiple playback devices (laptop speakers, phone, headphones) before export.

**Not saving/backing up the project file.** A corrupt project file with no backup means re-editing from scratch. Auto-save is on by default in most NLEs — confirm it. Keep a backup of the project file with the footage.

**Color grading before fixing the edit.** Grade last. Color grading a sequence you later restructure means re-grading. Lock picture (finalize all cuts) before touching color.

---

## Resources

- *DaVinci Resolve in a Day* — Casey Faris (YouTube): The fastest path to functional in Resolve. One afternoon.
- *Film Riot* (YouTube): Covers editing technique, color grading, and production at a professional level without being dry.
- *YCImaging* (YouTube): Color grading tutorials specifically for YouTube/vlog content. Practical, not theoretical.

---

## Connections

- [vlogging-foundations.md](vlogging-foundations.md) — the shooting side; editing quality is limited by what was captured
- [youtube-strategy.md](youtube-strategy.md) — export format, thumbnail, and final packaging for platform distribution
- [audio-for-video.md](audio-for-video.md) — audio mixing is one part of the edit; dedicated treatment of mics, room, and recording
- [color-grading.md](color-grading.md) — full deep-dive on color wheels, scopes, LUTs, and achieving a consistent cinematic look

---

## Status
- [x] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-06*
