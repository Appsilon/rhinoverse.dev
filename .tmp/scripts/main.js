const hexGrid = document.getElementById('hex-grid');

const getCell = () => {
  const cell = document.createElement('div');
  cell.className = 'hex-grid__cell';
  cell.innerHTML = `
    <svg class="hex-grid__svg" viewBox="0 0 100 115.47">
      <use href="images/vectors.svg#hex"></use>
    </svg>
  `;
  return cell;
};

for (let i = 0; i < 20; i++) {
  hexGrid.appendChild(getCell());
}
//# sourceMappingURL=main.js.map