import { hexXs, hexSm, hexMd, hexLg, hexXl } from './hexData';
import { libraries } from './libraries';
import { addContributors } from './contributors';
import {
  getCellWidth,
  getRowHeight,
  getSpannedTitle,
  getMedia,
  getSvg,
  getSvgAsImg,
  getTotalColumns,
  createElement, 
  replaceDashesToDots,
  createGithubButton,
  getDefaultLibrary
} from './utils';

const media = [
  { breakpoint: 0, data: hexXs },
  { breakpoint: 480, data: hexSm },
  { breakpoint: 800, data: hexMd },
  { breakpoint: 1024, data: hexLg },
  { breakpoint: 1200, data: hexXl }
];
const hexGrid = document.getElementById('hex-grid');
const infoWrapper = document.getElementById('wrapper-info');
const currentMedia = getMedia(media);
const currentMediaData = currentMedia.data;
let currentMediaBreakpoint = currentMedia.breakpoint;
const mobileBreakpoint = 799;
const defaultLibrary = getDefaultLibrary(libraries);

// get one hexagonal cell ------------------------------------------------------
const getCell = (cell) => {
  const [
    level,
    {
      logo = null,
      library = '',
      title = '',
      url = null,
      text = null
    }] = cell;

  const cellNode = document.createElement('a');
  const blankCellClass = `"
    cell__blank
    ${library ? 'cell__blank--library' : ''}
    ${library ? `cell__blank--${library}` : ''}
    ${library === defaultLibrary ? 'active' : ''}
    ${logo ? `cell__blank--${logo}` : ''}
    ${level ? 'cell__blank--detached' : 'cell__blank--attached'}
    ${level ? `cell__blank--${level}` : ''}
  "`;
  cellNode.className = `cell${library || url ? ' cell--interactive' : ''}`;
  if (library) cellNode.href = `#${library}`;
  // apply plain svg hexagonal shape
  cellNode.innerHTML = getSvg('blank', library, blankCellClass, 100, 115.47);

  // add content to hexagonal cell
  if (library) {
    cellNode.innerHTML += `
      <div class="cell__label">
        ${getSvgAsImg(library, 'cell__logo')}
        <p class="cell__title">${getSpannedTitle(title)}</p>
      </div>
    `
  } else if (url) {
    const link = createElement(
      logo,
      'a',
      logo ? getSvg(null, logo, `${logo}__svg`, 139, 40) : 'Link'
    );
    link.href = url;
    cellNode.appendChild(link);

  } else if (logo) {
    cellNode.innerHTML += getSvg('appLogo', null, logo, 100, 100);

  } else if (text) {
    cellNode.innerHTML += `<p class="cell__text">${text}</p>`
  }
  return cellNode;
}

// generate hexagonal grid -----------------------------------------------------
const generateHexGrid = (data) => {

  const totalInBigRow = getTotalColumns(data);
  const totalInSmallRow = totalInBigRow - 1;
  const newRowMargin = `${-1 / (totalInSmallRow  * 2) / Math.sqrt(3) * 100 - 0.2}%`;
  const newBigRowWidth = `${(totalInBigRow) / totalInSmallRow * 100}%`;
  const newBigRowLeftMargin = `${-1 / (totalInSmallRow * 2) * 100}%`;
  const lastRow = data.length;
  const isEvenRowBigger = data.findIndex(row => row.length === totalInBigRow);
  const rowHeight = getRowHeight(hexGrid.clientWidth, totalInSmallRow);

  // clean container's node structure
  hexGrid.innerHTML = '';

  data.forEach((row, index) => {
    const newRow = document.createElement('div');
    const rowNumber = index + 1;
    newRow.className = 'hex-grid__row';
    newRow.style.marginTop = newRowMargin;
    newRow.style.height = rowHeight;

    // set width and margin of bigger rows
    if ((isEvenRowBigger && rowNumber % 2 === 0) || (!isEvenRowBigger && rowNumber % 2 !== 0)) {
      newRow.style.width = newBigRowWidth;
      newRow.style.marginLeft = newBigRowLeftMargin;
    }
    // set bottom margin of the last row
    if (rowNumber === lastRow) newRow.style.marginBottom = newRowMargin;
    hexGrid.appendChild(newRow);

    // create new cell
    row.forEach(cell => {
      const lastRow = hexGrid.lastElementChild;
      const newCell = getCell(cell);
      newCell.style.width = row % 2 === 0 && isEvenRowBigger
      ? getCellWidth(totalInBigRow)
      : getCellWidth(totalInSmallRow);
      lastRow.appendChild(newCell);
    });
  });
}

const handleInfoVisibility = () => {
  const infoSections = document.querySelectorAll('.info');
  [...infoSections].forEach((section, index) => {
    if (
      currentMediaBreakpoint >= mobileBreakpoint &&
      section.id === defaultLibrary
    ) {
      section.classList.add('info--visible');
    } else {
      section.classList.remove('info--visible');
    }
  });
}

