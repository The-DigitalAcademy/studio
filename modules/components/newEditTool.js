import Component from "./componentClass";

/** Class representing an editing tool*/
class NewEditTool {

    #editableElement;
    #toolList;
    #toolboxLoaded;
    #toolbox;
    #toolButton;
    #toolDirectory = {
        horizontalAlign: this.#createHorizontalAlignTool(),
        textAlign: this.#createTextAlignTool(),
        imageSize: this.#createImageSizeTool(),
        imageUrl: this.#createImageUrlTool(),
        padding: this.#createPaddingTool(),
        bgColor: this.#createBgColorTool(),
        textColor: this.#createTextColorTool(),
        border: this.#createBorderTool()
    }
    /**
     * creates an EditTool for an element
     * tools specified in toolLIst
     * @param {Component} editableComponent element to add edit functionality to
     * @param {string[]} toolList list of tools to include in the edit toolbox
     */
    constructor(editableComponent, toolList) {
        this.#editableElement = editableComponent
        this.#toolList = toolList
        this.#toolboxLoaded = false
        this.#toolbox = this.#createEditToolbox();
        this.#toolButton = this.#createToolButton();

        document.body.append(this.#toolButton);
    }

    /**
     * create toolbutton for editableElement. tool button allows for editing and deleting editableElement
     */
    #createToolButton() {
        const deleteBtn = this.#createDeleteButton();
        const editBtn = this.#createEditButton();

        const toolBtn = document.createElement('span');
        toolBtn.className = 'p-1 shadow rounded-pill absolute border gradient-gray slide-right'
        toolBtn.append(editBtn);
        toolBtn.append(deleteBtn);
        this.#updateElementPosition(toolBtn, 0, -5);

        //hover display effect
        toolBtn.addEventListener('mouseover', () => {
            toolBtn.style.display = 'inline';
        })
        toolBtn.addEventListener('mouseout', () => {
            toolBtn.style.display = 'none';
        })
        this.#editableElement.addEventListener('mouseover', () => {
            this.#updateElementPosition(toolBtn, 0, -5);
            toolBtn.style.display = 'inline';
        })
        // FIX HERE
        this.#editableElement.addEventListener('mouseout', () => {
            toolBtn.style.display = 'none';
        })

        return toolBtn;
    }
    /**
     * creates an edit button element
     * @returns {Element} edit button ready to added to the toolbar
     */
    #createEditButton() {
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-sm text-primary border-0 EDITONLY';
        editButton.innerHTML = '<i class="bi bi-pencil-fill"></i>';
        editButton.onclick = () => {
            if (this.#toolboxLoaded) {
                this.#toolbox.remove();
                this.#toolboxLoaded = false;
            } else {
                this.#updateElementPosition(this.#toolbox, -15, 10);
                document.body.append(this.#toolbox);
                this.#toolboxLoaded = true;
            }
        }
        return editButton;
    }
    /**
     * creates a delete button element
     * @returns {Element} delete button ready to added to the toolbar
     */
    #createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm text-primary border-0 EDITONLY';
        deleteButton.innerHTML = '<i class="bi bi-trash-fill"></i>';
        deleteButton.onclick = () => {
            this.#editableElement.remove();
        }
        return deleteButton;
    }

    /**
     * creates the editing toolbox and includes the relevant tools according to the toolList
     * @return {Element} complete toolbox container ready to be added to the DOM
     */
    #createEditToolbox() {
        const toolParentContainer = document.createElement('div');
        toolParentContainer.className = 'edit-toolbox EDITONLY'
        const toolContainer = document.createElement('div');
        toolContainer.className = 'innerContainer'

        const closeBtn = document.createElement('button');
        closeBtn.classList = 'btn float-end';
        closeBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;

        closeBtn.onclick = () => {
            this.#toolbox.remove();
            this.#toolboxLoaded = false;
        };
        toolContainer.append(closeBtn)

        //add tools to container
        this.#toolList.forEach(tool => {
            const includedTool = this.#toolDirectory[tool];
            toolContainer.append(includedTool);
        });
        //set top/left position of container
        let rect = this.#editableElement.getBoundingClientRect();
        toolContainer.style.top = `${rect.top - 15}px`;
        toolContainer.style.left = `${rect.right + 10}px`;

        toolParentContainer.append(toolContainer);
        return toolParentContainer;
    }
    /**
     * update top & left displacement from editableElement
     * @param {Element} element element who's left/right style properties are being changed
     * @param {number} top displacement from top in px
     * @param {number} right displacement from right in px
     */
    #updateElementPosition(element, top, right) {
        let rect = this.#editableElement.getBoundingClientRect();
        element.style.top = `${rect.top + top }px`;
        element.style.left = `${rect.right + right }px`;
    }
    /**
     * creates textAlign tool and returns the element. tool sets the text-align style property of element
     * @return {Element} text align tool element
     */
    #createTextAlignTool1() {
        //parent
        const toolContainer = document.createElement('div');
        toolContainer.className = 'btn-group';
        toolContainer.setAttribute('aria-label', 'Basic label');

        //btn 1
        const leftAlignBtn = document.createElement('button');
        leftAlignBtn.className = 'btn btn-outline-light';
        leftAlignBtn.innerHTML = '<i class="bi bi-justify-left"></i>';
        leftAlignBtn.onclick = () => this.#editableElement.updateParentStyles('textAlign', 'text-center');
        
        //btn 2
        const centerAlignBtn = document.createElement('button');
        centerAlignBtn.onclick = () => this.#editableElement.updateParentStyles('textAlign', 'text-center');
        centerAlignBtn.className = 'btn btn-outline-light';
        centerAlignBtn.innerHTML = '<i class="bi bi-text-center"></i>';
        //btn 3
        const rightAlignBtn = document.createElement('button');
        rightAlignBtn.onclick = () => this.#editableElement.updateParentStyles('textAlign', 'text-end');
        rightAlignBtn.className = 'btn btn-outline-light';
        rightAlignBtn.innerHTML = '<i class="bi bi-justify-right"></i>';

        //append to parent
        toolContainer.append(leftAlignBtn, centerAlignBtn, rightAlignBtn);

        return toolContainer
    }
    // #createTextAlignTool() {
    //     //parent
    //     const toolContainer = document.createElement('div');
    //     toolContainer.className = 'btn-group';
    //     toolContainer.setAttribute('aria-label', 'Basic label');

    //     //btn 1
    //     const leftAlignBtn = document.createElement('button');
    //     leftAlignBtn.onclick = () => this.#styleEditableElement('textAlign', 'left');
    //     leftAlignBtn.className = 'btn btn-outline-light';
    //     leftAlignBtn.innerHTML = '<i class="bi bi-justify-left"></i>';
    //     //btn 2
    //     const centerAlignBtn = document.createElement('button');
    //     centerAlignBtn.onclick = () => this.#styleEditableElement('textAlign', 'center');
    //     centerAlignBtn.className = 'btn btn-outline-light';
    //     centerAlignBtn.innerHTML = '<i class="bi bi-text-center"></i>';
    //     //btn 3
    //     const rightAlignBtn = document.createElement('button');
    //     rightAlignBtn.onclick = () => this.#styleEditableElement('textAlign', 'right');
    //     rightAlignBtn.className = 'btn btn-outline-light';
    //     rightAlignBtn.innerHTML = '<i class="bi bi-justify-right"></i>';

    //     //append to parent
    //     toolContainer.append(leftAlignBtn, centerAlignBtn, rightAlignBtn);

    //     return toolContainer
    // }
    /**
     * creates align tool and returns element. tool positions element horizontally at start/end/center postion
     * using the margin style property.
     * @returns { Element } element align tool
     */
    #createHorizontalAlignTool() {
        //parent
        const toolContainer = document.createElement('div');
        toolContainer.className = 'btn-group';
        toolContainer.setAttribute('aria-label', 'Basic label');

        //btn 1
        const leftAlignBtn = document.createElement('button');
        leftAlignBtn.onclick = () => this.#styleEditableElement('margin', '0 auto 0 0');
        leftAlignBtn.className = 'btn btn-outline-light';
        leftAlignBtn.innerHTML = '<i class="bi bi-align-start"></i>';
        //btn 2
        const centerAlignBtn = document.createElement('button');
        centerAlignBtn.onclick = () => this.#styleEditableElement('margin', '0 auto');
        centerAlignBtn.className = 'btn btn-outline-light';
        centerAlignBtn.innerHTML = '<i class="bi bi-align-center"></i>';
        //btn 3
        const rightAlignBtn = document.createElement('button');
        rightAlignBtn.onclick = () => this.#styleEditableElement('margin', '0 0 0 auto');
        rightAlignBtn.className = 'btn btn-outline-light';
        rightAlignBtn.innerHTML = '<i class="bi bi-align-end"></i>';

        //append to parent
        toolContainer.append(leftAlignBtn, centerAlignBtn, rightAlignBtn);

        return toolContainer
    }
    /**
     * create return padding tool. tool takes input number and sets the left and right padding of element
     * @returns {Element} padding tool element
     */
    #createPaddingTool() {
        //parent
        const toolContainer = document.createElement('div');
        toolContainer.className = 'paddingTool';

        const label = '<span>Padding X</span>'
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.max = '20';
        input.step = '1';
        input.onchange = (e) => {
            this.#styleEditableElement('paddingLeft', `${e.target.value}%`);
            this.#styleEditableElement('paddingRight', `${e.target.value}%`);
        }

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
        const toolContainer = document.createElement('div');
        toolContainer.className = 'urlTool';

        const label = '<span>URL:</span>'
        const input = document.createElement('input');
        input.type = 'text';
        input.onchange = (e) => {
            this.#editableElement.children[0].src = e.target.value;
        }

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
        const toolContainer = document.createElement('div');
        toolContainer.className = 'paddingTool';

        const label = '<span>size: %</span>'
        const input = document.createElement('input');
        input.type = 'number';
        input.value = '50'
        input.min = '2';
        input.step = '1';
        input.style.width = '50px';
        input.onchange = (e) => {
            this.#styleEditableElement('width', `${e.target.value}%`);
            this.#styleEditableElement('height', `auto`);
        }

        toolContainer.innerHTML = label;
        toolContainer.append(input);

        return toolContainer;
    }
    /**
     * create and return border radius tool. tool takes input number and sets border-radius of element in % units
     * @returns {Element} border radius tool element
     */
    #createBorderRadiusTool() {
        const toolContainer = document.createElement('div');
        toolContainer.className = 'paddingTool';

        const label = '<span>radius:</span>'
        const input = document.createElement('input');
        input.type = 'number';
        input.value = '0'
        input.min = '0';
        input.max = '50';
        input.step = '1';
        input.style.width = '40px';
        input.onchange = (e) => {
            this.#styleEditableElement('borderRadius', `${e.target.value/4}rem`);
        }

        toolContainer.innerHTML = label;
        toolContainer.append(input);

        return toolContainer;
    }
    /**
     * create and return background color tool. tool changes background color of editableElement.
     * @returns {Element} background color tool element
     */
    #createBgColorTool() {
        const colors = ['#212529', '#f8f9fa', '#dc3545', '#ffc107', '#0dcaf0', '#198754', '#6c757d', '#0d6efd']
        const toolContainer = document.createElement('div');
        toolContainer.className = "border border-light my-1 p-1 rounded"
        toolContainer.innerHTML = '<p class="text-light mb-1 fw-light">Background Color</p>'
        colors.forEach(color => {
            const btn = document.createElement('button');
            btn.className = "btn m-1 colorBtn";
            btn.style.backgroundColor = color;
            btn.onclick = () => this.#styleEditableElement('backgroundColor', color);

            toolContainer.append(btn);
        });

        return toolContainer;
    }
    /**
     * create and return border tool. tool changes the border width, radius & color of editableElement.
     * @returns {Element} border tool element
     */
    #createBorderTool() {
        const colors = ['#212529', '#f8f9fa', '#dc3545', '#ffc107', '#0dcaf0', '#198754', '#6c757d', '#0d6efd'];

        const toolContainer = document.createElement('div');
        toolContainer.className = "border border-light my-1 p-1 rounded";
        toolContainer.innerHTML = '<p class="text-light mb-1 fw-light">Border</p>';

        const borderWidthContainer = document.createElement('div');
        borderWidthContainer.className = 'paddingTool';

        const label = '<span>width</span>'
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.max = '50';
        input.step = '1';
        input.onchange = (e) => {
            this.#styleEditableElement('borderWidth', `${e.target.value}px`);
            this.#styleEditableElement('borderStyle', 'solid');
        }
        borderWidthContainer.innerHTML = label;
        borderWidthContainer.append(input);

        const borderColorContainer = document.createElement('div');

        colors.forEach(color => {
            const colorBtn = document.createElement('button');
            colorBtn.className = "btn m-1 colorBtn"
            colorBtn.style.border = '2px solid ' + color;
            colorBtn.onclick = () => {
                this.#styleEditableElement('borderColor', color);
            }
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
        const colors = ['#212529', '#f8f9fa', '#dc3545', '#ffc107', '#0dcaf0', '#198754', '#6c757d', '#0d6efd']
        const toolContainer = document.createElement('div');
        toolContainer.className = "border border-light my-1 p-1 rounded"
        toolContainer.innerHTML = '<p class="text-light mb-1 fw-light">Text Color</p>'
        colors.forEach(color => {
            const btn = document.createElement('button');
            btn.className = "btn m-1 colorBtn";
            btn.style.backgroundColor = color;
            btn.onclick = () => this.#styleEditableElement('color', color);

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
        this.#editableElement.children[0].style[property] = value
    }
}

export { NewEditTool }