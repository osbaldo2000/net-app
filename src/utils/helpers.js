export const createDomElement = (tag, classes, text, id) => {
    const el = document.createElement(tag);
    if (classes) el.classList = classes;
    if (text) el.textContent = text;
    if (id) el.id = id;
    return el;
  }
  