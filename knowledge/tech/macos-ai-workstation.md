# macOS AI Workstation
*Apple Silicon Macs as local LLM machines — unified memory architecture, near-zero setup, silent operation, and model quality that scales with how much you spend on RAM.*

---

## What Is It

A macOS AI workstation is an Apple Silicon Mac configured to run large language models locally using tools like Ollama, LM Studio, and MLX. You use those models to write scripts, automate tasks, generate code, and process files — all offline, all on your hardware.

Apple Silicon is unusually well-suited for this because of **unified memory**: the CPU, GPU, and Neural Engine all share the same physical memory pool. There's no separate VRAM. A Mac with 96GB of memory makes all 96GB available to a model at full GPU speed. On NVIDIA hardware, a 24GB VRAM card hits its ceiling at a 32B Q4 model. On a Mac with 96GB, you can run a 70B model at Q8 — noticeably higher quality — without any CPU offload.

The tradeoffs: macOS costs more per gigabyte of memory than a Linux build. Tokens per second on small models (8B) is slower than a high-end NVIDIA GPU. And it's macOS, not Linux — which matters if you have a strong preference.

This guide covers hardware selection, software setup, and practical automation workflows on macOS. For comparison with the Linux/NVIDIA path, see [linux-ai-workstation.md](linux-ai-workstation.md).

---

## Why It Matters

Same reasons as any local LLM setup: automation pipelines that can't use cloud models, no subscription cost at high usage volume, no data leaving your machine. What makes the Mac path specifically worth considering:

- **No driver setup**: Ollama on macOS installs and runs. No CUDA, no `ubuntu-drivers`, no kernel module headaches.
- **Silence**: Apple Silicon under inference load is nearly silent. A 3090 under load is audibly loud.
- **Unified memory scales cleanly**: Your memory budget directly translates to model size. 48GB = 32B Q8 or 70B Q4. 128GB = 70B Q8, full speed.
- **It can be your primary machine**: A MacBook Pro M4 Max is a full development machine that also runs 70B models on battery. A Linux workstation with a 3090 isn't going to work meetings.

---

## Core Concepts

### Unified Memory Architecture

On NVIDIA hardware, there are two separate pools: system RAM (fast but CPU-only for LLMs) and VRAM (what the GPU uses). Models must fit in VRAM to run at GPU speed. Spill into system RAM and you lose ~10x throughput.

On Apple Silicon, there's one pool. The GPU, CPU, and Neural Engine all access the same physical chips. A model that fills 40GB of a 48GB Mac runs on the GPU — all of it. No spill penalty, no distinction between "VRAM" and "RAM."

This is why Apple Silicon outperforms its GPU specs on LLM benchmarks — you're comparing raw VRAM against total unified memory, and there's no contest above 24GB.

### The Neural Engine

