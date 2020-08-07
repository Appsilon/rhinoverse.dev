//import { desktopHexData } from './desktopHexData.js';
//import { mobileHexData } from './mobileHexData.js';
//import * as packagesData from './packages';

const MAX_GAP = 50;
const BASE_WIDTH = 10;
const BREAKPOINT = 768;
const hexGrid = document.getElementById('hex-grid');
const menu = document.getElementById('menu');
const infoWrapper = document.getElementById('wrapper-info');
const burgerButton = document.getElementById('burger-button');
let isMobile = window.innerWidth < BREAKPOINT;

const getCellWidth = (total) => `${1 / (total) * 100}%`

// get one hexagonal cell ------------------------------------------------------
const getCell = (hex, totalInBigRow, totalInSmallRow) => {
  const { column, row, gap, isAnimated, iconId, isDetached } = hex;
  const cell = document.createElement('div');
  const cellTitle = iconId ? iconId.replace('-', '.') : '';
  const blankCellClass = `"
    cell__blank
    ${iconId ? ` cell__blank--labelled cell__blank--${iconId}` : ''}
    ${iconId === 'shiny-semantic' ? 'cell__blank--shiny-semantic active' : ''}
    ${isDetached ? 'cell__blank--detached' : 'cell__blank--attached'}
  "`;

  cell.className = `cell${iconId ? ' cell--labelled' : ''}`;
  //cell.style.padding = `${MAX_GAP * gap}px`;
  cell.innerHTML = `
    <svg
      class=${blankCellClass}
      ${iconId ? ` data-id=${iconId}` : ''}
      viewBox="0 0 100 115.47"
    >
      <path d="M100 28.867v57.735L50 115.47 0 86.602V28.867L50 0z"/>
    </svg>
  `;

  // svg logo with a title
  if (iconId) {
    cell.innerHTML += `
      <div class="cell__label">
        <svg class="cell__logo" viewBox="0 0 200 100">
          <use href="svg/vectors.svg#${iconId}"></use>
        </svg>
        <p class="cell__title">${cellTitle}</p>
      </div>
    `;
    const labelWidth = `${(1 - gap) * (100 - BASE_WIDTH) + BASE_WIDTH}%`;
    cell.lastElementChild.style.height = labelWidth;
  }

  cell.style.width = row % 2 === 0
  ? getCellWidth(totalInBigRow)
  : getCellWidth(totalInSmallRow);
  return cell;
}

// generate hexagonal grid on desktop ------------------------------------------
const generateHexGrid = (data) => {
  const totalInBigRow = data.reduce((max, curr) =>
  curr.column > max.column ? curr : max).column;
  const totalInSmallRow = totalInBigRow - 1;
  const newRowMargin = `${-1 / (totalInSmallRow  * 2) / Math.sqrt(3) * 100 - 0.2}%`;
  const newBigRowWidth = `${(totalInBigRow) / totalInSmallRow * 100}%`;
  const newBigRowLeftMargin = `${-1 / (totalInSmallRow * 2) * 100}%`;
  
  hexGrid.innerHTML = '';
  
  data.forEach((hex, index) => {
    const { column, row } = hex;
  
    // create new row wrapping hexagonal cells
    if (column === 1) {
      const newRow = document.createElement('div');
      newRow.className = 'hex-grid__row';
      newRow.style.marginTop = newRowMargin;

      if (row % 2 === 0) {
        newRow.style.width = newBigRowWidth;
        newRow.style.marginLeft = newBigRowLeftMargin;
      }

      if (row === 8) newRow.style.marginBottom = newRowMargin; // to refactor !!
      hexGrid.appendChild(newRow);
    }
  
    const lastRow = hexGrid.lastElementChild;
    lastRow.appendChild(getCell(hex, totalInBigRow, totalInSmallRow));
  });
}

const handleInfoVisibility = () => {
  const firstInfoSection = document.querySelector('.info');
  isMobile
  ? firstInfoSection.classList.remove('info--visible')
  : firstInfoSection.classList.add('info--visible');
}

