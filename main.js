import { Dragoned } from "./modules/DragonedClass.js";
import { EditTool } from "./modules/editTool.class.js";
import { renderDraggableElements, downloadCode, toggleLeftPanels, restrictMobile } from "./modules/utils.js"
import ELEMENTS from "./modules/components.js"
import { ActionTool } from "./modules/actionTool.class.js";

restrictMobile()

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {
    renderDraggableElements('draggable');
    document.getElementById('export-project').onclick = downloadCode

    const elementsBtn = document.querySelector('.options').children[0].addEventListener('click', toggleLeftPanels);
    const templatesBtn = document.querySelector('.options').children[1].addEventListener('click', toggleLeftPanels);

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
        item.innerHTML = ELEMENTS[type].content;
        new ActionTool(item, ELEMENTS[type].actionToolList);
        new EditTool(item, ELEMENTS[type].editingToolList);
      }
    });
  })();
});