import { generateUuid } from "../utils.js"
import Component from "./component.class.js"

export default 
{
    header: {
        id: '3f31c9cd-3509-4bd7-bb45-6f982b76d450',
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
                id: '850a4550-a8f6-45ca-be83-e7d1a1cda812',
                name: 'h1',
                innerText: 'New Header',
                styleClasses: {},
                contentEditable: true,
                editable: true
            }
        ]
    },

    h3: {
        id: 'ebf03e6c-1866-4199-b245-3b113f894ace',
        name: 'h3',
        innerText: 'Heading 3',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        contentEditable: true
    },

    paragraph1: {
        id: 'f2b0b151-ada6-42bc-89ca-1846e50dc463',
        name: 'p',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        innerText: 'This is a paragraph 1',
        contentEditable: true
    },
    paragraph2: {
        id: '08af5f3b-0ee6-4e31-954b-d220f1784cb6',
        name: 'p',
        editable: false,
        styleClasses: {
            textAlign: 'text-center',
        },
        innerText: 'This is a paragraph 2',
        contentEditable: true
    }
}