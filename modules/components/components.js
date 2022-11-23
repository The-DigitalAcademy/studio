import Component from "./component.class.js"

export default 
{
    header: new Component({
        name: 'div',
        styleClasses: {
            textAlign: 'text-center',
            bgColor: 'bg-dark',
            textColor: 'text-light',
            padding: 'p-2',
            fontSize: 'small'
        },
        edtable: true,
        children: [
            {
                name: 'h1',
                innerText: 'New Header',
                styleClasses: {},
                contentEditable: true
            }
        ]
    }, 'bi-window-sidebar'),

    h3: new Component({
        name: 'h3',
        innerText: 'Heading 3',
        edtable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        contentEditable: true
    }, 'bi-type-h3'),

    paragraph: new Component({
        name: 'p',
        edtable: true,
        styleClasses: {
            textAlign: 'text-center',
        },
        innerText: 'This is a paragraph',
        contentEditable: true
    }, 'bi-justify')
}