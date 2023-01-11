import { getHashData, isVoidElement, setHashData } from "./utils.js";

const GUIDELINE = document.createElement('div');
GUIDELINE.id = 'guideline';

function showPlacementGuides(element) {
    if (isVoidElement(element)) return
    element.append(GUIDELINE)
    addFocusBorder(element, 'focusBorder')
}
function removePlacementGuides(element) {
    removeFocusBorder(element, 'focusBorder'); 
}

function addDraggableHandlers(element) {
    element.draggable = true
    element.ondragstart = (event) => {
        event.dataTransfer.setData("text", event.target.id);
        muteElement(event.target)
    }
    element.ondragend = (event) => {
        unmuteElement(event.target)
    }
}
function addDroppableHandlers(element) {
    element.ondragover = (event) => event.preventDefault();
    element.ondragenter = (event) => {
        showPlacementGuides(event.target)
    }
    element.ondragleave = (event) => {
        removePlacementGuides(event.target)
    }
    element.ondrop = (event) => {
        const dropTargets = getDropTarget(event)
        console.log(dropTargets);
        event.target.append(document.getElementById(event.dataTransfer.getData('text')))
    }
}

function getDropTarget(event) {
    return {
        element: event.dataTransfer.getData("text"),
        oldParent: getParentElement(event.dataTransfer),
        newParent: GUIDELINE.parentElement.id,
        oldPosition: getElementPosition(document.getElementById()),
        newPosition: getGuidelinePosition()
    }
}

// -----------------------------------------------


//UTILITY FUNCTIONS ------------------------------
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
    if (!document.body.contains(GUIDELINE)) return;

    const parentChildren = GUIDELINE.parentElement.children;
    for (let i = 0; i < parentChildren.length; i++) {
        const child = parentChildren[i];
        if (child.id == 'guideline') {
            return i
        }
    }
}
function getParentElement(id) {
    const element = document.getElementById(id)
    if (!document.body.contains(GUIDELINE)) {
        return element;
    } else {
        if (element.id == 'container') return element
        else return element.parentElement
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
}