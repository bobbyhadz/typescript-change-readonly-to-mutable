export {};

// EXAMPLE 1 - Change a readonly property to mutable in TypeScript

// ✅ With Classes
class Employee {
  constructor(public readonly name: string) {
    this.name = name;
  }
}

// 👇️ create utility type
type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

const emp: Mutable<Employee> = new Employee('Bobby Hadz');

emp.name = 'Alice';

console.log(emp.name); // 👉️ 'Alice'

// ---------------------------------------------------

// // EXAMPLE 2 - Example with objects

// // ✅ With Objects
// interface Person {
//   readonly country: string;
// }

// // 👇️ create utility type
// type Mutable<Type> = {
//   -readonly [Key in keyof Type]: Type[Key];
// };

// const obj: Mutable<Person> = {
//   country: 'Germany',
// };

// obj.country = 'Austria';

// console.log(obj); // 👉️ {country: 'Austria'}

// ---------------------------------------------------

// // EXAMPLE 3 - Using a type assertion to cast the type to mutable

// // ✅ With Classes
// class Employee {
//   constructor(public readonly name: string) {
//     this.name = name;
//   }
// }

// type Mutable<Type> = {
//   -readonly [Key in keyof Type]: Type[Key];
// };

// // 👇️ using a type assertion
// const emp = new Employee('Bobby Hadz') as Mutable<Employee>;

// emp.name = 'Alice';

// console.log(emp.name); // 👉️ 'Alice'

// ---------------------------------------------------

// // EXAMPLE 4 - Example with objects

// interface Person {
//   readonly country: string;
// }

// type Mutable<Type> = {
//   -readonly [Key in keyof Type]: Type[Key];
// };

// // 👇️ using type assertion
// const obj = {
//   country: 'Germany',
// } as Mutable<Person>;

// obj.country = 'Austria';

// console.log(obj); // 👉️ {country: 'Austria'}
