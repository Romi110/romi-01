# Hindi Translation Style Guide
*Decisions made once here so they don't get re-derived on every translation call*

---

## Register

Use **formal register** throughout — `आप` (not `तुम` or `तू`), formal verb conjugations. This wiki is a reference, not a conversation. Same tone as a well-written non-fiction book in Hindi.

## Script and Numerals

- Use **Devanagari script** for all Hindi text
- Use **Arabic numerals** (`1, 2, 3`) not Devanagari numerals (`१, २, ३`) — they appear throughout the English source in dates, percentages, and data; keeping Arabic numerals avoids confusion and maintains scannability
- Currency symbols stay as-is: `$35/oz`, `$13 बिलियन`, `~$36T`

## English Terms: Keep or Transliterate

**Keep in Latin script** (do not transliterate to Devanagari):
- Proper names of people: Ray Dalio, Genghis Khan, Churchill, Nixon, Gandhi
- Proper names of organizations: BRICS, OPEC, NATO, VOC, SWIFT, IMF
- Proper names of places used as institutions: Bretton Woods, Amsterdam, London
- Book and film titles: *The Changing World Order*, *Currency Wars*
- Technical acronyms and tickers: GDP, AI, VLAN, DNS, TCP, SREC, SuSI, ITC, kWh
- Brand names: Tesla, Enphase, UniFi, pfSense

**Transliterate to Devanagari** when the term has become naturalized in Indian Hindi usage:
- Internet → इंटरनेट
- Computer → कंप्यूटर
- Mobile → मोबाइल
- Solar → सोलर (acceptable alongside सौर)
- Battery → बैटरी

**Use the Hindi term** when a clean, widely understood one exists:
- Government → सरकार (not गवर्नमेंट)
- History → इतिहास (not हिस्ट्री)
- Economy → अर्थव्यवस्था
- War → युद्ध
- Empire → साम्राज्य

When uncertain, prefer the Hindi term over transliteration. See `context/hindi-glossary.md` for domain-specific decisions.

## Domain-Specific Terminology

All recurring technical terms are resolved in `context/hindi-glossary.md`. Always use those translations — do not re-derive them. If a term isn't in the glossary and you coin a translation, note it in the translation file's footer so the glossary can be updated.

## Structural Elements

**Section headers**: translate fully into Hindi  
**Bold text** (`**term**`): preserve bold, translate the term per the glossary  
**Status checkboxes**: translate the text
- `- [x] Initial file written` → `- [x] प्रारंभिक फ़ाइल लिखी गई`
- `- [ ] Could explain this to someone else` → `- [ ] किसी और को समझा सकते हैं`
- `- [ ] Actively practicing or applying` → `- [ ] सक्रिय रूप से अभ्यास या लागू कर रहे हैं`
- `- [ ] Connected to other knowledge files` → `- [ ] अन्य ज्ञान फ़ाइलों से जुड़ा`

**"Last updated" line**: translate as `*अंतिम अपडेट: [date]*`

**Links**: keep file paths unchanged; translate display text
- `[japan-history.md](japan-history.md)` → `[जापान का इतिहास](japan-history.md)`

**Tables**: translate all header and cell text; keep column structure identical

**Code blocks and CLI commands**: do not translate

## Sentence Structure

Hindi naturally uses SOV (Subject-Object-Verb) order. Do not force English SVO structure onto Hindi sentences — write as a native Hindi speaker would construct the sentence, not a literal word-for-word translation.

**Wrong (literal):** "यह एक मुद्रा है जो विदेशी सरकारें रखती हैं बड़ी मात्रा में"  
**Right (natural):** "यह वह मुद्रा है जिसे विदेशी सरकारें बड़ी मात्रा में अपने पास रखती हैं"

## Punctuation

- Use the **danda** (`।`) as a sentence-ending full stop where it fits naturally, but **English period** (`.`) is acceptable and often cleaner in technical/reference writing — be consistent within a file
- **Comma** (`,`) stays as comma — no need to use visarga or other alternatives
- **Colon** (`:`), **dash** (`—`), **parentheses** — keep as-is

## What Not to Translate

- File paths: `knowledge/history/japan-history.md`
- URLs
- Git commands or code
- Markdown syntax characters: `#`, `*`, `-`, `[]`, `()`
- The word "CATALOG" when referring to the wiki's catalog file
