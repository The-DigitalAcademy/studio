import { Dragoned } from "./modules/DragonedClass.js";
import { ELEMENTS, renderDraggableElements } from "./modules/utils.js"

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {

    renderDraggableElements('draggable');

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