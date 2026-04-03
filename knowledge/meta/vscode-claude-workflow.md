# VS Code + Claude Workflow

## Setup

### Install the Claude Extension
- Open VS Code → Extensions (Ctrl+Shift+X)
- Search "Claude" by Anthropic → Install
- Sign in with your Claude account

### Open This Repo
- File → Open Folder → `C:\Users\romvp\github\romi-01`
- Everything is accessible from the sidebar

## Daily Workflow

### Starting a Learning Session
1. Open the Claude panel in VS Code
2. Reference context: `@context/about-me.md`
3. Use the deep-dive prompt: `@prompts/deep-dive.md [topic]`
4. Get a complete wiki-style knowledge file with proposed sub-topics

### After a Session
1. The deep-dive prompt handles file creation and indexing
2. Review the proposed sub-topics — pick the next one to expand
3. Commit: open Source Control (Ctrl+Shift+G), write a message, commit

### Referencing Files in Claude
Use `@` to pull any file into the conversation:
- `@context/about-me.md` — always do this for context
- `@knowledge/philosophy/stoicism.md` — when discussing a topic you've already studied
- `@prompts/cross-pollinate.md philosophy/stoicism.md and philosophy/zen-buddhism.md` — cross-topic work

## VS Code Tips

- **Split editor**: Right-click a tab → Split Right. Useful for keeping a knowledge file open while talking to Claude.
- **Search across files**: Ctrl+Shift+F — find anything you've written across the whole repo.
- **Markdown preview**: Ctrl+Shift+V — see the rendered version of any file.
- **Quick open**: Ctrl+P — jump to any file by name.
- **Source control**: Ctrl+Shift+G — stage, commit, push without leaving VS Code.

## Useful Patterns

**Learning something new:**
```
@context/about-me.md @prompts/deep-dive.md self-sustained farming
```

**Expanding a sub-topic:**
```
@context/about-me.md @prompts/deep-dive.md hydroponics
```

**Finding connections:**
```
@prompts/cross-pollinate.md philosophy/stoicism.md and health/fitness-plan.md
```

**Writing a Roma tenet:**
```
@prompts/sacred-text-tenet.md tenet 1
```

**Auditing the repo:**
```
@prompts/sync-docs.md
```
