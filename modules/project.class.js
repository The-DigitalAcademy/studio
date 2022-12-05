import components from "./components/components.js";
import Page from "./page.class.js";
import { generateUuid, getHashData, setHashData } from "./utils.js";

class Project {
    
    pages = [];
    projectData = 0;
    workingPage = 0;
    /**
     * Construct a new project.
     * @param {Object | String} projectData Object containing the Project Data or a project name for a new project
     */
    constructor(projectData) {
        if (typeof projectData == 'string') {
            this.projectData = {
                id: generateUuid(),
                name: projectData,
                fileName: projectData.toLowerCase().replaceAll(" ","-"),
                pages: []
            }
        } else if (typeof projectData == 'object') {
            this.projectData = projectData
        }

        this.generatePages()

        window.addEventListener('hashchange', () => {
            const hashData = getHashData()
            if (hashData.method == "render") {
                this.workingPage = Number.isInteger(parseInt(hashData.page)) ? parseInt(hashData.page) : this.workingPage;
                this.pages[this.workingPage].renderPage();
                setHashData({});            
            } 
            else if (hashData.method == "add") {
                let newComponent = components[hashData.type];
                newComponent.id = generateUuid()
                this.projectData.pages[this.workingPage].components.splice(hashData.position,0, newComponent);
                this.pages[this.workingPage].renderPage()
            }
            else if (hashData.method == "reorder") {
                this.rearrangeArray(this.projectData.pages[this.workingPage].components, hashData.from, hashDatas.to);
                this.pages[this.workingPage].renderPage()
            }
        })
    }

    /**
     * rearranges array. moves 1 item to a new postion
     * @param {[]} arr array of items to be rearranged
     * @param {number} from currrent postion of item to be moved
     * @param {number} to new position of item to be moved
     */
    rearrangeArray(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
    }

    generatePages() {
        if (!this.projectData.pages.length) {
            this.createNewPage('home')
            return;
        }
        this.projectData.pages.forEach(pageData => {
            let page = new Page(pageData);
            this.pages.push(page);
            this.pages[this.workingPage].renderPage()
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