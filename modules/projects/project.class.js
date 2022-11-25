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
                pagesData: []
            }
        } else this.projectData = projectData;
        this.generatePages()
    }

    generatePages() {
        if (!this.projectData.pagesData.length) {
            this.createNewPage('home')
            return;
        }
        this.projectData.pagesData.forEach(pageData => {
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
            pagesData: []
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