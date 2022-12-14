import { generateUuid, getHashData, setHashData } from "./utils.js"

/** class representing a component */
class Component {

    #componentData

    /**
     * @param {{name, styleClasses?, children?, editable?, attributes?}} componentData data about the component
     */
    constructor(componentData) {
        this.#componentData = componentData
    }

    /**
     * generates an Element with attributes, values along with its children based on the elementData provided
     * @param {{name, styleClasses?, children?, editable?, attributes?}} elementData data about the element
     * @return {Element} generated Element
     */
    #generateElement(elementData) {
        if (!elementData.id) elementData.id = generateUuid()
        const element = document.createElement(elementData.name);
        element.dataset.editable = elementData.editable;
        element.id = elementData.id
        element.className = elementData.styleClasses ? Object.values(elementData.styleClasses).join(" "): ' ';

        //set element attributes
        if (elementData.attributes) {
            for (const [key, value] of Object.entries(elementData.attributes)) {
                if (key == 'dataset') {
                    for (const [dataProp, dataValue] of  Object.entries(elementData.attributes.dataset)) {
                        element.dataset[dataProp] = dataValue;
                    }
                } else element[key] = value;
            }
        }

        //enable styling by setting url hash details
        element.onclick = (e) => {
            e.preventDefault(); //prevent a tags from redirecting
            const currHashData = getHashData()
            if (e.target.id == elementData.id) {
                const hashData = {
                    method: 'edit',
                    component: elementData.id,
                    page: currHashData.page
                }
                setHashData(hashData)
            }
        }
        //update element content text when changed
        if (elementData.attributes && elementData.attributes.contentEditable) {
            element.onkeydown = (e) => {
                elementData.attributes.innerText = e.target.innerText
            }
        }
        //add ayoba api dataset
        if (elementData.ayobaApi) {
            element.dataset.ayobaApi = elementData.ayobaApi;
            element.classList.add('border-success')
            element.placeholder = `will Autofill with user's ${elementData.ayobaApi}`
        }
        // generate child elements
        if (elementData.children && elementData.children.length) {
            elementData.children.forEach(childElementData => {
                const childElement = this.#generateElement(childElementData)
                element.append(childElement)
            });
        }
        return element
    }

    /**
     * return element generated from componentData
     * @returns {Element} generated element
     */
    getComponent() {
        return this.#generateElement(this.#componentData);
    }
}

export default Component