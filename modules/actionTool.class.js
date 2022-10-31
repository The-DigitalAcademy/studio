/**Class representing an Action tool */
class ActionTool {

    #editableElement;
    #toolList;
    #toolboxLoaded;
    #toolbox;
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
     * creates an EditTool for an element
     * tools specified in toolLIst
     * @param {Element} editableElement element to add edit functionality to
     * @param {string[]} toolList list of tools to include in the edit toolbox
     */
    constructor(editableElement, toolList) {
        if (!toolList) return;
        this.#editableElement = editableElement
        this.#toolList = toolList
        this.#toolboxLoaded = false
        this.#toolbox = this.#createActionToolbox();

        this.#addActionFunctionality();
    }

    /**
     * adds an action button to the editableElement. The action button loads/unloads the toolbox
     */
    #addActionFunctionality() {
        const actionBtn = this.#createActionButton();

        //display action button onmouseover 
        this.#editableElement.addEventListener('mouseover', () => {
            actionBtn.style.display = 'block';
        })
        this.#editableElement.addEventListener('mouseout', () => {
            actionBtn.style.display = 'none';
        })

        //add edit & delete buttons to editableElement
        this.#editableElement.prepend(actionBtn);
    }
    #createActionButton() {
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-sm text-primary border-0 EDITONLY';
        editButton.style.float = 'right';
        editButton.innerHTML = '<i class="bi bi-hand-index-fill"></i>';
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
     * creates the editing toolbox and includes the relevant tools according to the toolList
     * @return {Element} complete toolbox container ready to be added to the DOM
     */
    #createActionToolbox() {
        const toolParentContainer = document.createElement('div');
        toolParentContainer.className = 'edit-toolbox EDITONLY'
        const toolContainer = document.createElement('div');
        toolContainer.className = 'innerContainer'

        const closeBtn = document.createElement('button');
        closeBtn.classList = 'btn';
        closeBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;

        closeBtn.onclick = () => {
            this.#toolbox.remove();
            this.#toolboxLoaded = false;
        };
        toolContainer.append(closeBtn)

        const checklistGroup = document.createElement('div');
        checklistGroup.className = '';
        let listContent = '';

        //add tools to container
        this.#toolList.forEach((tool, index) => {
            listContent += `
                        <div class="form-check ps-0">
                            <input type="radio" class="btn-check" name="action-item" id="${tool}" value="${tool}" autocomplete="off">
                            <label class="btn btn-sm w-100 btn-outline-light" for="${tool}">${tool}</label>
                        </div>
                            `
            // const includedTool = this.#toolDirectory[tool];
            // toolContainer.append(includedTool);
        });
        checklistGroup.innerHTML = listContent;
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
    #setOnloadFunction() {
        
    }


}

export { ActionTool }