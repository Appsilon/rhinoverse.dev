import { desktopHexData } from './hex.js';
const hexGrid = document.getElementById('hex-grid');
const totalInBigRow = desktopHexData.reduce((max, curr) =>
  curr.column > max.column ? curr : max).column;
const totalInSmallRow = totalInBigRow - 1;
const newRowMargin = `${-1 / (totalInSmallRow  * 2) / Math.sqrt(3) * 100 - 0.2}%`;
const newBigRowWidth = `${(totalInBigRow) / totalInSmallRow * 100}%`;
const newBigRowLeftMargin = `${-1 / (totalInSmallRow * 2) * 100}%`;
const MAX_GAP = 50;
const BASE_WIDTH = 10;


const getCellWidth = (total) => `${1 / (total) * 100}%`

// get one hexagonal cell
const getCell = (hex, totalInBigRow, totalInSmallRow) => {
  const { column, row, gap, isAnimated, iconId, isDetached } = hex;
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.style.padding = `${MAX_GAP * gap}px`;

  cell.innerHTML = `
    <svg
      class="cell__blank${iconId ? ' cell__blank--labelled' : ''} ${iconId === 'shiny-semantic' ? 'cell__blank--shiny-semantic active' : ''}"
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
        <svg class="cell__logo" viewBox="0 0 100 100">
          <use href="images/vectors.svg#${iconId}"></use>
        </svg>
        <p class="cell__title">${iconId}</p>
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

// generate hexagonal grid
desktopHexData.forEach((hex, index) => {
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
    if (row === 5) newRow.style.marginBottom = newRowMargin; // to refactor !!
    hexGrid.appendChild(newRow);
  }

  const lastRow = hexGrid.lastElementChild;
  lastRow.appendChild(getCell(hex, totalInBigRow, totalInSmallRow));


});