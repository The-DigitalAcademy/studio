import { getHashData, setHashData } from "../utils.js";
import Component from "./component.class.js";

/** Class representing an editing tool*/
class NewEditTool {
  #editableElement;
  /**
   * creates a style editing Tool
   * @param {Object} projectData object containing data of the project
   */
  constructor(projectData) {
    this.projectData = projectData;

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

    Object.keys(foundComponent.styleClasses).forEach((tool) => {
      this.addStylingHandlerToStylingTool(tool)
    });
  }
  findComponentById(id, components) {
    for (const component of components) {
      if (component.id == id) {
        return component
      } else if (component.children && component.children.length) {
        return this.findComponentById(id, component.children)
      } else  {return component.id}
    }
  }
  addStylingHandlerToStylingTool(styleProp) {
    const stylingTools = document.querySelectorAll(`[data-style-prop]='${styleProp}'`);
    for (const toolElement of stylingTools) {
      toolElement.onclick = (e) => {
        this.handleStyleChange(e)
      }
    }
  }
  handleStyleChange(e) {
    const id = location.hash.replace("#", "");;
    const property = e.target.dataset.styleProp;
    const value = e.target.dataset.styleValue;
    this.styleComponent(id, property, value);

    let hashData = {
      action: "render",
      component: id,
    }
    setHashData(hashData);
  }
  styleComponent(id, property, value) {
    const componentList = this.projectData.pages[0].components;
    const component = this.findComponentById(id, componentList)
    if (component.styleClasses[property]) {
      location.hash = "(render)" + id;
      console.log(component.styleClasses[property])
      component.styleClasses[property] = value;
    }
  }
  // styleComponent(property, value) {
  //   const componentId = location.hash.replace("#", "");
  //   const componentList = this.projectData.pages[0].components;
  //   const component = this.findComponentById(componentId, componentList)
  //   console.log(component.styleClasses[property])
  //   if (component.styleClasses[property]) {
  //     location.hash = "(render)" + componentId;
  //     console.log(component.styleClasses[property])
  //     component.styleClasses[property] = value;
  //   }
  // }
  
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
