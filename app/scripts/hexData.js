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
// Shiny.benchmark cell
const _B = {
  library: 'shiny-benchmark',
  title: 'shiny.benchmark'
};
// Rhinoverse animated SVG logo
const _L = {
  logo: 'logo'
};
// Shiny.fluent cell
const _S = {
  library: 'shiny-fluent',
  title: 'shiny.fluent'
};
// Semantic.dashboard cell
const _D = {
  library: 'semantic-dashboard',
  title: 'semantic.dashboard'
};
// Shiny.worker cell
const _W = {
  library: 'shiny-worker',
  title: 'shiny.worker'
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
// Shiny.react
const _C = {
  library: 'shiny-react',
  title: 'shiny.react'
};
// Shiny.fluent
const _F = {
  library: 'shiny-semantic',
  title: 'shiny.semantic'
};
// data.validator
const _V = {
  library: 'data-validator',
  title: 'data.validator'
};
// rhino
const _H = {
  library: 'rhino',
  title: 'Rhino'
};
// shiny.blueprint
const _E = {
  library: 'shiny-blueprint',
  title: 'shiny.blueprint'
};
// shiny.telemetry
const _G = {
  library: 'shiny-telemetry',
  title: 'shiny.telemetry'
};
// shiny.telemetry
const _J = {
  library: 'shiny-emptystate',
  title: 'shiny.emptystate'
};
// Text cell
const _X = {
  text: 'Welcome to the world of ...'
}
// Text cell
const _T = {
  text: '... Rhinoverse'
}

// Each constant below represents layout for specific screens.
// Please take a look at readme file for more detailed information.

// Number inside an array defines css class and visual appearance of each cell.
// Cell seems to be more in the back if the number is higher.
// Variable inside an array is an object specified above.

// Layout for desktop screens
export const hexXl = [
  [     [4,_A], [3,__], [2,__], [1,__], [0,__], [0,__], [0,__], [0,__], [0,__]     ],
  [ [2,__], [2,__], [1,__], [1,__], [0,_L], [1,_H], [1,_B], [0,__], [1,_J], [0,__] ],
  [     [0,__], [1,__], [0,__], [0,__], [1,_S], [2,_C], [2,_F], [2,_E], [2,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [2,_W], [2,_R], [3,_V], [4,_G], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [2,_D], [3,_I], [4,_N], [4,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [1,__], [3,__], [4,__], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [2,__], [3,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [2,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__]     ]
];

// Layout for laptop and smaller desktop screens
export const hexLg = [
  [     [3,_A], [2,__], [1,__], [0,__], [0,__], [0,__], [0,__]     ],
  [ [2,__], [1,__], [1,__], [0,_L], [1,_H], [1,_B], [0,__], [0,__] ],
  [     [1,__], [0,__], [0,__], [1,_S], [2,_C], [2,_F], [2,_E]     ],
  [ [0,__], [0,__], [0,__], [0,__], [2,_W], [2,_R], [3,_V], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [2,_D], [3,_I], [4,_N]     ],
  [ [0,__], [0,__], [0,__], [0,__], [1,__], [2,_G], [3,_J], [4,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [0,__], [1,__], [2,__]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__] ]
];

// Layout for tablet screens
export const hexMd = [
  [     [3,_A], [2,__], [1,__], [0,__], [0,__], [0,__]     ],
  [ [2,__], [1,__], [1,__], [0,_L], [1,_H], [1,_B], [1,__] ],
  [     [0,__], [0,__], [0,__], [1,_S], [2,_C], [3,_F]     ],
  [ [0,__], [0,__], [0,__], [0,__], [2,_W], [3,_R], [4,__] ],
  [     [0,__], [0,__], [0,__], [1,_V], [2,_D], [3,_I]     ],
  [ [0,__], [0,__], [0,__], [0,__], [1,_E], [2,_N], [3,__] ],
  [     [0,__], [0,__], [0,__], [0,__], [1,_G], [1,_J]     ],
  [ [0,__], [0,__], [0,__], [0,__], [0,__], [0,__], [0,__] ]
];

// Layout for small tablet / big mobile screens
export const hexSm = [
  [     [4,_A], [3,__], [2,__], [1,__]     ],
  [ [3,__], [3,__], [1,__], [0,__], [0,__] ],
  [     [1,__], [2,_X], [0,__], [0,__]     ],
  [ [0,__], [0,__], [1,_L], [0,__], [0,__] ],
  [     [0,__], [0,__], [2,_T], [1,__]     ],
  [ [0,__], [0,__], [1,_S], [2,_H], [1,__] ],
  [     [0,__], [1,_C], [2,_F], [3,__]     ],
  [ [2,__], [2,_W], [2,_R], [3,_V], [4,__] ],
  [     [2,__], [2,_D], [3,_I], [4,__]     ],
  [ [2,__], [2,_E], [2,_N], [3,_B], [4,__] ],
  [     [2,__], [2,_G], [3,_J], [4,__]     ],
  [ [3,__], [3,__], [4,__], [4,__], [4,__] ]
];

// Layout for mobile screens
export const hexXs = [
  [     [4,_A], [3,__], [2,__]     ],
  [ [0,__], [2,_X], [1,__], [0,__] ],
  [     [0,__], [1,_L], [0,__]     ],
  [ [0,__], [0,__], [2,_T], [0,__] ],
  [     [0,__], [2,_H], [2,__]     ],
  [ [0,__], [1,_S], [1,_C], [3,__] ],
  [     [2,__], [2,_F], [3,__]     ],
  [ [2,__], [3,_W], [3,_R], [4,__] ],
  [     [3,__], [3,_V], [4,__]     ],
  [ [3,__], [3,_D], [3,_I], [4,__] ],
  [     [3,__], [3,_N], [4,__]     ],
  [ [4,__], [4,_B], [4,_E], [4,__] ],
  [     [4,__], [4,_G], [4,__]     ],
  [ [4,__], [4,_J], [4,__], [4,__] ]
];
