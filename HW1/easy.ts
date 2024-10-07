// Task 1:
//Status: Done
type MyPick<T, K extends keyof T> = { [P in K] : T[P] };

interface Person {
  name: string;
  surname: string;
}

type LoginUser = Pick<Person, 'name' | 'surname'>;

type MyLoginUser = MyPick<Person, 'name' | 'surname'>;

const person: LoginUser = { name: 'John', surname: 'Dorian'};

const myPerson: MyLoginUser = { name: 'MyJohn', surname: 'MyDorian'};

console.log('Default Pick:');
console.log(person);

console.log('My Pick:');
console.log(myPerson);

//Task 2: 
//Status: Done
type NOfArray<ArrayObj extends any[], N extends number> = ArrayObj[N];

type Arr = [number, string];
type First = NOfArray<Arr, 0>; 

const exArr: Arr = [1, "2"];
const firstEl: First = exArr[0];
console.log(typeof firstEl); 

//Task 3:
//Status: Done
type Unshift<ArrayType extends unknown[], Elem> = [Elem, ...ArrayType];

type UnshiftedArray = Unshift<[number, string], number>; 

const example: UnshiftedArray = [55, 5, "string"];
console.log(example); 

//Task 4:
//Status: Done
type MyExclude<T, U> = T extends U ? never : T;

type Name = MyExclude<"John" | "Olaf" | "Donald", "Olaf">; 
const fname : Name = "Donald"
console.log(fname);
