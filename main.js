import { createNewPageHandler, renderDraggableItems, renderPages, renderTemplateIcons, restrictMobile, setDragDrophandlers, switchDisplaysHandler, toggleDisplay } from "./modules/utils.js"
import Project from "./modules/project.class.js";
import { StylingTool } from "./modules/stylingTool.class.js";
import { ExportableProject } from "./modules/exportableProject.class.js";
import { AyobaApiTool } from "./modules/ayobaApiTool.class.js";
import { RoutingTool } from "./modules/routingTool.class.js";
import basicElements from "./modules/components/basicElements.js";
import formComponents from "./modules/components/formComponents.js";
import bootstrapComponents from "./modules/components/bootstrapComponents.js";

restrictMobile()

window.addEventListener('DOMContentLoaded', (event) => {

  if (!window.location.pathname.includes('studio')) {
    renderTemplateIcons();
    return
  }

  let projectData = JSON.parse(localStorage.getItem("workingProject"))

  //MENU
  const componentsBtn = document.querySelector('#components-menu-btn')
  const pagesBtn = document.querySelector('#pages-menu-btn')
    //components panel
  const componentsPanel = document.querySelector('#components-panel')
  const basicElementsBtn = document.querySelector('#basic-elements');
  const basicElementsContainer = document.querySelector('#basic-elements-list')
  const formsBtn = document.querySelector('#forms');
  const formsContainer = document.querySelector('#forms-list');
  const bootstrapComponentsBtn = document.querySelector('#bootstrap-components');
  const bootstrapComponentsContainer = document.querySelector('#bootstrap-components-list');
    //pages panel
  const pagesPanel = document.querySelector('#pages-panel');
  const pagesContainer = document.querySelector('#pages-container');
  const pageNameInput = document.querySelector('#page-name-input');
  const createPageBtn = document.querySelector('#create-page-btn');

  createNewPageHandler(pageNameInput, createPageBtn);

  setDragDrophandlers(document.querySelector('#container'))

  toggleDisplay(basicElementsBtn, ['#basic-elements-list', '#basic-elements-up', '#basic-elements-down'])
  toggleDisplay(formsBtn, ['#forms-list', '#forms-up', '#forms-down'])
  toggleDisplay(bootstrapComponentsBtn, ['#bootstrap-components-list', '#bootstrap-components-up', '#bootstrap-components-down'])

  renderDraggableItems(basicElementsContainer, basicElements );
  renderDraggableItems(formsContainer, formComponents );
  renderDraggableItems(bootstrapComponentsContainer, bootstrapComponents );

  switchDisplaysHandler(componentsBtn, componentsPanel, [pagesPanel]);
  switchDisplaysHandler(pagesBtn, pagesPanel, [componentsPanel]);

  renderPages(pagesContainer, projectData.pages);
  window.addEventListener('hashchange', () => {
    setTimeout(() => {
      renderPages(pagesContainer, projectData.pages)
    }, 1000)
  })

  const project = new Project(projectData);
  const editor = new StylingTool(projectData);
  const ayobaApiTool = new AyobaApiTool(projectData);
  const routingTool = new RoutingTool(projectData)

});