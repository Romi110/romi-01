# Audio for Video
*Why audio is the most important part of your video, and how to get it right from recording through post*

---

## What Is It

Audio is the single variable with the most impact on whether people keep watching. Viewers tolerate bad video (shaky, dark, compressed) far longer than they tolerate bad audio. Echoing rooms, wind noise, or muffled speech causes immediate abandonment — not because it's unpleasant, but because it's effortful. The brain works hard to decode poor audio and gives up.

[vlogging-foundations.md](vlogging-foundations.md) covers the minimum viable audio setup (wired lav vs. shotgun, wind protection, room treatment). This file goes deeper: gain staging, mic selection across use cases, wireless system comparison, acoustic environments, and advanced post-processing.

---

## Core Concepts

### Why Audio Matters More Than Video

The research on viewer retention consistently shows: viewers will accept 240p video with crisp audio; they won't accept crisp video with distorted or echoey audio. The asymmetry is counterintuitive because video is what we think of as "the medium."

The reason is cognitive load. Poor audio forces the listener to reconstruct what was said. That work competes with processing the content. The brain stops and quits. Bad video just looks bad — it doesn't require active effort to decode.

Practical implication: if your budget is limited, spend it on audio first.

---

### Microphone Types and Use Cases

**Lavalier (lav) mics**: Clip to your shirt, 6–8 inches from your mouth. The most practical for vlogging because they're invisible, work regardless of camera distance, and don't require the camera to be stationary. 

- *Wired lav (3.5mm)*, $20–50: Connects directly to camera or phone. Good for talking-to-camera at a desk. Cable is a constraint for movement.
- *Wireless lav*, $200–400: Transmitter clips to your body, receiver plugs into camera. The best run-and-gun setup. **Recommended systems**: Rode Wireless GO II ($300) — reliable, compact, dual-channel (records backup on transmitter as failsafe); DJI Mic 2 ($360) — easy setup, 32-bit float internal recording prevents clipping; Hollyland Lark M2 ($150) — best value for budget-conscious.

**Shotgun mics**: Directional mics that reject off-axis sound. Mount on the camera's hot shoe, point at the subject. Better than built-in; worse than a well-placed lav in most conditions.

- *Compact shotgun*, $70–150: Rode VideoMicro II ($80), DJI Mic Mini ($90). For close-range talking-to-camera (under 3 feet). Falls off quickly at distance.
- *Full-length shotgun*, $150–300: Rode VideoMic NTG ($170). Better off-axis rejection, useful at 3–6 feet. The standard for on-location interviews.

**USB condenser mics**: Desktop mics for stationary recording — voiceover, podcast, talking-head at a desk. Plug directly into a computer. No camera needed.

- The most important variable is acoustics: a $300 condenser in a live room sounds worse than a $50 dynamic in a treated room.
- **Recommended**: Rode NT-USB Mini ($100), Shure MV7 ($250, dynamic — more forgiving in untreated rooms).

**Dynamic mics with audio interface**: For highest quality stationary recording. Dynamic mics (like the Shure SM7B at $400) reject room reflections better than condensers — they require the mic to be close (6–8 inches from mouth) but produce the clearest, most controlled sound in home environments.

---

### Gain Staging

Gain staging is setting levels correctly at every stage of the recording chain so the signal is loud enough to be clean but not so loud that it clips (distorts).

**The target**: Your recording levels should average around -12 to -18dBFS (decibels relative to full scale) with peaks no higher than -6dBFS. Below -18 and you're bringing up noise in post. Above -6 and peaks will clip.

**Where to set gain**:
1. At the mic or transmitter (if wireless) — set the input gain so the signal is hot but not clipping
2. At the camera's audio input level — typically in the camera's menu under audio settings; aim for the same -12 to -18 target
3. In the NLE — adjust clip levels to bring everything to a consistent level before mixing

**32-bit float**: Several newer wireless systems (DJI Mic 2, Rode Wireless GO II with 32-bit internal recording) record in 32-bit float format internally, which cannot clip regardless of how loud the source is. For unpredictable audio situations (events, interviews), 32-bit float removes the "peak management" problem entirely. You recover any level in post.

**Monitoring**: Always use headphones to monitor audio while recording when possible. What sounds fine in a room often sounds different through the mic. A quick headphone check catches room resonance, wind noise, and handling noise before you've recorded an hour of unusable footage.

---

### Acoustic Environments

Room acoustics determine whether recorded audio sounds clean or echoey. The problem isn't volume — it's reflections. Sound bouncing off hard surfaces creates reverb that makes a room sound like a bathroom, regardless of mic quality.

**What absorbs sound**: Soft, irregular surfaces. Bookshelves full of books, sofas, rugs, curtains, carpet, foam panels. A room that looks like a recording studio is a room full of soft, irregular surfaces.

