# Discrete Mathematics
*Logic, sets, graphs, combinatorics — the native language of computer science and formal reasoning*

---

## What Is It

Discrete mathematics studies structures that are countable and separate (discrete) rather than continuous. Where calculus works with smooth, flowing quantities, discrete math works with things you can list: integers, graphs of nodes and edges, logical statements, combinations of elements.

It encompasses several sub-fields: mathematical logic (what makes an argument valid), set theory (collections of objects and their relationships), combinatorics (counting), graph theory (networks), and number theory overlap. These are not random assortments — they're unified by the idea of working with objects that can be precisely enumerated and whose properties can be determined exactly.

It is the mathematical foundation of computer science. Algorithms, data structures, databases, cryptography, compilers, network design — all rest on discrete mathematics.

---

## Why It Matters

Every program you write is implicitly doing discrete mathematics. Boolean logic runs your conditionals. Graphs model your data relationships and network topology. Combinatorics bounds how many states your system can be in. Set operations appear in databases and filters everywhere. Formal logic underlies proof systems, type checkers, and verification tools.

You can write software without knowing this explicitly. But understanding the underlying structures means you recognize problems as instances of known patterns — and reach for the right tool.

---

## Core Concepts

### Mathematical Logic

Logic studies the structure of valid reasoning — what conclusions follow necessarily from what premises.

**Propositions**: Statements that are either true or false. "The server is down" is a proposition. "Is the server down?" is not.

**Logical connectives:**
- AND (∧): P ∧ Q is true only if both P and Q are true
- OR (∨): P ∨ Q is true if at least one is true
- NOT (¬): Flips the truth value
- IMPLIES (→): P → Q is false only when P is true and Q is false. "If it rains, the ground is wet" — only fails if it rains and the ground isn't wet.
- BICONDITIONAL (↔): True when both sides have the same truth value

**Truth tables**: Enumerate all possible combinations of truth values for propositions and compute the truth value of a compound expression. This is mechanical and complete — if you build the truth table, you know everything about the expression.

**Tautologies and contradictions**: A tautology is always true (P ∨ ¬P — either P or not P, no matter what). A contradiction is always false (P ∧ ¬P).

**Logical equivalence**: Two expressions are logically equivalent if they have the same truth value in every possible case. De Morgan's laws are important equivalences:
- ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
- ¬(P ∨ Q) ≡ ¬P ∧ ¬Q
In English: "not (A and B)" = "not A or not B." Useful in programming when simplifying conditions.

**Quantifiers:**
- Universal (∀): "For all x, P(x)" — P is true for every element
- Existential (∃): "There exists x such that P(x)" — P is true for at least one element

Negating quantifiers flips the type: ¬(∀x P(x)) ≡ ∃x ¬P(x) — "not everything satisfies P" means "something doesn't satisfy P."

### Set Theory

A **set** is an unordered collection of distinct objects. {1, 2, 3} is a set. {1, 2, 2, 3} = {1, 2, 3} because sets don't have duplicates.

**Core operations:**
- *Union* (A ∪ B): Everything in A or B (or both)
- *Intersection* (A ∩ B): Only what's in both A and B
- *Difference* (A \ B): What's in A but not B
- *Complement* (Aᶜ): Everything not in A (relative to some universal set)
- *Subset* (A ⊆ B): Every element of A is in B
- *Power set* P(A): The set of all subsets of A. If A has n elements, P(A) has 2ⁿ elements.

**Cardinality**: The size of a set. |{1,2,3}| = 3. For infinite sets, cardinality distinguishes different "sizes" of infinity — Cantor showed that the set of real numbers is strictly larger than the set of integers, even though both are infinite.

**In databases and programming**: SQL is relational algebra — set operations on tables. JOIN is intersection/product. UNION is union. WHERE clauses filter sets. Understanding sets means you understand what relational databases actually do.

**Functions as set relationships**: A function f: A → B is formally a set of pairs (a, f(a)) where every element of A appears exactly once. Injective (one-to-one): different inputs give different outputs. Surjective (onto): every output is reached by some input. Bijective: both — a perfect pairing.

### Combinatorics — Counting

Combinatorics counts how many ways something can happen. This sounds simple until you realize that counting correctly is surprisingly hard and matters enormously for algorithm analysis and probability.

**Fundamental principle of counting**: If event A can happen m ways and event B can happen n ways, and they're independent, then A and B together can happen m·n ways.

**Permutations**: Ordered arrangements. The number of ways to arrange n distinct objects is n! (n factorial). The number of ways to choose k objects from n and arrange them: P(n,k) = n!/(n-k)!

**Combinations**: Unordered selections. The number of ways to choose k objects from n without caring about order: C(n,k) = n!/(k!(n-k)!) — also written as "n choose k" or (n k). This appears everywhere: the number of possible poker hands, the number of ways to select a committee, the number of paths through a grid.

**Binomial theorem**: (a+b)ⁿ = Σ C(n,k) aᵏ bⁿ⁻ᵏ. The coefficients in this expansion are combinations — which is why they're called binomial coefficients.

**Pigeonhole principle**: If you put n+1 pigeons into n holes, at least one hole has more than one pigeon. Simple but powerful. If n+1 values must fall in n categories, at least two share a category. Used to prove existence results: among any 13 people, at least two share a birth month.

**Inclusion-exclusion**: Counting things that are in at least one of several overlapping sets. |A ∪ B| = |A| + |B| - |A ∩ B|. Generalizes to more sets. Prevents double-counting.

