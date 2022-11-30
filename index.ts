/*** Object with any string property ***/
interface Names {
  [id: string]: string
}

const colors: Names = {
  'dc3z42': 'John'
};

/***  Object with all properties from enum. Mapped Type ***/
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

/***  Object with properties from enum. Mapped Type ***/
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

