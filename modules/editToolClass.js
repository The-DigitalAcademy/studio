class EditTool {
    /**
     * 
     * @param {Element} editableElement 
     * @param {string[]} toolList 
     */
    constructor(editableElement, toolList) {
        this.editableElement = editableElement
        this.toolList = toolList
        this.toolboxLoaded = false
        this.toolbox = this.#createEditToolbox();

        this.#addEditFunctionality();
    }


    #addEditFunctionality() {
        const editBtn = this.#createEditButton();
        editBtn.onclick = () => {
            if (this.toolboxLoaded) {
                this.toolbox.style.visibility = 'visible'
            } else {
                document.body.append(this.toolbox);
                this.toolboxLoaded = true;
            }
        }

        this.editableElement.prepend(editBtn);
    }
    #createEditButton() {
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-sm btn-primary';
        editButton.style.float = 'right';
        editButton.innerHTML = '<i class="bi bi-pencil-fill"></i>'
        return editButton;
    }

    /**
     * 
     */
    #createEditToolbox() {
        //create tools specified in tools array
        const textAlignTool = this.toolList.includes('textAlign') ? this.#createTextAlignTool() : null

        const toolContainer = document.createElement('div');
        toolContainer.className = 'edit-options'

        const closeBtn = document.createElement('button');
        closeBtn.classList = 'btn';
        closeBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;

        closeBtn.onclick = () => this.toolbox.style.visibility = 'hidden';
        toolContainer.append(closeBtn)

        //add tools to container
        textAlignTool ? toolContainer.append(textAlignTool) : '';

        //set top/left position of container
        let rect = this.editableElement.getBoundingClientRect();
        toolContainer.style.top = `${rect.top - 15}px`;
        toolContainer.style.left = `${rect.right - 5}px`;

        return toolContainer;
    }

    /**
     * creates textAlign tool and returns Element
     * @return {Element} text align tool element
     */
    #createTextAlignTool() {
        //parent
        const toolContainer = document.createElement('div');
        toolContainer.className = 'btn-group';
        toolContainer.setAttribute('aria-label', 'Basic label');

        //btn 1
        const leftAlignBtn = document.createElement('button');
        leftAlignBtn.onclick = () => this.#alignTextLeft()
        leftAlignBtn.className = 'btn btn-outline-light';
        leftAlignBtn.innerHTML = '<i class="bi bi-justify-left"></i>';
        //btn 2
        const centerAlignBtn = document.createElement('button');
        centerAlignBtn.onclick = () => this.#alignTextCenter()
        centerAlignBtn.className = 'btn btn-outline-light';
        centerAlignBtn.innerHTML = '<i class="bi bi-text-center"></i>';
        //btn 3
        const rightAlignBtn = document.createElement('button');
        rightAlignBtn.onclick = () => this.#alignTextRight()
        rightAlignBtn.className = 'btn btn-outline-light';
        rightAlignBtn.innerHTML = '<i class="bi bi-justify-right"></i>';

        //append to parent
        toolContainer.append(leftAlignBtn, centerAlignBtn, rightAlignBtn);

        return toolContainer
    }
    #alignTextLeft() {
        this.editableElement.children[1].style.textAlign = 'left'
    }
    #alignTextCenter() {
        this.editableElement.children[1].style.textAlign = 'center'
    }
    #alignTextRight() {
        this.editableElement.children[1].style.textAlign = 'right'
    }
}

export { EditTool }