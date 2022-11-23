import Component from "../components/component.class.js";

class Page {

    components
    pageData
    rootElementId = ""

    constructor(PageData = null) {
        this.pageData = pageData;
        this.initializeComponents();
    }

    initializeComponents() {
        if (!this.pageData.components || !this.pageData.components.length) return;
        this.pageData.components.forEach(componentData => {
            let component = new Component(componentData);
            this.components.push(component);
        });
    }

    renderPage() {
        const pageHtml = ''
        this.components.forEach(component => {
            const componentHtml = component.getInnerHtml();
            pageHtml += componentHtml
        });
        document.getElementById(this.rootElementId).innerHTML = pageHtml;
    }

}

export default Page