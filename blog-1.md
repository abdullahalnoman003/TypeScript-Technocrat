# Why `any` Is a Type Safety Hole and `unknown` Is the Safer Alternative

## Introduction

Imagine we are building a shop management system. The system gets information from different sources a mobile app, a web form, or even a text message. We do not always know what shape this data will have. TypeScript gives us ways to handle this uncertainty, but some ways are safer than others. The two common choices are `any` and `unknown`. They might look similar at first, but they lead to very different results.

## Why `any` Is Called a Type Safety Hole

The `any` type turns off TypeScript's protection for a variable. Once we use `any`, TypeScript stops checking what we do with that value. It allows almost anything without warning.

```ts
let shopData: any = "Noman";

// No error, even though this is wrong.
console.log(shopData.toFixed(2));
```

In this example, `toFixed` is a method for numbers, but `shopData` is a person's name (text). TypeScript should stop us, but `any` removes that protection. In big projects, this problem spreads quietly and causes crashes in unexpected places.

## Why `unknown` Is Safer

The `unknown` type also handles uncertain data, but it makes us check what the data is before we use it.

```ts
let shopData: unknown = "Abdullah";

// TypeScript error: We cannot use shopData without checking first.
// console.log(shopData.toUpperCase());
```

We cannot directly use properties or methods on `unknown` data. We must first check what type it really is. This design forces us to be careful and think about our code.

## Type Narrowing: The Key Concept

Type narrowing means we check what the data really is, step by step, until we know for sure.

```ts
function printShopInfo(data: unknown): string {
  // First, check if it is text
  if (typeof data === "string") {
    return data.toUpperCase();
  }

  // Then check if it is a number
  if (typeof data === "number") {
    return data.toFixed(2);
  }

  return "We do not understand this data";
}
```

Inside each `if` block, we know exactly what type the data is, so we can use it safely.

We can check types using simple ways:

- `typeof` for basic types (text, numbers, true/false)
- `instanceof` to check if something is an object of a certain class
- `in` to check if an object has a property
- Custom checks we write ourselves

Example: Let us say we get customer information and we want to check if it is real customer data:

```ts
type Customer = { id: number; name: string };

function isRealCustomer(info: unknown): info is Customer {
  return (
    typeof info === "object" &&
    info !== null &&
    "id" in info &&
    "name" in info
  );
}

function showCustomer(info: unknown): string {
  if (isRealCustomer(info)) {
    return `Customer ID: ${info.id}, Name: ${info.name}`;
  }
  return "This is not valid customer information";
}
```

## Conclusion

any" is easy to use, but it removes the safety that TypeScript gives us. `unknown` keeps us safe by making us check the data before we use it. In real projects, using `unknown` means fewer crashes, clearer code, and easier maintenance. It is like checking the weight on a package before we handle it takes a moment extra, but prevents problems later.
