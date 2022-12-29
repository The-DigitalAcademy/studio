import Component from "./component.class.js";
import { setHashData, getHashData } from "./utils.js";

class Page {

    components = []
    pageData
    rootElementId = "container"

    //creates a project page
    constructor(pageData = null) {
        this.pageData = pageData;
        this.renderPage();
    }

    /**
     * render each component of the currrent page onto the specified document container
     */
    renderPage() {
        //clear container
        const container = document.getElementById(this.rootElementId);
        container.innerHTML = ''

        this.pageData.components.forEach(componentData => {
            let component = new Component(componentData);

            //for deleting the component
            let deleteBtn = document.createElement('button');
            deleteBtn.className = "deleteBtn";
            deleteBtn.innerHTML = '<i class="bi bi-trash-fill"></i>'
            deleteBtn.onclick = () => {
                this.deleteComponent(componentData.id, this.pageData.components);
                setHashData({ ...getHashData(), method: 'render', }) //set hash for rendering changes
            }

            //nest component & deleteBtn inside a 'drag-item' div
            let dragItem = document.createElement('div');
            dragItem.className = "drag-item relative";
            // dragItem.appendChild(deleteBtn)
            dragItem.appendChild(component.getComponent());

            // container.append(dragItem);
            container.append(component.getComponent())
        });
    }

    /**
     * delete a component by id from an array of components
     * @param {string} id component identifier
     * @param {[]} components array of compnents to delete from
     */
    deleteComponent(id, components) {
        for (let i = 0; i < components.length; i++) {
            if (components[i].id == id) components.splice(i, 1)
        }
    }

}

export default Page