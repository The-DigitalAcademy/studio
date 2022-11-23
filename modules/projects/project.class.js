import Page from "../pages/page.class.js";
import { generateUuid } from "../utils.js";

class Project {
    
    pages;
    projectData;

    constructor(projectData = null) {
        this.projectData = projectData
        this.initializePages()
    }

    initializePages() {
        if (!pageData.pages || !pageData.pages.length) {
            this.createPage()
        }
        pageData.pages.forEach(pageData => {
            let page = new Page(pageData);
            this.pages.push()
        });
    }

    createPage(pageName) {
        if (!pageName || typeof pageName != 'string' || pageName.length < 3) return
        const newPageData = {
            id: generateUuid(0),
            name: pageName
        }
        const newPage = new Page(newPageData)
        this.pages.push(newPage)
        this.pages[-1].renderPage();
    }

}

export default Project