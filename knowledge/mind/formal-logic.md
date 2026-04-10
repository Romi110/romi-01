# Formal Logic
*The structural rules of valid reasoning — propositional logic, truth tables, and the valid argument forms*

---

## What Is It

Formal logic is the mathematics of reasoning. It strips arguments down to their structure — replacing words with symbols — and asks: does this conclusion necessarily follow from these premises? Independent of whether the premises are true, independent of what the words mean, independent of context or audience.

This is what separates formal logic from [critical-thinking.md](critical-thinking.md), which deals with informal logic — real arguments made in natural language. Formal logic is the underlying structure that informal logic approximates. Understanding it makes the informal logic more rigorous and reveals *why* certain argument patterns are valid or invalid.

For a tech professional: you've been using formal logic constantly. Boolean algebra — AND, OR, NOT — is propositional logic. A conditional statement in code (`if x then y`) is logical implication. Truth tables are how digital circuits are designed. The only difference from what you already know is the philosophical framing.

## Why It Matters

Formal logic trains you to see the *shape* of an argument, separate from its content. Two arguments can have identical structure — one about vaccines and one about geometry — and the same formal analysis applies to both. This is useful because:

- It reveals when an argument is valid regardless of how convincing it sounds
- It exposes invalid arguments that *feel* valid because the conclusion seems reasonable
- It gives you exact language for what's wrong with an argument
- It's the foundation of mathematical proof, computer science, and any rigorous reasoning

The Stoics were formal logicians — they developed propositional logic independently in antiquity and used it as a tool for the philosophical method of distinguishing what follows from what.

## Core Concepts

### Propositions and Logical Operators

A **proposition** is a statement that is either true or false. Not a question, not a command, not a wish — a claim.
- "It is raining" — proposition
- "Is it raining?" — not a proposition
- "The sun is a star" — proposition

**Propositional logic** operates on propositions using **logical operators**. Five fundamental operators:

| Operator | Symbol | Name | Meaning |
|---------|--------|------|---------|
| NOT | ¬P or ~P | Negation | P is false |
| AND | P ∧ Q | Conjunction | Both P and Q are true |
| OR | P ∨ Q | Disjunction | At least one of P, Q is true |
| IF...THEN | P → Q | Conditional | If P is true, Q must be true |
| IF AND ONLY IF | P ↔ Q | Biconditional | P and Q are both true or both false |

The **inclusive OR** (∨) means at least one is true — including both. This differs from everyday usage where "or" often means "one or the other but not both" (exclusive OR, sometimes written XOR). In formal logic, "P or Q" is true if both are true.

In programming terms: `&&` is ∧, `||` is ∨, `!` is ¬, and `if (P) { Q }` is roughly P → Q.

### Truth Tables

A **truth table** exhaustively lists all possible combinations of truth values for the propositions in a formula, and shows the result for each.

**NOT:**
| P | ¬P |
|---|-----|
| T | F |
| F | T |

**AND:**
| P | Q | P ∧ Q |
|---|---|--------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

**OR:**
| P | Q | P ∨ Q |
|---|---|--------|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

**Conditional (IF...THEN) — the tricky one:**
| P | Q | P → Q |
|---|---|--------|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

The conditional P → Q is only false in one case: P is true and Q is false. In all other cases — including when P is false — the conditional is true. This matches the logical reading: "If it rains, I'll carry an umbrella" is only violated if it rains and I don't carry one. If it doesn't rain at all, the statement wasn't violated regardless of what I did.

The false-antecedent case (rows 3 and 4) is called **vacuous truth** — "If the moon is made of cheese, then 2+2=5" is technically true because the antecedent is false. Vacuous truths are real but uninteresting; they show up in formal proofs.

### Tautologies and Contradictions

A **tautology** is a formula that is true under every possible assignment of truth values — it's necessarily true by structure alone.

Example: P ∨ ¬P ("P or not-P") — the **law of excluded middle**. Regardless of whether P is true or false, this is always true.

A **contradiction** is a formula that is false under every possible assignment.

Example: P ∧ ¬P ("P and not-P") — cannot be true simultaneously.

These matter for proof: if you can show that the negation of a conclusion leads to a contradiction, the conclusion must be true (this is **proof by contradiction** or *reductio ad absurdum*).

### Valid Argument Forms

An argument is **valid** if the logical structure guarantees that *if the premises are true, the conclusion must be true*. Validity is about structure, not content.

The most important valid argument forms:

**Modus Ponens** ("mode of putting" — affirming the antecedent):
```
P1: P → Q   (If P, then Q)
P2: P        (P is true)
C:  Q        (Therefore, Q is true)
```
If it rains, the ground gets wet. It is raining. Therefore, the ground is wet.
This is the core forward-inference engine of most reasoning.

**Modus Tollens** ("mode of taking" — denying the consequent):
```
P1: P → Q   (If P, then Q)
P2: ¬Q       (Q is false)
C:  ¬P       (Therefore, P is false)
```
If it rains, the ground gets wet. The ground is not wet. Therefore, it did not rain.
This is the logic of falsification — the ground of scientific method.

**Hypothetical Syllogism** (chaining conditionals):
```
P1: P → Q
P2: Q → R
C:  P → R
```
If I work hard, I'll develop the skill. If I develop the skill, I'll get the job. Therefore, if I work hard, I'll get the job.

**Disjunctive Syllogism** (eliminating options):
```
P1: P ∨ Q   (P or Q)
P2: ¬P       (not P)
C:  Q        (Therefore Q)
```
Either the bug is in the frontend or the backend. The frontend has been ruled out. Therefore, the bug is in the backend.
This is how troubleshooting and differential diagnosis work.

