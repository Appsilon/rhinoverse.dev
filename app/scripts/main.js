import { desktopHexData } from './hex.js';
const hexGrid = document.getElementById('hex-grid');

const getCellWidth = (total) => `${1 / (total) * 100}%`

// get one hexagonal cell
const getCell = (hex, totalInBigRow, totalInSmallRow) => {
  const { column, row, scale, isAnimated, icon, isDetached } = hex;
  const cell = document.createElement('div');
  cell.className = 'hex-grid__cell';
  cell.style.padding = `${1 - scale}%`;
  cell.innerHTML = `
    <svg class="hex-grid__svg" viewBox="0 0 100 115.47">
      <use href="images/vectors.svg#hex"></use>
    </svg>
  `;
  cell.style.width = row % 2 === 0
  ? getCellWidth(totalInBigRow)
  : getCellWidth(totalInSmallRow);
  return cell;
}


const totalInBigRow = desktopHexData.reduce((max, curr) =>
  curr.column > max.column ? curr : max).column;
const totalInSmallRow = totalInBigRow - 1;
const newRowTopMargin = `${-1 / (totalInSmallRow  * 2) / Math.sqrt(3) * 100 - 0.2}%`;
const newBigRowWidth = `${(totalInBigRow) / totalInSmallRow * 100}%`;
const newBigRowLeftMargin = `${-1 / (totalInSmallRow * 2) * 100}%`;
const lastRowBottomMargin = '-60px';

desktopHexData.forEach((hex, index) => {
  const { column, row } = hex;

  // create new row wrapping hexagon cells
  if (column === 1) {
    const newRow = document.createElement('div');
    newRow.className = 'hex-grid__row';
    newRow.style.marginTop = newRowTopMargin;
    if (row % 2 === 0) {
      newRow.style.width = newBigRowWidth;
      newRow.style.marginLeft = newBigRowLeftMargin;
    }
    if (row === 5) newRow.style.marginBottom = lastRowBottomMargin;
    hexGrid.appendChild(newRow);
  }

  const lastRow = hexGrid.lastElementChild;
  lastRow.appendChild(getCell(hex, totalInBigRow, totalInSmallRow));


});