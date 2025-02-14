function s0(n) {
  if (n < 3) return n;
  if (n % 2) return 2*s0(n-1) - s0(n-2);
  return s0(n-1) + s0(n-2);
}

function s1(n) {
  if (n < 4) return n;
  if (n === 4) return 5;
  return 2*s1(n-2) + s1(n-4);
}

function s2(n) {
  if (n < 4) return n;
  let [b, a] = n%2 ? [1n, 3n] : [2n, 5n];
  for (let i = 2; i < n/2; i++) {
    let t = 2n*a + b;
    b = a, a = t;
  }
  return a;
}

function initS3() {
  const odds = [1n, 3n],
    evens = [2n, 5n];
  return (n) => {
    const lookup = n%2 ? odds : evens;
    if (n / 2 < lookup.length)
      return lookup[Math.floor((n-1) / 2)];
    let a = lookup[lookup.length - 1],
      b = lookup[lookup.length - 2];
    for (let i = lookup.length; i < n/2; i++) {
      let t = 2n*a + b;
      b = a, a = t;
      lookup.push(a);
    }
    return a;
  };
}

const s = initS3();

process.argv.slice(2).forEach(
  arg => console.log(arg, s(arg))
);

// Example commands:
// node sequence.js 11 8 1 10 9 6 2
// node sequence.js 10000
