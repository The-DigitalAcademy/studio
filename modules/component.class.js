import { ActionTool } from "./actionTool.class.js"
import { setHashData } from "./utils.js"

/** class representing a component */
class Component {

    Editingtools
    #componentData
    #iconStyleClass
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
        const element = document.createElement(elementData.name);
        element.dataset.editable = elementData.editable;
        element.dataset.componentId = elementData.id;
        element.className = Object.values(elementData.styleClasses).join(" ");
        element.ondblclick = (e) => {
            if (e.target.dataset.componentId == elementData.id) {
                const hashData = {
                    method: 'edit',
                    component: elementData.id,
                } 
                setHashData(hashData)
            }
        }
        if (!elementData.children || !elementData.children.length) {
            element.innerText = elementData.innerText;
            element.contentEditable = elementData.contentEditable;
        } else {
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