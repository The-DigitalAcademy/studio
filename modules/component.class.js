import { ActionTool } from "./actionTool.class.js"
import { generateUuid, getHashData, setHashData } from "./utils.js"

/** class representing a component */
class Component {

    Editingtools
    #componentData
    #componentElement

    /**
     * @param {component}
     */
    constructor(componentData, iconStyleClass) {
        this.#componentData = componentData
        this.#generateComponent();
    }

    /**
     * create and set component Element
     */
    #generateComponent() {
        this.#componentElement = this.#generateElement(this.#componentData);
    }

    /**
     * generates an Element with attributes and values along with its children based on the elementData provided
     * @param {{name: String, styleClasses: {}, children: [], contentEditable: boolean, editable: boolean}} elementData data about the element
     * @return {Element} generated Element
     */
    #generateElement(elementData) {
        if (!elementData.id) elementData.id = generateUuid()
        const element = document.createElement(elementData.name);
        element.dataset.editable = elementData.editable;
        element.dataset.componentId = elementData.id;
        element.className = Object.values(elementData.styleClasses).join(" ");

        if(elementData.attributes) {
            for (const [key, value] of Object.entries(elementData.attributes)) {
                element[key] = value;
            }
        }

        element.ondblclick = (e) => {
            const currHashData = getHashData()
            if (e.target.dataset.componentId == elementData.id) {
                const hashData = {
                    method: 'edit',
                    component: elementData.id,
                    page: currHashData.page
                } 
                setHashData(hashData)
            }
        }
        if (elementData.attributes && elementData.attributes.contentEditable) {
            element.onkeydown = (e) => {
                elementData.attributes.innerText = e.target.innerText
            }
        }
        if (elementData.children && elementData.children.length) {
            elementData.children.forEach(childElementData => {
                const childElement = this.#generateElement(childElementData)
                element.append(childElement)
            });
        }
        return element
    }

    getIcon() {
        return `<i class="bi bi-pencil-square text-light"></i>`
    }
    getInnerHtml() {
        const container = document.createElement('span');
        container.append(this.#componentElement);
        return container.innerHTML;
    }
    getElement() {
        let componentCopy = this.#componentElement;
        return componentCopy
    }

    /**
     * 
     * @return {String} innerHTML string value of component as
     */
    // #buildComponent();
    
}

export default Component