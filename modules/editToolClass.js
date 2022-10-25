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
        editButton.className = 'btn btn-sm text-primary border-0 EDITONLY';
        editButton.style.float = 'right';
        editButton.innerHTML = '<i class="bi bi-pencil-fill"></i>';
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
    #creatDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm text-primary border-0 EDITONLY';
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
        const imageUrlTool = this.#toolList.includes('imageUrl') ? this.#createImageUrlTool() : null
        const imageSizeTool = this.#toolList.includes('imageSize') ? this.#createImageSizeTool() : null
        const borderRadiusTool = this.#toolList.includes('borderRadius') ? this.#createBorderRadiusTool() : null
        const alignTool = this.#toolList.includes('alignTool') ? this.#createAlignTool() : null

        const toolContainer = document.createElement('div');
        toolContainer.className = 'edit-toolbox EDITONLY'

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
        imageUrlTool ? toolContainer.append(imageUrlTool) : '';
        imageSizeTool ? toolContainer.append(imageSizeTool) : '';
        borderRadiusTool ? toolContainer.append(borderRadiusTool) : '';
        alignTool ? toolContainer.append(alignTool) : '';

        //set top/left position of container
        let rect = this.#editableElement.getBoundingClientRect();
        toolContainer.style.top = `${rect.top - 15}px`;
        toolContainer.style.left = `${rect.right + 10}px`;

        return toolContainer;
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
     * creates textAlign tool and returns the element. tool sets the text-align style property of element
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
     * creates align tool and returns element. tool positions element horizontally at start/end/center postion
     * using the margin style property.
     * @returns { Element } element align tool
     */
    #createAlignTool() {
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
            this.#editableElement.children[2].src = e.target.value;
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
     * creat and return border radius tool. tool takes input number and sets border-radius of element in % units
     * @returns {Element} border radius tool element
     */
    #createBorderRadiusTool() {
        const toolContainer = document.createElement('div');
        toolContainer.className = 'paddingTool';

        const label = '<span>Border radius: %</span>'
        const input = document.createElement('input');
        input.type = 'number';
        input.value = '0'
        input.min = '0';
        input.max = '50';
        input.step = '1';
        input.style.width = '40px';
        input.onchange = (e) => {
            this.#styleEditableElement('borderRadius', `${e.target.value}%`);
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