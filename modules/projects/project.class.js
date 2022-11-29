import components from "../components/components.js";
import Page from "../pages/page.class.js";
import { generateUuid } from "../utils.js";

class Project {
    
    pages = [];
    projectData = 0;
    workingPage;

    /**
     * 
     * @param {Object | String} projectData Object containing the Project Data or a project name as a string if creating a new project
     */
    constructor(projectData) {
        if (typeof projectData == 'string') {
            this.projectData = {
                id: generateUuid(),
                name: projectData,
                fileName: projectData.toLowerCase().replaceAll(" ","-"),
                pages: []
            }
        } else this.projectData = projectData;
        this.generatePages()
 
        window.addEventListener('hashchange', () => {
            const hash = location.hash
            if (hash.includes("#(render)")) {
                this.pages[0].renderPage();
                const componentId = location.hash.replace("#(render)", "");
                location.hash = componentId                
            } 
            else if (hash.includes("#(addComponent)")) {
                let nameStartIndex = hash.indexOf("name=") + 5
                let ampersand = hash.indexOf("&")
                const componentName = hash.substring(nameStartIndex, ampersand);

                let positionStartIndex = hash.indexOf("pos=") + 4
                const position = Number(hash.substring(positionStartIndex));
                
                this.projectData.pages[0].components.splice(position,0, components[componentName]);

                this.pages[0].renderPage()
            }
            else if (hash.includes("#(reorder)")) {
                let componentStartIndex = hash.indexOf("component=") + 5
                let componentEndIndex = hash.indexOf("&", componentStartIndex)
                const componentId = hash.substring(componentStartIndex, componentEndIndex);

                let fromStartIndex = hash.indexOf("from=") + 5
                let fromEndIndex = hash.indexOf("&", fromStartIndex)
                const from = hash.substring(fromStartIndex, fromEndIndex);

                let toStartIndex = hash.indexOf("to=") + 3
                const to = hash.substring(toStartIndex);

                // console.log(this.projectData.pages[0].components);
                this.reorderArray(this.projectData.pages[0].components, from, to);
                // console.log(this.projectData.pages[0].components);
            }
        })
    }

    reorderArray(arr, from, to) {
        console.log(arr);
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        console.log(arr);
    }

    generatePages() {
        if (!this.projectData.pages.length) {
            this.createNewPage('home')
            return;
        }
        this.projectData.pages.forEach(pageData => {
            let page = new Page(pageData);
            this.pages.push(page);
            this.pages[0].renderPage()
        });
    }

    createNewPage(pageName) {
        if (!pageName || typeof pageName != 'string' || pageName.length < 3) return
        const newPageData = {
            id: generateUuid(0),
            name: pageName,
            fileName: pageName.toLowerCase().replaceAll(" ", "-"),
            pages: []
        }
        const newPage = new Page(newPageData)
        this.pages.push(newPage);
        this.pages[this.pages.length -1].renderPage();
    }

    renderProject() {
        this.page[this.workingPage].renderPage();
    }

}

export default Project