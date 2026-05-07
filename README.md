# TypeScript Fundamentals: Problem Solving and Architecture

A  learning repository demonstrating core TypeScript concepts through practical problem-solving exercises and in-depth architectural discussions.

## Overview

This repository contains solutions to fundamental TypeScript challenges and detailed blog posts exploring type safety and object-oriented design principles. The content is structured to build understanding from basic data manipulation to advanced design patterns, covering data typing, interfaces, class hierarchies, and type checking.

## Contents

### Problem-Solving Solutions (`solutions.ts`)

Seven progressively challenging TypeScript problems demonstrating key language features:

#### Problem 1: Array Filtering
Filter even numbers from an array.
- **Input:** `[1, 2, 3, 4, 5, 6]`
- **Output:** `[2, 4, 6]`

#### Problem 2: String Reversal
Reverse a string using array transformations.
- **Input:** `"typescript"`
- **Output:** `"tpircsepyt"`

#### Problem 3: Type Guards
Use union types and runtime type checking to identify string or number types.
- **Input:** `"Hello"` or `42`
- **Output:** `"String"` or `"Number"`

#### Problem 4: Generic Functions with Constraints
Type-safe property access using generics and keyof constraints.
- **Input:** `{ id: 1, name: "John Doe", age: 21 }`, key: `"name"`
- **Output:** `"John Doe"`

#### Problem 5: Interface Composition
Extend a Book interface with an `isRead` property using intersection types.
- **Input:** `{ title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 }`
- **Output:** `{ title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024, isRead: true }`

#### Problem 6: Class Inheritance
Build a Student class that extends Person and includes a method for detailed output.
- **Input:** `new Student("Alice", 20, "A")` → `getDetails()`
- **Output:** `"Name: Alice, Age: 20, Grade: A"`

#### Problem 7: Array Intersection
Find elements present in both arrays.
- **Input:** `[1, 2, 3, 4, 5]`, `[3, 4, 5, 6, 7]`
- **Output:** `[3, 4, 5]`

Each solution adheres to best coding practices: proper typing, meaningful variable names, exact output formatting, and clean code without unnecessary comments.

### Blog Posts

This repository includes two in-depth blog posts selected from the following topics:

#### 1. Type Safety: `any` vs `unknown` (`blog-1.md`)

Explores the critical difference between TypeScript's permissive `any` type and the safer `unknown` type. The post covers:

- Why `any` bypasses type checking and creates maintainability risks
- How `unknown` enforces explicit type validation
- Type narrowing techniques: `typeof`, `instanceof`, custom type guards
- Practical examples demonstrating safer data handling patterns

**Key Takeaway:** Choosing `unknown` for uncertain data forces defensive programming and prevents silent runtime errors.

#### 2. Object-Oriented Programming Pillars (`blog-2.md`)

A deep dive into the four pillars of OOP (Inheritance, Polymorphism, Abstraction, Encapsulation) and their application in large TypeScript systems:

- **Inheritance** - Code reuse through class hierarchies
- **Polymorphism** - Flexible behavior through shared interfaces
- **Abstraction** - Hiding complexity and exposing essential operations
- **Encapsulation** - Protecting internal state and invariants

Includes real-world examples showing how these principles reduce coupling, improve extensibility, and help manage logic in production-grade systems.

**Key Takeaway:** Proper application of OOP pillars scales codebases from prototype to production-grade systems.

## Key Concepts Covered

- **Data Typing:** Primitives, union types, interfaces, and type annotations
- **Arrays and Strings:** Filtering, reversing, and finding intersections
- **Type Guards and Narrowing:** Identifying and validating types at runtime
- **Generics and Constraints:** Building reusable, type-safe functions
- **Interfaces and Composition:** Designing object contracts and extending types
- **Class Hierarchies:** Inheritance, polymorphism, and method overriding
- **Encapsulation:** Access modifiers and protecting internal state
- **Type Safety:** Choosing safer alternatives and avoiding type-related bugs
- **Code Quality:** Clean implementation, meaningful naming, and best practices

## Technologies

- TypeScript
- Node.js (for running solutions)

## Usage

Review the solutions in `solutions.ts` and study the blog posts for deeper understanding of each concept. The code examples are self-contained and can be tested locally with a TypeScript compiler.

### Coding Standards

All solutions follow these best practices:

- **Exact Function Names:** Match the problem specifications precisely
- **Exact Output Format:** Return values match sample outputs with correct spacing, punctuation, and capitalization
- **Clean Code:** Meaningful variable and class names, no unnecessary comments
- **No Debug Output:** No `console.log` statements; only return values
- **Type Safety:** Full TypeScript typing with proper constraints

### File Structure

```text
├── solutions.ts
├── blog-1.md
├── blog-2.md
└── README.md
```

## License

This learning material is provided as-is for educational purposes.
