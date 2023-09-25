/*** Example 8. String union autocomplete ***/
type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type Color = LooseAutocomplete<'Red' | 'Blue'>;

const red: Color = 'Red';

/*** Example 9. Conditional arguments ***/
type LogInEvent = {
  type: 'login',
  payload: {
    email: string
  }
}

type LogOutEvent = {
  type: 'logout'
}

type AppEvent = LogInEvent | LogOutEvent;

const sendEvent = <Type extends AppEvent['type']>(
  ...args: Extract<AppEvent, {type: Type}> extends { payload: infer TPayload }
  ? [type: Type, payload: TPayload]
  : [Type]
) => {}

sendEvent('login', {email: 'email'})
sendEvent('logout')

/*** Example 10. Globals ***/
// File should be module
export {};

declare global {
  interface State {
    stage: 'init' | 'ready'
  }
}

const currentState: State = {
  stage: 'init'
};


/*** Example 11. Get generic property ***/
function sortByProperty<T, K extends keyof T>(list: T[], key: K): T[] {
  return list.sort((a: T, b: T) => {
    return Number(a[key]) - Number(b[key]);
  })
}

const sortedList = sortByProperty([{
  height: 10,
  width: 10
}, {
  height: 20,
  width: 20
}], 'height');

/*** Example 12. String validation ***/
type Command = Lowercase<`/${string}`>;

const command: Command = '/invite';

/*** Example 13. Function overloading ***/
function getDate(): Date;
function getDate(time: number | string): Date;
function getDate(...args: (string|number)[]): Date {
  if (args[0] === undefined) {
    return new Date()
  } else {
    return new Date(args[0]);
  }
}

getDate();


/*** Example 14. Second key in generic ***/
function getSecondDeepValue<T, AKey extends keyof T, BKey extends keyof T[AKey]>(obj: T, keyA: AKey, keyB: BKey) {
  return obj[keyA][keyB];
}

const info = {
  a: {
    b: 'a.b',
    c: 'a.c'
  },
  b: {
    a: 'b.a',
    d: 'b.d'
  }
}

getSecondDeepValue(info, 'a', 'b');

/*** Example 15. any vs unknown assertion and narrowing ***/
interface User {
  name: string;
}

const userResponse: User = {
  name: 'John'
};
let anyResponse: any = userResponse
let unknownResponse: unknown = userResponse

// next line will trigger error without narrowing
// unknownResponse.name 
anyResponse.name
if (isUsersCollection(unknownResponse)) {
  unknownResponse.name
}

if (isUsersCollection(anyResponse)) {
  anyResponse.name
}

function isUsersCollection(obj: unknown): obj is User {
  if (obj && typeof obj === 'object') {
    return 'name' in obj;
  }
  return false;
}

/*** Example 16. Assertion function ***/
function toUpperCase(str: unknown): string {
  isString(str);
  return str.toUpperCase();
}

function isString(val: any): asserts val is string {
  if (typeof val !== 'string') {
    throw new Error('Not a string');
  }
}

/*** Example 17. Get promise return type ***/
function fetchData(): Promise<string> {
  return new Promise(resolve => resolve('data'))
}

type fetchDataResponse = Awaited<ReturnType<typeof fetchData>>;