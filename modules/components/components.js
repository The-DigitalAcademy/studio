import { generateUuid } from "../utils.js"
import Component from "../component.class.js"

export default 
{
    header: {
        name: 'header',
        styleClasses: {
            textAlign: 'text-center',
            bgColor: 'bg-dark',
            textColor: 'text-light',
            padding: 'p-2',
            fontSize: 'small',
        },
        editable: true, 
        attributes: {
            innerText: 'Heading',
            contentEditable: true
        }
    },

    h3: {
        name: 'h3',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Heading 3'
        }
    },

    p: {
        name: 'p',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        attributes: {
            contentEditable: true,
            innerText: 'This is a paragraph', 
        }
    },
    img: {
        name: 'img',
        editable: true,
        styleClasses: {
            display: 'd-block',
            borderRadius: 'rounded-0',
            horizontalAlign: 'mx-auto'
        },
        attributes: {
            src: 'https://picsum.photos/100',
        }
    }
}