// calculate hex cell width as css calc() function
export const getCellWidth = (total) => `calc(${1 / (total) * 100}% + 2px)`;

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