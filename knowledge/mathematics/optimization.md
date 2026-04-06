# Optimization
*Finding the best — maxima, minima, and the mathematics of making decisions under constraints*

---

## What Is It

Optimization is the branch of mathematics concerned with finding the best solution from a set of possible solutions. "Best" is defined by an **objective function** — a quantity you want to maximize (profit, accuracy, efficiency) or minimize (cost, error, distance). The "set of possible solutions" may be constrained by **constraints** — rules that eliminate infeasible options.

The field spans calculus-based optimization (derivatives find extrema of smooth functions), linear programming (optimization over linear constraints), combinatorial optimization (finding the best among discrete possibilities), and the numerical methods that make large-scale optimization computationally tractable.

Machine learning is, fundamentally, an optimization problem: find the model parameters that minimize prediction error. Every decision model, supply chain, engineering design, and financial portfolio is shaped by optimization.

---

## Why It Matters

You optimize constantly without calling it that — choosing the cheapest route, the most efficient schedule, the best allocation of time. Having the formal framework means you can model these problems precisely, recognize when a problem has a known solution, and use the right algorithm.

For tech specifically: gradient descent trains every neural network. Linear programming shapes logistics and resource allocation. Dynamic programming solves sequencing problems. These aren't academic curiosities — they're in production everywhere.

---

## Core Concepts

### The General Optimization Problem

Formally:
```
minimize   f(x)
subject to g_i(x) ≤ 0   for i = 1,...,m
           h_j(x) = 0   for j = 1,...,p
```

