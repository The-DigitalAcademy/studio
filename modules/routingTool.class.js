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
        console.log('routing tool');

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
        routesDropdown.innerHTML = ""
        this.projectData.pages.forEach(page => {
            const option = document.createElement('option');
            option.value = page.id;
            option.innerText = page.name;
            routesDropdown.append(option);
        })
    }
    handleRouteSelect(e) {
    const { page, component } = getHashData();
    const selectedPage = e.currentTarget.value;

    const targetComponent = findComponentById(component, this.projectData.pages[page].components);
    targetComponent.routeToPage = selectedPage;
    console.log((targetComponent));
    }
}

export { RoutingTool }