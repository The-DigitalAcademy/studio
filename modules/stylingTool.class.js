import { getHashData, setHashData } from "./utils.js";

/** Class representing an editing tool*/
class StylingTool {
  /**
   * creates a styling Tool
   * @param {Object} projectData object containing data of the project
   */
  constructor(projectData) {
    this.projectData = projectData;
    this.addStylingHandlerToStylingTools()

    window.addEventListener("hashchange", () => {
      this.renderTools();
    })
  }

  /**
   * render styling tools relevant to the targeted component
   * @returns 
   */
  renderTools() {
    const { method, page, component } = getHashData()
    if (method != 'style') return;

    //find component
    const targetComponent = this.findComponentById(component, this.projectData.pages[page].components)
    if (!targetComponent || !targetComponent.styleClasses || !targetComponent.editable) return

    //display component name
    document.getElementById('component-name').innerText = targetComponent.name

    const styleProps = Object.keys(targetComponent.styleClasses); //list of styleProps relevant to the component
    const styleTools = document.querySelectorAll(`[data-style-prop]`); //all styling tools found in the document

    //show only the styling tools relevant to the target component
    // only the parent component of a set of styling tools is targeted. (the parent element will only contain the styleProp dataset value and not a styleValue)
    for (const tool of styleTools) {
      if (styleProps.includes(tool.dataset.styleProp) && !tool.dataset.styleValue) {
        tool.classList.remove('d-none') //show
      } else if (tool.dataset.styleProp && !tool.dataset.styleValue) {
        tool.classList.add('d-none') //hide
      }
    }
  }

  /**
   * searches through an array (including nested arrays) for a component with an id.
   * @param {string} id component identifier
   * @param {[]} components array of components
   * @returns {Object} component with id or null if not found
   */
  findComponentById(id, components) {
    for (const component of components) {
      if (component.id == id) {
        return component
      } else if (component.children && component.children.length) {
        return this.findComponentById(id, component.children)
      } else {
      }
    }
  }

  /**
   * adds style handler to styling tools in html document
   */
  addStylingHandlerToStylingTools() {
    //get all styling tool nodes in html document
    const stylingTools = document.querySelectorAll(`[data-style-prop]`);

    for (const toolElement of stylingTools) {
      if (toolElement.dataset.styleValue) {
        //toolElement contains both styleProp and styleValue dataset
        toolElement.onclick = (e) => {
          this.handleStyleChange(e)
        }
      }
    }
  }

  /**
   * excecutes relevant style change on a component when the styling tool is triggered
   * @param {Event} e 
   */
  handleStyleChange(e) {
    const { page, component } = getHashData();

    //get style property & value from the styling-tool element dataset
    const property = e.currentTarget.dataset.styleProp;
    const value = e.currentTarget.dataset.styleValue;

    this.styleComponent(page, component, property, value);

    //set hashData for rendering changes
    let hashData = {
      method: "render",
      component,
      page
    }
    setHashData(hashData);
  }

  /**
   * updates style class name of component
   * @param {number} page current working page
   * @param {string} id component identifier
   * @param {string} property style property to be updated
   * @param {string} value bootstrap class name
   */
  styleComponent(page, id, property, value) {
    const componentList = this.projectData.pages[page].components;
    const component = this.findComponentById(id, componentList);
    if (component.styleClasses[property]) {
      component.styleClasses[property] = value;
    }
  }
}

export { StylingTool };
