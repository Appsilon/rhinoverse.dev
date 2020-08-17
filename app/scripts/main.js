//import { desktopHexData } from './desktopHexData.js';
//import { mobileHexData } from './mobileHexData.js';
//import * as packagesData from './packages';

const BREAKPOINT = 768;
const hexGrid = document.getElementById('hex-grid');
const menu = document.getElementById('menu');
const infoWrapper = document.getElementById('wrapper-info');
const burgerButton = document.getElementById('burger-button');
let isMobile = window.innerWidth < BREAKPOINT;

// calculate hex cell width as css calc() function
const getCellWidth = (total) => `calc(${1 / (total) * 100}% + 2px)`;
const getSpannedTitle = (title) => {
  return title.split('.').map(span => `<span>${span}</span>`).join('.');
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

// get one hexagonal cell ------------------------------------------------------
const getCell = (hex) => {
  const { iconId, isDetached, isInteractive, zPosition } = hex;
  const cell = document.createElement('div');
  const cellTitle = iconId ? iconId.replace('-', '.') : '';
  const blankCellClass = `"
    cell__blank
    ${isInteractive ? 'cell__blank--interactive' : ''}
    ${iconId ? `cell__blank--${iconId}` : ''}
    ${iconId === 'shiny-semantic' ? 'cell__blank--shiny-semantic active' : ''}
    ${isDetached ? 'cell__blank--detached' : 'cell__blank--attached'}
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
  
  data.forEach(hex => {
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
    const newCell = getCell(hex);
    newCell.style.width = row % 2 === 0
    ? getCellWidth(totalInBigRow)
    : getCellWidth(totalInSmallRow);
    lastRow.appendChild(newCell);
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
    const title = document.createElement('h3');
    title.className = 'info__heading';
    title.textContent = heading;
    hero.append(svg, title);

    // description section
    const description = document.createElement('div');
    description.className = 'info__description';

    // text section
    const texts = document.createElement('div');
    texts.className = 'info__texts';

    paragraphs.forEach(paragraph => {
      const text = document.createElement('p');
      text.className = 'info__text';
      text.textContent = paragraph;
      texts.appendChild(text);
    });

    // github stars section
    const stars = document.createElement('div');
    const starsLabel = document.createElement('p');
    const starsOutput = document.createElement('p');
    const starsSvg = document.createElement('svg');
    starsSvg.innerHTML = `
      <svg class="stars__svg" viewBox="0 0 100 100">
        <use href="svg/vectors.svg#star"></use>
      </svg>
    `;
    stars.className = `stars stars--${id}`;
    starsLabel.className = 'stars__label';
    starsOutput.className = 'stars__output';
    starsLabel.textContent = 'Github Stars';

    const repoButton = document.createElement('a');
    repoButton.className = `info__button info__button--${id} info__button--github`;
    repoButton.href = repoLink;
    repoButton.target = '_black';
    repoButton.rel = 'noopener noreferrer';
    repoButton.textContent = 'Github';

    const demoButton = document.createElement('a');
    demoButton.className = `info__button info__button--${id} info__button--demo`;
    demoButton.href = demoLink;
    demoButton.target = '_black';
    demoButton.rel = 'noopener noreferrer';
    demoButton.textContent = 'Demo';

    const backButton = document.createElement('button');
    backButton.className = `info__button info__button--${id} info__button--back`;
    backButton.textContent = 'Back';

    stars.append(starsLabel, starsOutput, starsSvg);
    description.append(texts, stars, repoButton, demoButton, backButton);
    section.append(hero, description);
    infoWrapper.appendChild(section);
  });
}

// generate hexagonal grid on page load
isMobile ? generateHexGrid(mobileHexData) : generateHexGrid(desktopHexData);
generateInfo();
handleInfoVisibility()

// create variables after grid generation
let hexPaths = document.querySelectorAll('.cell__blank--interactive path');
let allCells = document.querySelectorAll('.cell');
let infoSections = document.querySelectorAll('.info');
let allInteractiveCells = document.querySelectorAll('.cell__blank--interactive');
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