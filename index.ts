/*** Example 1. Object with any string property ***/
interface Names {
  [id: string]: string
}

const colors: Names = {
  'dc3z42': 'John'
};

/*** Example 2. Object with all properties from enum. Mapped Type ***/
enum Theme {
  dark = 'dark',
  light = 'light'
}

type ThemeLogos = {
  [themeName in Theme]: string;
}

const themeLogos: ThemeLogos = {
  [Theme.dark]: './dark-logo.png',
  [Theme.light]: './light-logo.png' 
};

/*** Example 3. Object with properties from enum. Mapped Type ***/
enum Bird {
  eagle = 'eagle',
  dove = 'dove',
  parrot = 'parrot'
}

type BirdLifeSpan = {
  [bird in Bird]?: string;
}

const birdLifeSpan: BirdLifeSpan = {
  [Bird.dove]: '1-2 years',
  [Bird.eagle]: '10-20 years'
};

/*** Example 4. Generic ***/
function identity<T>(val: T): T {
  return val;
}

identity<number>(10);

/*** Example 5. Generic match some interface ***/
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

/*** Example 6. Function with error throw ***/
function throwError(): never {
  throw Error('Data is not valid')
}

/*** Example 7. Remove from union ***/

type Animals = 'Dog' | 'Cat' | 'Fish' | 'Bird' | 'Butterfly';

type RemoveWhoCanFly<T> = T extends 'Bird' | 'Butterfly' ? never : T;
type CannotFly = RemoveWhoCanFly<Animals>;

type CannotFlyWithExclude = Exclude<Animals, 'Bird' | 'Butterfly'>