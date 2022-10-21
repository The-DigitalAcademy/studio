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

        //display edit & delete buttons onmouseover 
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
        const paddingTool = this.#toolList.includes('padding') ? this.#createPaddingTool() : null

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
        paddingTool ? toolContainer.append(paddingTool) : '';

        //set top/left position of container
        let rect = this.#editableElement.getBoundingClientRect();
        toolContainer.style.top = `${rect.top - 15}px`;
        toolContainer.style.left = `${rect.right - 5}px`;

        return toolContainer;
    }

    /**
     * creates textAlign tool and returns the element
     * @return {Element} text align tool element
     */
    #createTextAlignTool() {
        //parent
        const toolContainer = document.createElement('div');
        toolContainer.className = 'btn-group';
        toolContainer.setAttribute('aria-label', 'Basic label');

        //btn 1
        const leftAlignBtn = document.createElement('button');
        leftAlignBtn.onclick = () => this.#styleEditableElement('textAlign', 'left');
        leftAlignBtn.className = 'btn btn-outline-light';
        leftAlignBtn.innerHTML = '<i class="bi bi-justify-left"></i>';
        //btn 2
        const centerAlignBtn = document.createElement('button');
        centerAlignBtn.onclick = () => this.#styleEditableElement('textAlign', 'center');
        centerAlignBtn.className = 'btn btn-outline-light';
        centerAlignBtn.innerHTML = '<i class="bi bi-text-center"></i>';
        //btn 3
        const rightAlignBtn = document.createElement('button');
        rightAlignBtn.onclick = () => this.#styleEditableElement('textAlign', 'right');
        rightAlignBtn.className = 'btn btn-outline-light';
        rightAlignBtn.innerHTML = '<i class="bi bi-justify-right"></i>';

        //append to parent
        toolContainer.append(leftAlignBtn, centerAlignBtn, rightAlignBtn);

        return toolContainer
    }
    /**
     * creates padding tool and returns the element
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
     * applies css styles to the editable element
     * @param {string} property css declaration property in camelcase format
     * @param {string} value css declaration value
     */
    #styleEditableElement(property, value) {
        this.#editableElement.children[2].style[property] = value
    }
}

export { EditTool }