import { hexXs } from './hexXs';
import { hexSm } from './hexSm';
import { hexMd } from './hexMd';
import { hexLg } from './hexLg';
import { hexXl } from './hexXl';
import { libraries } from './libraries';
import '@babel/polyfill';

// calculate hex cell width as css calc() function
const getCellWidth = (total) => `calc(${1 / (total) * 100}% + 2px)`;
const getSpannedTitle = (title) => {
  return title.split('.').map(span => `<span>${span}</span>`).join('.');
}
const getMedia = () => {
  return media.reduce((prev, curr) => 
  window.innerWidth >= curr.breakpoint ? curr : prev, media[0]);
}
const getSvgIcon = (type, iconId, className, width, height) => {
  return `
    <svg
      class=${className}
      viewBox="0 0 ${width} ${height}"
      ${iconId ? ` data-id=${iconId}` : ''}
    >
      ${type === 'blank' && '<path d="M100 28.867v57.735L50 115.47 0 86.602V28.867L50 0z"/>'}
      ${type === 'label' && `<use href="svg/vectors.svg#${iconId}"></use>`}
      ${type === 'logo' && `
        <polyline class="logo__triangle" points="88.971,27.5 50,95 11.029,27.5 88.971,27.5" />
        <polyline class="logo__outer" points="88.971,27.5 88.971,72.5 50,95" />
        <polyline class="logo__outer" points="50,95 11.029,72.5 11.029,27.5 " />
        <polyline class="logo__outer" points="11.029,27.5 50,5 88.971,27.5" />
        <polyline class="logo__inner" points="88.971,27.5 50,50" />
        <polyline class="logo__inner" points="50,95 50,50" />
        <polyline class="logo__inner" points="11.029,27.5 50,50" />
        <circle class="logo__circle" cx="88.971" cy="27.5" r="5" />
        <circle class="logo__circle" cx="11.029" cy="27.5" r="5" />
        <circle class="logo__circle" cx="50" cy="95" r="5" />
        <circle class="logo__circle" cx="50" cy="50" r="5" />
      `}      
    </svg>
  `
}

const media = [
  { breakpoint: 0, data: hexXs },
  { breakpoint: 480, data: hexSm },
  { breakpoint: 768, data: hexMd },
  { breakpoint: 1024, data: hexLg },
  { breakpoint: 1200, data: hexXl }
];
const hexGrid = document.getElementById('hex-grid');
const menu = document.getElementById('menu');
const infoWrapper = document.getElementById('wrapper-info');
const burgerButton = document.getElementById('burger-button');
const currentMedia = getMedia();
const currentMediaData = currentMedia.data;
let currentMediaBreakpoint = currentMedia.breakpoint;
const mobileBreakpoint = 700;

// get one hexagonal cell ------------------------------------------------------
const getCell = (hexCell) => {
  const {
    iconId = null,
    text = null,
    isInteractive = false,
    zPosition = null
  } = hexCell;
  const cell = document.createElement('div');
  const cellTitle = iconId ? iconId.replace('-', '.') : '';
  const blankCellClass = `"
    cell__blank
    ${isInteractive ? 'cell__blank--interactive' : ''}
    ${iconId ? `cell__blank--${iconId}` : ''}
    ${iconId === 'shiny-semantic' ? 'cell__blank--shiny-semantic active' : ''}
    ${zPosition ? 'cell__blank--detached' : 'cell__blank--attached'}
    ${zPosition ? `cell__blank--${zPosition}` : ''}
  "`;
  cell.className = `cell${isInteractive ? ' cell--interactive' : ''}`;
  cell.innerHTML = getSvgIcon('blank', iconId, blankCellClass, 100, 115.47);

  // add labels as cell children if icon id is specified
  if (iconId) {
    cell.innerHTML += `
      <div class="cell__label">
        ${iconId === 'shiny-tools-logo'
        ? getSvgIcon('logo', '', 'logo', 100, 100)
        : `
          ${getSvgIcon('label', iconId, 'cell__logo', 200, 100)}
          <p class="cell__title">${getSpannedTitle(cellTitle)}</p>
        `}
      </div>
    `;
  }
  // add text as cell's only content
  else if (text) cell.innerHTML += `<p class="cell__text">${text}</p>`;
  return cell;
}