Where:
- f(x) is the **objective function** (the thing to minimize)
- x is the **decision variable** (what you're choosing)
- g_i and h_j are **constraints** (what limits the choices)
- The **feasible set** is all x that satisfy the constraints

Maximizing f(x) is equivalent to minimizing -f(x) — the problems are equivalent.

A **global minimum** is the best possible solution everywhere. A **local minimum** is better than all nearby solutions but may not be globally best. Much of the difficulty in optimization is in the gap between these two concepts.

### Calculus-Based Optimization (Unconstrained)

For smooth functions of one variable, minima and maxima occur where the derivative is zero — the **critical points**. The second derivative determines which:
- f''(x) > 0 at a critical point: local minimum (concave up)
- f''(x) < 0 at a critical point: local maximum (concave down)
- f''(x) = 0: inconclusive — check higher derivatives or graph

For functions of multiple variables (multivariate optimization):
- The **gradient** ∇f is the vector of partial derivatives — it points in the direction of steepest increase
- At a minimum, ∇f = 0 (the gradient vanishes)
- The **Hessian** H is the matrix of second partial derivatives — it generalizes the second derivative test
  - Positive definite Hessian: local minimum
  - Negative definite Hessian: local maximum
  - Indefinite Hessian: saddle point (a flat point that's a maximum in some directions, minimum in others)

**Lagrange multipliers**: When you have equality constraints h(x) = 0, you can't just set the gradient to zero. Lagrange's method finds constrained optima by requiring the gradient of the objective to be proportional to the gradient of the constraint: ∇f = λ∇h. The scalar λ is the Lagrange multiplier and has an economic interpretation: it measures how much the optimal objective value would change if the constraint were relaxed slightly.

### Convexity — The Property That Makes Everything Work

A function f is **convex** if the line segment between any two points on the graph lies above or on the graph. Equivalently: f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y) for λ ∈ [0,1].

A bowl shape is convex. A dome is concave (negative convex). A wiggly function is neither.

**Why convexity is everything**: For a convex function over a convex feasible set:
- Every local minimum is a global minimum — there's only one bottom to the bowl
- Gradient-based methods are guaranteed to find it
- The problem is computationally tractable in a deep sense

When a problem is convex, the optimization is "solved" in principle. When it's not convex, you're in more difficult territory — gradient methods may get stuck in local minima, and finding the global optimum may be computationally hard.

### Gradient Descent

The workhorse algorithm for optimization in machine learning.

**Idea**: Start at some point. Compute the gradient (direction of steepest increase). Move in the opposite direction (downhill). Repeat.

Update rule: `x_{t+1} = x_t - α·∇f(x_t)`

Where α is the **learning rate** — how big a step to take. Too large: overshoot minima, diverge. Too small: converge slowly.

**Variants:**
- *Batch gradient descent*: Compute gradient using all data. Accurate but slow on large datasets.
- *Stochastic gradient descent (SGD)*: Compute gradient using one data point at a time. Noisy but fast.
- *Mini-batch gradient descent*: Compromise — compute gradient on a small batch (32–256 points). Standard in deep learning.
- *Adam, RMSprop, AdaGrad*: Adaptive learning rate methods that adjust step size for each parameter. Adam is the default choice for most deep learning.

**Challenges with gradient descent:**
- *Local minima*: Gets stuck in local optima in non-convex problems
- *Saddle points*: Points where gradient is zero but it's not a minimum — common in high dimensions
- *Ill-conditioning*: When the function curves much more sharply in some directions than others — gradient descent zigzags inefficiently

In practice, deep learning loss landscapes are non-convex but have surprisingly benign structure — SGD with a good learning rate schedule finds good solutions reliably, even though theory doesn't fully explain why.

### Linear Programming (LP)

Linear programming optimizes a **linear** objective function subject to **linear** constraints. Both the objective and the constraints must be linear (no squares, no products of variables).

Standard form:
```
minimize   cᵀx
subject to Ax ≤ b
           x ≥ 0
```

The feasible set is a **polytope** (polygon in 2D, polyhedron in 3D, higher-dimensional analogue in general) — a convex set defined by linear inequalities. The optimal solution, if it exists, always occurs at a **vertex** (corner) of this polytope.

**The Simplex method** (Dantzig, 1947) exploits this: start at a vertex, move to an adjacent vertex with better objective value, repeat until no improvement is possible. In practice, it's very fast despite exponential worst-case complexity.

**Interior point methods** (Karmarkar, 1984) travel through the interior of the feasible region. They have polynomial worst-case complexity and compete with Simplex on large problems.

**Applications**: Anything that can be formulated as a linear objective with linear constraints — which covers enormous ground: production planning, scheduling, diet optimization (literally — the original motivation), transportation, network flow, portfolio optimization (with linear objective).

**Duality**: Every LP has a dual LP. The primal asks "what's the best allocation of resources?" The dual asks "what are the resources worth?" Strong duality says the optimal values are equal — a deep result with economic interpretation (shadow prices of constraints).

### Integer Programming and Combinatorial Optimization

Linear programming assumes variables can take any real value. **Integer programming** requires some or all variables to be integers. This seemingly small change makes the problem NP-hard in general — you can't just use Simplex.

**Why it's hard**: The feasible set is no longer convex (integers are discrete). You can't slide continuously to a better solution — you have to check discrete combinations.

**Branch and bound**: The standard exact method. Solve the LP relaxation (allow non-integers), branch on a fractional variable (try rounding up and down in separate sub-problems), prune branches that can't improve the best known solution.

**Classic NP-hard combinatorial problems**:
- *Traveling Salesman Problem (TSP)*: Find the shortest route visiting all cities exactly once. Simple to state, computationally intractable for large instances. Heuristics and approximation algorithms are the practical approach.
- *Knapsack problem*: Given items with weights and values, maximize value in a knapsack with weight capacity.
- *Graph coloring*: Minimum colors to color a graph with no adjacent vertices the same color.
- *Bin packing*: Pack items into the fewest bins.

**Approximation algorithms**: For NP-hard problems, find solutions provably close to optimal. A 2-approximation guarantees your solution is within 2× the optimum. These provide quality guarantees without solving exactly.

**Dynamic programming**: Not just a CS concept — it's an optimization technique for problems with **optimal substructure** (the optimal solution contains optimal solutions to subproblems) and **overlapping subproblems** (the same subproblems appear repeatedly). Break the problem into stages, solve each stage optimally given the state, combine. The Viterbi algorithm, sequence alignment, shortest paths in DAGs, and resource allocation over time all use dynamic programming.

### Nonlinear Programming

When objective or constraints are nonlinear (and the problem isn't convex), you're in nonlinear programming — generally harder than LP.

**Sequential Quadratic Programming (SQP)**: Solve a sequence of quadratic approximations to the nonlinear problem. Standard for well-behaved engineering optimization.

**Interior point methods**: Extended to nonlinear problems (barrier methods). The IPOPT solver is widely used.

**Metaheuristics** — for hard non-convex problems where exact methods fail:
- *Simulated annealing*: Accept slightly worse solutions with decreasing probability over time (analogous to cooling metal). Escapes local optima.
- *Genetic algorithms*: Maintain a population of solutions, combine and mutate them, select the fittest. Inspired by evolution.
- *Particle swarm optimization*: Particles explore the search space, attracted to the best position found.

These don't guarantee optimality but find good solutions for complex real-world problems where exact methods are intractable.

---

## Key Considerations

**Problem formulation is usually harder than solving.** The algorithm is chosen; the hard part is expressing the real problem as a precise mathematical optimization. Bad formulation (wrong objective, missing constraints) gives the right answer to the wrong problem.

**Convexity determines tractability.** Check whether your problem is convex before reaching for metaheuristics. If it is, there are guaranteed, efficient methods. If not, understand whether you need global optimality or whether a good local solution is sufficient.

**Learning rate / hyperparameter selection in gradient descent is an art.** It's not derived from first principles in practice — it's tuned empirically. Adaptive methods (Adam) reduce but don't eliminate this problem.

**Scale matters.** Problems that are easy at small scale become hard at large scale and vice versa. LP scales well to millions of variables. Some combinatorial problems become tractable with problem-specific structure.

---

## Getting Started

1. **Solve a simple LP by hand**: The diet problem (minimize cost subject to nutritional constraints) or a two-variable production problem. Graphing the feasible region and moving through vertices makes Simplex intuitive.
2. **Implement gradient descent from scratch on a simple function** (e.g., minimize f(x) = x²). Observe how learning rate affects convergence. Then minimize a non-convex function and watch it get stuck in local minima.
3. **Use `scipy.optimize`** in Python: `minimize()` handles constrained and unconstrained nonlinear optimization; `linprog()` for LP. Use real problems you care about — routing, scheduling, portfolio allocation.

---

## Common Mistakes

**Ignoring convexity and assuming local = global.** Gradient descent finds a local minimum. For non-convex problems, that may be far from the global minimum. Know which type of problem you have.

**Treating constraints as afterthoughts.** Constraints often define the interesting structure of a problem. A formulation without the right constraints may be solving an entirely different problem.

**Choosing the wrong algorithm for the problem class.** Using gradient descent on an integer problem, or Simplex on a non-linear problem — each algorithm has a domain where it's valid.

---

## Resources

- *Convex Optimization* — Boyd and Vandenberghe (Stanford): The definitive text, free PDF online. Covers LP, convex optimization, duality comprehensively.
- *Introduction to Linear Optimization* — Bertsimas and Tsitsiklis: The rigorous LP reference.
- *Algorithms for Optimization* — Kochenderfer and Wheeler: Modern coverage with code examples in Julia. Bridges theory and practice well.

---

## Connections

- [calculus.md](calculus.md) — derivatives and gradients are the foundation of continuous optimization; Lagrange multipliers extend calculus to constrained problems
- [linear-algebra.md](linear-algebra.md) — LP and gradient descent in high dimensions rely entirely on matrix/vector operations
- [probability-theory.md](probability-theory.md) — maximum likelihood estimation is an optimization problem; stochastic optimization (SGD) involves randomness
- [discrete-mathematics.md](discrete-mathematics.md) — combinatorial optimization (TSP, scheduling, graph problems) is discrete optimization over graph-theoretic structures
- [financial-mathematics.md](financial-mathematics.md) — portfolio optimization (Markowitz) is a quadratic program: minimize variance subject to return and budget constraints

*Last updated: 2026-04-06*
