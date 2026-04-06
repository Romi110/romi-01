# AI Workstation: Local LLMs for Scripting and Automation
*A personal machine that runs AI models locally — build scripts, automate tasks, embed LLM steps in pipelines — with no cloud dependency, no subscription, no data leaving your desk.*

---

## What Is It

A local AI workstation is a computer with enough memory and compute to run large language models on your own hardware. You use those models the way you use Claude now — write scripts, answer questions, generate code — but it runs offline, responds instantly, and can be embedded in automated workflows.

Two platforms are viable in 2026, and they work differently:

**NVIDIA + Linux**: GPU-based. Model performance is bottlenecked by GPU VRAM. Fast raw throughput. More DIY. Best tokens-per-dollar.

**Apple Silicon + macOS**: Unified memory. No VRAM/RAM split — all system memory is available to models. Slower tokens-per-second than a top NVIDIA card, but you can run much larger models on the same dollar because you're not capped by a 24GB VRAM ceiling. Near-zero setup friction.

Both paths use Ollama as the model runtime and work with the same tools (Continue.dev, Open WebUI, Python scripts). The models are the same. The difference is hardware architecture and who does the setup work.

---

## Why It Matters

You're already using Claude heavily for scripting, file generation, and knowledge work. The gap: cloud models can't run in automated pipelines, require a connection, and aren't free for high-volume use. A local LLM stack lets you:

- Generate bash/Python scripts from natural language without sending your codebase to external servers
- Run AI-assisted pipelines entirely offline — batch file processing, log analysis, document generation
- Embed LLM steps in cron jobs: "every morning, summarize yesterday's git diff"
- Use AI inline in VS Code with no subscription (Continue.dev + local model)
- Build and test Ollama API integrations locally before hitting Claude's API

The break-even is real only if you write scripts frequently or want AI embedded in your environment. If you generate one-off scripts occasionally, a cloud subscription is still cheaper and smarter. This is for people who want the capability in the toolchain.

---

## Core Concepts

### The Memory Bottleneck

LLMs are large matrices of numbers. At runtime, the model loads into memory. The rule:

**On NVIDIA (Linux)**: Models must fit in **GPU VRAM**. If a model spills into system RAM, speed drops ~10x. VRAM is the hard ceiling.

**On Apple Silicon (macOS)**: There's no split. System RAM is unified — the GPU and CPU share the same pool. A Mac with 64GB RAM can load a 64GB model at full speed. This is the core architectural advantage of Apple Silicon for local LLMs.

| Memory | NVIDIA path | Apple Silicon path |
|---|---|---|
| 8GB VRAM / 16GB unified | 8B Q4 only | 8B Q8, some 13B |
| 16GB VRAM / 32GB unified | 13B Q8, 14B Q4 | 32B Q4 |
| 24GB VRAM / 48GB unified | 32B Q4, 70B partial | 70B Q4 fully |
| 48GB+ / 96GB+ unified | 70B Q8 fully | 70B Q8, some 120B |

### Quantization

Models are compressed from full-precision (fp16) to lower bit widths to reduce size with minimal quality loss.
- **Q4**: 4-bit, ~25% of original size, ~5-10% quality drop — fine for scripting and automation
- **Q8**: 8-bit, ~50% of original size, ~1-2% quality drop — noticeably better for complex reasoning

Most automation tasks are fine with Q4. Use Q8 when your hardware allows it.

### Ollama

Ollama is the standard local model runtime on both platforms. It pulls models, serves a local API at `http://localhost:11434`, and manages context. Think of it as Docker for LLMs.

```bash
# Install (Linux or macOS — same command)
curl -fsSL https://ollama.com/install.sh | sh

# Pull and run a model
ollama pull llama3.1:8b
ollama run llama3.1:8b

# API — OpenAI-compatible, works with any tool that speaks that protocol
curl http://localhost:11434/api/generate \
  -d '{"model":"llama3.1:8b","prompt":"Write a bash script that..."}'
```

