# Number Theory
*Primes, divisibility, modular arithmetic — pure mathematics with cryptographic and computational foundations*

---

## What Is It

Number theory is the study of integers and their properties. It asks questions about the whole numbers — which integers are prime, how numbers divide each other, what patterns appear in sequences of integers, and how arithmetic behaves in different modular systems.

It's one of the oldest branches of mathematics (Euclid wrote about primes in 300 BC) and for most of its history was considered purely theoretical — beautiful, rigorous, and useless. Then cryptography arrived. Now number theory is the foundation of internet security, digital signatures, and every encrypted communication you send.

---

## Why It Matters

RSA encryption (which secures most HTTPS connections), Diffie-Hellman key exchange, elliptic curve cryptography, and hash functions all rest on number-theoretic foundations — specifically on the computational hardness of problems that number theory defines. When you visit a website over HTTPS, you're using applied number theory.

Beyond cryptography: number theory develops rigorous proof skills and a way of thinking about structure in integers that transfers broadly. It's also one of the areas where simple-sounding questions have been unsolved for centuries — which makes it both humbling and fascinating.

---

## Core Concepts

### Divisibility and the Division Algorithm

An integer a **divides** b (written a|b) if there's an integer k such that b = ak. If a divides b, then a is a **divisor** or **factor** of b.

The **division algorithm**: For any integers a and b with b > 0, there exist unique integers q (quotient) and r (remainder) such that:
`a = bq + r`, where 0 ≤ r < b

This is just long division, formalized. The remainder r is a fundamental concept — it's the basis of modular arithmetic.

**Divisibility rules** (the patterns in elementary school):
- 2 divides n ⟺ last digit is even
- 3 divides n ⟺ sum of digits is divisible by 3
- 9 divides n ⟺ sum of digits is divisible by 9
- 5 divides n ⟺ last digit is 0 or 5

These aren't tricks — they follow directly from how our base-10 number system works.

### Greatest Common Divisor (GCD)

The **GCD** of integers a and b is the largest integer that divides both. GCD(12, 8) = 4.

The **Euclidean algorithm** computes GCD efficiently:
```
GCD(a, b) = GCD(b, a mod b)
GCD(a, 0) = a
```
Applying: GCD(48, 18) = GCD(18, 12) = GCD(12, 6) = GCD(6, 0) = 6.

This is one of the oldest known algorithms (Euclid, ~300 BC) and still in widespread use today.

**Bézout's identity**: For any integers a and b, there exist integers x and y such that ax + by = GCD(a,b). The extended Euclidean algorithm finds these x and y — critical for computing modular inverses in cryptography.

**LCM** (Least Common Multiple): LCM(a,b) = a·b / GCD(a,b).

### Prime Numbers

An integer p > 1 is **prime** if its only positive divisors are 1 and itself. 2, 3, 5, 7, 11, 13...

**Fundamental Theorem of Arithmetic**: Every integer n > 1 can be written as a product of primes in exactly one way (up to order). This is the unique factorization or prime factorization:
12 = 2² · 3. 60 = 2² · 3 · 5. 

Primes are the "atoms" of multiplication — the irreducible building blocks from which all integers are made.

**Infinitely many primes**: Euclid's proof is the most elegant argument in mathematics. Assume finitely many primes p₁, p₂, ..., pₙ. Form N = p₁·p₂·...·pₙ + 1. N is either prime (contradiction — a new prime exists) or has a prime factor. But N divided by any pᵢ leaves remainder 1, so no pᵢ divides N. Either way, a prime outside our supposed complete list must exist. Contradiction — the list can't be complete.

**Distribution of primes — the Prime Number Theorem**: Primes become less frequent as numbers grow, but they never stop. The number of primes up to n is approximately n/ln(n). Among large numbers, roughly 1 in ln(n) is prime.

**Primality testing**: Given a large integer, how do you check if it's prime? Naive trial division is too slow for cryptographic key sizes (hundreds of digits). Probabilistic tests (Miller-Rabin) can determine primality with high confidence very quickly. Deterministic polynomial-time primality tests (AKS, 2002) exist but are rarely used in practice because probabilistic tests are faster for real applications.

**The hardness of factoring**: Finding whether a number is prime is easy. But given a large composite number, finding its prime factors is computationally hard — no known polynomial-time algorithm. This asymmetry (easy to multiply, hard to factor) is the foundation of RSA.

### Modular Arithmetic

Modular arithmetic is arithmetic "on a clock." Rather than letting numbers grow without bound, you wrap around after reaching a modulus m. 

`a ≡ b (mod m)` means a and b have the same remainder when divided by m. Equivalently, m divides (a-b).

7 ≡ 2 (mod 5) because both leave remainder 2 when divided by 5.

**Operations**: Addition, subtraction, and multiplication all work mod m:
- (a + b) mod m = ((a mod m) + (b mod m)) mod m
- Same for multiplication

Division is trickier — requires modular inverses (see below).

**Why it matters**: This is the arithmetic structure underlying cryptography, hash functions, checksums, and computer arithmetic (integer overflow is modular arithmetic mod 2³²).

**Modular inverse**: The inverse of a mod m is a number a⁻¹ such that a·a⁻¹ ≡ 1 (mod m). This exists if and only if GCD(a,m) = 1 — i.e., a and m are coprime. Computed via the extended Euclidean algorithm.

**Fermat's Little Theorem**: If p is prime and a is not divisible by p, then:
`aᵖ⁻¹ ≡ 1 (mod p)`

