// Problem 1
const filterEvenNumbers = (num: number[]): number[] => {
  const evenArray: number[] = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenArray.push(num[i]);
    }
  }
  return evenArray;
};

// Problem 2
const reverseString = (str: string): string => {
  let stringToArray: string[] = str.split("");
  let finalArray: string = stringToArray.reverse().join("");
  return finalArray;
};

// Problem 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  }
  return "Number";
};

// Problem 4

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}


const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  const newObj  = { ...book, isRead: true };
  return newObj;
};


// Problem 6
class Person {
    public name: string;
    public age: number;
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    public grade : string;
    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

// Problem 7

const getIntersection = (arr1: number[], arr2: number[]): number[] =>{
    let finalArray : number[] = arr1.filter((n)=>arr2.includes(n));
    return finalArray;
}
