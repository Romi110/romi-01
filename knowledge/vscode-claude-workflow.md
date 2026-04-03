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
3. Use a prompt: `@prompts/teach-me.md teach me about [topic]`
4. Or map a new topic first: `@prompts/topic-map.md [topic]`

### After a Session
1. Use `@prompts/build-knowledge-file.md` — Claude writes the knowledge file, concrete and complete
2. Update `knowledge/INDEX.md` with the new file
3. Check off the topic in `context/learning-topics.md` if it was on the list
4. Commit: open Source Control (Ctrl+Shift+G), write a message, commit

### Referencing Files in Claude
Use `@` to pull any file into the conversation:
- `@context/about-me.md` — always do this for context
- `@knowledge/stoicism.md` — when discussing a topic you've already studied
- `@prompts/cross-pollinate.md stoicism.md and zen-buddhism.md` — cross-topic work

## VS Code Tips

- **Split editor**: Right-click a tab → Split Right. Useful for keeping a knowledge file open while talking to Claude.
- **Search across files**: Ctrl+Shift+F — find anything you've written across the whole repo.
- **Markdown preview**: Ctrl+Shift+V — see the rendered version of any file.
- **Quick open**: Ctrl+P — jump to any file by name.
- **Source control**: Ctrl+Shift+G — stage, commit, push without leaving VS Code.

## Useful Patterns

**Learning something new:**
```
@context/about-me.md @prompts/topic-map.md food preservation and canning
```

**Going deep on a topic:**
```
@context/about-me.md @prompts/teach-me.md teach me stage 1 of food preservation
```

**Writing a knowledge file after a session:**
```
@prompts/build-knowledge-file.md
```

**Finding connections:**
```
@prompts/cross-pollinate.md stoicism.md and fitness-plan.md
```

**Writing a Roma tenet:**
```
@prompts/sacred-text-tenet.md tenet 1
```

**Auditing the repo:**
```
@prompts/sync-docs.md
```
