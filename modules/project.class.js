import allComponents from "./components/allComponents.js";
import components from "./components/formComponents.js";
import Page from "./page.class.js";
import { deleteComponentById, findComponentById, generateUuid, getHashData, setHashData } from "./utils.js";

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
        setHashData({page: 0})

        window.addEventListener('hashchange', () => {
            const {page, method, component} = getHashData()
            if (method == "render") {
                this.pages[page].renderPage();
                setHashData({method:'edit', component, page});            
            } 
            else if (method == "add") {
                const {type, position, parent} = getHashData()
                //get component data & set new id
                let newComponent = JSON.parse(JSON.stringify(allComponents[type]));
                newComponent.id = generateUuid();

                
                if (parent == 'container') {
                    this.projectData.pages[page].components.splice(position,0, newComponent)
                } else {
                    const parentComponent = findComponentById(parent, this.projectData.pages[page].components)
                    //add component to list of components at specified position
                    parentComponent.children.splice(position,0, newComponent);                    
                }
                this.pages[page].renderPage();
            }
            else if (method == "reorder") {
                // const {from, to } = getHashData()
                // this.rearrangeArray(this.projectData.pages[page].components, from, to);
                // this.pages[page].renderPage()
                const {oldParent, newParent, oldPos, newPos, component } = getHashData();
                if (oldParent == newParent) {
                    if (oldParent == 'container') {
                        this.rearrangeArray(this.projectData.pages[page].components, oldPos, newPos)
                    } else {
                        const parent = findComponentById(oldParent, this.projectData.pages[page].components)
                        this.rearrangeArray(parent.children, oldPos, newPos);                        
                    }
                } else {
                    newParentChildren = findComponentById(newParent, this.projectData.pages[page].components).children;
                    this.addChildComponent(newParent, component, newPos, this.projectData.pages[page].components);
                    this.removeChildComponent(oldParent, oldPos)
                }
                this.pages[page].renderPage()
            }
            else if (method == "createPage") {
                const { name } = getHashData();
                this.createNewPage(name)
            }
            //save working project
            localStorage.setItem('workingProject', JSON.stringify(this.projectData))
        })

        window.addEventListener('keydown', (e) => {
            if ((e.key.toLowerCase() == 'd' && e.ctrlKey) || e.key.toLowerCase() == 'delete') {
                const {component, page} = getHashData();
                deleteComponentById(component, this.projectData.pages[page].components)
                this.pages[page].renderPage();
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

    addChildComponent(parentId, childId, position, pageComponents) {
        const parent = findComponentById(parentId, pageComponents);
        const child = findComponentById(childId, pageComponents);
        //add child to new parent element
        parent.children.splice(position, 0, child)
    }
    removeChildComponent(parentId, childPosition) {
        const parent = findComponentById(parentId, pageComponents);
        delete parent.children.splice(childPosition, 1)
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
            id: generateUuid(),
            name: pageName,
            fileName: pageName.toLowerCase().replaceAll(" ", "-"),
            components: []
        }
        const newPage = new Page(newPageData)
        this.projectData.pages.push(newPageData)
        this.pages.push(newPage);
        this.pages[this.pages.length -1].renderPage();
    }
}

export default Project