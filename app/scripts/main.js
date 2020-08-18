import { hexXs, hexSm, hexMd, hexLg, hexXl } from './hexData';
import { libraries } from './libraries';
import { getGithubStars } from './github';
import {
  getCellWidth,
  getSpannedTitle,
  getMedia,
  getSvgIcon,
  getSvgAsImg,
  getTotalColumns,
  createElement } from './utils';
import '@babel/polyfill';

const media = [
  { breakpoint: 0, data: hexXs },
  { breakpoint: 480, data: hexSm },
  { breakpoint: 768, data: hexMd },
  { breakpoint: 1024, data: hexLg },
  { breakpoint: 1200, data: hexXl }
];
const hexGrid = document.getElementById('hex-grid');
const infoWrapper = document.getElementById('wrapper-info');
//const menu = document.getElementById('menu');
//const burgerButton = document.getElementById('burger-button');
const currentMedia = getMedia(media);
const currentMediaData = currentMedia.data;
let currentMediaBreakpoint = currentMedia.breakpoint;
const mobileBreakpoint = 700;

// get one hexagonal cell ------------------------------------------------------
const getCell = (cell) => {
  const [
    level,
    {
      iconId = null,
      title = '',
      isInteractive = false,
      text = null
    }] = cell;

  const cellNode = document.createElement('div');
  const blankCellClass = `"
    cell__blank
    ${isInteractive ? 'cell__blank--interactive' : ''}
    ${iconId ? `cell__blank--${iconId}` : ''}
    ${iconId === 'shiny-semantic' ? 'cell__blank--shiny-semantic active' : ''}
    ${level ? 'cell__blank--detached' : 'cell__blank--attached'}
    ${level ? `cell__blank--${level}` : ''}
  "`;
  cellNode.className = `cell${isInteractive ? ' cell--interactive' : ''}`;
  cellNode.innerHTML = getSvgIcon('blank', iconId, blankCellClass, 100, 115.47);

  // add labels as cell children if icon id is specified
  if (iconId) {
    cellNode.innerHTML += `
      <div class="cell__label">
        ${iconId === 'shiny-tools-logo'
        ? getSvgIcon('logo', '', 'logo', 100, 100)
        : `
          ${getSvgAsImg(iconId, 'cell__logo')}
          <p class="cell__title">${getSpannedTitle(title)}</p>
        `}
      </div>
    `;
  }
  // add text as cell's only content
  else if (text) cellNode.innerHTML += `<p class="cell__text">${text}</p>`;
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
  
  // clean container's node structure
  hexGrid.innerHTML = '';
  
  data.forEach((row, index) => {
    const newRow = document.createElement('div');
    const rowNumber = index + 1;
    newRow.className = 'hex-grid__row';
    newRow.style.marginTop = newRowMargin;

    // set width and margin of bigger rows
    if ((isEvenRowBigger && rowNumber % 2 === 0) || (!isEvenRowBigger && rowNumber % 2 !== 0)) {
      newRow.style.width = newBigRowWidth;
      newRow.style.marginLeft = newBigRowLeftMargin;
    }
    // set bottom margin of the last row
    if (rowNumber === lastRow) newRow.style.marginBottom = newRowMargin;
    hexGrid.appendChild(newRow);

    row.forEach(cell => {
      // create new cell
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
    if (currentMediaBreakpoint >= mobileBreakpoint && index === 0) {
      section.classList.add('info--visible');
    } else {
      section.classList.remove('info--visible');
    }
  });
}

// generate info sections ------------------------------------------------------
const generateInfo = () => {  
  libraries.forEach(library => {
    const { id, heading, paragraphs, repoLink, demoLink } = library;    
    const section = createElement(`info info--${id}`, 'section');
    const hero = createElement(`info__hero info__hero--${id}`);
    const svg = createElement('info__svg', 'svg', getSvgIcon('label', id, 'cell__logo', 200, 100));
    const title = createElement('info__heading', 'h3', heading);
    const description = createElement('info__description');
    const texts = createElement('info__texts');
    paragraphs.forEach(paragraph => {
      const text = createElement('info__text', 'p', paragraph);
      texts.appendChild(text);
    });
    const stars = createElement(`stars stars--${id}`, 'div', getSvgIcon('label', 'star', 'stars__svg', 100, 100));
    const starsLabel = createElement('stars__label', 'p', 'Github Stars');
    const starsOutput = createElement('stars__output', 'p');

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

    const backButton = createElement(
      `info__button info__button--${id} info__button--back`,
      'button',
      'Back'
    );
    hero.appendChild(svg);
    hero.appendChild(title);
    stars.appendChild(starsLabel);
    stars.appendChild(starsOutput);
    description.appendChild(texts);
    description.appendChild(stars);
    description.appendChild(repoButton);
    description.appendChild(demoButton);
    description.appendChild(backButton);
    section.appendChild(hero);
    section.appendChild(description);
    infoWrapper.appendChild(section);
  });
}

// add events to newly generated DOM nodes based on media data
const addMediaEvents = () => {
  let hexPaths = document.querySelectorAll('.cell__blank--interactive path');
  let infoSections = document.querySelectorAll('.info');
  let allInteractiveCells = document.querySelectorAll('.cell__blank--interactive');
  
  [...hexPaths].forEach(path => {
    // on click event
    path.addEventListener('click', function(e) {
      if (this.tagName === 'path') {
        const cell = this.parentNode;
        const { id } = cell.dataset;
        const currentInfo = document.querySelector(`.info--${id}`);
    
        // handle cells appearance on desktop
        if (currentMediaBreakpoint >= mobileBreakpoint) {
          [...allInteractiveCells].forEach(cell => cell.classList.remove('active'));
          cell.classList.add('active');
        }
    
        // handle info section appearance
        [...infoSections].forEach(section => section.classList.remove('info--visible'));
        currentInfo.classList.add('info--visible');
      }
    });
    // on mouse over event
    path.addEventListener('mouseover', function(e) {
      if (this.tagName === 'path') this.parentNode.classList.add('hovered');
    });
    // on mouse out event
    path.addEventListener('mouseout', function(e) {
      if (this.tagName === 'path') this.parentNode.classList.remove('hovered');
    });
  });
}

const addContent = (data) => {
  generateHexGrid(data);
  generateInfo();
  handleInfoVisibility();
  addMediaEvents();
}

// generate hexagonal grid on page load
addContent(currentMediaData);
// fetch github api
fetch('https://api.github.com/orgs/Appsilon/repos')
  .then(resp => resp.json())
  .then(resp => getGithubStars(resp));

window.addEventListener('resize', function() {
  const currentMedia = getMedia(media);
  if (currentMedia.breakpoint !== currentMediaBreakpoint) {
    currentMediaBreakpoint = currentMedia.breakpoint;
    const currentMediaData = currentMedia.data;
    addContent(currentMediaData);
  }
});

// temporarily hidden - no menu items
/* burgerButton.addEventListener('click', function() {
  menu.classList.toggle('menu--visible');
  burgerButton.classList.toggle('burger-button--active');
}); */

const backButtons = document.querySelectorAll('.info__button--back');
[...backButtons].forEach(button => button.addEventListener('click', function() {
  const infoSection = this.parentNode.parentNode;
  infoSection.classList.remove('info--visible');
}));