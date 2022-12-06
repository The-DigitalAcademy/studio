import  ELEMENTS from './components.js'
import Component from './component.class.js';
import components from './components/components.js';
import { ExportableProject } from './exportableProject.class.js';
import TEMPELEMENTS from './templateComponents.js';

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
 * display alert if device is mobile or small screen
 */
function restrictMobile() {
  const agent = navigator.userAgent;
  const isWebkit = (agent.indexOf("AppleWebKit") > 0);
  const isIPad = (agent.indexOf("iPad") > 0);
  const isIOS = (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0);
  const isAndroid = (agent.indexOf("Android") > 0);
  const isNewBlackBerry = (agent.indexOf("AppleWebKit") > 0 && agent.indexOf("BlackBerry") > 0);
  const isWebOS = (agent.indexOf("webOS") > 0);
  const isWindowsMobile = (agent.indexOf("IEMobile") > 0);
  const isSmallScreen = (screen.width < 767 ||  window.innerWidth < 767 || screen.width < 767);
  const isUnknownMobile = (isWebkit && isSmallScreen);
  const isMobile = (isIOS || isAndroid || isNewBlackBerry || isWebOS || isWindowsMobile || isUnknownMobile);
  const isTablet = (isIPad || (isMobile && !isSmallScreen));

  if (isMobile || isSmallScreen) {
      document.body.innerHTML = `
                          <div class="container">
                            <div class="text-center">
                              <img src="assets/desktop_only.png" style="width: 90%;">
                            </div>
                            <h1 class="text-center display-3">This Application is only available on Desktop devices</h1>
                          </div>
                          `
  };
}

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
  draggablesContainer.classList.toggle('d-none')
  draggablesContainer.innerHTML = ""

  for (const property in components) {
    const container = document.createElement('div');
    container.setAttribute('class', 'drag-item');
    container.setAttribute('data-type', property);
    container.innerHTML = `${new Component(components[property]).getIcon()}`
    draggablesContainer.append(container);
  }
}
function renderPages(containerElementID, pages) {
  const draggablesContainer = document.getElementById(containerElementID);
  draggablesContainer.classList.toggle('d-none')
  draggablesContainer.innerHTML = ""

  const addBtn = document.createElement('div');
  addBtn.className = "text-light text-center btn"
  addBtn.innerHTML = `<i class="bi bi-file-earmark-plus display-4"></i><p class='text-center mb-0 text-capitalize'>New Page</p>`
  draggablesContainer.append(addBtn);

  pages.forEach((page, index) => {
    const container = document.createElement('div');
    container.className = "text-center border-0 btn btn-outline-light"
    container.innerHTML = `<i class="bi bi-file-earmark  display-4"></i><p class='text-center mb-0 text-capitalize'>${page.name}</p>`
    container.onclick = () => {
      document.querySelector('#workingPageName').innerHTML = page.name
      const hashData = {
        method: 'render',
        page: index
      }
      setHashData(hashData)
    }
    draggablesContainer.append(container);
  })


}

// function renderDraggableTemplate(containerElementID) {
//   const draggablesContainer = document.getElementById(containerElementID);

//   for (const property in TEMPELEMENTS) {
//       const container = document.createElement('div');
//       container.setAttribute('class', 'drag-item');
//       container.setAttribute('data-type', property);
//       container.innerHTML = `${TEMPELEMENTS[property].icon}`
//       draggablesContainer.append(container);
//   }
// }

function downloadCode() {
  const rootApp = document.getElementById('container');
  const newProject = new ExportableProject(rootApp);
  newProject.saveAsZip();
}
function toggleLeftPanels(e) {
  let container;
  container = e.target.id == 'elementsBtn' ? 'elements' : 'templates';

  const elementsBtn = document.querySelector('.options').children[0];
  const templatesBtn = document.querySelector('.options').children[1];
  const elementsContainer = document.querySelectorAll('.components-container')[0];
  const templatesContainer = document.querySelectorAll('.components-container')[1];

  if (container == 'elements') {
    elementsBtn.classList.add('bg-primary');
    elementsContainer.classList.remove('d-none');
  } else {
    elementsBtn.classList.remove('bg-primary');
    elementsContainer.classList.add('d-none');
  }

  if (container == 'templates') {
    templatesBtn.classList.add('bg-primary');
    templatesContainer.classList.remove('d-none');
  } else {
    templatesBtn.classList.remove('bg-primary');
    templatesContainer.classList.add('d-none');
  }
}
function generateUuid(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

function setHashData(hashData) {
  let hashString = ''
  for (const [key, value] of Object.entries(hashData)) {
    hashString += `${key}=${value}&`;
  }
  window.location.hash = hashString;
}
function getHashData() {
  const hash = window.location.hash
  let keyValueStrings = hash.replace("#","").split('&');
  let result = {}
  keyValueStrings.forEach(keyValue => {
    if (keyValue) {
      const keyValueArr = keyValue.split('=');
      result[keyValueArr[0]] = keyValueArr[1];      
    }
  });
  return result
}

export {
  renderMirrorImage,
  getImmediateChild,
  getParent,
  EVENTS,
  DIRECTIONS,
  CLASS_NAMES,
  containerStack,
  detectLeftButton,
  renderDraggableElements,
  renderPages,
  downloadCode,
  toggleLeftPanels,
  restrictMobile,
  generateUuid,
  setHashData,
  getHashData
};