// generate info sections ------------------------------------------------------
const generateInfo = () => {
  
  libraries.forEach(library => {
    const { id, heading, paragraphs, repoLink, demoLink } = library;
    
    const section = document.createElement('section');
    section.className = `info info--${id}`

    // hero section
    const hero = document.createElement('div');
    hero.className = `info__hero info__hero--${id}`;
    const svg = document.createElement('svg');
    svg.innerHTML = `
      <svg class="cell__logo" viewBox="0 0 200 100">
        <use href="svg/vectors.svg#${id}"></use>
      </svg>
    `;
    svg.className = 'info__svg';
    const title = document.createElement('h2');
    title.className = 'info__heading';
    title.textContent = heading;
    hero.append(svg, title);

    // description section
    const description = document.createElement('div');
    description.className = 'info__description';
    paragraphs.forEach(paragraph => {
      const text = document.createElement('p');
      text.className = 'info__text';
      text.textContent = paragraph;
      description.appendChild(text);
    });
    const repoButton = document.createElement('a');
    repoButton.className = `info__button info__button--${id} info__button--repo`;
    repoButton.href = repoLink;
    repoButton.target = '_black';
    repoButton.rel = 'noopener noreferrer';
    repoButton.textContent = 'Github Repo';

    const demoButton = document.createElement('a');
    demoButton.className = `info__button info__button--${id} info__button--demo`;
    demoButton.href = demoLink;
    demoButton.target = '_black';
    demoButton.rel = 'noopener noreferrer';
    demoButton.textContent = 'Demo';

    const backButton = document.createElement('button');
    backButton.className = `info__button info__button--${id} info__button--back`;
    backButton.textContent = 'Go Back';

    description.append(repoButton, demoButton, backButton);
    section.append(hero, description);
    infoWrapper.appendChild(section);
  });
}

// generate hexagonal grid on page load
isMobile ? generateHexGrid(mobileHexData) : generateHexGrid(desktopHexData);
generateInfo();
handleInfoVisibility()

// create variables after grid generation
let hexPaths = document.querySelectorAll('.cell__blank--labelled path');
let allCells = document.querySelectorAll('.cell');
let infoSections = document.querySelectorAll('.info');
let allLabelledCells = document.querySelectorAll('.cell__blank--labelled');
const backButtons = document.querySelectorAll('.info__button--back');

// Events ----------------------------------------------------------------------

[...hexPaths].forEach(path => {
  // on click event
  path.addEventListener('click', function(e) {
    if (this.tagName === 'path') {
      const cell = this.parentNode;
      const { id } = cell.dataset;
      const currentInfo = document.querySelector(`.info--${id}`);
  
      // handle cells appearance on desktop
      if (!isMobile) {
        [...allLabelledCells].forEach(cell => cell.classList.remove('active'));
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

window.addEventListener('resize', function() {
  if (window.innerWidth < BREAKPOINT && !isMobile) {
    isMobile = true;
    generateHexGrid(mobileHexData);
    handleInfoVisibility();
  }
  if (window.innerWidth >= BREAKPOINT && isMobile) {
    isMobile = false;
    generateHexGrid(desktopHexData);
    handleInfoVisibility();
  }
});

burgerButton.addEventListener('click', function() {
  menu.classList.toggle('menu--visible');
  burgerButton.classList.toggle('burger-button--active');
});

[...backButtons].forEach(button => button.addEventListener('click', function() {
  const infoSection = this.parentNode.parentNode;
  infoSection.classList.remove('info--visible');
}));



/* [...allCells].forEach(cell => {
  cell.addEventListener('mouseover', function() {
    //this.firstElementChild.style.padding = '10px';
    this.style.transform = 'scale(0.9)';
  });
  cell.addEventListener('mouseout', function() {
    //this.firstElementChild.style.padding = '';
    this.firstElementChild.style.padding = '';
    this.style.transform = '';
  });
}); */

//${iconId ? ` cell__blank--${iconId}` : ''}

/* window.addEventListener('click', function(e) {
  console.log(e.target);
}); */