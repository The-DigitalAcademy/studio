/**Class representing an Action tool */
class ActionTool {

    #editableElement;
    #toolList;
    #toolboxLoaded;
    #toolbox;
    #toolButton;
    #toolDirectory = {
        // horizontalAlign: this.#createHorizontalAlignTool(),
        // textAlign: this.#createTextAlignTool(),
        // borderRadius: this.#createBorderRadiusTool(),
        // imageSize: this.#createImageSizeTool(),
        // imageUrl: this.#createImageUrlTool(),
        // padding: this.#createPaddingTool(),
        // bgColor: this.#createBgColorTool(),
        // textColor: this.#createTextColorTool()
    }
    /**
     * creates an ActionTool for an element with tools specified in toolList
     * @param {Element} editableElement element to add edit functionality to
     * @param {string[]} toolList list of tools to include in the edit toolbox
     */
    constructor(editableElement, toolList) {
        if (!toolList) return;
        this.#editableElement = editableElement
        this.#toolList = toolList
        this.#toolboxLoaded = false
        this.#toolbox = this.#createActionToolbox();
        this.#toolButton = this.#createToolButton();

        document.body.append(this.#toolButton);
    }

    /**
     * create toolbutton for editableElement. tool button allows for adding action methods to editableElement
     */
    #createToolButton() {
        const editBtn = this.#createActionButton();

        const toolBtn = document.createElement('span');
        toolBtn.className = 'p-1 shadow rounded-pill absolute border gradient-gray slide-right'
        toolBtn.append(editBtn);
        this.#updateElementPosition(toolBtn, 40, -5);

        //hover display effect
        toolBtn.addEventListener('mouseover', () => {
            toolBtn.style.display = 'inline';
        })
        toolBtn.addEventListener('mouseout', () => {
            toolBtn.style.display = 'none';
        })
        this.#editableElement.addEventListener('mouseover', () => {
            this.#updateElementPosition(toolBtn, 40, -5);
            toolBtn.style.display = 'inline';
        })
        // FIX HERE
        this.#editableElement.addEventListener('mouseout', () => {
            toolBtn.style.display = 'none';
        })

        return toolBtn;
    }
    /**
     * 
     * @returns 
     */
    #createActionButton() {
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-sm text-primary border-0 EDITONLY';
        editButton.innerHTML = '<i class="bi bi-gear-fill"></i>';
        editButton.onclick = () => {
            if (this.#toolboxLoaded) {
                this.#toolbox.remove();
                this.#toolboxLoaded = false;
            } else {
                this.#updateToolboxPosition()
                document.body.append(this.#toolbox);
                this.#toolboxLoaded = true;
            }
        }
        return editButton;
    }

    /**
     * creates the action toolbox and includes the relevant tools according to the toolList
     * @return {Element} complete toolbox container ready to be added to the DOM
     */
    #createActionToolbox() {
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

        const checklistGroup = document.createElement('div');

        //add tools to container
        this.#toolList.forEach((tool, index) => {
            const div = document.createElement('div');
            div.className = "form-check ps-0";
            const input = document.createElement('input');
            let inputAttributes = {
                type: 'radio',
                className: "btn-check",
                name: "action-item",
                id: tool,
                value: tool,
                autocomplete: "off",
                onchange: () => this.setOnloadClass()
            }
            this.#setElementAttributes(input, inputAttributes);
            const label = document.createElement('label');
            let labelAttributes = {
                className: "btn btn-sm w-100 btn-outline-light",
                htmlFor: tool,
                innerHTML: tool
            }
            this.#setElementAttributes(label, labelAttributes);

            div.append(input, label);
            checklistGroup.append(div);
        });
        toolContainer.append(checklistGroup);
        //set top/left position of container
        let rect = this.#editableElement.getBoundingClientRect();
        toolContainer.style.top = `${rect.top - 15}px`;
        toolContainer.style.left = `${rect.right + 10}px`;

        toolParentContainer.append(toolContainer);
        return toolParentContainer;
    }
    /**
     * update top & left style properties of toolbox
     */
    #updateToolboxPosition() {
        let rect = this.#editableElement.getBoundingClientRect();
        this.#toolbox.style.top = `${rect.top - 15}px`;
        this.#toolbox.style.left = `${rect.right + 10}px`;
    }
    /**
     * update top & left displacement from editableElement
     * @param {Element} element element who's left/right style properties are being changed
     * @param {number} top displacement from top in px
     * @param {number} right displacement from right in px
     */
    #updateElementPosition(element, top, right) {
        let rect = this.#editableElement.getBoundingClientRect();
        element.style.top = `${rect.top + top}px`;
        element.style.left = `${rect.right + right}px`;
    }
    #setElementAttributes(element, attributes) {
        Object.keys(attributes).forEach(attr => {
            element[attr] = attributes[attr];
        });
    }
    setOnloadClass() {
        const action = document.querySelector('input[name="action-item"]:checked').value;
        const element = this.#editableElement.children[0].children[1];
        element.dataset.action = action;
    }
}

export { ActionTool }