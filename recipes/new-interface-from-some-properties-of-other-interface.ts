/*** New interface from some properties of other interface ***/

interface Form {
  name: string;
  age: number;
  country: string;
}

const optionalField: Record<Extract<keyof Form, 'country'>, boolean> = {
  country: true
};