import { Dragoned } from "./modules/DragonedClass.js";
import { ELEMENTS } from "./modules/utils.js"

function renderDraggableElements() {
  const draggablesContainer = document.getElementById('draggable');

  for (const property in ELEMENTS) {
          const container = document.createElement('div');
          container.setAttribute('class', 'drag-item');
          container.setAttribute('data-type', property);
          container.innerHTML = `<p>${ELEMENTS[property].icon}</p>`
          draggablesContainer.append(container);
  }
}

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {

    renderDraggableElements()

    const container = new Dragoned(document.querySelector('#container'), {
      // draggable:".item",
      // handle:".handle",
      group: "blocks-group",
      delay: 100,
      onEnd: (data) => {

      }
    });
    //=========Initialize start here=========//
    const draggable = new Dragoned(document.querySelector('#draggable'), {
      // draggable:".item",
      // handle:".handle",
      sort: false,
      clone: true,
      group: "blocks-group",
      onEnd: (data) => {
        const { item } = data;
        const type = item.dataset.type;
        item.innerHTML = ELEMENTS[type].content
      }
    });
  })();
});