// Please take a look at readme file to have a better understanding of the data
// structure used here.

// To have more clear visual representiation of hexagonal grid in code,
// it's recommended to assign an object to one-letter variable
// prefixed by `_` sign, e.g. `_A`. The variables are used in multi-dimensional
// arrays below, representing layouts.
// This way it's easier to modify and add new cells to existing layouts.

// Blank cell representing coloured hexagon shape
const __ = {};
// Appsilon Logo
const _A = {
  logo: 'appsilon-logo',
  url: 'https://appsilon.com/'
};
// Shiny.tools animated SVG logo
const _L = {
  logo: 'logo'
};
// Shiny.semantic cell
const _S = {
  library: 'shiny-semantic',
  title: 'shiny.semantic'
};
//Semantic.dashboard cell
const _D = {
  library: 'semantic-dashboard',
  title: 'semantic.dashboard'
};
// Shiny.info cell
const _I = {
  library: 'shiny-info',
  title: 'shiny.info'
};
// Shiny.router cell
const _R = {
  library: 'shiny-router',
  title: 'shiny.router'
};
// Shiny.i18n cell
const _N = {
  library: 'shiny-i18n',
  title: 'shiny.i18n'
};
// Text cell
const _W = {
  text: 'Welcome to the world of ...'
}
// Text cell
const _T = {
  text: '... shiny.tools'
}

// Each constant below represents layout for specific screens.
// Please take a look at readme file for more detailed information.

// Number inside an array defines css class and visual appearance of each cell.
// Cell seems to be more in the back if the number is higher.
// Variable inside an array is an object specified above.

// Layout for desktop screens
export const hexXl = [
  [     [4,_A], [3,__], [2,__], [1,__], [0,__], [0,__], [0,__], [0,__], [0,__]     ],
  [ [2,__], [2,__], [1,__], [1,__], [0,_L], [1,__], [1,__], [0,__], [1,__], [0,__] ],
  [     [0,__], [1,__], [0,__], [0,__], [1,_S], [2,_D], [2,__], [2,__], [2,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [2,__], [2,_I], [3,_R], [4,__], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [2,__], [3,__], [4,_N], [4,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [1,__], [3,__], [4,__], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [2,__], [3,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [2,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__]     ]
];

// Layout for laptop and smaller desktop screens
export const hexLg = [
  [     [3,_A], [2,__], [1,__], [0,__], [0,__], [0,__], [0,__]     ],
  [ [2,__], [1,__], [1,__], [0,_L], [1,__], [1,__], [0,__], [0,__] ],
  [     [1,__], [0,__], [0,__], [1,_S], [2,_D], [2,__], [2,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [2,__], [2,_I], [3,_R], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [2,__], [3,__], [4,_N]     ],
  [ [0,__], [0,__], [0,__], [0,__], [1,__], [2,__], [3,__], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [2,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__] ]
];

// Layout for tablet screens
export const hexMd = [
  [     [3,_A], [2,__], [1,__], [0,__], [0,__], [0,__]     ],
  [ [2,__], [1,__], [1,__], [0,_L], [1,__], [1,__], [1,__] ],
  [     [0,__], [0,__], [0,__], [1,_S], [2,_D], [3,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [2,__], [3,_I], [4,__] ],
  [     [0,__], [0,__], [0,__], [1,__], [2,_R], [3,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [1,__], [2,_N], [3,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [1,__], [1,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__] ]
];

// Layout for small tablet / big mobile screens
export const hexSm = [
  [     [4,_A], [3,__], [2,__], [1,__]     ],
  [ [3,__], [3,__], [1,__], [0,__], [0,__] ],
  [     [1,__], [2,_W], [0,__], [0,__]     ],
  [ [0,__], [0,__], [1,_L], [0,__], [0,__] ],
  [     [0,__], [0,__], [2,_T], [1,__]     ],
  [ [0,__], [0,__], [1,_S], [2,__], [1,__] ],
  [     [0,__], [1,__], [2,_D], [3,__]     ],
  [ [2,__], [2,__], [2,_I], [3,__], [4,__] ],
  [     [2,__], [2,__], [3,_R], [4,__]     ],
  [ [3,__], [3,__], [4,_N], [4,__], [4,__] ],
  [     [4,__], [4,__], [4,__], [4,__]     ],
  [ [4,__], [4,__], [4,__], [4,__], [4,__] ]
];

// Layout for mobile screens
export const hexXs = [
  [     [4,_A], [3,__], [2,__]     ],
  [ [0,__], [2,_W], [1,__], [0,__] ],
  [     [0,__], [1,_L], [0,__]     ],
  [ [0,__], [0,__], [2,_T], [0,__] ],
  [     [0,__], [2,_S], [2,__]     ],
  [ [0,__], [1,__], [1,_D], [3,__] ],
  [     [2,__], [2,_I], [3,__]     ],
  [ [2,__], [3,_R], [3,__], [4,__] ],
  [     [3,__], [3,_N], [4,__]     ],
  [ [4,__], [4,__], [4,__], [4,__] ],
  [     [4,__], [4,__], [4,__]     ]
];