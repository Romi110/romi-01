# Building with the Claude API
*Using the Anthropic API to build applications: tool use, multi-turn conversations, and agent patterns.*

---

## What Is It

The Claude API is the direct programmatic interface to Claude — no UI, no CLI, just HTTP requests and JSON. You send a message, you get a response. From that foundation you can build chatbots, document processors, automated pipelines, coding assistants, and agents that take actions in the world.

The API has one core primitive: the **messages endpoint**. Everything else — multi-turn conversations, tool use, streaming, agents — is built on top of that. If you understand the messages endpoint well, everything else is a pattern on top of it.

## Why It Matters

You're already using Claude daily. The API is how you go from *user* to *builder*. The same model you use in Claude Code can be put into a tool you build — one that follows your own logic, integrates with your own data, and automates tasks specific to your workflow.

For a tech professional, knowing how to call an LLM from code is quickly becoming table stakes — the same way knowing how to call a REST API was 10 years ago. The patterns are worth understanding now, before they become assumed knowledge.

## Core Concepts

### The Messages Endpoint

The core call. You send a list of messages and a model identifier; you get back a completion.

```python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "What is the dichotomy of control?"}
    ]
)

print(response.content[0].text)
```

Every more complex pattern is built on this. Multi-turn is just appending to the `messages` list. Tool use is adding a `tools` parameter. Agents are loops that call this endpoint repeatedly.

### System Prompts

The system prompt is the persistent context that frames every message. It's where you put role, tone, constraints, and behavioral instructions — the things that should apply to every turn, not just one.

```python
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a Stoic philosophy tutor. Be direct, concrete, and avoid modern self-help language.",
    messages=[
        {"role": "user", "content": "Explain amor fati."}
    ]
)
```

CLAUDE.md in this repo functions as a persistent system prompt. The same design principles apply: tight, specific, imperative.

### Multi-Turn Conversations

There is no built-in memory. You maintain the conversation by passing the full message history on every call.

```python
messages = []

# Turn 1
messages.append({"role": "user", "content": "What is Stoicism?"})
response = client.messages.create(model="claude-sonnet-4-6", max_tokens=1024, messages=messages)
messages.append({"role": "assistant", "content": response.content[0].text})

# Turn 2
messages.append({"role": "user", "content": "How does it differ from Zen?"})
response = client.messages.create(model="claude-sonnet-4-6", max_tokens=1024, messages=messages)
```

The context window is the limit. When the conversation gets long enough to exceed it, you need to summarize or truncate earlier turns. This is why real chatbot applications have explicit conversation management logic.

### Tool Use

Tool use lets Claude call functions you define. The model decides *when* to call a tool and *what arguments* to pass. Your code executes the tool and returns the result. Claude then uses that result to continue.

Three-step pattern:
1. Define tools in the API call (name, description, input schema)
2. Claude returns a `tool_use` block instead of text when it wants to call one
3. You run the tool locally and send back a `tool_result`

```python
tools = [{
    "name": "get_weather",
    "description": "Get current weather for a city",
    "input_schema": {
        "type": "object",
        "properties": {
            "city": {"type": "string", "description": "City name"}
        },
        "required": ["city"]
    }
}]

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "What's the weather in New York?"}]
)

# If response.stop_reason == "tool_use", Claude wants to call the tool
# You extract the tool name and inputs, run the function, and send back the result
```

Tool use is what separates a chatbot from an agent. With tools, Claude can search the web, query a database, write a file, call an external API — anything you implement.

### Agent Patterns

An agent is a loop: call Claude → get a response or tool call → execute → repeat until done.

The simplest form:

```python
while True:
    response = client.messages.create(...)
    
    if response.stop_reason == "end_turn":
        break  # Claude is done
    elif response.stop_reason == "tool_use":
        # Execute the tool call, append result, continue
        tool_result = execute_tool(response)
        messages.append({"role": "user", "content": tool_result})
```

Claude Code is itself an agent loop: it calls the model, decides whether to read a file / run a command / edit code, executes that action, loops until the task is complete.