### MLX (macOS only)

MLX is Apple's machine learning framework, optimized for Apple Silicon. For many models, running via MLX instead of Ollama's default Metal backend gives 20-40% faster inference on Apple Silicon. The `mlx-lm` Python package handles this.

```bash
pip install mlx-lm
python -m mlx_lm.generate --model mlx-community/Llama-3.1-8B-Instruct-4bit \
    --prompt "Write a Python script that..."
```

For interactive use, Ollama is simpler. For batch scripting where you want maximum speed, MLX is worth the extra setup on Mac.

### Model Selection

Same models run on both platforms. For scripting and automation:

| Model | Disk size | Best for |
|---|---|---|
| **Llama 3.1 8B** | 4.7GB | Fast scripting, cron-job chains, quick answers |
| **Qwen2.5-Coder 14B** | 9GB | Code generation and debugging — purpose-built for it |
| **DeepSeek-Coder-V2 16B** | 10GB | Strong code model, often beats larger general models on scripting |
| **Mistral Nemo 12B** | 7.5GB | Good balance of speed and quality |
| **Llama 3.3 70B Q4** | 40GB | Complex reasoning, architecture decisions — needs 48GB+ to fully load |

Start with Llama 3.1 8B + Qwen2.5-Coder 14B. That covers 90% of scripting use cases. Add 70B once you know your latency tolerance.

---

## Hardware: The Two Paths

### Path A — macOS: Apple Silicon

Apple Silicon unified memory makes macOS the simpler, higher-quality path if you don't want to manage Linux and NVIDIA drivers. You pay more per unit of compute, but less per unit of accessible model quality, because you're not capped at 24GB.

**Mac Studio M4 Max — 48GB unified memory — ~$2,000**
The sweet spot for this use case. Runs 32B models at full quality, 70B at Q4 with partial offload. 500-800 tokens/second on 8B models. Silent, compact, no driver setup. This is the machine to buy if you want to start immediately without touching Linux.

What the M4 Max config gets you:
- 14-core CPU, 32-core GPU, 16-core Neural Engine
- 48GB unified memory (models up to ~30GB run fully; 70B needs some CPU offload)
- 512GB SSD standard (upgrade to 1TB — models eat space)
- ~30W idle, ~120W peak — nearly silent under load
- Price: ~$2,000 (48GB, 512GB SSD) to ~$2,500 (48GB, 1TB SSD)

**Mac Studio M4 Ultra — 192GB unified memory — ~$5,000+**
The machine for running 70B models at Q8 with room to spare. Overkill for scripting use cases. Worth it if model quality is the primary constraint and budget isn't. Expect to pay $5,000+ for the base config.

**MacBook Pro M4 Max — 128GB unified memory — ~$3,500**
Portable AI workstation. 128GB lets you run 70B Q8 fully loaded. If you want this capability on a laptop that also goes to work, this is the path. It'll outperform most NVIDIA desktops on model quality while running on battery. The tradeoff: expensive, and you're using your daily laptop for inference loads.

**Mac Mini M4 — 16-32GB unified memory — ~$700-1,100**
Entry point. 16GB runs 8B Q8 or 14B Q4 well. 32GB handles 32B Q4. Good for testing the workflow before committing to a Mac Studio. Not the long-term machine unless your use is light.

### Path B — Linux: NVIDIA GPU

NVIDIA is faster per token on small-to-mid models than Apple Silicon (due to raw CUDA throughput). The ceiling is VRAM — you can't load more than 24GB into a consumer GPU without expensive multi-GPU setups. Below that ceiling, inference is fast.

**RTX 3090 — 24GB VRAM — ~$650-800 used**
The value-optimal NVIDIA card. Same VRAM as the 4090, older architecture. Runs 32B Q4 fully, 70B with partial CPU offload. Sells used on eBay and r/hardwareswap. Test VRAM integrity before the return window closes.

