import { renderDraggableItems, renderPages, renderTemplateIcons, restrictMobile, setDragDrophandlers, toggleDisplay } from "./modules/utils.js"
import Project from "./modules/project.class.js";
// import testProjectData from "./modules/testProjectData.js";
import { StylingTool } from "./modules/stylingTool.class.js";
import { ExportableProject } from "./modules/exportableProject.class.js";
import { AyobaApiTool } from "./modules/ayobaApiTool.class.js";
import { RoutingTool } from "./modules/routingTool.class.js";
import ecommerceTemplate from "./modules/templates/ecommerce.template.js";
import basicElements from "./modules/components/basicElements.js";
import formComponents from "./modules/components/formComponents.js";

restrictMobile()

window.addEventListener('DOMContentLoaded', (event) => {

  (function () {

    if (window.location.pathname.includes('templates')) {
      renderTemplateIcons();
      return
    }

    setDragDrophandlers(document.querySelector('#container'))

    document.querySelector('#basic-elements').onclick = () => {
      toggleDisplay(['#basic-elements-list', '#basic-elements-up', '#basic-elements-down'])
    }
    document.querySelector('#forms').onclick = () => {
      toggleDisplay(['#forms-list', '#forms-up', '#forms-down'])
    }

    renderDraggableItems(document.querySelector('#basic-elements-list'), basicElements );
    renderDraggableItems(document.querySelector('#forms-list'), formComponents );

    let projectData = JSON.parse(localStorage.getItem("activeTemplate"))
    const project = new Project(projectData);
    const editor = new StylingTool(projectData);
    const ayobaApiTool = new AyobaApiTool(projectData);
    const routingTool = new RoutingTool(projectData)

  })();
});