import Component from "./component.class.js";

/** Class representing an editing tool*/
class NewEditTool {
  #editableElement;
  #toolList;
  #toolDirectory = {
    horizontalAlign: this.#createHorizontalAlignTool(),
    textAlign: this.#createTextAlignTool(),
    imageSize: this.#createImageSizeTool(),
    imageUrl: this.#createImageUrlTool(),
    padding: this.#createPaddingTool(),
    bgColor: this.#createBgColorTool(),
    textColor: this.#createTextColorTool(),
    border: this.#createBorderTool(),
    borderRadius: this.#createBorderRadiusTool(),
  };
  /**
   * creates an EditTool for an element
   * tools specified in toolLIst
   * @param {Component} editableComponent element to add edit functionality to
   * @param {string[]} toolList list of tools to include in the edit toolbox
   */
  constructor(projectData) {
    this.projectData = projectData;

    window.addEventListener("hashchange", () => {
      this.renderTools();
    })
  }

  /**
   * create toolbutton for editableElement. tool button allows for editing and deleting editableElement
   */
  /**
   * creates a delete button element
   * @returns {Element} delete button ready to added to the toolbar
   */
  #createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-sm text-primary border-0 EDITONLY";
    deleteButton.innerHTML = '<i class="bi bi-trash-fill"></i>';
    deleteButton.onclick = () => {
      this.#editableElement.remove();
    };
    return deleteButton;
  }

  renderTools() {
    if (!location.hash.includes('#(edit)')) return
    const componentId = location.hash.replace("#(edit)", "");
    //find component by id
    let foundComponent = this.findComponentById(componentId, this.projectData.pages[0].components)
    if (!foundComponent || !foundComponent.styleClasses || !foundComponent.editable) return
    //get and display editable styles
    const toolContainer = document.createElement("div");
    const ToolPanel = document.getElementById("tools-container");
    const toolDirectory = this.#toolDirectory;

    Object.keys(foundComponent.styleClasses).forEach((tool) => {
        if (toolDirectory[tool]) {
            const includedTool = toolDirectory[tool];
            toolContainer.append(includedTool);
        }
    });
    ToolPanel.innerHTML = "";
    ToolPanel.append(toolContainer);
  }
  /**
   * update top & left displacement from editableElement
   * @param {Element} element element who's left/right style properties are being changed
   * @param {number} top displacement from top in px
   * @param {number} right displacement from right in px
   */
  #updateElementPosition(element, top, right) {
    // let rect = this.#editableElement.getBoundingClientRect();
    // element.style.top = `${rect.top + top }px`;
    // element.style.left = `${rect.right + right }px`;
  }
  /**
   * creates textAlign tool and returns the element. tool sets the text-align style property of element
   * @return {Element} text align tool element
   */
  #createTextAlignTool() {
    //parent
    const toolContainer = document.createElement("div");
    toolContainer.className = "btn-group";
    toolContainer.setAttribute("aria-label", "Basic label");

    //btn 1
    const leftAlignBtn = document.createElement("button");
    leftAlignBtn.className = "btn btn-outline-light";
    leftAlignBtn.innerHTML = '<i class="bi bi-justify-left"></i>';
    leftAlignBtn.onclick = () =>
      this.styleComponent("textAlign", "text-start");

    //btn 2
    const centerAlignBtn = document.createElement("button");
    centerAlignBtn.onclick = () =>
      this.styleComponent("textAlign", "text-center");
    centerAlignBtn.className = "btn btn-outline-light";
    centerAlignBtn.innerHTML = '<i class="bi bi-text-center"></i>';
    //btn 3
    const rightAlignBtn = document.createElement("button");
    rightAlignBtn.onclick = () =>
      this.styleComponent("textAlign", "text-end");
    rightAlignBtn.className = "btn btn-outline-light";
    rightAlignBtn.innerHTML = '<i class="bi bi-justify-right"></i>';

    //append to parent
    toolContainer.append(leftAlignBtn, centerAlignBtn, rightAlignBtn);

    return toolContainer;
  }

  /**
   * creates align tool and returns element. tool positions element horizontally at start/end/center postion
   * using the margin style property.
   * @returns { Element } element align tool
   */
  #createHorizontalAlignTool() {
    //parent
    const toolContainer = document.createElement("div");
    toolContainer.className = "btn-group";
    toolContainer.setAttribute("aria-label", "Basic label");

    //btn 1
    const leftAlignBtn = document.createElement("button");
    leftAlignBtn.onclick = () =>
      this.styleComponent("horizontalAlign", "me-auto");
    leftAlignBtn.className = "btn btn-outline-light";
    leftAlignBtn.innerHTML = '<i class="bi bi-align-start"></i>';
    //btn 2
    const centerAlignBtn = document.createElement("button");
    centerAlignBtn.onclick = () =>
      this.styleComponent("horizontalAlign", "mx-auto");
    centerAlignBtn.className = "btn btn-outline-light";
    centerAlignBtn.innerHTML = '<i class="bi bi-align-center"></i>';
    //btn 3
    const rightAlignBtn = document.createElement("button");
    rightAlignBtn.onclick = () =>
      this.styleComponent("horizontalAlign", "ms-auto");
    rightAlignBtn.className = "btn btn-outline-light";
    rightAlignBtn.innerHTML = '<i class="bi bi-align-end"></i>';

    //append to parent
    toolContainer.append(leftAlignBtn, centerAlignBtn, rightAlignBtn);

    return toolContainer;
  }
  /**
   * create return padding tool. tool takes input number and sets the left and right padding of element
   * @returns {Element} padding tool element
   */
  #createPaddingTool() {
    //parent
    const toolContainer = document.createElement("div");
    toolContainer.className = "paddingTool";

    const label = "<span>Padding X</span>";
    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.max = "5";
    input.step = "1";
    input.onchange = (e) => {
      this.styleComponent("padding", `px-${e.target.value}`);
    };

    toolContainer.innerHTML = label;
    toolContainer.append(input);

    return toolContainer;
  }
  /**
   * create and return padding tool. tool takes input url text and sets it to the image src attribute
   * @returns {Element} image url tool element
   */
  #createImageUrlTool() {
    //parent
    const toolContainer = document.createElement("div");
    toolContainer.className = "urlTool";

    const label = "<span>URL:</span>";
    const input = document.createElement("input");
    input.type = "text";
    input.onchange = (e) => {
      this.#editableElement.children[0].src = e.target.value;
    };

    toolContainer.innerHTML = label;
    toolContainer.append(input);

    return toolContainer;
  }
  /**
   * create and return image size tool. tool takes input number and sets width of element in % units
   * @returns {Element} image size tool element
   */
  #createImageSizeTool() {
    //parent
    const toolContainer = document.createElement("div");
    toolContainer.className = "paddingTool";

    const label = "<span>size: %</span>";
    const input = document.createElement("input");
    input.type = "number";
    input.value = "0";
    input.min = "0";
    input.step = "25";
    input.max = "100"
    input.style.width = "50px";
    input.onchange = (e) => {
      this.styleComponent("width", `w-${e.target.value}`);
    };

    toolContainer.innerHTML = label;
    toolContainer.append(input);

    return toolContainer;
  }
  /**
   * create and return border radius tool. tool takes input number and sets border-radius of element in % units
   * @returns {Element} border radius tool element
   */
  #createBorderRadiusTool() {
    const toolContainer = document.createElement("div");
    toolContainer.className = "paddingTool";

    const label = "<span>radius:</span>";
    const input = document.createElement("input");
    input.type = "number";
    input.value = "0";
    input.min = "0";
    input.max = "5";
    input.step = "1";
    input.style.width = "40px";
    input.onchange = (e) => {
      this.styleComponent("borderRadius", `rounded-${e.target.value}`);
    };

    toolContainer.innerHTML = label;
    toolContainer.append(input);

    return toolContainer;
  }
  /**
   * create and return background color tool. tool changes background color of editableElement.
   * @returns {Element} background color tool element
   */
  #createBgColorTool() {
    const colors = [
      "dark",
      "light",
      "danger",
      "warning",
      "#success",
      "info",
      "secondary",
      "primary",
    ];
    const toolContainer = document.createElement("div");
    toolContainer.className = "border border-light my-1 p-1 rounded";
    toolContainer.innerHTML =
      '<p class="text-light mb-1 fw-light">Background Color</p>';
    colors.forEach((color) => {
      const btn = document.createElement("button");
      btn.className = `btn m-1 colorBtn bg-${color}`;
      btn.onclick = () => this.styleComponent("bgColor", `bg-${color}`);

      toolContainer.append(btn);
    });

    return toolContainer;
  }
  /**
   * create and return border tool. tool changes the border width, radius & color of editableElement.
   * @returns {Element} border tool element
   */
  #createBorderTool() {
    const colors = [
        "dark",
        "light",
        "danger",
        "warning",
        "#success",
        "info",
        "secondary",
        "primary",
      ];

    const toolContainer = document.createElement("div");
    toolContainer.className = "border border-light my-1 p-1 rounded";
    toolContainer.innerHTML = '<p class="text-light mb-1 fw-light">Border</p>';

    const borderWidthContainer = document.createElement("div");
    borderWidthContainer.className = "paddingTool";

    const label = "<span>width</span>";
    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.max = "5";
    input.step = "1";
    input.onchange = (e) => {
      this.styleComponent("borderWidth", `border border-${e.target.value}`);
    };
    borderWidthContainer.innerHTML = label;
    borderWidthContainer.append(input);

    const borderColorContainer = document.createElement("div");

    colors.forEach((color) => {
      const colorBtn = document.createElement("button");
      colorBtn.className = "btn m-1 colorBtn";
      colorBtn.style.border = `border-${color} border-3`;
      colorBtn.onclick = () => {
        this.styleComponent("borderColor", `border-${color}`);
      };
      borderColorContainer.append(colorBtn);
    });
    const borderRadiusElement = this.#createBorderRadiusTool();
    toolContainer.append(borderWidthContainer);
    toolContainer.append(borderRadiusElement);
    toolContainer.append(borderColorContainer);

    return toolContainer;
  }
  /**
   * create and return text color tool. tool changes text color of editableElement.
   * @returns {Element} text color tool element
   */
  #createTextColorTool() {
    const colors = [
        "dark",
        "light",
        "danger",
        "warning",
        "#success",
        "info",
        "secondary",
        "primary",
      ];
    const toolContainer = document.createElement("div");
    toolContainer.className = "border border-light my-1 p-1 rounded";
    toolContainer.innerHTML =
      '<p class="text-light mb-1 fw-light">Text Color</p>';
    colors.forEach((color) => {
      const btn = document.createElement("button");
      btn.className = "btn m-1 colorBtn " + "bg-"+color;
      btn.onclick = () => this.styleComponent("textColor", `text-color`);

      toolContainer.append(btn);
    });

    return toolContainer;
  }

  /**
   * applies css styles to the editable element
   * @param {string} property css declaration property in camelcase format
   * @param {string} value css declaration value
   */
  #styleEditableElement(property, value) {
    this.#editableElement.children[0].style[property] = value;
  }

  findComponentById(id, components) {
    for (const component of components) {
      if (component.id == id) {
        return component
      } else if (component.children && component.children.length) {
        return this.findComponentById(id, component.children)
      } else  {return component.id}
    }

    // return null
  }

  styleComponent(property, value) {
    const componentId = location.hash.replace("#(edit)", "");
    const componentList = this.projectData.pages[0].components;
    const component = this.findComponentById(componentId, componentList)
    console.log(component.styleClasses[property])
    if (component.styleClasses[property]) {
      location.hash = "(render)" + componentId;
      console.log(component.styleClasses[property])
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