Apple Silicon chips include a Neural Engine — a matrix multiplication unit optimized for ML inference. It handles certain model operations faster than the GPU with far less power. Ollama uses the GPU by default. MLX (Apple's ML framework) makes better use of the Neural Engine for some workloads. The practical difference: MLX is often 20-40% faster than Ollama on Apple Silicon for the same model.

### Metal vs CUDA

CUDA is NVIDIA's GPU computing platform — the standard for AI/ML training and inference. Most tools are written against it first.

Metal is Apple's GPU computing framework. Ollama uses Metal on macOS. Support has improved significantly — most models run well. Some training workflows still don't support Metal. For inference (running models, not training them), Metal is solid.

### Quantization

Models are compressed from full precision (fp16) to lower bit widths to reduce memory footprint:
- **Q4**: ~25% of original size, ~5-10% quality drop — fine for scripting and automation
- **Q8**: ~50% of original size, ~1-2% quality drop — noticeably better, especially on code tasks

Use Q4 if memory is tight. Use Q8 when you have headroom — the quality difference on coding tasks is real.

### Model Size Reality

| Model | Q4 size | Q8 size | Notes |
|---|---|---|---|
| Llama 3.1 8B | 4.7GB | 8.5GB | Fast, fits anywhere |
| Qwen2.5-Coder 14B | 9GB | 16GB | Best code model under 20GB |
| Mistral Nemo 12B | 7.5GB | 13GB | Good balance |
| Llama 3.3 70B | 40GB | 74GB | Needs 48GB+ for Q4, 96GB+ for Q8 |
| DeepSeek-R1 32B | 19GB | 34GB | Strong reasoning, fits in 48GB at Q8 |

---

## Hardware: Which Mac

The memory tier you buy determines what models you can run. Choose memory based on the largest model you want to run comfortably — not just today, but in 18 months when model quality at each size tier keeps improving.

### Mac Mini M4 — 16GB or 32GB — $599–$1,499

The entry point. 16GB runs 8B models at Q8 and 14B at Q4. 32GB runs 32B at Q4 or 14B at Q8. 

The 16GB model is genuinely useful for automation scripting — Llama 3.1 8B Q8 is solid for most tasks. But 16GB will feel limiting once you've used a 32B model. The 32GB Mac Mini M4 Pro (~$1,499) is a better long-term buy if budget allows.

Good for: testing the workflow before buying a Mac Studio, or as a dedicated inference machine separate from your main computer.

Not good for: anyone who wants to run 70B models or use the machine as a primary workstation.

### Mac Studio M4 Max — 36GB, 64GB, or 128GB — $1,999–$3,999

The right machine for this use case. Silent, compact, built to run at full sustained load without thermal throttling.

**36GB**: Runs 32B at Q4, 14B at Q8. Good entry to the Mac Studio tier.

**64GB**: Runs 32B at Q8 or 70B at Q4. The quality jump when you move from 32B to 70B is significant — this is where it becomes competitive with GPT-4-class outputs on code tasks.

**128GB**: Runs 70B at Q8 fully loaded, with room for multiple models in memory simultaneously. Overkill for most uses but future-proof.

The M4 Max chip has 40 GPU cores and very high memory bandwidth — this matters more than core count for LLM inference. Tokens per second on this chip is faster than the M4 Pro at the same model size, not just because of the GPU cores but because of bandwidth.

**Recommendation**: Mac Studio M4 Max 64GB (~$2,399) is the target. It runs 70B at Q4 (transformatively better than 32B) and 32B at Q8 with excellent speed.

### MacBook Pro M4 Max — up to 128GB — $2,499–$3,999

Same chip as Mac Studio, laptop form factor. Runs the same models at comparable speed. The difference: it gets hot under sustained inference load, and fans run audibly. For interactive use it's fine. For long batch jobs, a Mac Studio will sustain performance more gracefully.

The actual use case for this machine: your daily development laptop that also runs local models. If you travel, go to an office, or use a laptop as your primary machine, the MacBook Pro M4 Max 128GB is a legitimate choice — you get a full workstation in a portable package. It's expensive, but you're not buying two machines.

Not recommended if: you already have a laptop you're happy with and want a dedicated inference machine. A Mac Studio is more cost-efficient for that.

### Mac Studio M4 Ultra — 192GB or 256GB — $4,999+

Runs 70B at Q8, 120B at Q4. The best consumer machine for local LLMs by a significant margin. At $4,999+, it's a substantial investment. Justified if you're running models as a service for multiple users or if you genuinely need the best available quality on every task. For personal scripting and automation: overkill.

### The Comparison

| Machine | Memory | Best model (comfortable) | Tokens/sec (8B) | Price |
|---|---|---|---|---|
| Mac Mini M4 | 16GB | 8B Q8 | ~200 t/s | ~$699 |
| Mac Mini M4 Pro | 32GB | 32B Q4 | ~300 t/s | ~$1,499 |
| Mac Studio M4 Max | 64GB | 70B Q4 or 32B Q8 | ~500 t/s | ~$2,399 |
| MacBook Pro M4 Max | 128GB | 70B Q8 | ~450 t/s | ~$3,499 |
| Mac Studio M4 Ultra | 192GB | 70B Q8 + more | ~800 t/s | ~$4,999+ |

**The practical call**: Mac Studio M4 Max 64GB is the right machine for most people serious about this. Mac Mini M4 Pro 32GB if you want to start smaller and the price matters. MacBook Pro M4 Max if you need it to be portable.

---

## Software Stack

### Homebrew (install first)

Package manager for macOS — the foundation for the rest of the setup.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the post-install steps to add Homebrew to your PATH (it will tell you). Then close and reopen your terminal.

### Ollama

The core model runtime. Installs as a native macOS app, runs as a background service.

```bash
# Via Homebrew (recommended — easier to update)
brew install ollama

# Start the service
brew services start ollama

# Or download the macOS app from ollama.com — installs to /Applications, 
# runs in the menu bar. Equivalent, just different update path.
```

Verify it's running:
```bash
ollama list          # shows installed models
curl http://localhost:11434/api/tags  # should return JSON
```

Pull models:
```bash
ollama pull llama3.1:8b
ollama pull qwen2.5-coder:14b
ollama pull llama3.3:70b-instruct-q4_K_M  # 40GB — only on 64GB+ machine
```

Ollama stores models in `~/.ollama/models`. With large models this fills fast — keep a 2TB drive or dedicate external storage if you're on a smaller internal SSD.

### macOS-Specific Ollama Tuning

By default, Ollama limits itself to using ~80% of unified memory for models. You can adjust:

```bash
# In ~/.zshrc or ~/.bashrc
export OLLAMA_MAX_LOADED_MODELS=2     # keep 2 models in memory simultaneously
export OLLAMA_NUM_PARALLEL=2          # handle 2 requests in parallel
export OLLAMA_FLASH_ATTENTION=1       # enable flash attention — faster on Apple Silicon
```

Restart the Ollama service after changing these:
```bash
brew services restart ollama
```

### LM Studio

The best macOS-native GUI for local models. Handles model downloading, chat, and serves an OpenAI-compatible API at `localhost:1234`. Much easier to use than Open WebUI for interactive sessions.

Download at lmstudio.ai — install as a standard macOS app. On first launch, it will ask to install the CLI (`lms`).

Key features:
- Search and download models from HuggingFace directly in the UI
- Shows real-time memory usage, GPU utilization, tokens/second
- Built-in GPU acceleration — automatically uses Metal
- Serves an API you can point tools and scripts at

LM Studio and Ollama can run simultaneously. Use LM Studio for interactive chat and model exploration. Use Ollama for scripting and automation (its API is simpler to work with in code).

### MLX — Faster Inference on Apple Silicon

Apple's ML framework, optimized specifically for Apple Silicon. For many models, MLX inference is 20-40% faster than Ollama's Metal backend. Worth setting up if you're running batch automation where throughput matters.

```bash
pip install mlx-lm

# Run a model
python -m mlx_lm.generate \
    --model mlx-community/Llama-3.1-8B-Instruct-4bit \
    --prompt "Write a bash script that..."

# Interactive chat
python -m mlx_lm.chat --model mlx-community/Qwen2.5-Coder-14B-Instruct-4bit
```

The `mlx-community` HuggingFace organization has pre-quantized versions of most popular models — you don't need to quantize yourself. Models download to `~/.cache/huggingface/hub/`.

For scripting against MLX programmatically:
```python
from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")
response = generate(model, tokenizer, prompt="Write a Python script that...", max_tokens=500)
print(response)
```

The tradeoff: MLX requires loading models into your Python process (a few seconds startup), whereas Ollama keeps models warm in a persistent service. For automation scripts that run once, MLX startup cost matters. For long-running jobs or interactive loops, it's negligible.

**When to use MLX vs Ollama**:
- Interactive chat, Continue.dev, shell-gpt: use Ollama (always running, instant response)
- Batch processing scripts (process 100 files, run overnight): use MLX (faster throughput)
- One-off command from terminal: Ollama is simpler

### Open WebUI (optional Docker alternative to LM Studio)

If you prefer a browser-based chat UI over LM Studio's native app, Open WebUI is the alternative. Requires Docker Desktop.

```bash
brew install --cask docker   # install Docker Desktop

docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  ghcr.io/open-webui/open-webui:main
```

Open `localhost:3000` in your browser. Connects to your running Ollama instance.

LM Studio is simpler and more Mac-native. Open WebUI has more features (multi-user, plugins, document RAG). For a single-user personal machine, LM Studio is the better default.

### Continue.dev in VS Code

AI code assist in VS Code, pointed at your local Ollama models. Free, no subscription.

1. Install the Continue extension in VS Code
2. Open Continue settings → set provider to Ollama → `http://localhost:11434`
3. Set your chat model (Qwen2.5-Coder 14B) and autocomplete model (Llama 3.1 8B — faster)

Usage:
- `⌘+L` — open chat panel with current file as context
- `⌥+⌘+J` — inline edit: select code, describe what to change
- Tab — accept autocomplete suggestions

Quality with a 14B code model is noticeably below GPT-4-class but covers the majority of scripting and refactoring tasks. Use Claude for hard problems; use the local model for routine generation.

### shell-gpt — Script Generation from Terminal

```bash
pip install shell-gpt

# Configure to use Ollama
# In ~/.config/shell_gpt/.sgptrc:
# OPENAI_API_HOST=http://localhost:11434
# OPENAI_API_KEY=ollama
# DEFAULT_MODEL=ollama/llama3.1:8b

# Generate a script
sgpt "write a bash script that watches ~/Downloads and moves PDFs to ~/Documents/pdfs, skipping duplicates"

# Get a shell command (shows it, asks before running)
sgpt --shell "find all files over 500MB in my home directory"

# Execute directly
sgpt --execute "rename all .jpeg files in current directory to .jpg"
```

The workflow: describe in English → review output → run. Keep the review step — local models produce plausible-looking scripts that occasionally have subtle bugs.

---

## Automation on macOS

### Python + Ollama API — The Foundation

One function covers everything:

```python
import requests

def ask(prompt, model="llama3.1:8b", system=None):
    messages = []
    if system:
        messages.append({"role": "system", "content": system})
    messages.append({"role": "user", "content": prompt})
    
    r = requests.post("http://localhost:11434/api/chat",
        json={"model": model, "messages": messages, "stream": False})
    return r.json()["message"]["content"]

# Examples
summary = ask(f"Summarize this git diff in plain English:\n{diff_text}")
script = ask("Write a Python script that monitors disk usage and sends a desktop notification when any volume is above 90%")
review = ask(f"Review this bash script for bugs:\n{script_text}", 
             system="You are a senior DevOps engineer. Be direct. List problems only.")
```

### launchd — macOS's cron Replacement

macOS uses launchd instead of cron for scheduled tasks. You write a `.plist` file and load it with `launchctl`. It's more verbose than cron but more reliable — it handles machine sleep/wake and missed jobs better.

**Example: run a Python script every morning at 7am**

Create `~/Library/LaunchAgents/com.romi.morning-summary.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" 
    "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.romi.morning-summary</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>/Users/romi/scripts/morning-summary.py</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>7</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>/tmp/morning-summary.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/morning-summary-error.log</string>
</dict>
</plist>
```

Load it:
```bash
launchctl load ~/Library/LaunchAgents/com.romi.morning-summary.plist
launchctl list | grep romi   # verify it's loaded
```

Cron still works on macOS if you prefer the syntax — `crontab -e` — but launchd handles sleep/wake more reliably. For anything time-sensitive, use launchd.

### macOS Shortcuts + Ollama

Apple Shortcuts can call shell scripts, which can call Ollama. This lets you trigger LLM tasks from a keyboard shortcut, menu bar, or Siri.

In Shortcuts: New Shortcut → Add Action → "Run Shell Script" → set to `/bin/zsh` → write:

```bash
input=$(pbpaste)  # grab clipboard content
result=$(curl -s http://localhost:11434/api/generate \
    -d "{\"model\":\"llama3.1:8b\",\"prompt\":\"Summarize this in 3 bullets:\\n$input\",\"stream\":false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])")
echo "$result" | pbcopy  # put result on clipboard
osascript -e "display notification \"Summary copied to clipboard\" with title \"Ollama\""
```

Assign a keyboard shortcut to it. Now: select text anywhere, hit your shortcut, get a summary on your clipboard. No cloud, no API call, no subscription.

### macOS Notification from Scripts

```python
import subprocess

def notify(title, message):
    subprocess.run([
        "osascript", "-e",
        f'display notification "{message}" with title "{title}"'
    ])

notify("Script complete", "Processed 47 files")
```

---

## macOS-Specific Considerations

**Gatekeeper**: Apps and scripts downloaded from the internet may be blocked by Gatekeeper. For CLIs installed via Homebrew, this isn't an issue. For downloaded binaries, right-click → Open, or: `xattr -d com.apple.quarantine /path/to/app`.

**Spotlight indexing model files**: Spotlight will try to index your `~/.ollama/models` directory, which contains large binary files. Exclude it: System Settings → Siri & Spotlight → Spotlight Privacy → add `~/.ollama`. Same for `~/.cache/huggingface`. This prevents disk thrashing and Spotlight slowdowns.

**Time Machine**: Exclude model directories from Time Machine backups. They're large, change constantly, and can be re-downloaded. System Settings → General → Time Machine → Options → add `~/.ollama` and `~/.cache/huggingface` to the exclusions list.

**Thermal throttling**: Mac Studio runs inference without throttling — it's designed for sustained compute loads. MacBook Pro will throttle somewhat under extended heavy load, especially plugged in without active cooling. For overnight batch jobs, Mac Studio is more reliable.

**Memory pressure**: macOS will compress and swap memory under pressure. If you have other heavy apps open (browsers with many tabs, Xcode), they compete with model memory. Close what you don't need before running a large model. The Activity Monitor "Memory Pressure" graph shows this clearly.

**Python environment**: Use `pyenv` or `uv` to manage Python versions and avoid polluting the system Python. Homebrew installs its own Python, and macOS ships its own, and they can conflict.

```bash
brew install uv   # fast Python package manager
uv python install 3.12
uv venv ~/.venv/ai
source ~/.venv/ai/bin/activate
uv pip install mlx-lm shell-gpt requests
```

---

## Getting Started

**If you have a Mac already (any M-series with 16GB+):**

1. `brew install ollama`
2. `brew services start ollama`
3. `ollama pull llama3.1:8b`
4. `ollama run llama3.1:8b` — have a conversation, generate a script
5. Download LM Studio from lmstudio.ai — pull a model in the UI, try the chat interface
6. Install Continue.dev in VS Code — point at Ollama, use it for a week
7. Write one Python script using the `ask()` function above to automate something real

Do this before buying new hardware. Confirm the workflow matters to you first.

**If you're buying new hardware:**

Start with the Mac Studio M4 Max 64GB (~$2,399). Don't cheap out on memory — the jump from 32B to 70B quality is the most important threshold, and you need 64GB unified to clear it comfortably. Upgrade to 2TB internal SSD; models are large and you'll accumulate them.

**After the machine arrives:**

1. First boot setup — skip migration assistant unless you want your old machine's state
2. Install Homebrew
3. `brew install ollama git python uv`
4. `brew install --cask visual-studio-code lm-studio`
5. `brew services start ollama`
6. Pull your core models: `ollama pull llama3.1:8b && ollama pull qwen2.5-coder:14b`
7. Open LM Studio, download `llama-3.3-70b-instruct` (40GB — your first 70B model)
8. Compare outputs from 8B vs 70B on a real task — feel the quality difference
9. Set up Spotlight and Time Machine exclusions
10. Install Continue.dev, connect to Ollama
11. Build one automation script

---

## Common Mistakes

**Buying 16GB and being surprised by the ceiling**: 16GB is genuinely useful, but you'll hit it fast once you know what 32B or 70B output looks like. If you're buying new hardware for this purpose, start at 32GB minimum. 64GB if you're serious.

**Using only LM Studio for scripting**: LM Studio's API works, but its model management is UI-driven. For automation, Ollama is simpler — always running, scriptable, easily integrated into Python. Run both.

**Leaving ~/.ollama unexcluded from Spotlight and Time Machine**: You'll notice I/O spikes, slow backup windows, and Spotlight slowdowns. Set these exclusions before you fill the directory with models.

**Not setting OLLAMA_FLASH_ATTENTION=1**: This is an environment variable that enables flash attention on Apple Silicon. It's not on by default. Set it. Measurable speed improvement.

**Running Q4 and blaming the model**: Q4 vs Q8 quality difference is real, especially on code tasks. If you have the memory, pull the Q8 version of whatever model you're using and compare. The quality jump can be substantial.

**Comparing tokens/second to NVIDIA and feeling slow**: Apple Silicon is often slower tokens/second on small models (8B) than a high-end NVIDIA GPU. The relevant comparison is model quality per dollar of hardware, where Apple Silicon wins significantly above 24GB because VRAM isn't the bottleneck. A 3090 can't run 70B at all. A Mac Studio M4 Max 64GB runs it comfortably.

---

## Resources

- **r/LocalLLaMA** — active community with ongoing hardware benchmarks, model comparisons, and Apple Silicon-specific threads. Check before buying any hardware — the landscape changes fast.
- **MLX documentation** (ml-explore.github.io/mlx) — Apple's framework docs; useful once you're past basic Ollama use and want to optimize inference
- **mlx-community on HuggingFace** (huggingface.co/mlx-community) — pre-quantized models for MLX; browse to find Q4/Q8 versions of any model you want to run
- **LM Studio docs** (lmstudio.ai/docs) — covers model management, API usage, and the `lms` CLI

---

## Connections

- [linux-ai-workstation.md](linux-ai-workstation.md) — the parallel guide covering Linux/NVIDIA path and a hardware comparison between both platforms
- [homelab-overview.md](homelab-overview.md) — broader homelab context: if you run a Mac as your AI workstation alongside a Proxmox/NAS setup, these integrate
- [quality-life-upgrades.md](../consumerism/quality-life-upgrades.md) — digital infrastructure; a local AI workstation is the highest-leverage tool on that list

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-05*
