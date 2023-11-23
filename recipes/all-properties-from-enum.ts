/*** Object with properties from enum. Mapped Type ***/
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

/*** Or optional ***/

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