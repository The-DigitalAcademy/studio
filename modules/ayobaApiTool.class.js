import { getHashData, setHashData, findComponentById } from "./utils.js";

/** Class representing a tool for adding Ayoba Api functionality to elements */
class AyobaApiTool {

    constructor(projectData) {
        this.projectData = projectData;
        this.addEditingHandlerToAyobaTools()

        window.addEventListener('hashchange', () => {
            this.renderTools()
        })
    }

    renderTools() {
        const { method, page, component } = getHashData();
        if (method != 'edit') return;

        const ayobaToolsDropdown = document.querySelector('[data-ayoba-api-dropdown]');

        //find component
        const targetComponent = findComponentById(component, this.projectData.pages[page].components)
        if (!targetComponent || !targetComponent.ayobaApiOptions || !targetComponent.editable) {
            ayobaToolsDropdown.classList.add('d-none');
            return
        } else {
            ayobaToolsDropdown.classList.remove('d-none');
            ayobaToolsDropdown.value = targetComponent.ayobaApi;
        }

        //display component name
        document.getElementById('component-name').innerText = targetComponent.name

        const ayobaTools = document.querySelectorAll(`[data-ayoba-api]`);

        for (const tool of ayobaTools) {
            if (targetComponent.ayobaApiOptions.includes(tool.dataset.ayobaApi)) {
                tool.classList.remove('d-none')
            } else {
                tool.classList.add('d-none')
            }
        }
    }

    /**
     * 
     */
    addEditingHandlerToAyobaTools() {
        const ayobaToolsDropdown = document.querySelector('[data-ayoba-api-dropdown]');
        ayobaToolsDropdown.onchange = (e) => {
            this.handleAyobaApiSelect(e)
        }
    }

    handleAyobaApiSelect(e) {
        const { page, component } = getHashData();

        const selectedAyobaApi = e.currentTarget.value;
        
        this.addAyobaApiToComponent(page, component, selectedAyobaApi)

        let hashData = {
            method: "render",
            component,
            page
        }

        setHashData(hashData)

    }

    addAyobaApiToComponent(page, id, ayobaApi) {
        const componentList = this.projectData.pages[page].components;
        const component = findComponentById(id, componentList);
        component.ayobaApi = ayobaApi;
    }
}

export { AyobaApiTool }