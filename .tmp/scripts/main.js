import { desktopHexData } from './hex.js';
const hexGrid = document.getElementById('hex-grid');

const getCell = (width, height, total, i) => {
  const cell = document.createElement('div');
  cell.className = 'hex-grid__cell';
  cell.innerHTML = `
    <svg class="hex-grid__svg" viewBox="0 0 100 115.47">
      <use href="images/vectors.svg#hex"></use>
    </svg>
  `;
  cell.style.width = `${width}px`;
  cell.style.height = `${height}px`;
  cell.style.margin = `${-1}px`;
  cell.style.marginTop = `${-0.25 * height}px`;

  if (i === 7) {
    cell.style.marginLeft = `${-0.5 * width}px`;
  }

  return cell;
};

const totalInRow = 7;
const containerWidth = hexGrid.clientWidth;
const cellWidth = containerWidth / totalInRow;
const cellHeight = cellWidth * 1.1547;

for (let i = 0; i < 20; i++) {
  hexGrid.appendChild(getCell(cellWidth, cellHeight, totalInRow, i));
}
//# sourceMappingURL=main.js.map