import { onDragEndHandler, onDragEnterHandler, onDragLeaveHandler, onDragOverHandler, onDragStartHandler, onDropHandler } from './dragDrop.module.js';
import blankTemplate from './templates/blank.template.js';
import ecommerceTemplate from './templates/ecommerce.template.js';
import landingTemplate from './templates/landing.template.js';
import surveyTemplate from './templates/survey.template.js';

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
  const isSmallScreen = (screen.width < 767 || window.innerWidth < 767 || screen.width < 767);
  const isUnknownMobile = (isWebkit && isSmallScreen);
  const isMobile = (isIOS || isAndroid || isNewBlackBerry || isWebOS || isWindowsMobile || isUnknownMobile);
  const isTablet = (isIPad || (isMobile && !isSmallScreen));

  if (isMobile || isSmallScreen) {
      document.body.innerHTML = 
      `<div class="container">
        <div class="text-center">
          <img src="assets/images/desktop_only.png" style="width: 90%;">
        </div>
        <h1 class="text-center display-3">This Application is only available on Desktop devices</h1>
      </div>
      `;
  };
}

function renderDraggableItems(container, items) {
  for (const [key, value] of Object.entries(items)) {
    const element = document.createElement('button');
    element.className = "btn border-light rounded-0 m-1 text-light bg-dark"
    element.ondragstart = (e) => onDragStartHandler(e);
    element.ondragend = (e) => onDragEndHandler(e);
    element.innerText = key
    element.dataset.type = key
    element.draggable = true
    container.append(element)
  }
}

function renderTemplateIcons() {
  const templateContainer = document.querySelector('#template-container');
  const templatesList = [blankTemplate, landingTemplate, ecommerceTemplate, surveyTemplate];
  
  for (const template of templatesList) {
    
    const container = document.createElement('div');
    container.style.width = '150px'
    container.innerHTML = `
    <img src="assets/images/templates/${template.name}.png" class="drop-shadow btn img-fluid">
    <p class="text-center">${template.name}</p>
    `
    container.onclick = () => {
      localStorage.setItem('workingProject', JSON.stringify(template))
      console.log();
      window.location.href = location.origin + '/studio.html'
    }
    templateContainer.append(container)
  }
}

function renderPages(pagesContainer, pages) {
  pagesContainer.innerHTML = "";
 
  pages.forEach((page, index) => {
    const container = document.createElement('div');
    container.className = "text-center border-0 btn btn text-light"
    container.innerHTML = `<i class="bi bi-file-earmark  display-4"></i><p class='text-center mb-0 text-capitalize'>${page.name}</p>`
    container.onclick = () => {
      document.querySelector('#workingPageName').innerHTML = page.name
      const hashData = {
        method: 'render',
        page: index
      }
      setHashData(hashData)
    }
    pagesContainer.append(container);
  })
}

/**
 * returns a universally unique identifier
 * @returns {string} uuid
 */
function generateUuid(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid; 
}

/**
 * sets opearion details to url hash
 * @param {{method?, page?, component?, from?, to?}} hashData operation details
 */
function setHashData(hashData) {
  let hashString = ''
  for (const [key, value] of Object.entries(hashData)) {
    hashString += `${key}=${value}&`;
  }
  window.location.hash = hashString;
}

/**
 * destructures operation details from url hash
 * @returns {{method?, page?, component?, from?, to?}} operation details
 */
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
/**
 * searches through an array (including nested arrays) for a component with an id.
 * @param {string} id component identifier
 * @param {[]} components array of components
 * @returns {Object} component with id or null if not found
 */
function findComponentById(id, components) {
  for (const component of components) {
    if (component.id == id) {
      return component
    } else if (component.children && component.children.length) {
      const matchingChild = findComponentById(id, component.children)
      if (matchingChild) return matchingChild
    } else {
    }
  }
}
/**
 * searches through an array (including nested arrays) for a component with an id and removes that component
 * @param {string} id component identifier
 * @param {[]} components array of components
 * @returns {boolean} true if component id found and removed
 */
 function deleteComponentById(id, components) {
  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    if (component.id == id) {
      components.splice(i, 1)
      return true
    } else if (component.children && component.children.length) {
      const deleted = deleteComponentById(id, component.children)
      if (deleted) return true
    } else {
    }
  }
}
/**
 * returns true if an HTML element is void (cannot have any child nodes)
 * @param {string} tagName tag name of element
 * @return {Boolean}
 */
function isVoidElement(tagName) {
  const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'textarea'];
  if (voidElements.includes(tagName.toLowerCase())) return true;
  else return false
}

function toggleDisplay(buttonElement, selectors) {
  buttonElement.onclick = () => {
    if (typeof selectors == "string") {
      document.querySelector(selectors).classList.toggle('d-none')
    } else {
      selectors.forEach(selector => {
        document.querySelector(selector).classList.toggle('d-none')
      });
    }    
  }
}

function switchDisplaysHandler(buttonElement, selectorToDisplay, selectorsToHide) {
  buttonElement.onclick = (e) => {
    selectorToDisplay.classList.remove('d-none');
    selectorsToHide.forEach(selector => {
      selector.classList.add('d-none')
    })    
  }

}

function setDragDrophandlers(container) {
  container.ondragenter = (e) => onDragEnterHandler(e);
  container.ondragleave = (e) => onDragLeaveHandler(e);
  container.ondragover = (e) => onDragOverHandler(e);
  container.ondrop = (e) => onDropHandler(e);
}

function createNewPageHandler(nameInputElement, createBtnElement) {
  createBtnElement.onclick = () => {
    if (nameInputElement.value.length > 3) {
      const {} = getHashData();
      const hashData = {
        method: 'createPage',
        name: nameInputElement.value
      }
      nameInputElement.value = ''
      setHashData(hashData)
    }
  }
}

export {
  renderDraggableItems,
  renderPages,
  restrictMobile,
  generateUuid,
  setHashData,
  getHashData,
  findComponentById,
  renderTemplateIcons,
  toggleDisplay,
  setDragDrophandlers,
  isVoidElement,
  switchDisplaysHandler,
  createNewPageHandler,
  deleteComponentById
};
