import { ActionTool } from "../actionTool.class.js"
import { NewEditTool } from "./newEditTool.js"

/** class representing a component */
class Component {

    #Editingtools
    #componentData
    #iconStyleClass
    #componentElement

    /**
     * @param {component}
     */
    constructor(componentData, iconStyleClass) {
        this.#componentData = componentData
        this.#iconStyleClass = iconStyleClass
        this.#generateComponent();
    }

    /**
     * create and set component Element
     */
    #generateComponent() {
        this.#componentElement = this.#generateElement(this.#componentData);
        this.#Editingtools = new NewEditTool(this.#componentData)
        this.#componentElement.onclick = () => {
            console.log('generateElement: onlick');
            this.#Editingtools.renderTools()
        }
        console.log(this.#componentElement);
    }

    /**
     * generates an Element with attributes and values along with its children based on the elementData provided
     * @param {{name: String, styleClasses: {}, children: [], contentEditable: boolean, editable: boolean}} elementData data about the element
     * @return {Element} generated Element
     */
    #generateElement(elementData) {
        const element = document.createElement(elementData.name);
        console.log('generateElement');
        // const editTool = new NewEditTool(elementData)
        // editTool.renderTools()
        // element.onclick = () => {
        //     console.log('generateElement: onlick');
        //     editTool.renderTools()
        // }
        element.className = Object.values(elementData.styleClasses).join(" ");
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

    /**
     * update the parent class list
     */
    updateStyling(property, value) {
        // this.#componentElementClassList[property] = value
        // const classList = Object.values(this.#componentElementClassList)
        // this.#componentElement.className.value = classList.join(" ")
    }

    getIcon() {
        return `<i class="bi ${this.#iconStyleClass}"></i>`
    }
    getContent() {
        const container = document.createElement('span');
        container.append(this.#componentElement);
        return container.innerHTML;
    }
    getElement() {
        return this.#componentElement
    }

    /**
     * 
     * @return {String} innerHTML string value of component as
     */
    // #buildComponent();
    
}

export default Component