import components from "./components/components.js";
import Page from "../pages/page.class.js";
import { generateUuid, getHashData, setHashData } from "./utils.js";

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
            const hashData = getHashData()
            if (hashData.method == "render") {
                this.pages[0].renderPage();
                setHashData({...hashData, method: 'edit'});            
            } 
            else if (hashData.method == "add") {
                this.projectData.pages[0].components.splice(hashData.position,0, hashData.type);
                this.pages[0].renderPage()
            }
            else if (hashData.method == "reorder") {
                this.reorderArray(this.projectData.pages[0].components, hashData.from, hashDatas.to);
                this.pages[0].renderPage()
            }
        })
    }

    reorderArray(arr, from, to) {
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