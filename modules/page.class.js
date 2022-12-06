import Component from "./component.class.js";
import { setHashData, getHashData } from "./utils.js";

class Page {

    components = []
    pageData
    rootElementId = "container"

    constructor(pageData = null) {
        this.pageData = pageData;
        this.renderPage();
    }
    
    renderPage() {
        const container = document.getElementById(this.rootElementId);
        container.innerHTML = ''
        this.pageData.components.forEach(componentData => {
            let component = new Component(componentData);

            let deleteBtn = document.createElement('button');
            deleteBtn.className = "deleteBtn";
            deleteBtn.innerHTML = '<i class="bi bi-trash-fill"></i>'
            deleteBtn.onclick = () => {
                this.deleteComponent(componentData.id, this.pageData.components);
                setHashData({...getHashData(),  method:'render', })
            }

            let dragItem = document.createElement('div');
            dragItem.className = "drag-item relative";
            dragItem.appendChild(deleteBtn)
            dragItem.appendChild(component.getElement());
            container.append(dragItem)
        });
    }

    deleteComponent(id, components) {
        for (let i = 0; i < components.length; i++) {
            const component = components[i];
            if (component.id == id) {
                //delete component
                components.splice(i, 1)
            }
        }
    }

}

export default Page