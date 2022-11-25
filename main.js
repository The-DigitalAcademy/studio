import { Dragoned } from "./modules/DragonedClass.js";
import { EditTool } from "./modules/editTool.class.js";
import { renderDraggableElements, renderDraggableTemplate, downloadCode, toggleLeftPanels, restrictMobile } from "./modules/utils.js"
import ELEMENTS from "./modules/components.js"
import { ActionTool } from "./modules/actionTool.class.js";
import TEMPELEMENTS from "./modules/templateComponents.js";
import components from "./modules/components/components.js" 
import Project from "./modules/projects/project.class.js";
import testProjectData from "./modules/pages/testProjectData.js";
import Component from "./modules/components/component.class.js";

restrictMobile()

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {
    let ProjectData = testProjectData
    const project = new Project(ProjectData);
    renderDraggableElements('draggable');
    document.getElementById('export-project').onclick = downloadCode;
    renderDraggableTemplate('template');

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
        item.innerHtml = "";
        item.append(new Component(components[type]).getElement());
      }
    });

  })();
});