// generate info sections ------------------------------------------------------
const generateInfo = () => {
  libraries.forEach(library => {
    const { id, heading, paragraphs, repoLink, demoLink, docsLink } = library;
    const packageName = replaceDashesToDots(id);
    const section = createElement(`info info--${id}`, 'section');
    section.id = id;
    const hero = createElement(`info__hero info__hero--${id}`);
    const svg = createElement('info__svg', 'svg', getSvgAsImg(id, 'cell__logo'));
    const title = createElement('info__heading', 'h3', heading);
    const description = createElement('info__description');
    const texts = createElement('info__texts');
    paragraphs.forEach(paragraph => {
      const text = createElement('info__text', 'p', paragraph);
      texts.appendChild(text);
    });
    const contributors = createElement(`contributors contributors--${id}`, 'div');
    const contributorsLabel = createElement('contributors__label', 'p', 'Contributors');

    const repoButton = createElement(
      `info__button info__button--${id} info__button--github`,
      'a',
      'Github'
    );
    repoButton.href = repoLink;

    const demoButton = createElement(
      `info__button info__button--${id} info__button--demo`,
      'a',
      'Demo'
    );
    demoButton.href = demoLink;

    const docsButton = createElement(
      `info__button info__button--${id} info__button--docs`,
      'a',
      'Docs'
    );
    docsButton.href = docsLink;

    const starsButton = createElement('info__stars');
    starsButton.innerHTML = createGithubButton(packageName, 'star');

    const backButton = createElement(
      `info__button info__button--${id} info__button--back`,
      'button',
      'Back'
    );
    hero.appendChild(svg);
    hero.appendChild(title);
    contributors.appendChild(contributorsLabel);
    description.appendChild(texts);
    description.appendChild(contributors);
    description.appendChild(repoButton);
    description.appendChild(starsButton);
    description.appendChild(demoButton);
    description.appendChild(docsButton);
    description.appendChild(backButton);
    section.appendChild(hero);
    section.appendChild(description);
    infoWrapper.appendChild(section);
  });
}

// add events to newly generated DOM nodes based on media data
const addMediaEvents = () => {
  let libraryCells = document.querySelectorAll('.cell__blank--library');
  let hexPaths = document.querySelectorAll('.cell__blank--library path');
  let infoSections = document.querySelectorAll('.info');

  [...hexPaths].forEach(path => {
    // on click event
    path.addEventListener('click', function() {
      if (this.tagName === 'path') {
        const cell = this.parentNode;
        const { id } = cell.dataset;
        const currentInfo = document.querySelector(`.info--${id}`);

        // handle cells appearance on desktop
        if (currentMediaBreakpoint >= mobileBreakpoint) {
          [...libraryCells].forEach(cell => cell.classList.remove('active'));
          cell.classList.add('active');
        }

        // handle info section appearance
        [...infoSections].forEach(section => section.classList.remove('info--visible'));
        currentInfo.classList.add('info--visible');
      }
    });
    // on mouse over event
    path.addEventListener('mouseover', function() {
      if (this.tagName === 'path') this.parentNode.classList.add('hovered');
    });
    // on mouse out event
    path.addEventListener('mouseout', function() {
      if (this.tagName === 'path') this.parentNode.classList.remove('hovered');
    });
  });
};

const clickDefaultLibraryCell = () => {
  if (!defaultLibrary) return;
  const libraryCell = document.querySelector(`a[href='#${defaultLibrary}']`);
  libraryCell.click();
};

const addContent = (data) => {
  generateHexGrid(data);
  generateInfo();
  handleInfoVisibility();
  addMediaEvents();
  clickDefaultLibraryCell();
}

// generate hexagonal grid on page load
addContent(currentMediaData);
addContributors();

window.addEventListener('resize', function() {
  const currentMedia = getMedia(media);
  if (currentMedia.breakpoint !== currentMediaBreakpoint) {
    currentMediaBreakpoint = currentMedia.breakpoint;
    const currentMediaData = currentMedia.data;
    addContent(currentMediaData);
  }
});

window.addEventListener('resize', function() {
  const gridRows = document.querySelectorAll('.hex-grid__row');
  const cellsInRow = [...gridRows].reduce((a, b) => a < b.children.length
    ? a
    : b.children.length, gridRows[0].children.length);
  [...gridRows].forEach(
    row => row.style.height = getRowHeight(hexGrid.clientWidth, cellsInRow)
  );
});

const backButtons = document.querySelectorAll('.info__button--back');
[...backButtons].forEach(button => button.addEventListener('click', function() {
  const infoSection = this.parentNode.parentNode;
  infoSection.classList.remove('info--visible');
}));