**What reflects sound**: Bare drywall, glass, hardwood floors, bare concrete. A large empty room with these surfaces is a reverb chamber.

**Practical solutions**:
- Record in the room with the most soft furnishings. A furnished bedroom beats a bare office.
- Hang moving blankets or heavy curtains behind and beside you when recording.
- A walk-in closet with clothes is an excellent impromptu vocal booth — the clothes act as excellent broadband absorbers.
- Acoustic foam panels ($30–80 for a starter set) placed at reflection points (the walls nearest to you) are the cheapest permanent fix.

**The proximity effect**: Dynamic and cardioid condenser mics exhibit proximity effect — bass frequencies increase as you get closer to the source. This can add warmth to a voice or cause muddy low-end buildup. Most voice work benefits from keeping the mic 6–10 inches from the mouth and high-pass filtering below 80–100Hz in post.

---

### Location Sound Challenges

**Wind**: Wind across a mic diaphragm produces a low-frequency rumble that overwhelms everything else. Solutions in order of effectiveness:
1. A foam windscreen (included with most mics) reduces light wind
2. A "dead cat" (furry cover) reduces wind significantly — the $15 Rode WS accessory or equivalent
3. Shield the mic from wind with your body; work with the camera position

**HVAC and room tone**: Every room has a persistent background noise — HVAC, refrigerator hum, street sound. Record 20–30 seconds of room tone with no one speaking at the start of each location. This gives you a sample for noise reduction in post.

**Crowd and ambient noise**: In loud environments, move the mic closer to the source. A lav at 8 inches picks up far less crowd noise than a shotgun at 3 feet. For very loud environments, consider recording voice-over narration separately in a controlled environment and cutting it over ambient footage.

**Echo in large or bare spaces**: Recording outside your reflective home room doesn't solve the problem — outside you get wind. For on-location audio in difficult spaces, close-miking with a lav is the most reliable solution.

---

### Post-Production Audio

The basic mixing workflow (levels, ducking, EQ) is in [video-editing-basics.md](video-editing-basics.md). What follows covers additional techniques beyond the baseline.

**Noise reduction**: DaVinci Resolve's Fairlight audio tools include a noise gate, noise reduction, and spectral repair. The workflow: find a section of clean room tone (no voice), analyze it, apply the noise reduction profile to the entire clip. This removes consistent background noise (HVAC, electrical hum) without damaging the voice.

**De-essing**: A de-esser is a frequency-specific compressor that targets harsh sibilance — the "ssss" and "shhhh" sounds that can become piercing in certain recording environments. Most NLEs include a de-esser in their audio effects. Apply lightly — over-de-essing sounds like lisping.

**Compression for voice**: Audio compression (not video compression) reduces the dynamic range of a recording — making quiet parts louder and loud parts quieter, producing a more consistent level. A 3:1 to 4:1 ratio with 5–10ms attack and 50–100ms release is a safe starting point for voice. Go too heavy and the voice sounds squashed and lifeless.

**Reverb matching for voice-over**: If you record narration in a dry room and cut it over footage recorded in a room with acoustic character, the two tracks will feel disconnected. Add a small amount of reverb to the dry narration track to match the acoustic of the scene. Start with a "room" preset and mix at 10–15% wet.

---

## Common Mistakes

**Setting camera audio input to auto-gain.** Auto-gain constantly adjusts level — quiet moments get amplified (bringing up noise), then it pulls back on loud moments. The result is a pulsing background level and uneven dialogue. Set audio to manual and gain stage to your target level.

**Forgetting to check audio before a long take.** Ten minutes of footage with the mic unmuted from the lav but not plugged in, or wind on a shotgun with no dead cat, is ten minutes that has to be re-shot. Check levels in headphones for 10 seconds before every take.

**Relying on noise reduction to fix bad recording.** Noise reduction improves mediocre audio; it cannot salvage a recording overwhelmed by wind, echo, or distortion. Clean at source, process in post.

**Recording too far from the mic.** Every foot of distance between your voice and the mic increases room noise relative to signal. Get the mic closer.

---

## Resources

- *In The Mix* (YouTube) — practical audio tutorials focused on DaVinci Resolve Fairlight; the clearest free resource on post-production audio for video
- *Rode* blog and YouTube — the best brand-specific tutorials on their wireless systems; useful for setting up the Wireless GO II
- *Sound On Sound* magazine — long-form audio engineering articles; more depth than most YouTube channels

---

## Connections

- [vlogging-foundations.md](vlogging-foundations.md) — minimum viable audio setup: lav vs. shotgun, room treatment basics, wind protection
- [video-editing-basics.md](video-editing-basics.md) — audio mixing: levels, ducking music, EQ, noise reduction workflow in the NLE
- [video/talking-head-setup.md](talking-head-setup.md) — stationary desk setup: mic placement, USB vs. XLR for desk recording, acoustic treatment for a fixed position

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-06-28*
