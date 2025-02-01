function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers.');
  }
  return a + b;
}

const result1 = addSafe(5, 10); // Correct
const result2 = addSafe(5, '10'); // Throws an error

const result3 = add(5, parseFloat('10' as string)); //Type assertion (use with caution!)