This means: `aᵖ ≡ a (mod p)` for any a.

This is used everywhere in cryptography — it's the basis of primality tests and the RSA encryption scheme.

**Euler's Theorem**: Generalization of Fermat's theorem. If GCD(a,n) = 1, then:
`aᵠ⁽ⁿ⁾ ≡ 1 (mod n)`
where φ(n) is Euler's totient function — the count of integers from 1 to n that are coprime to n.

For prime p: φ(p) = p-1 (Fermat's theorem is the special case).
For n = pq (two distinct primes): φ(n) = (p-1)(q-1). This fact is central to RSA.

### The Chinese Remainder Theorem (CRT)

If m₁, m₂, ..., mₙ are pairwise coprime (no two share a common factor), then the system of simultaneous congruences:
```
x ≡ a₁ (mod m₁)
x ≡ a₂ (mod m₂)
...
x ≡ aₙ (mod mₙ)
```
has a unique solution modulo m₁·m₂·...·mₙ.

This theorem says you can work with a large modulus by splitting it into smaller coprime pieces — a powerful computational tool used in cryptography (RSA with CRT is faster) and computer arithmetic.

### RSA — Number Theory as Cryptography

RSA is the most widely used public-key cryptosystem. It works like this:

1. Choose two large primes p and q. Compute n = pq.
2. Compute φ(n) = (p-1)(q-1).
3. Choose e coprime to φ(n) (often e = 65537).
4. Compute d such that ed ≡ 1 (mod φ(n)) — the modular inverse.
5. **Public key**: (n, e). **Private key**: (n, d). Destroy p, q, φ(n).

**Encryption**: c = mᵉ mod n (anyone with the public key can do this)
**Decryption**: m = cᵈ mod n (only works with the private key d)

**Why it's secure**: To decrypt without the private key, an attacker needs d, which requires φ(n), which requires factoring n = pq. Factoring n is computationally infeasible for large primes (~1024–2048 bit numbers). The security rests entirely on the hardness of integer factorization.

Every number-theoretic concept above plays a role: primes (choose p, q), modular arithmetic (all operations), Euler's theorem (proof that decryption recovers the original message), modular inverse (compute d), CRT (speed up the computation).

### Diophantine Equations

Equations in integer unknowns. Named for Diophantus (3rd century AD).

**Linear Diophantine equations**: ax + by = c. Has integer solutions if and only if GCD(a,b) divides c. Solutions found via extended Euclidean algorithm.

**Famous harder problems**:
- Pythagorean triples: Integer solutions to x² + y² = z². Infinitely many: (3,4,5), (5,12,13), (8,15,17)...
- Fermat's Last Theorem: No positive integer solutions to xⁿ + yⁿ = zⁿ for n > 2. Stated by Fermat in 1637, proven by Andrew Wiles in 1995 after 358 years — one of the greatest achievements in mathematical history.

---

## Key Considerations

**The gap between prime-checking and factoring is what makes cryptography work.** If efficient factoring were discovered, RSA (and much of internet security) would collapse. This is an open problem — we believe efficient factoring is impossible, but haven't proved it.

**Quantum computers threaten RSA.** Shor's algorithm, a quantum algorithm, can factor integers in polynomial time. A sufficiently powerful quantum computer would break RSA. This is why post-quantum cryptography (using mathematical problems quantum computers also struggle with — like lattice problems) is an active research area.

**"Pure" mathematics becomes applied unpredictably.** Number theory was considered the most useless branch of mathematics for two millennia. Then computers and cryptography made it essential. This is a recurring pattern in mathematics — Hardy famously boasted that number theory had no practical applications, and was wrong.

---

## Getting Started

1. **Work through modular arithmetic with small examples.** Practice computing GCDs with the Euclidean algorithm. Verify Fermat's little theorem with small primes by hand.
2. **Read about RSA construction step by step.** Seeing how the number theory assembles into a cryptosystem makes all the pieces concrete.
3. **Python's built-in `pow(a, b, m)`** computes aᵇ mod m efficiently using fast modular exponentiation. Try computing RSA-like operations in a few lines of code.

---

## Common Mistakes

**Assuming modular division works like regular division.** `(a/b) mod m ≠ (a mod m) / (b mod m)`. Division in modular arithmetic requires computing the modular inverse of b, which only exists when GCD(b,m) = 1.

**Confusing primality with compositeness.** A number that passes a probabilistic primality test is probably prime — but not certainly. Extremely rare pseudoprimes (Carmichael numbers) fool simple tests. Cryptographic implementations use multiple rounds of strong tests to reduce false positive probability to negligible.

**Thinking number theory is only relevant to cryptography.** It also underlies hash functions, error-correcting codes, pseudorandom number generation, and algorithm analysis.

---

## Resources

- *An Introduction to the Theory of Numbers* — Hardy and Wright: The classic reference. Dense but authoritative.
- *A Friendly Introduction to Number Theory* — Joseph Silverman: Accessible undergraduate text. Good balance of theory and computation.
- *The Mathematics of Secrets* — Joshua Holden: Number theory specifically through the lens of cryptography. Readable and motivated.

---

## Connections

- [math-overview.md](math-overview.md) — number theory in the broader mathematical landscape
- [discrete-mathematics.md](discrete-mathematics.md) — number theory is formally a branch of discrete mathematics; the tools (divisibility, GCD) are used throughout discrete math
- [optimization.md](optimization.md) — modular arithmetic and number-theoretic transforms appear in certain optimization and algorithm contexts

*Last updated: 2026-04-06*
