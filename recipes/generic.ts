/*** Generic ***/

function identity<T>(val: T): T {
  return val;
}

identity<number>(10);
