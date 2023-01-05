import { getHashData, findComponentById } from "./utils.js";

class RoutingTool {
  constructor(projectData) {
    this.projectData = projectData;

    window.addEventListener("hashchange", () => {
        this.renderTools()
    });
  }

    renderTools() {
        const { method, page, component } = getHashData();
        if (method != "edit") return;

        const routesDropdown = document.querySelector("[data-routes-dropdown]");

        const targetComponent = findComponentById(component, this.projectData.pages[page].components)
        if (!targetComponent || targetComponent.name != "a" || !targetComponent.editable) {
            routesDropdown.classList.add("d-none");
            return;
        } else {
            routesDropdown.classList.remove("d-none");
        }
        routesDropdown.onchange = (e) => {
            this.handleRouteSelect(e)
        }
        routesDropdown.innerHTML = '';

        // blank route radio
        const isChecked = targetComponent.attributes.href == `#` ? true : false
        const radioContainer = document.createElement('div');
        radioContainer.className = "form-check";

        const radioInput = document.createElement('input')
        radioInput.type = "radio"
        radioInput.className = "form-check-input"
        radioInput.checked = isChecked
        radioInput.name = "route"
        radioInput.value = '#'
        radioInput.id = 'page-none'
        radioInput.onclick = () => this.handleRouteSelect()
        radioContainer.append(radioInput)

        const radioLabel = document.createElement('label');
        radioLabel.className = "form-check-label small"
        radioLabel.for = 'page-none'
        radioLabel.innerText = 'none'
        radioContainer.append(radioLabel)

        routesDropdown.append(radioContainer)

        // page routes
        this.projectData.pages.forEach(page => {

            const isChecked = targetComponent.attributes.href == `./${page.filename}.html` ? true : false

            const radioContainer = document.createElement('div');
            radioContainer.className = "form-check";

            const radioInput = document.createElement('input')
            radioInput.type = "radio"
            radioInput.className = "form-check-input"
            radioInput.checked = isChecked
            radioInput.name = "route"
            radioInput.value = page.filename
            radioInput.id = page.filename
            radioInput.onclick = () => this.handleRouteSelect()

            const radioLabel = document.createElement('label');
            radioLabel.className = "form-check-label small"
            radioLabel.for = page.filename 
            radioLabel.innerText = page.name

            radioContainer.append(radioInput, radioLabel)

            routesDropdown.append(radioContainer)
        })
    }
    handleRouteSelect() {
    const { page, component } = getHashData();

    const selectedPage = document.querySelector('input[name="route"]:checked').value

    const targetComponent = findComponentById(component, this.projectData.pages[page].components);
    targetComponent.attributes.href = './'+selectedPage+'.html';
    }
}

export { RoutingTool }