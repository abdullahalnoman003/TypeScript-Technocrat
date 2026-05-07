# How the Four OOP Pillars Make Big Code Projects Easier

## Introduction

Imagine we are building a school management system that handles students, teachers, and classes. If we mix everything together without organization, the code becomes a mess. Object-Oriented Programming (OOP) is a way to organize our code like a real school is organized. The four pillars Inheritance, Polymorphism, Abstraction, and Encapsulation help us build systems that are easy to understand, easy to extend, and easy to fix.

## 1. Inheritance: Sharing Common Traits

Inheritance means a child class can use properties and methods from a parent class. Think of it like how all students in a school are "People" first, then they become "Students".

```ts
class SchoolPerson {
  constructor(public name: string, public id: number) {}

  getInfo(): string {
    return `${this.name} (ID: ${this.id})`;
  }
}

class Student extends SchoolPerson {
  constructor(name: string, id: number, public grade: string) {
    super(name, id);
  }
}
```

Now both `Student` and any other school person (Teacher, Principal) automatically have `getInfo()`. We do not repeat the same code.

## 2. Polymorphism: Different Ways to Do the Same Thing

Polymorphism means different classes can do the same task in different ways, but with the same name.

```ts
abstract class Messenger {
  abstract notify(message: string): string;
}

class SMSMessenger extends Messenger {
  notify(message: string): string {
    return `SMS sent: ${message}`;
  }
}

class EmailMessenger extends Messenger {
  notify(message: string): string {
    return `Email sent: ${message}`;
  }
}

function sendAlert(messenger: Messenger, text: string): string {
  return messenger.notify(text);
}
```

We use `notify()` for both SMS and Email. The system handles each differently, but we write simple code. Later, we can add Facebook or WhatsApp without changing other code.

## 3. Abstraction: Showing Only What is Important

Abstraction means we hide the complicated details and show only what the user needs to know.

```ts
abstract class PaymentSystem {
  abstract pay(amount: number): string;
}

class BangladeshBank extends PaymentSystem {
  pay(amount: number): string {
    // Inside, we handle bank API, checking, errors, and confirmations
    // But the user only sees the result
    return `Money deposited: ${amount} Taka`;
  }
}
```

When we ask the bank to take payment, we do not need to know how the bank works internally. We just know it will take the money and tell us if it worked.

## 4. Encapsulation: Keeping Data Safe

Encapsulation means we keep important data private and only let people change it in safe ways.

```ts
class StudentAccount {
  private marks: number;

  constructor(startingMarks: number) {
    this.marks = startingMarks;
  }

  addMarks(newMarks: number): void {
    if (newMarks > 0) {
      this.marks += newMarks;
    }
  }

  getMarks(): number {
    return this.marks;
  }
}
```

`marks` is private no one can change it directly. They can only use `addMarks()`, which makes sure we do not add negative marks or other wrong values. This keeps the data safe.

## How These Pillars Work Together

In a big school system, all four principles work together:

- **Inheritance:** All school people (teachers, students, staff) share basic properties like name and ID.
- **Polymorphism:** They all mark attendance, but teachers enter it one way, students get marked automatically another way.
- **Abstraction:** The principal does not care how payment processing works just that it works.
- **Encapsulation:** Student marks are protected only teachers can change them through proper methods.

Together, they make the code easy to read, safe to change, and simple to add new features.

## Conclusion

The four OOP pillars are like the structure of a school building they keep everything organized and stable. They help us avoid writing the same code twice, design systems that work well, and make changes safely. Using these principles means less stress when we add new features, easier teamwork, and code that lasts longer. It is like building a school properly instead of randomly takes planning first, but saves problems later.
