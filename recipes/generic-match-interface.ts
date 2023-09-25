/*** Example 4. Generic match some interface ***/
interface Pet {
  name: string
}

interface Dog {
  name: string;
  age: number;
}

function getName<T extends Pet>(val: T): string {
  return val.name;
}

getName<Dog>({name: 'Bark', age: 10});
getName<Dog>({name: 'Bark', age: 10});