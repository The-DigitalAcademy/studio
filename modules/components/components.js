import { generateUuid } from "../utils.js"
import Component from "./component.class.js"

export default 
{
    header: {
        id: generateUuid(),
        name: 'div',
        styleClasses: {
            textAlign: 'text-center',
            bgColor: 'bg-dark',
            textColor: 'text-light',
            padding: 'p-2',
            fontSize: 'small',
            borderColor: ' ',
            borderWidth: ' ',
            borderRadius: ' ',
        },
        editable: true,
        children: [
            {
                id: generateUuid(),
                name: 'h1',
                innerText: 'New Header',
                styleClasses: {},
                contentEditable: true,
                editable: true
            }
        ]
    },

    h3: {
        id: generateUuid(),
        name: 'h3',
        innerText: 'Heading 3',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        contentEditable: true
    },

    paragraph1: {
        id: generateUuid(),
        name: 'p',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        innerText: 'This is a paragraph 1',
        contentEditable: true
    },
    paragraph2: {
        id: generateUuid(),
        name: 'p',
        editable: false,
        styleClasses: {
            textAlign: 'text-center',
        },
        innerText: 'This is a paragraph 2',
        contentEditable: true
    }
}