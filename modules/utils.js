import { Button, EmailForm, RadioForm, TextForm, TextAreaForm, Header, Video, Hr, Heading1, Heading2, Heading3, Text, Image } from './components.js'
import { ExportableProject } from "./exportableProjectClass.js"

const EVENTS = {
  TOUCH_MOVE: "touchmove",
  MOUSE_MOVE: "mousemove",
  MOUSE_UP: "mouseup",
  MOUSE_DOWN: "mousedown",
  TOUCH_END: "touchend",
  TOUCH_START: "touchstart",
  TOUCH_CANCEL: "touchcancel",
  DRAG_START: "dragstart",
  DRAG_END: "dragend",
};
const DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
  TOP: "top",
  BOTTOM: "bottom",
  AFTEREND: "afterend",
  BEFOREBEGIN: "beforebegin",
};
const CLASS_NAMES = {
  guideLine: "__sortable_draggable-guide-line",
};
const containerStack = [];

/**
 * returns true if left mouse button clicked
 * @param {Event} evt event
 * @returns {Boolean} Boolean
 */
function detectLeftButton(evt) {
  evt = evt || window.event;
  if ("buttons" in evt) {
    return evt.buttons === 1;
  }
  let button = evt.which || evt.button;
  return button === 1;
}

const getParent = (el) =>
  el && el.parentNode === document.body ? null : el && el.parentNode;

/**
 *
 * @param {HTMLElement} dropTarget
 * @param {HTMLElement} target
 * @returns {HTMLElement | null}
 */
function getImmediateChild(dropTarget, target) {
  let immediate = target;
  // eslint-disable-next-line max-len
  while (
    immediate &&
    immediate !== dropTarget &&
    immediate &&
    getParent(immediate) !== dropTarget
  ) {
    immediate = getParent(immediate);
  }
  if (immediate === document.body) {
    return null;
  }
  if (target === dropTarget) {
    return null;
  }
  return immediate;
}

/**
 * clones dragged node, adds style declarations to clone, and renders to DOM.
 * @param {HTMLElement} dragEl element being dragged
 * @param {Number} clientX horizontal coordinate within viewport at which event occurred
 * @param {Number} clientY vertical coordinate within viewport at which event occurred
 * @returns {Node}
 */
function renderMirrorImage(dragEl, clientX, clientY) {
  if (!dragEl) {
    return;
  }
  let rect = dragEl.getBoundingClientRect();
  const _mirror = dragEl.cloneNode(true);
  _mirror.classList.add("mirror");
  // _mirror.style.width = `${rect.width}px`;
  // _mirror.style.height = `${rect.height}px`;
  _mirror.style.top = `${rect.top}px`;
  _mirror.style.left = `${rect.left}px`;
  _mirror.__offsetX = clientX - rect.left;
  _mirror.__offsetY = clientY - rect.top;
  // _mirror.style.transform = `translate(${Math.abs(clientX - rect.left - rect.width/2)}px, -${Math.abs(clientY - rect.top - rect.height / 2)}px)`;
  document.body.appendChild(_mirror);
  return _mirror;
}

function renderDraggableElements(containerElementID) {
  const draggablesContainer = document.getElementById(containerElementID);

  for (const property in ELEMENTS) {
    const container = document.createElement('div');
    container.setAttribute('class', 'drag-item');
    container.setAttribute('data-type', property);
    container.innerHTML = `<p>${ELEMENTS[property].icon}</p>`
    draggablesContainer.append(container);
  }
}

function downloadCode() {
  const rootApp = document.getElementById('container')
  const newProject = new ExportableProject(rootApp);
  const downloadLink = newProject.getFileUrl();

  const linkElement = document.getElementById('download-project')
  linkElement.setAttribute('href', downloadLink);
  linkElement.click()
}

const ELEMENTS = {
  Header,
  Heading1,
  Heading2,
  Heading3,
  Text,
  TextAreaForm,
  EmailForm,
  RadioForm,
  TextForm,
  Button,
  Video,
  Image,
  Hr,
};

export {
  ELEMENTS,
  renderMirrorImage,
  getImmediateChild,
  getParent,
  EVENTS,
  DIRECTIONS,
  CLASS_NAMES,
  containerStack,
  detectLeftButton,
  renderDraggableElements,
  downloadCode,
};
