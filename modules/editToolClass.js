/** Class representing an editing tool*/
class EditTool {

    #editableElement;
    #toolList;
    #toolboxLoaded;
    #toolbox
    /**
     * creates an EditTool for an element
     * tools specified in toolLIst
     * @param {Element} editableElement element to add edit functionality to
     * @param {string[]} toolList list of tools to include in the edit toolbox
     */
    constructor(editableElement, toolList) {
        this.#editableElement = editableElement
        this.#toolList = toolList
        this.#toolboxLoaded = false
        this.#toolbox = this.#createEditToolbox();

        this.#addEditFunctionality();
    }

    /**
     * adds an edit button to the editableElement. The edit button loads/unloads the toolbox
     */
    #addEditFunctionality() {
        const deleteBtn = this.#creatDeleteButton();
        const editBtn = this.#createEditButton();

        //display edit & delete buttons on hover 
        this.#editableElement.addEventListener('mouseover', () => {
            editBtn.style.display = 'block';
            deleteBtn.style.display = 'block';
        })
        this.#editableElement.addEventListener('mouseout', () => {
            editBtn.style.display = 'none';
            deleteBtn.style.display = 'none';
        })

        //add edit & delete buttons to editableElement
        this.#editableElement.prepend(editBtn);
        this.#editableElement.prepend(deleteBtn);
    }
    /**
     * creates an edit button element
     * @returns {Element} edit button ready to be appended/prepended to the editableElement
     */
    #createEditButton() {
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-sm text-primary border-0';
        editButton.style.float = 'right';
        editButton.innerHTML = '<i class="bi bi-pencil-fill"></i>';
        editButton.onclick = () => {
            if (this.#toolboxLoaded) {
                this.#toolbox.remove();
                this.#toolboxLoaded = false;
            } else {
                document.body.append(this.#toolbox);
                this.#toolboxLoaded = true;
            }
        }
        return editButton;
    }
    #creatDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm text-primary border-0';
        deleteButton.style.float = 'right';
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
        //create tools specified in tools array
        const textAlignTool = this.#toolList.includes('textAlign') ? this.#createTextAlignTool() : null

        const toolContainer = document.createElement('div');
        toolContainer.className = 'edit-options'

        const closeBtn = document.createElement('button');
        closeBtn.classList = 'btn';
        closeBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;

        closeBtn.onclick = () => {
            this.#toolbox.remove();
            this.#toolboxLoaded = false;
        };
        toolContainer.append(closeBtn)

        //add tools to container
        textAlignTool ? toolContainer.append(textAlignTool) : '';

        //set top/left position of container
        let rect = this.#editableElement.getBoundingClientRect();
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
        this.#editableElement.children[2].style.textAlign = 'left'
    }
    #alignTextCenter() {
        this.#editableElement.children[2].style.textAlign = 'center'
    }
    #alignTextRight() {
        this.#editableElement.children[2].style.textAlign = 'right'
    }
}

export { EditTool }