const getMaxOf = (data, type) => {
  return data.reduce((max, curr) => curr[type] > max[type] ? curr : max)[type];
}

// generate hexagonal grid -----------------------------------------------------
const generateHexGrid = (data) => {
  const totalInBigRow = getMaxOf(data, 'column');
  const totalInSmallRow = totalInBigRow - 1;
  const newRowMargin = `${-1 / (totalInSmallRow  * 2) / Math.sqrt(3) * 100 - 0.2}%`;
  const newBigRowWidth = `${(totalInBigRow) / totalInSmallRow * 100}%`;
  const newBigRowLeftMargin = `${-1 / (totalInSmallRow * 2) * 100}%`;
  const lastRowIndex = getMaxOf(data, 'row');
  const isEvenRowBigger = data.find(row =>
    row.column === totalInBigRow).row % 2 === 0;
  
  // clean container's node structure
  hexGrid.innerHTML = '';
  
  data.forEach(hex => {
    const { column, row } = hex;
    // create new row wrapping hexagonal cells
    if (column === 1) {
      const newRow = document.createElement('div');
      newRow.className = 'hex-grid__row';
      newRow.style.marginTop = newRowMargin;

      // set width and margin of bigger rows
      if ((isEvenRowBigger && row % 2 === 0) || (!isEvenRowBigger && row % 2 !== 0)) {
        newRow.style.width = newBigRowWidth;
        newRow.style.marginLeft = newBigRowLeftMargin;
      }
      // set bottom margin of the last row
      if (row === lastRowIndex) newRow.style.marginBottom = newRowMargin;
      hexGrid.appendChild(newRow);
    }
    // create new cell
    const lastRow = hexGrid.lastElementChild;
    const newCell = getCell(hex);
    newCell.style.width = row % 2 === 0 && isEvenRowBigger
    ? getCellWidth(totalInBigRow)
    : getCellWidth(totalInSmallRow);
    lastRow.appendChild(newCell);
  });
}

const handleInfoVisibility = () => {
  const infoSections = document.querySelectorAll('.info');
  infoSections.forEach((section, index) => {
    if (currentMediaBreakpoint >= mobileBreakpoint && index === 0) {
      section.classList.add('info--visible');
    } else {
      section.classList.remove('info--visible');
    }
  });
}

const createElement = (className = '', type = 'div', content = '') => {
  const element = document.createElement(type);
  element.className = className;
  element.innerHTML = content;
  if (type === 'a') {
    element.target = '_blank';
    element.rel = 'noopener noreferrer';
  }
  return element;
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
    hero.append(svg, title);
    stars.append(starsLabel, starsOutput);
    description.append(texts, stars, repoButton, demoButton, backButton);
    section.append(hero, description);
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

// generate hexagonal grid on page load ----------------------------------------
addContent(currentMediaData);

window.addEventListener('resize', function() {
  const currentMedia = getMedia(window.innerWidth);
  if (currentMedia.breakpoint !== currentMediaBreakpoint) {
    currentMediaBreakpoint = currentMedia.breakpoint;
    const currentMediaData = currentMedia.data;
    addContent(currentMediaData);
  }
});

/* burgerButton.addEventListener('click', function() {
  menu.classList.toggle('menu--visible');
  burgerButton.classList.toggle('burger-button--active');
}); */

const backButtons = document.querySelectorAll('.info__button--back');
[...backButtons].forEach(button => button.addEventListener('click', function() {
  const infoSection = this.parentNode.parentNode;
  infoSection.classList.remove('info--visible');
}));