**Conjunction Elimination:**
```
P1: P ∧ Q
C:  P    (and separately: Q)
```
If both are true, either can be extracted. Trivial but used constantly in proof steps.

### Common Invalid Forms (Formal Fallacies)

These *look* like valid argument forms but aren't:

**Affirming the Consequent:**
```
P1: P → Q
P2: Q
C:  P     ← INVALID
```
If it rains, the ground is wet. The ground is wet. Therefore, it rained. — Invalid: the ground could be wet from a sprinkler. This is one of the most common reasoning errors.

**Denying the Antecedent:**
```
P1: P → Q
P2: ¬P
C:  ¬Q    ← INVALID
```
If it rains, the ground is wet. It is not raining. Therefore, the ground is not wet. — Invalid: the ground might still be wet.

Both fallacies stem from the same misunderstanding: confusing a conditional with a biconditional. P → Q does not mean Q → P. "If you have a fever, you might be sick" does not mean "if you're not feverish, you're definitely not sick."

### Predicate Logic (Brief Overview)

Propositional logic handles whole propositions as units. **Predicate logic** (also called first-order logic) goes inside propositions to reason about individuals and their properties.

**Predicates** are properties applied to individuals: "is tall" applied to "John" gives "John is tall."

**Quantifiers** express scope:
- **Universal quantifier** ∀ ("for all"): ∀x P(x) means "every x has property P"
- **Existential quantifier** ∃ ("there exists"): ∃x P(x) means "at least one x has property P"

Classic syllogism in predicate logic:
```
∀x (Human(x) → Mortal(x))   — All humans are mortal
Human(Socrates)              — Socrates is human
∴ Mortal(Socrates)           — Therefore Socrates is mortal
```

Predicate logic is the foundation of formal mathematics, database query languages (SQL's WHERE clause is predicate logic), and type systems in programming languages. The depth lives in the planned file `[ ] predicate-logic`.

## Key Considerations

**Validity ≠ soundness.** A valid argument with false premises produces no reliable conclusion. Formal logic guarantees the structure; you still have to check the premises. See [critical-thinking.md](critical-thinking.md) for validity vs. soundness distinction.

**Natural language is ambiguous; formal logic is not.** One reason formal logic matters: "or" in everyday language often means exclusive-or, while ∨ is inclusive. "If...then" in conversation is often biconditional ("if you clean your room, then you can go out" usually means "if and only if"). Translating from natural language to formal notation forces precision and often exposes the ambiguity.

**Proof by contradiction is powerful.** Many important results are proved by assuming the negation of the conclusion, deriving a contradiction, and concluding the original must be true. This is the structure of *reductio ad absurdum*, used in mathematics and philosophy constantly.

**Formal logic has limits.** Gödel's incompleteness theorems (1931) showed that any sufficiently powerful formal system will contain true statements that cannot be proven within that system. Formal logic is extremely powerful but not a complete theory of everything provable. For practical reasoning, this doesn't change much — but it's worth knowing the limits exist.

## Getting Started

1. **Practice truth tables on simple formulas.** Take a conditional you believe ("if I exercise consistently, my health improves") and write out the four rows. Which cases would falsify it? This makes implicit reasoning visible.
2. **Identify the argument form in one piece of reasoning per day.** Is it modus ponens? Disjunctive syllogism? Once you can name them, you can check them.
3. **Test for affirming the consequent.** This is the most common formal fallacy in real life. When you hear "because X happened, Y must have caused it," check whether the reasoning is actually modus ponens (valid) or affirming the consequent (invalid).
4. **Translate one argument to formal notation.** Take a three-sentence argument, assign letters to the propositions, write the form. It forces you to see whether the structure actually works.

## Common Mistakes

**Confusing the conditional with the biconditional.** P → Q does not mean Q → P. "If it's a dog, it's an animal" does not mean "if it's an animal, it's a dog." This confusion generates both of the main formal fallacies.

**Assuming logical validity means the conclusion is true.** Validity is about structure. A valid argument built on false premises tells you nothing. Both validity and truth of premises are required for a sound argument.

**Treating "it's possible" as the same as "it follows."** That a conclusion is *possible* given the premises is not the same as the conclusion being *necessary*. Formal validity requires necessity.

**Dismissing formal logic as academic.** The valid argument forms (modus ponens, modus tollens, disjunctive syllogism) are the skeleton of every diagnostic, every debugging session, every legal argument. They're already operating in your thinking — naming them makes them usable consciously.

## Resources

- **"Logic: A Very Short Introduction" — Graham Priest**: The clearest short entry point into formal logic from a philosophical angle. Covers propositional and predicate logic without heavy notation.
- **"How to Prove It" — Daniel Velleman**: For going deeper into proof structure and predicate logic. Used in mathematics education. Rigorous but accessible if you're comfortable with programming-level abstraction.
- **Khan Academy's Logic and Proofs section**: Free. Interactive. If you want to practice truth tables and valid forms with worked examples, this is faster than a textbook.

## Connections

- [critical-thinking.md](critical-thinking.md) — informal logic and fallacies; formal logic is the underlying structure; critical thinking is how it applies to real-language arguments
- [epistemology.md](epistemology.md) — formal logic connects to epistemology through deduction: if the premises are true and the argument is valid, the conclusion is necessarily true — the highest possible epistemic warrant
- [mind/systems-thinking.md](systems-thinking.md) — boolean logic and predicate reasoning underpin both formal proofs and systems analysis; conditional rules in systems are logical implications

## Status
- [ ] Initial file written
- [ ] Could explain this to someone else
- [ ] Actively practicing or applying
- [ ] Connected to other knowledge files

*Last updated: 2026-04-09*
