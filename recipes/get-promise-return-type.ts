/*** Get promise return type ***/
function fetchData(): Promise<string> {
  return new Promise(resolve => resolve('data'))
}

type fetchDataResponse = Awaited<ReturnType<typeof fetchData>>;