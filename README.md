# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error:  Type 'string' is not assignable to type 'number'.  The example shows how this error occurs when passing a string to a function expecting a number and illustrates the solution.

## Bug
The `bug.ts` file contains a function `add` that expects two numbers.  However, the function is called with a number and a string, leading to the type error.

## Solution
The `bugSolution.ts` file shows two solutions:
1. Type checking to prevent strings from being passed to the `add` function.
2. Using type assertion to explicitly tell TypeScript that the string is being treated as a number (though this is generally less safe).