Full build around RTX 3090:
| Part | Spec | Cost |
|---|---|---|
| GPU | RTX 3090 (used) | $650-800 |
| CPU | AMD Ryzen 7 7700X | $150-200 |
| Motherboard | B650 (AM5) | $120-150 |
| RAM | 64GB DDR5 (2×32GB) | $90-130 |
| Storage | 2TB NVMe SSD | $100-140 |
| PSU | 850W 80+ Gold | $100-130 |
| Case | Mid-tower, good airflow | $60-100 |
| **Total** | | **~$1,270-1,650** |

The 3090 pulls ~350W under full load and runs hot. Case airflow matters. It's loud during inference. Plan for that.

**RTX 4090 — 24GB VRAM — ~$1,700 new**
Same VRAM as the 3090, significantly faster CUDA cores. ~2x the tokens/second on most models. If you're building new and want this machine to last 5+ years, 4090 is the card. Total build: ~$2,500-3,000.

**RTX 4080 Super — 16GB VRAM — ~$1,000 new**
16GB gets you 13-14B models at full quality and 32B with partial offload. Decent middle tier if 4090 is too expensive. Pre-builts with this card exist if you don't want to build (Dell XPS Tower, Corsair One).

**What about AMD (ROCm)?** ROCm support is improving but still has rough edges in 2026 — some tools require workarounds that CUDA doesn't. Not recommended unless you have a specific reason.

### The Comparison

| Machine | Effective memory | 70B model? | Tokens/sec (8B) | Setup friction | Price |
|---|---|---|---|---|---|
| Mac Mini M4 16GB | 16GB | No | ~200 t/s | Low | ~$700 |
| Mac Mini M4 32GB | 32GB | Partial | ~200 t/s | Low | ~$1,100 |
| RTX 3090 build | 24GB VRAM | Partial | ~80 t/s | Medium | ~$1,400 |
| Mac Studio M4 Max 48GB | 48GB | Q4 fully | ~400 t/s | Low | ~$2,000 |
| RTX 4090 build | 24GB VRAM | Partial | ~150 t/s | Medium | ~$2,700 |
| MacBook Pro M4 Max 128GB | 128GB | Q8 fully | ~350 t/s | Low | ~$3,500 |
| Mac Studio M4 Ultra 192GB | 192GB | Q8 fully | ~600 t/s | Low | ~$5,000+ |

**The practical decision:**

- Want to start fast with minimal friction and have the budget: **Mac Studio M4 Max 48GB** (~$2,000). Best overall package.
- Want maximum model quality per dollar and are comfortable with Linux: **RTX 3090 build** (~$1,400). Best value.
- Want a laptop that doubles as an AI workstation: **MacBook Pro M4 Max** 128GB. Expensive but genuinely portable.
- Want to test before buying: Rent on Vast.ai (~$0.20/hr for a 3090, ~$0.50/hr for a 4090). Confirm the workflow matters to you first.

---

## The Software Stack

The core tools are the same on both platforms. Platform differences are noted.

### Ollama (both platforms)

Install, pull models, run. No additional configuration needed for basic use.

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.1:8b
ollama pull qwen2.5-coder:14b
ollama run llama3.1:8b
```

### Open WebUI (both platforms)

Browser-based chat interface for Ollama. Runs in Docker.

```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  ghcr.io/open-webui/open-webui:main
```

On macOS without Docker: use **LM Studio** instead — a native macOS app that bundles a chat UI and model management. Easier than Open WebUI for Mac users. Download at lmstudio.ai.

### LM Studio (macOS preferred)

A native macOS app that handles model downloads, chat, and API serving without Docker. It also serves an OpenAI-compatible API at `localhost:1234`, so every script that works with Ollama works with LM Studio by swapping the port.

Good for: interactive chat, exploring models, simpler setup than Ollama + Open WebUI.
Limitation: less scriptable than Ollama for automation use.

### Continue.dev in VS Code (both platforms)

Install the Continue extension in VS Code. Set provider to Ollama, point at `localhost:11434`. Gives you:
- Inline code completion (like Copilot, local and free)
- Chat panel with current file as context (`⌘+L`)
- Codebase indexing for project-aware answers

Quality at 8B is noticeably below GPT-4-class. At 32B it's competitive for most scripting tasks.

### shell-gpt (both platforms)

Terminal tool for script generation from natural language.

```bash
pip install shell-gpt

