import { getHashData, setHashData } from "./utils.js";

/** Class representing an editing tool*/
class NewEditTool {
  #editableElement;
  /**
   * creates a style editing Tool
   * @param {Object} projectData object containing data of the project
   */
  constructor(projectData) {
    this.projectData = projectData;
    this.addStylingHandlerToStylingTools()

    window.addEventListener("hashchange", () => {
      this.renderTools();
    })
  }

  renderTools() {
    const hashData = getHashData()
    if (hashData.method != 'edit') return;

    const componentId = hashData.component;
    //find component by id
    let foundComponent = this.findComponentById(componentId, this.projectData.pages[0].components)
    if (!foundComponent || !foundComponent.styleClasses || !foundComponent.editable) return

    const stylePropsArr = Object.keys(foundComponent.styleClasses);
    const styleTools = document.querySelectorAll(`[data-style-prop]`);
    for (const tool of styleTools) {
      if (stylePropsArr.includes(tool.dataset.styleProp) && !tool.dataset.styleValue) {
        tool.classList.remove('d-none')
      } else if (tool.dataset.styleProp && !tool.dataset.styleValue) {
        tool.classList.add('d-none')
      }
    }
  }

  findComponentById(id, components) {
    for (const component of components) {
      if (component.id == id) {
        return component
      } else if (component.children && component.children.length) {
        return this.findComponentById(id, component.children)
      } else  {
        return null
      }
    }
  }
  addStylingHandlerToStylingTools() {
    const stylingTools = document.querySelectorAll(`[data-style-prop]`);
    for (const toolElement of stylingTools) {
      if (toolElement.dataset.styleValue) {
        toolElement.onclick = (e) => {
          this.handleStyleChange(e)
        }        
      }
    }
  }
  handleStyleChange(e) {
    const id = getHashData().component;
    const property = e.currentTarget.dataset.styleProp;
    const value = e.currentTarget.dataset.styleValue;
    this.styleComponent(id, property, value);

    let hashData = {
      method: "render",
      component: id,
    }
    setHashData(hashData);
  }
  styleComponent(id, property, value) {
    const componentList = this.projectData.pages[0].components;
    const component = this.findComponentById(id, componentList);
    console.log(component.id);
    if (component.styleClasses[property]) {
      component.styleClasses[property] = value;
    }
  }
  
  updateComponentStyleClasses(property, value, components = [this.elementData], id=this.elementData.id) {
    for (const component of components) {
      if (component.id == id) {
        if (component.styleClasses[property]) {
          component.styleClasses[property] = value;
          return true;
        } else return false;
      } else if (component.children && component.children.length) {
        return updateComponentStyleClasses(property, value, component.children);
      }
    }
  }
}

export { NewEditTool };
