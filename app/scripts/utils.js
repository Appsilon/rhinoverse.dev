// calculate hex cell width as css calc() function
export const getCellWidth = (total) => `calc(${1 / (total) * 100}% + 2px)`;

export const getRowHeight = (rowWidth, cellsInRow) => {
  const cellWidth = rowWidth / cellsInRow;
  const rowHeight = cellWidth * 2/ Math.sqrt(3);
  return `${rowHeight}px`;
}

export const getSpannedTitle = (title) => {
  return title.split('.').map(span => `<span>${span}</span>`).join('.');
}

export const getMedia = (media) => {
  return media.reduce((prev, curr) => 
  window.innerWidth >= curr.breakpoint ? curr : prev, media[0]);
}

export const getSvg = (type, id, className, width, height) => {
  return `
    <svg
      class=${className}
      viewBox="0 0 ${width} ${height}"
      ${id ? ` data-id=${id}` : ''}
    >
      ${
        type === 'blank'
        ? '<path d="M100 28.867v57.735L50 115.47 0 86.602V28.867L50 0z"/>'
        :
        type === 'appLogo'
        ? `
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
        `
        : `<use href="svg/vectors.svg#${id}"></use>`
      }
    </svg>
  `
}

export const getSvgAsImg = (id, className) => {
  return `<img class='${className}' src='svg/${id}.svg' alt='${id} icon'>`;
}

export const getTotalColumns = (data) => {
  return data.reduce((max, curr) => curr.length > max.length ? curr : max).length;
}

export const createElement = (
  className = '',
  type = 'div',
  content = '',
  isLinkInternal = false ) => {

  const element = document.createElement(type);
  element.className = className;
  element.innerHTML = content;
  if (type === 'a' && !isLinkInternal) {
    element.target = '_blank';
    element.rel = 'noopener';
  }
  return element;
}

export const replaceDashesToDots = (string) => string.replace(/-/g, '.')

export const createGithubButton = (repo, type, count='true', size='large') => `
  <iframe
    src="https://ghbtns.com/github-btn.html?user=appsilon&repo=${repo}&type=${type}&count=${count}&size=${size}"
    frameborder="0"
    scrolling="0"
    width="150"
    height="30"
    title="GitHub"
  ></iframe>
`;

export const getDefaultLibrary = (libraries) => {
  const urlParts = window.location.href.split('/#');
  const lastUrlPart = urlParts[urlParts.length - 1];
  const librariesIds = libraries.map(l => l.id);
  const isLibraryInUrl = urlParts.length >= 2 && librariesIds.includes(lastUrlPart);
  return isLibraryInUrl ? lastUrlPart : libraries[0].id;
};
