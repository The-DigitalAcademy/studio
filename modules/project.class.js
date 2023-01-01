import Component from "./component.class.js";
import allComponents from "./components/allComponents.js";
import { deleteComponentById, findComponentById, generateUuid, getHashData, setHashData } from "./utils.js";
class Project {
    
    projectData = {};
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

        this.renderPage(0)
        setHashData({page: 0})

        window.addEventListener('hashchange', () => {
            const {page, method, component} = getHashData()
            if (method == "render") {
                this.renderPage(page)
                setHashData({method:'edit', component, page});            
            } 
            else if (method == "add") {
                const {type, position, parent} = getHashData()
                this.addNewComponent(page, parent, type, position)
                this.renderPage(page)
            }
            else if (method == "reorder") {
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
                this.renderPage(page)
            }
            else if (method == "createPage") {
                const { name } = getHashData();
                const newPage = this.createNewPage(name)
                const newLength = this.projectData.pages.push(newPage)
                this.renderPage(newLength - 1)
            }
            //save working project
            localStorage.setItem('workingProject', JSON.stringify(this.projectData))
        })

        //delete key listener
        window.addEventListener('keydown', (e) => {
            if ((e.key.toLowerCase() == 'd' && e.ctrlKey) || e.key.toLowerCase() == 'delete') {
                const {component, page} = getHashData();
                deleteComponentById(component, this.projectData.pages[page].components)
                this.renderPage(page)
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
    createNewPage(pageName) {
        if (!pageName || typeof pageName != 'string' || pageName.length < 3) return
        const newPageData = {
            id: generateUuid(),
            name: pageName,
            fileName: pageName.toLowerCase().replaceAll(" ", "-"),
            components: []
        }
        return newPageData
    }
    /**
     * render each component of a page onto the specified document container
     */
    renderPage(pageNum) {
        //clear container
        const container = document.getElementById('container');
        container.innerHTML = ''

        this.projectData.pages[pageNum].components.forEach(componentData => {
            let component = new Component(componentData);
            container.append(component.getStudioElement())
        });
    }
    addNewComponent(page, parentId, componentType, position) {
        let newComponent = JSON.parse(JSON.stringify(allComponents[componentType]));
        newComponent.id = generateUuid();

        if (parentId == 'container') {
            this.projectData.pages[page].components.splice(position,0, newComponent)
        } else {
            const parentComponent = findComponentById(parentId, this.projectData.pages[page].components)
            //add component to list of components at specified position
            parentComponent.children.splice(position,0, newComponent);                    
        }
    }
}

export default Project