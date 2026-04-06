# Linear Algebra
*The mathematics of vectors, matrices, and transformations — the language of data, machine learning, and applied science*

---

## What Is It

Linear algebra is the study of vectors, vector spaces, and the linear transformations between them. Where calculus studies change, linear algebra studies structure — how objects relate to each other in space, how transformations distort or preserve that space, and how systems of relationships can be expressed and solved simultaneously.

Concretely: a vector is an ordered list of numbers (a point in space, or a direction with magnitude). A matrix is a rectangular array of numbers that acts as a machine — input a vector, get a transformed vector out. Linear algebra is the theory and practice of these objects and the operations on them.

It's the native language of machine learning, computer graphics, signal processing, quantum mechanics, economics, and anywhere data lives in multiple dimensions simultaneously.

---

## Why It Matters

If you work in tech, you work with linear algebra whether you know it or not. Every ML model, every image transformation, every recommendation engine is doing linear algebra at scale. Understanding it gives you the ability to read research, debug model behavior, and understand what "high-dimensional data" actually means geometrically.

Beyond ML: spreadsheet operations, financial modeling, network analysis, and physics simulations all reduce to linear algebra. It's the most practically impactful piece of mathematics for a software person who didn't study it formally.

---

## Core Concepts

### Vectors

A vector is an ordered collection of numbers: [3, 1, 4] is a vector in 3D space. You can think of it as a point in space, or as an arrow from the origin to that point with both direction and magnitude (length).

**Key operations:**
- *Addition*: Add component-by-component. [1,2] + [3,4] = [4,6]. Geometrically: place vectors tip-to-tail.
- *Scalar multiplication*: Multiply each component by a number. 2·[1,2] = [2,4]. Stretches or shrinks the vector.
- *Dot product*: Multiply component-by-component and sum. [1,2]·[3,4] = 1·3 + 2·4 = 11. The result is a number (scalar), not a vector. The dot product of two vectors equals |a||b|cos(θ) — it measures how much two vectors point in the same direction. Zero dot product = perpendicular vectors.
- *Magnitude (length)*: √(x² + y² + z²) for a 3D vector — Pythagorean theorem extended.

**Span**: The set of all vectors you can reach by adding and scaling a collection of vectors. A set of vectors spans a space if you can reach any point in that space by combining them.

**Linear independence**: A set of vectors is linearly independent if none of them can be expressed as a combination of the others. Dependent vectors are redundant — they don't add new dimensions.

### Matrices

A matrix is a 2D array of numbers. Its primary use is representing a linear transformation — a function that maps vectors to vectors while preserving the structure of addition and scaling.

```
[a b]   applied to   [x]   gives   [ax + by]
[c d]                [y]           [cx + dy]
```

Every matrix encodes a transformation of space: rotations, reflections, stretches, shears, projections. The columns of a matrix tell you where the basis vectors (standard directions) land after the transformation.

**Matrix multiplication**: Not element-wise — it's function composition. Multiplying matrix A by matrix B means "apply B first, then A." The resulting matrix encodes both transformations combined. This is why matrix multiplication is non-commutative: AB ≠ BA in general.

**The identity matrix**: Has 1s on the diagonal, 0s elsewhere. Multiplying any matrix by the identity leaves it unchanged — it's the "do nothing" transformation.

**Transpose**: Flip a matrix across its diagonal. Rows become columns. Notation: Aᵀ.

### Systems of Linear Equations

A system of equations like:
```
2x + y = 5
x - 3y = -1
```
can be written as a matrix equation: Ax = b, where A is the coefficient matrix, x is the vector of unknowns, and b is the right-hand side.

Solving the system means finding x. If the matrix A is invertible (non-singular), then x = A⁻¹b. If not invertible, the system either has no solution or infinitely many.

**The determinant**: A single number computed from a square matrix that measures how much the transformation scales volume. Determinant = 0 means the matrix squishes space into a lower dimension — it's not invertible, and the corresponding system of equations has no unique solution.

### Eigenvalues and Eigenvectors

An eigenvector of a matrix is a special vector that, when the matrix is applied to it, only stretches or shrinks — it doesn't rotate or change direction. The eigenvalue is the scaling factor.

If Av = λv, then v is an eigenvector and λ is its eigenvalue.

