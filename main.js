import { Dragoned } from "./modules/DragonedClass.js";
import { EditTool } from "./modules/editTool.class.js";
import { renderDraggableElements, downloadCode, renderPages, restrictMobile } from "./modules/utils.js"
import ELEMENTS from "./modules/components.js"
import { ActionTool } from "./modules/actionTool.class.js";
import TEMPELEMENTS from "./modules/templateComponents.js";
import components from "./modules/components/components.js" 
import Project from "./modules/project.class.js";
import testProjectData from "./modules/testProjectData.js";
import Component from "./modules/component.class.js";
import { NewEditTool } from "./modules/newEditTool.js";

restrictMobile()

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {
    let projectData = testProjectData
    const project = new Project(projectData);
    const editor = new NewEditTool(projectData);
    
    document.getElementById('menu-components-btn').addEventListener('click', () => renderDraggableElements('draggable'));
    document.getElementById('menu-pages-btn').addEventListener('click', () => renderPages('pages-panel', projectData.pages));

    document.getElementById('export-project').onclick = downloadCode;
    // renderDraggableTemplate('template');

    // const elementsBtn = document.querySelector('.options').children[0].addEventListener('click', toggleLeftPanels);
    // const templatesBtn = document.querySelector('.options').children[1].addEventListener('click', toggleLeftPanels);

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
        item.innerHtml = "";
        item.append(new Component(components[type]).getElement());
      }
    });

  })();
});