### Graph Theory

A **graph** G = (V, E) consists of a set of **vertices** (nodes) V and a set of **edges** E connecting pairs of vertices. This is an abstract structure that models an enormous variety of real systems.

**Basic definitions:**
- *Directed graph (digraph)*: Edges have direction. (u,v) ≠ (v,u).
- *Weighted graph*: Each edge has a numerical weight (distance, cost, capacity).
- *Degree*: Number of edges incident to a vertex. In directed graphs: in-degree and out-degree.
- *Path*: A sequence of vertices connected by edges with no repetition.
- *Cycle*: A path that starts and ends at the same vertex.
- *Connected*: A graph where there's a path between every pair of vertices.
- *Tree*: A connected graph with no cycles. A graph with n vertices and n-1 edges that is connected.

**Key problems and algorithms:**
- *Shortest path*: Dijkstra's algorithm (non-negative weights), Bellman-Ford (handles negative weights). Used in GPS, network routing.
- *Minimum spanning tree*: The cheapest set of edges that connects all vertices. Kruskal's and Prim's algorithms. Used in network design.
- *Graph coloring*: Assign colors to vertices so no two adjacent vertices share a color. Minimum colors needed = chromatic number. Scheduling problems, compiler register allocation, frequency assignment.
- *Topological sort*: Order vertices in a directed acyclic graph (DAG) so all edges go forward. Build dependency resolution, task scheduling.
- *Matching*: Pairing vertices optimally. Job assignment, stable marriage problem.

**Real structures as graphs:**
- Social networks: people as vertices, friendships as edges
- The internet: routers as vertices, connections as edges
- Dependencies in code: modules as vertices, imports as edges (a DAG)
- Road networks: intersections as vertices, roads as edges (weighted by distance/time)
- Database relationships: entities as vertices, foreign key relationships as edges

**Trees** are a special case worth emphasis. They're everywhere in CS: file systems, HTML DOM, abstract syntax trees, decision trees, binary search trees, heap data structures. Understanding trees as graphs (connected, acyclic) unifies the understanding.

### Proofs

Discrete mathematics is where you learn to write mathematical proofs — formal arguments that a statement is true for all cases, not just examples.

**Direct proof**: Assume the premises, derive the conclusion step by step through logical deduction.

**Proof by contradiction**: Assume the opposite of what you want to prove, then show this leads to a contradiction. Conclude the opposite must be false, so your original statement is true. Euclid's proof that there are infinitely many primes works this way.

**Proof by induction**: Prove a base case. Then prove that if the statement holds for n, it holds for n+1. This establishes the statement for all positive integers. Like dominoes — prove the first falls, prove each falling makes the next fall, conclude all fall.

**Counterexample**: To disprove a "for all" statement, you only need one case where it fails.

---

## Key Considerations

**This is the math of exact answers.** Unlike calculus (which deals in approximations via limits) or statistics (which deals in probabilities), discrete math often produces exact, definitive results. An algorithm either terminates or it doesn't. A graph either has a Hamiltonian cycle or it doesn't.

**Computational complexity is applied discrete math.** P vs. NP, Big-O analysis, algorithm design — these are graph theory and combinatorics in action. The question "how many operations does this algorithm take?" is a combinatorics question.

**Logic is the foundation of type systems and formal verification.** Propositional and predicate logic underlie Haskell's type system, Coq's proof assistant, and any formal system that guarantees program correctness.

---

## Getting Started

1. **Boolean logic first**: Make sure you can evaluate compound logical expressions and apply De Morgan's laws. This is immediately applicable in code.
2. **Graph problems**: Implement BFS and DFS on a simple graph. Recognizing when a problem is a graph problem is a key skill in software interviews and system design.
3. **Combinatorics practice**: Work through "how many ways" problems. The pigeonhole principle and combinations are the most generally useful results.

---

## Common Mistakes

**Confusing permutations and combinations.** Order matters for permutations; it doesn't for combinations. "How many ways to select a team of 3" = combination. "How many ways to assign captain, co-captain, and treasurer" = permutation.

**Assuming implication is symmetric.** P → Q does not mean Q → P. "If it rains, the ground is wet" doesn't mean "if the ground is wet, it rained." This logical confusion appears constantly in reasoning about causation and diagnosis.

**Forgetting that a tree is just a special graph.** Binary search trees, heaps, and parse trees are all graphs — connected and acyclic. Recognizing this unifies your understanding of why tree traversal algorithms work.

---

## Resources

- *Discrete Mathematics and Its Applications* — Kenneth Rosen: The standard textbook. Comprehensive. Dense but complete.
- *The Algorithm Design Manual* — Steven Skiena: Graph algorithms applied to real problems. Less theory, more pattern recognition.
- *Concrete Mathematics* — Graham, Knuth, Patashnik: Advanced but brilliant. Combinatorics with depth and humor. Knuth's own prerequisite text for understanding algorithms.

---

## Connections

- [math-overview.md](math-overview.md) — discrete math in the broader landscape
- [number-theory.md](number-theory.md) — number theory is formally a branch of discrete mathematics; primes and modular arithmetic are discrete structures
- [probability-theory.md](probability-theory.md) — combinatorics is the basis of discrete probability; counting outcomes is how you compute many probabilities
- [optimization.md](optimization.md) — combinatorial optimization (shortest path, minimum spanning tree, scheduling) is a major branch of discrete optimization

*Last updated: 2026-04-06*
