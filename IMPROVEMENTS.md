# romi-01 — Future Improvements

Functionality worth adding, roughly ordered by value. Top section is the high-priority stuff.

---

## High Priority

### Raw Source Ingestion (`prompts/ingest.md`)
A prompt for feeding in external material — articles, papers, book excerpts — and having the LLM compile it into the wiki rather than writing from its own knowledge. Fills the gap where the LLM doesn't know niche, recent, or personal-experience content.
- User pastes article or provides URL
- LLM extracts the useful knowledge, merges it into the relevant existing file or creates a new one
- Source cited in a `## Sources` section at the bottom
- Anything novel gets linked into existing files

### Q&A Prompt (`prompts/ask.md`)
A prompt for asking complex questions against the wiki rather than just adding to it. The LLM reads related files, synthesizes across them, and returns an answer — or writes a new file if the question reveals a gap.
- "What are all the connections between my energy files and my farming files?"
- "What would a 10-year financial plan look like given everything in finance/ and nj/?"
- "Where does my wiki conflict with itself?"

### Obsidian Integration (done)
Vault opened at repo root. Graph view shows the connection map across all 200+ files. Backlinks panel shows every file linking to a given topic.
- Turn off "Use [[Wikilinks]]" in settings to preserve markdown link format
- Pin CATALOG.md open for navigation

---

## Useful Additions

### Progress Review Prompt (`prompts/review.md`)
Scan all status checkboxes across the wiki. Return: what's been written but not studied (status still at initial), what's in progress, what's fully absorbed. Suggest the 3 files most worth focusing on next based on the knowledge map.

### Connection Discovery (`prompts/cross-pollinate.md` — enhance)
Currently cross-pollinate works on two specific files. Extend it to run across the whole wiki and surface non-obvious connections — especially cross-domain ones (e.g., Ottoman collapse → modern energy geopolitics → NJ solar incentives). These multi-hop connections are where the wiki's value compounds.

### Health Check / Lint (`prompts/lint.md`)
Extend beyond what `sync-docs.md` does:
- Find files with broken cross-links (referenced file doesn't exist)
- Find concepts explained in multiple files that should be collapsed
- Find `[ ]` CATALOG entries that have been implicitly covered in other files
- Surface orphaned files with no inbound links
- Flag files over the 1500-word limit that should be split

### Spaced Repetition Export (`prompts/flashcards.md`)
For any knowledge file, generate Anki-compatible flashcard markdown (front/back pairs for key concepts). The wiki is good for building understanding; flashcards are for retention. These two reinforce each other — write the file to understand, make cards to remember.

---

## Bigger Builds

### Search CLI
A simple local search tool (Python script or fzf wrapper) that searches across all wiki files by keyword or concept. More useful than grep because it understands the CATALOG structure. The LLM can use it as a tool during Q&A queries to avoid reading every file.
- Keyword search returning file + matching paragraph
- "Related to X" semantic search (even simple TF-IDF would help)
- Output piped directly to LLM for synthesis

### Visualization (`prompts/visualize.md`)
For any topic or domain, generate a Marp-format slide deck or a visual summary. Useful for:
- Teaching someone else a topic (forces clarity)
- Reviewing a domain before a decision (e.g., all NJ homebuying files → summary before buying a house)
- Exporting knowledge to share

### Inbound Clipping Workflow
Browser-based: clip an article → lands in a `raw/` inbox folder → a prompt processes the inbox, decides where each piece of content belongs, merges or creates files. Makes adding new information as fast as bookmarking. Obsidian Web Clipper handles the capture side.

### Wiki Export
Turn a cluster of related files into a single clean document — a "report" on a topic. Useful when you want to share knowledge from the wiki or produce something presentable. Prompt would accept a topic, gather all related files, and render a structured markdown doc with a coherent narrative.

---

## Long Term / Speculative

### Fine-Tuning on the Wiki
Once the wiki is large enough (~50K+ words of high-quality personal knowledge), fine-tune a small local model on the content so it "knows" your wiki in its weights rather than needing context windows. Practically: run on a local model via Ollama. The wiki becomes the training corpus, and queries run against a model that has internalized it rather than read it at inference time.

### Automated Gap Detection
Periodic LLM pass that reads CATALOG and the wiki's connection graph to identify: what topics are heavily referenced by other files but have no file themselves? What knowledge domains in Romi's actual life (NJ, homebuying, career, health) have no coverage? Produces a prioritized list of files worth writing next.

### Version-Aware Sync
Currently the wiki doesn't know what changed. A tool that reads `git log` and shows: what knowledge was added in the last month, what files have grown the most, what new connections appeared. Makes the compounding nature of the system visible over time.
