# Operadores Lógicos – Representações

| Operação  | Programação (C/Java/JS) | Matemática / Lógica Formal | Álgebra Booleana |
|-----------|--------------------------|-----------------------------|------------------|
| AND (E)   | `&&`                    | ∧                          | · ou AB          |
| OR (OU)   | `||`                    | ∨                          | +                |
| NOT (NÃO) | `!A`                    | ¬A                         | Ȧ ou A'          |
| XOR (OU exclusivo) | `^` (bitwise)  | ⊕                          | ⊕                |
| NAND (não-AND) | `!(A && B)`        | ↑                          | (AB)'            |
| NOR (não-OR)   | `!(A || B)`        | ↓                          | (A + B)'         |
| XNOR (equivalência) | `!(A ^ B)`    | ↔                          | ⊙ ou (A ⊕ B)'    |
| Implicação (se...então) | `(A ? B)` (ou `!A || B`) | → | A' + B |
| Bicondicional (se e somente se) | `A == B` | ↔ | (AB) + (A'B') |
