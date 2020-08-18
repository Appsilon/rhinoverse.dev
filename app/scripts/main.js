import { hexXs, hexSm, hexMd, hexLg, hexXl } from './hexData';
import { libraries } from './libraries';
import { getGithubStars } from './github';
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
const getTotalColumns = (data) => {
  return data.reduce((max, curr) => curr.length > max.length ? curr : max).length;
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
const currentMedia = getMedia();
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
          ${getSvgIcon('label', iconId, 'cell__logo', 200, 100)}
          <p class="cell__title">${getSpannedTitle(title)}</p>
        `}
      </div>
    `;
  }
  // add text as cell's only content
  else if (text) cell.innerHTML += `<p class="cell__text">${text}</p>`;
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
    
    console.log('isEvenRowBigger', isEvenRowBigger);
  
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
const test = fetch('https://api.github.com/orgs/Appsilon/repos')
  .then(resp => resp.json())
  .then(resp => getGithubStars(resp));

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