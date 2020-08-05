import { desktopHexData } from './hex.js';

const hexGrid = document.getElementById('hex-grid');

const getCell = (hex, index) => {
  const { column, row, scale, isAnimated, icon, isDetached } = hex;
  const cell = document.createElement('div');
  cell.className = 'hex-grid__cell';
  //cell.style.padding = `${1 - scale}%`;
  cell.style.width = row % 2 === 0 ? `${1 / 8 * 100}%` : `${1 / 7 * 100}%`;
  cell.innerHTML = `
    <svg class="hex-grid__svg" viewBox="0 0 100 115.47">
      <use href="images/vectors.svg#hex"></use>
    </svg>
  `;
  return cell;
}

const totalInRow = 7;
const containerWidth = hexGrid.clientWidth;
const cellWidth = containerWidth / totalInRow;
const cellHeight = cellWidth * 1.1547;



const factor = desktopHexData.filter(hex => hex.row === 1);

desktopHexData.forEach((hex, index) => {
  const { column, row, scale, isAnimated, icon, isDetached } = hex;

  // create new row
  if (column === 1) {
    const newRow = document.createElement('div');
    newRow.className = 'hex-grid__row';
    newRow.style.marginTop = `${-4.2}%`;
    if (row % 2 === 0) {
      newRow.style.width = `${8 / 7 * 100}%`;
      newRow.style.marginLeft = `${-1 / 14 * 100}%`;
    }
    hexGrid.appendChild(newRow);
  }

  const lastRow = hexGrid.lastElementChild;
  lastRow.appendChild(getCell(hex, index));


});