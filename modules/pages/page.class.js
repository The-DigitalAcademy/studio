import Component from "../components/component.class.js";

class Page {

    components = []
    pageData
    rootElementId = "container"

    constructor(pageData = null) {
        this.pageData = pageData;
        this.generateComponents();
    }

    generateComponents() {
        if (!this.pageData.componentsData || !this.pageData.componentsData.length) return;
        this.pageData.componentsData.forEach(componentData => {
            let component = new Component(componentData);
            this.components.push(component);
        });
    }

    renderPage() {
        const container = document.getElementById(this.rootElementId);

        this.components.forEach(component => {
            let dragItem = document.createElement('div');
            dragItem.className = "drag-item"
            dragItem.appendChild(component.getElement());
            container.append(dragItem)
        });
    }

}

export default Page