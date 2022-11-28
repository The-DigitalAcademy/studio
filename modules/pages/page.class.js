import Component from "../components/component.class.js";

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
            let dragItem = document.createElement('div');
            dragItem.className = "drag-item"
            dragItem.appendChild(component.getElement());
            container.append(dragItem)
        });
    }

}

export default Page