The hard problems in agents are:
- **Loop termination**: when does the agent stop?
- **Error handling**: what happens when a tool fails?
- **Context management**: conversations grow fast in agentic loops

### Streaming

For real-time responses (showing text as it's generated), use the streaming API. Instead of waiting for the full response, you receive chunks as they're produced.

```python
with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explain Stoicism"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

Use streaming for any user-facing application where latency matters. Don't use it in batch processing where you just need the final result.

### Models and Cost

Three model tiers (as of 2026):
- **Opus 4.6** (`claude-opus-4-6`) — most capable, highest cost. Use for complex reasoning, multi-step tasks.
- **Sonnet 4.6** (`claude-sonnet-4-6`) — strong balance of capability and cost. Default choice for most tasks.
- **Haiku 4.5** (`claude-haiku-4-5-20251001`) — fastest, cheapest. Use for high-volume, simpler tasks (classification, summarization, formatting).

Cost is charged per token (input + output). In agents, tokens compound — multi-turn conversations with large contexts get expensive fast. Match model to task: don't use Opus for tasks Sonnet handles well.

## Key Considerations

**Rate limits and retries.** The API has rate limits (requests per minute, tokens per minute). Production code needs exponential backoff and retry logic. The SDK handles some of this; you handle the rest.

**Context window management.** Claude's context window is large but not infinite. Agentic loops and long conversations fill it. Plan for this from the start — summarize earlier turns, don't just keep appending.

**Tool descriptions are prompts.** The quality of your tool descriptions directly affects whether Claude uses them correctly. A poorly described tool gets called wrong. Same principles as prompt engineering: specific, unambiguous, with examples.

**Structured output.** For machine-readable output, ask for JSON and validate it. Claude can output structured JSON reliably when the prompt specifies it. Use tools with defined schemas for maximum reliability.

**Costs in agentic loops.** An agent that loops 10 times with a 10K token context uses 100K input tokens. At Opus pricing this matters quickly. Use the cheapest model that does the job.

## Getting Started

1. **Install the SDK**: `pip install anthropic` (Python) or `npm install @anthropic-ai/sdk` (Node)
2. **Get an API key** from console.anthropic.com and set `ANTHROPIC_API_KEY` as an environment variable
3. **Run the basic messages example** — one call, one response, make sure it works end to end
4. **Add a system prompt** and see how it changes output
5. **Build one tool** — define a simple function (e.g., get the current date), make Claude call it

The progression: single call → multi-turn → tool use → agent loop.

## Common Mistakes

**Forgetting there's no built-in memory.** Every call is stateless. If you need the model to remember something, you pass it in the messages array.

**Putting everything in the system prompt.** Long system prompts dilute. Put task-specific instructions in the user message, not the system.

**Not handling `tool_use` stop reason.** When Claude wants to call a tool, `stop_reason` is `"tool_use"`, not `"end_turn"`. If you don't handle this case, your agent silently breaks.

**Using Opus for everything.** Haiku is 20x cheaper than Opus and handles a large class of tasks just as well. Profile your usage and right-size your model.

**Infinite loop agents.** No termination condition = no termination. Always define what "done" looks like before building the loop.

**Synchronous calls in production.** For any non-trivial volume, calls should be async. The SDK has async clients for both Python (`AsyncAnthropic`) and Node.

## Resources

- **Anthropic API docs** (docs.anthropic.com) — reference for every endpoint, parameter, and behavior; the tool use docs are especially good
- **Anthropic Cookbook** (github.com/anthropics/anthropic-cookbook) — working code examples for common patterns: RAG, agents, tool use
- **"Patterns for Building LLM Applications"** by Anthropic — covers agentic patterns, context management, and reliability at scale; in the docs under guides

## Connections

- [how-claude-works.md](./how-claude-works.md) — understanding transformers, context windows, and temperature explains why API behavior is what it is
- [prompt-engineering.md](../meta/prompt-engineering.md) — system prompts and tool descriptions are prompts; same principles apply directly
- [claude-code-workflow.md](./claude-code-workflow.md) — Claude Code is itself an agent loop built on this API; understanding the API explains how Claude Code works under the hood

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-06*
