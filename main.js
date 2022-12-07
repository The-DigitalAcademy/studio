import { Dragoned } from "./modules/DragonedClass.js";
import { renderDraggableElements, renderPages, restrictMobile } from "./modules/utils.js"
import components from "./modules/components/components.js" 
import Project from "./modules/project.class.js";
import testProjectData from "./modules/testProjectData.js";
import Component from "./modules/component.class.js";
import { StylingTool } from "./modules/stylingTool.class.js";
import { ExportableProject } from "./modules/exportableProject.class.js";

restrictMobile()

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {
    let projectData = testProjectData
    const project = new Project(projectData);
    const editor = new StylingTool(projectData);
    // const exportableProject = new ExportableProject(projectData);
    
    renderDraggableElements('draggable');
    renderPages('pages-panel', projectData.pages);

    // document.getElementById('export-project').onclick = exportableProject.download();

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
        item.append(new Component(components[type]).getComponent());
      }
    });

  })();
});