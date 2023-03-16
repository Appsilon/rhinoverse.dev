# rhinoverse.dev

The landing page for Rhinoverse: a collection of open-source R packages for enterprise Shiny apps.

## <u>Development</u>

Install all the necessary dependencies based on package.json file:
```
npm install
```
In the project directory, you can run:
```
npm start
```
to run the app in the development mode.
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.


## <u>Editing Content</u>

Grid of hexagonal cells and packages descriptions are generated dynamically in JS. In order to **edit packages content**, like descriptions and links, or to **add new package** to the landing page, you basically need to modify `libraries.js` and/or `hexData.js` files.

### `libraries.js`

This file contains an array of objects defining all the packages. Each object has specific keys:
- `id` - string to be used to create css classes and find SVG icon file with exactly the same name
- `heading` - string being a package title
- `paragraphs` - array of strings describing a package
- `repoLink` - url address of github repo
- `demoLink` - url address of demo app


### `hexData.js`

The file contains nested arrays for each media query breakpoint. It represents the actual hexagonal layout of all cells and their content and properties.
1. The **layout** is an array containing another arrays serving as grid's rows.
2. Each **row's** element is an array representing single cell.
3. Each **cell's** first element is a number related to its appearance (css class)
4. Each cell's second element is an object with optional keys:

- `library` - name of the library matching SVG file name and library id in libraries.js
- `title` - string displayed below SVG icon on mobile devices, if `library` is provided
- `logo` - id of logo SVG symbol
- `url` - url specified for a link element
- `text` - string displayed within the cell

To have more clear visual representiation of hexagonal grid in code, it's recommended to assign an object to one-letter variable prefixed by `_` sign, e.g. `_A`. This way it's easier to modify and add new cells to existing layouts.

### SVG file

If you are adding a new package, please provide SVG file with a logo and place it in `static/svg/` directory. SVG file name should be the same as the `id` specified in `libraries.js` and `library` specified in `hexData.js`, in order to be displayed correctly.

## <u>Deployment</u>
To deploy a newer version of the webpage simply run:
```
npm run deploy
```
Webpage under [rhinoverse.dev](https://rhinoverse.dev/) domain will be automatically updated.
