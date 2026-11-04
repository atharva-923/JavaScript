# JavaScript Learning Repository

A personal, structured collection of JavaScript notes, practical code examples, and exercises created while mastering the language from the ground up.

The repository is organized by module, progressing from core primitives to advanced functional patterns, control structures, and iterable collections.

---

## Table of Contents

- [Folder Structure](#folder-structure)
- [Detailed Module Breakdown](#detailed-module-breakdown)
  - [1. Basics 1 - Fundamentals](#1-basics-1---fundamentals)
  - [2. Basics 2 - Arrays & Objects](#2-basics-2---arrays--objects)
  - [3. Basics 3 - Functions & Execution](#3-basics-3---functions--execution)
  - [4. Control Flow - Conditionals & Logic](#4-control-flow---conditionals--logic)
  - [5. Iterations - Loops & Iterators](#5-iterations---loops--iterators)
- [Learning Progress](#learning-progress)
- [How to Run Locally](#how-to-run-locally)
- [Tech Stack & Tools](#tech-stack--tools)
- [Author](#author)

---

## Folder Structure

```text
JavaScript/
├── Basics_1/
│   ├── variables.js          # Variable declarations (let, const, var) and scoping
│   ├── datatypes.js          # Primitive & non-primitive data types, typeof checks
│   ├── conversion.js         # Type casting, conversion rules, and operator coercion
│   ├── string.js             # String operations, interpolation, and built-in methods
│   ├── nums_maths.js         # Numbers, rounding, formatting, and the Math library
│   └── dates.js              # Date & Time manipulation, methods, and timestamps
│
├── Basics_2/
│   ├── array_0.js            # Array initialization, mutation methods, slice vs splice
│   ├── array_1.js            # Spread operator, concatenation, flattening, Array utilities
│   ├── objects_0.js          # Object literals, Symbol keys, bracket notation, freeze
│   └── objects_1.js          # Nesting, Object.assign(), spread, keys/values, destructuring
│
├── Basics_3/
│   ├── functions_0.js        # Declarations, parameters, rest operator, passing objects/arrays
│   ├── scopes.js             # Block vs global scope, lexical scoping, hoisting nuances
│   ├── arrows.js             # `this` context, arrow functions (implicit & explicit return)
│   └── iife.js               # Immediately Invoked Function Expressions (named & anonymous)
│
├── control_flow/
│   ├── one.js                # if/else conditionals, comparison and logical operators
│   ├── switch.js             # Switch-case statements and break behavior
│   └── truthy.js             # Truthy/falsy values, ternary operator, nullish coalescing (??)
│
├── Iterations/
│   ├── loops_0.js            # Classic for loops, nested loops, break, and continue
│   ├── do_while.js           # while and do-while loops
│   ├── loops_1.js            # for...of loops, iterating strings, arrays, and Map objects
│   ├── loops_2.js            # for...in loops for objects and array indices
│   └── For_Each.js           # Array.prototype.forEach(), callback patterns, array of objects
│
├── .gitignore
└── README.md
```

---

## Detailed Module Breakdown

### 1. Basics 1 - Fundamentals

| File | Key Concepts Covered |
| :--- | :--- |
| [`variables.js`](Basics_1/variables.js) | `const`, `let`, legacy `var`, re-assignment rules, block vs functional scope, `console.table`. |
| [`datatypes.js`](Basics_1/datatypes.js) | Primitive types (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`), reference types (`object`, `array`, `function`), and `typeof` quirks. |
| [`conversion.js`](Basics_1/conversion.js) | Explicit and implicit type conversions (`Number()`, `String()`, `Boolean()`), string-number concatenation rules, increment/decrement (`++`, `--`) prefix vs postfix. |
| [`string.js`](Basics_1/string.js) | String primitives vs objects, template literals (string interpolation), string methods (`charAt`, `indexOf`, `substring`, `slice`, `trim`, `replace`, `includes`, `split`). |
| [`nums_maths.js`](Basics_1/nums_maths.js) | `Number` methods (`toFixed`, `toPrecision`, `toLocaleString`), and `Math` utilities (`Math.round`, `Math.ceil`, `Math.floor`, `Math.min`, `Math.max`, `Math.random` range formulas). |
| [`dates.js`](Basics_1/dates.js) | Creating dates, date string formatting (`toDateString`, `toISOString`, `toLocaleString`), timestamps via `Date.now()` and `.getTime()`. |

---

### 2. Basics 2 - Arrays & Objects

| File | Key Concepts Covered |
| :--- | :--- |
| [`array_0.js`](Basics_2/array_0.js) | Array creation, basic mutation (`push`, `pop`, `unshift`, `shift`), querying (`includes`, `indexOf`), array joining (`join`), and the critical difference between `slice` and `splice` (mutation vs non-mutation). |
| [`array_1.js`](Basics_2/array_1.js) | Merging arrays (`concat`, spread operator `...`), flattening multidimensional arrays (`flat(Infinity)`), utility methods (`Array.isArray`, `Array.from`, `Array.of`). |
| [`objects_0.js`](Basics_2/objects_0.js) | Object literal syntax, dot vs bracket notation, using `Symbol` as a computed key, modifying properties, preventing mutations with `Object.freeze()`, and binding methods using `this`. |
| [`objects_1.js`](Basics_2/objects_1.js) | Singleton vs non-singleton objects, nested objects, combining objects (`Object.assign` vs spread operator), inspecting objects (`Object.keys`, `Object.values`, `Object.entries`), checking properties (`hasOwnProperty`), and object destructuring. |

---

### 3. Basics 3 - Functions & Execution

| File | Key Concepts Covered |
| :--- | :--- |
| [`functions_0.js`](Basics_3/functions_0.js) | Function declarations, return values, parameters vs arguments, default fallback handling, rest parameter syntax (`...rest`) for dynamic arguments, passing objects and arrays into functions. |
| [`scopes.js`](Basics_3/scopes.js) | Global scope vs block scope, variable shadowing, nested function execution and lexical scope, function declaration hoisting vs function expression initialization. |
| [`arrows.js`](Basics_3/arrows.js) | Execution context and the `this` keyword, ES6 arrow function syntax (`=>`), explicit return (curly braces `{ return ... }`) vs implicit return (one-liners / parentheses `()`). |
| [`iife.js`](Basics_3/iife.js) | Immediately Invoked Function Expressions (IIFE), preventing global scope pollution, named vs anonymous/arrow IIFE patterns, and mandatory semicolon termination. |

---

### 4. Control Flow - Conditionals & Logic

| File | Key Concepts Covered |
| :--- | :--- |
| [`one.js`](control_flow/one.js) | Conditional execution using `if`, `else if`, `else`, comparison operators (`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`), logical AND (`&&`) and OR (`\|\|`) branching. |
| [`switch.js`](control_flow/switch.js) | Multi-case decision making with `switch...case`, importance of `break` statements to prevent fallthrough, and fallback handling with `default`. |
| [`truthy.js`](control_flow/truthy.js) | Truthy vs falsy values in JavaScript, detecting empty arrays and objects, the Nullish Coalescing Operator (`??`) vs OR (`\|\|`), and the concise ternary operator (`condition ? exprIfTrue : exprIfFalse`). |

---

### 5. Iterations - Loops & Iterators

| File | Key Concepts Covered |
| :--- | :--- |
| [`loops_0.js`](Iterations/loops_0.js) | Traditional `for` loop syntax, nested loops (e.g., generating multiplication tables), loop traversal over arrays, loop control flow with `break` (exit early) and `continue` (skip iteration). |
| [`do_while.js`](Iterations/do_while.js) | `while` loop conditions, array traversal with `while`, `do...while` loop semantics (guaranteed at least one execution). |
| [`loops_1.js`](Iterations/loops_1.js) | `for...of` loops over iterable objects (arrays, strings), working with `Map` data structures (`set`, iterating key-value pairs with array destructuring `[key, value]`). |
| [`loops_2.js`](Iterations/loops_2.js) | `for...in` loops for enumerating object properties and array indices. |
| [`For_Each.js`](Iterations/For_Each.js) | Higher-order array iteration via `.forEach()`, passing inline anonymous functions, arrow functions, and named callbacks; iterating over arrays of objects (common API response patterns). |

---

## Learning Progress

- [x] JavaScript Basics (Variables, Constants, Data Types)
- [x] Type Conversions & Coercion
- [x] Strings & String Methods
- [x] Numbers, Math, and Dates
- [x] Arrays & Array Methods
- [x] Objects & Object Manipulation
- [x] Functions, Parameters, and Rest Operator
- [x] Scope (Global, Block, Lexical) & Hoisting
- [x] Arrow Functions & `this` Context
- [x] Immediately Invoked Function Expressions (IIFE)
- [x] Control Flow (if/else, switch, truthy/falsy, nullish coalescing, ternary)
- [x] Loops & Iterations (`for`, `while`, `do-while`, `for...of`, `for...in`, `forEach`, `Map`)
- [ ] Array Map, Filter, and Reduce Methods
- [ ] DOM Manipulation & Selectors
- [ ] Event Handling
- [ ] Asynchronous JavaScript (Callbacks, Promises, Async/Await)
- [ ] Fetch API & HTTP Requests
- [ ] Object-Oriented JavaScript (Prototypes, Classes)
- [ ] Mini Projects & Practical Applications

---

## How to Run Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

Verify installation:
```bash
node -v
```

### Running Any File

Clone the repository and run any file directly with Node:

```bash
# Clone the repository
git clone https://github.com/atharva-923/JavaScript.git
cd JavaScript

# Run individual scripts
node Basics_1/variables.js
node Basics_2/array_0.js
node Basics_3/arrows.js
node control_flow/truthy.js
node Iterations/For_Each.js
```

---

## Tech Stack & Tools

- **Runtime / Language:** JavaScript (ES6+) / Node.js
- **Editor:** Visual Studio Code
- **Version Control:** Git & GitHub

---

## Author

**Atharva**
- GitHub: [@atharva-923](https://github.com/atharva-923)

---

> *Learning JavaScript one concept at a time.*
