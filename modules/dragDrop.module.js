import { getHashData, isVoidElement, setHashData } from "./utils.js";

const GUIDELINE = document.createElement('div');
GUIDELINE.id = 'guideline';

// DRAG/DROP EVENT HANDLDERS -----------------
function onDragOverHandler(event) {
    event.preventDefault();
}
function onDragEnterHandler(event) {
    //if element is empty
    const element = event.target
    if (!element.children.length && !element.innerText && !isVoidElement(element.tagName))  {
        addFocusBorder(event.target, 'focusBorder')
        hideGuideline()
    }
    else {
        addFocusBorder(event.target.parentElement, 'focusBorder')
        appendSibling(event.target, GUIDELINE)
    }
}
function onDragLeaveHandler(event) {
    if (!event.target.children.length && !event.target.innerText) {
        removeFocusBorder(event.target, 'focusBorder');   
    } else {
        removeFocusBorder(event.target.parentElement, 'focusBorder');        
    } 
}
function onDragStartHandler(event) {
    const data = {
        id: event.target.id,
        type: event.target.dataset.type
    }
    event.dataTransfer.setData("text", JSON.stringify(data));
    muteElement(event.target)
}
function onDragEndHandler(event) {
    unmuteElement(event.target);
}
function onDropHandler(event) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text"));
    const {page} = getHashData()
    //dropping new component
    if (data.type && !data.id) {
        const hashData = {
            method: 'add',
            type: data.type,
            parent: getParentElement(event.target).id,
            position: getGuidelinePosition(),
            page
        }
        removeFocusBorder(event.target.parentElement, 'focusBorder');
        setHashData(hashData)
        return
    } else {
        let prevPos = getElementPosition(document.getElementById(data.id));
        let oldParent = getParentElement(document.getElementById(data.id)).id;
        let newPos = getGuidelinePosition();

        //if drag and drop is inside the same parent element
        if (document.getElementById(data.id).parentElement.id == event.target.parentElement.id) {
            if (newPos > prevPos) newPos-= 1;
            else prevPos -= 1
        }
        const hashData = {
            method: 'reorder',
            page,
            prevPos,
            oldParent,
            newPos,
            newParent: getParentElement(event.target).id,
        }
        removeFocusBorder(event.target.parentElement, 'focusBorder');
        setHashData(hashData)
        return
    }

    removeFocusBorder(event.target.parentElement, 'focusBorder');

    if (!event.target.children.length && !event.target.innerText) {
        // event.target.append(document.getElementById(data))
        console.log(data);
    } else {
        // appendSibling(event.target, document.getElementById(data))
        console.log(data);
    }
    hideGuideline()
}
// -----------------------------------------------


//UTILITY FUNCTIONS ------------------------------
function hideGuideline() {
    GUIDELINE.remove()
}
/**
 * adds a class name to an element
 * @param {Element} element element to add border to
 * @param {string} borderClassName class name for border styling
 */
function addFocusBorder(element, borderClassName) {
    if (element.id == 'guideline') return
    element.classList.add(borderClassName)
}
/**
 * removes a class name from an element
 * @param {Element} element element to remove border
 * @param {string} borderClassName class name for border styling
 */
function removeFocusBorder(element, borderClassName) {
    element.classList.remove(borderClassName)
}
function muteElement(element) {
    element.classList.add('muted');
}
function unmuteElement(element) {
    element.classList.remove('muted');
}
/**
 * append a sibling element to an element
 * @param {Element} currentElement element to append with a next sibling
 * @param {Element} nextSibling 
 */
function appendSibling(currentElement, nextSibling) {
    currentElement.insertAdjacentElement('afterend', nextSibling)
}
/**
 * returns index of guideline element from the parentElement.children array
 * @returns {number} index of guidline element
 */
function getGuidelinePosition() {
    if (!document.body.contains(GUIDELINE)) {
        return 0;
    }
    const parentChildren = GUIDELINE.parentElement.children;
    for (let i = 0; i < parentChildren.length; i++) {
        const child = parentChildren[i];
        if (child.id == 'guideline') {
            return i
        }
    }
}
function getParentElement(element) {
    if (!document.body.contains(GUIDELINE)) {
        return element;
    } else {
        return element.parentElement
    }
}
/**
 * returns index of an element from the parentElement.children array
 * @param {Element} element
 * @returns {number} index of the element
 */
function getElementPosition(element) {
    const parentChildren = element.parentElement.children;
    for (let i = 0; i < parentChildren.length; i++) {
        const child = parentChildren[i];
        if (child.id == element.id) {
            return i
        }
    }
}

export {
    onDropHandler,
    onDragEndHandler,
    onDragOverHandler,
    onDragEnterHandler,
    onDragStartHandler,
    onDragLeaveHandler
}