**Why this matters**: Eigenvectors reveal the "natural axes" of a transformation — the directions the transformation acts most simply along. Applications:
- *Principal Component Analysis (PCA)*: Finding the directions (eigenvectors) along which data varies most (largest eigenvalues) — used for dimensionality reduction
- *Google's PageRank*: Computed as the eigenvector of the link matrix of the web
- *Differential equations*: Eigenvectors simplify solving systems of equations that evolve over time
- *Quantum mechanics*: Observable quantities are eigenvalues of operators

### Vector Spaces and Subspaces

A vector space is any collection of objects where addition and scalar multiplication make sense and follow certain rules. Vectors in 2D or 3D space are the prototypical example, but the concept generalizes — functions, polynomials, and matrices can all form vector spaces.

A **basis** is a minimal set of linearly independent vectors that spans the space — enough to reach any point, with no redundancy. The number of vectors in a basis is the **dimension** of the space.

The **column space** of a matrix is the set of all vectors that can be produced as outputs — it tells you which outputs are reachable. The **null space** (kernel) is the set of all inputs that map to zero — it tells you what information the transformation destroys.

### Linear Transformations

Every matrix represents a linear transformation. Thinking in terms of transformations (rather than just arrays of numbers) is the conceptual shift that makes linear algebra click:

- A 2×2 rotation matrix rotates every vector in 2D space by a fixed angle
- A projection matrix flattens vectors onto a line or plane
- A diagonal matrix stretches each axis independently
- Multiplying matrices = composing transformations

In ML, a neural network layer is a matrix multiplication followed by a non-linear activation. The matrix does the linear transformation; the activation adds non-linearity. Understanding this means you can reason about what the network is actually doing geometrically.

---

## Key Considerations

**High-dimensional geometry is unintuitive but important.** Data in ML often lives in hundreds or thousands of dimensions. Linear algebra is the only tool for reasoning about this geometry. Concepts like distance, angle, and projection generalize cleanly to any dimension.

**NumPy / matrix operations in code are linear algebra.** When you see `np.dot()`, `@` operator, or `matrix.T`, you're doing linear algebra. The library handles the computation; the understanding helps you write the right operation.

**Orthogonality is a recurring theme.** Perpendicular vectors have zero dot product and represent independent, non-overlapping directions. Orthogonal matrices (like rotation matrices) preserve lengths and angles. Much of the elegant structure in linear algebra comes from working with orthogonal objects.

---

## Getting Started

1. **3Blue1Brown's Essence of Linear Algebra** (YouTube): The standard recommendation for a reason — best geometric intuition available, 16 short videos.
2. **Implement basic operations by hand** in Python with NumPy: Create vectors, multiply matrices, compute dot products. The abstraction clicks when you've done it concretely.
3. **Read a PCA explanation** after covering eigenvectors — PCA is linear algebra applied to a real data problem and shows why the abstractions matter.

---

## Common Mistakes

**Treating matrices as just 2D arrays without understanding they're transformations.** The transformation perspective is the one that makes everything else (eigenvalues, matrix multiplication, inverses) make sense.

**Confusing matrix multiplication order.** AB means "apply B first, then A." Order matters and getting it backwards produces wrong results — and wrong code.

**Thinking of eigenvectors as advanced/obscure.** They appear everywhere in applied settings (PCA, PageRank, physics simulations). Understanding them is not optional for anyone working with data.

---

## Resources

- *Essence of Linear Algebra* — 3Blue1Brown (YouTube): Non-negotiable first step. Geometric intuition, 16 videos.
- *Linear Algebra Done Right* — Sheldon Axler: The clean, conceptual approach. Less computation, more understanding.
- *Introduction to Linear Algebra* — Gilbert Strang: The standard applied textbook. MIT OpenCourseWare has the full lecture series free online.

---

## Connections

- [math-overview.md](math-overview.md) — where linear algebra fits in the broader mathematical landscape
- [calculus.md](calculus.md) — multivariable calculus uses gradients (vectors) and Hessians (matrices); the two subjects converge in optimization
- [optimization.md](optimization.md) — gradient descent in high dimensions is linear algebra; solving linear programs requires matrix operations
- [probability-theory.md](probability-theory.md) — covariance matrices, multivariate distributions, and PCA all sit at the intersection of linear algebra and probability

*Last updated: 2026-04-06*
