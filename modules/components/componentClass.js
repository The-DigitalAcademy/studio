import { NewEditTool } from "./newEditTool"

EditTool

/** class representing a component */
class Component {

    #editingTools
    #AyobaApiOptions
    #icon
    #content
    #parentContainer
    #parentClassList
    #container


    constructor() {
        this.EditTool = new NewEditTool(this, this.#editingTools)
    }


    /**
     * update the parent class list
     */
    updateParentStyles(property, value) {
        this.#parentClassList[property] = value
        const classList = Object.values(this.#parentClassList)
        this.#container.className.value = classList.join(" ")
    }

    /**
     * 
     * @return {String} innerHTML string value of component as
     */
    #buildComponent();
    
}

export default Component