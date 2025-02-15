## Airplane Control

To fly an airplane:
```
npm run dev
```

Use WASD to steer
- **Speed:** W and S
- **Direction:** A and D

## Sequence
A series of implementations to calculate the provided sequence value `S(n)` for one or more values of `n`

Example usage:
```
node sequence.js 11 8 1 10 9 6 2
node sequence.js 10000
```

### S0
Direct implementation of the provided formula.

Because of the recursion, it doesn't scale to `n=10000`.

### S1
Through algebraic substitution, I identified that the function need only compute odds *or* evens, reducing by half.

### Final: S2
Replaced recursion with iteration.

**Runtime Complexity:** O(N)

### Bonus: S3
To reduce computation when computing multiple values, I memoized the results with arrays for odds and evens.

**Best-Case Runtime Complexity:** O(1) for memoized values