# Generate a script
sgpt --model ollama/llama3.1:8b "write a bash script that watches ~/Downloads and moves PDFs to ~/Documents/pdfs"

# Get a shell command
sgpt --shell "list all files larger than 100MB in my home directory"

# Generate and execute directly
sgpt --execute "rename all .jpeg files in current folder to .jpg"
```

The workflow: describe what you want → review the output → run it. You stay in control; the model drafts.

### Automating with Ollama API in Python (both platforms)

This is the one function you'll use everywhere:

```python
import requests

def ask_model(prompt, model="llama3.1:8b"):
    r = requests.post("http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "stream": False})
    return r.json()["response"]

# In a cron job
diff_text = subprocess.check_output(["git", "diff", "HEAD~1"]).decode()
summary = ask_model(f"Summarize these changes in plain English:\n{diff_text}")

# In a file-processing pipeline
for file in pathlib.Path("~/Documents").glob("*.txt"):
    summary = ask_model(f"Summarize this document in 3 bullets:\n{file.read_text()}")
```

Same API, same function, works everywhere you have Ollama running.

### MLX (macOS only, optional)

For batch automation where latency matters, MLX can be 20-40% faster than Ollama on Apple Silicon:

```bash
pip install mlx-lm

python -m mlx_lm.generate \
    --model mlx-community/Llama-3.1-8B-Instruct-4bit \
    --prompt "Write a Python script that..."
```

The mlx-community HuggingFace org has pre-quantized versions of most popular models. Use this when you're running inference in a tight loop and need the throughput.

---

## Linux-Specific Setup

### Distro Choice

**Ubuntu 24.04 LTS** — recommended. Largest community, best CUDA driver support, most tutorials written against it.

**Pop!_OS** — Ubuntu-based, ships with NVIDIA drivers pre-installed. Good choice if you want less driver friction on a fresh install.

Avoid Arch (high maintenance), Fedora (CUDA can require workarounds), anything non-Debian-based for this use case.

### NVIDIA Driver Setup

```bash
# Ubuntu — let the system detect and install the right driver
sudo ubuntu-drivers autoinstall
sudo reboot

# Verify
nvidia-smi
```

After this, install Ollama with the standard curl command. It detects CUDA automatically.

### Open WebUI with GPU passthrough

```bash
docker run -d -p 3000:8080 --gpus all \
  --add-host=host.docker.internal:host-gateway \
  ghcr.io/open-webui/open-webui:main
```

The `--gpus all` flag passes NVIDIA GPU access into the container.

---

## Key Considerations

**Power draw (Linux/NVIDIA)**: RTX 3090 under full inference load pulls ~350W. For a workstation used actively but not 24/7, this adds ~$5-10/month to your bill. A Mac Studio M4 Max peaks at ~120W. If you're running this as a service others access, power efficiency matters more.

**Noise (Linux/NVIDIA)**: A 3090 or 4090 under inference load is loud. Some people put the machine in another room and SSH in. If your workspace is shared or you need quiet, Apple Silicon is near-silent.

**Model storage**: Models are large. Llama 3.1 8B = 4.7GB. A 70B Q4 = 40GB. If you experiment with many models, storage fills fast. Keep only what you actively use. On macOS, Ollama stores models in `~/.ollama/models`. On Linux, `/usr/share/ollama/.ollama/models`.

**Latency expectations**:
- RTX 4090 + 8B model: ~120-150 tokens/second (near real-time)
- RTX 3090 + 8B model: ~80-100 tokens/second (real-time)
- Mac Studio M4 Max + 8B model: ~400-500 tokens/second (very fast)
- Any machine + 70B Q4 model: 10-30 tokens/second (slower but usable interactively)
- For batch automation, latency barely matters — throughput is what counts.

**This won't replace Claude for complex reasoning**: Cloud models are still better at multi-step reasoning, large-context tasks, and unfamiliar codebases. Local models are best for: scripting, templating, summarization, file manipulation, routine code generation. Use both — local for automation pipelines, Claude for deep work.

---

## Getting Started

**Before buying hardware** — test on rented infrastructure:
1. Spin up a Vast.ai or RunPod instance with an RTX 3090 (~$0.20/hr)
2. Install Ollama, pull Llama 3.1 8B, run some prompts
3. Build one Python automation script against the local API
4. Confirm the workflow is worth the hardware investment

**After deciding on macOS:**
1. Buy Mac Studio M4 Max 48GB (or Mac Mini M4 32GB to start cheaper)
2. Install Ollama: `curl -fsSL https://ollama.com/install.sh | sh`
3. `ollama pull llama3.1:8b && ollama pull qwen2.5-coder:14b`
4. Install LM Studio for a proper chat UI
5. Add Continue.dev to VS Code
6. Write one Python script calling the Ollama API on something you already do manually

**After deciding on Linux/NVIDIA:**
1. Buy used RTX 3090 from eBay or r/hardwareswap ($650-800)
2. Assemble the build or drop it into an existing machine
3. Install Ubuntu 24.04, run `sudo ubuntu-drivers autoinstall`
4. Install Ollama, pull models
5. Docker + Open WebUI for chat interface
6. Continue.dev in VS Code
7. Write one Python script calling the Ollama API

The software setup on either platform takes 2-3 hours. The value shows up in the first few automation scripts.

---

## Common Mistakes

**Buying too little memory**: 8GB VRAM (Linux) or 16GB unified (Mac) limits you to small models. The ceiling is frustrating once you hit it. Buy more than you think you need — the models keep getting bigger.

**Skipping the rent-first step**: Cloud GPU rental is cheap. Confirm this workflow is actually valuable to you before spending $1,400-2,000 on hardware.

**Model hoarding**: Collecting every model you find fills drives and fragments your attention. Two or three models used deeply beats fifteen installed and forgotten.

**Not reviewing generated scripts**: Local LLMs produce plausible-looking scripts with subtle bugs. Read the output before running it, especially anything that touches the filesystem or runs system commands.

**Assuming it knows your codebase**: It doesn't. You have to paste the relevant context. Continue.dev pulls file context automatically, but you still guide what gets included.

**Running Q4 and blaming the model**: Q4 vs Q8 is a meaningful quality difference on code tasks. If output quality feels low, try Q8 before concluding the model is bad.

**On macOS — using only LM Studio**: LM Studio is great for interactive use but harder to script against than Ollama. For automation, install Ollama alongside LM Studio and script against the Ollama API.

---

## Resources

- **r/LocalLLaMA** — best ongoing source for model benchmarks, hardware comparisons, and which models are actually worth running right now. Fast-moving space; this is where to check before buying.
- **Ollama docs** (ollama.com/docs) — complete reference for model management, API, and configuration
- **LM Studio** (lmstudio.ai) — macOS/Windows native app; good for exploring models before committing to the full Ollama stack
- **Tim Dettmers' GPU guide** (timdettmers.com) — deep explanation of NVIDIA GPU specs for ML workloads; the technical reference if you want to understand the numbers behind CUDA throughput and VRAM bandwidth

---

## Connections

- [homelab-overview.md](homelab-overview.md) — broader homelab context; this is one component of a personal infrastructure stack
- [quality-life-upgrades.md](../consumerism/quality-life-upgrades.md) — digital infrastructure upgrades; a local AI workstation is the highest-leverage tool investment on that list
- [networking-fundamentals.md](networking-fundamentals.md) — relevant if you want to access this machine remotely over your home network or expose the Ollama API to other devices

---

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-05*
