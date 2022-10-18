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
  _mirror.style.position = "fixed";
  _mirror.classList.add("mirror");
  _mirror.style.opacity = 0.5;
  _mirror.style.width = `${rect.width}px`;
  _mirror.style.height = `${rect.height}px`;
  _mirror.style.top = `${rect.top}px`;
  _mirror.style.left = `${rect.left}px`;
  _mirror.__offsetX = clientX - rect.left;
  _mirror.__offsetY = clientY - rect.top;
  // _mirror.style.transform = `translate(${Math.abs(clientX - rect.left - rect.width/2)}px, -${Math.abs(clientY - rect.top - rect.height / 2)}px)`;
  document.body.appendChild(_mirror);
  return _mirror;
}

const ELEMENTS = {
  heading1: {
    content: "<h1 contenteditable>Heading 1</h1>",
    icon: '<i class="bi bi-type-h1"></i>',
  },
  heading2: {
    content: "<h2 contenteditable>Heading 2</h2>",
    icon: '<i class="bi bi-type-h2"></i>',
  },
  heading3: {
    content: "<h3 contenteditable>Heading 3</h3>",
    icon: '<i class="bi bi-type-h3"></i>',
  },
  hr: { content: "<hr/>", icon: "<p>divider</p>" },
  text: {
    content: `<div contenteditable><p>Lorem Ipsum is
                     simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a 
                     type specimen book. It has survived not only five centuries, 
                     but also the le</p><div>`,
    icon: '<i class="bi bi-fonts"></i>',
  },
  text2: {
    content: `<div contenteditable><p>sbuda</p><div>`,
    icon: '<i class="bi bi-fonts">2</i>',
  },
  image: {
    content: '<img src="https://picsum.photos/100"/>',
    icon: '<i class="bi bi-image"></i>',
  },
  video: {
    content: `<video controls width="250">
                    <source src="/media/cc0-videos/flower.webm"
                            type="video/webm">
                    <source src="/media/cc0-videos/flower.mp4"
                            type="video/mp4">
                    Sorry, your browser doesn't support embedded videos.
                    </video>`,
    icon: '<i class="bi bi-camera-video"></i>',
  },
  button: {
    content: `<button>Button</button>`,
    icon: `<button>button</button>`,
  },
  inputText: {
    content: `<input type="text" placeholder="text here">`,
    icon: '<i class="bi bi-fonts">form input</i>',
  },
  inputNumber: {
    content: `<input type="number" placeholder="0">`,
    icon: '<i class="bi bi-123">form input</i>',
  },
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
  detectLeftButton
};
