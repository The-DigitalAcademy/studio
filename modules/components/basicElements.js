import Elements from "./Elements.js";

// export default [h1, h2, h3, h4, h5, h6, img, a, hr]
export default {
    h1: {
        name: 'h1',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
            textSize: '.',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Heading 1'
        }
    },
    h2: {
        name: 'h2',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
            textSize: '.',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Heading 2'
        }
    },
    h3: {
        name: 'h3',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
            textSize: '.',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Heading 3'
        }
    },
    h4: {
        name: 'h4',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
            textSize: '.',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Heading 4'
        }
    },
    h5: {
        name: 'h5',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
            textSize: '.',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Heading 5'
        }
    },
    h6: {
        name: 'h6',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
            textSize: '.',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Heading 6'
        }
    },

    p: {
        name: 'p',
        editable: true,
        styleClasses: {
            textAlign: 'text-center',
            textColor: 'text-dark',
            textSize: '.',
        },
        attributes: {
            contentEditable: true,
            innerText: 'Enter Text', 
        }
    },
    img: {
        name: 'img',
        editable: true,
        styleClasses: {
            display: 'd-block',
            borderRadius: 'rounded-0',
            horizontalAlign: 'mx-auto',
            width: 'w-10'
        },
        attributes: {
            src: 'https://picsum.photos/200/100',
        }
    },
    a: {
        name: 'a',
        editable: true,
        styleClasses: {
            display: 'd-block',
            textAlign: 'text-center'
        },
        routeToPage: '',
        attributes: {
            innerText: 'link Text',
            href: '#'
        }
    },
    hr: {
        name: 'hr',
    },
    header: {
        name: 'header',
        styleClasses: {
            textAlign: 'text-center',
            bgColor: 'bg-dark',
            textColor: 'text-light',
            padding: 'p-2',
            textSize: 'fs-4',
        },
        editable: true, 
        attributes: {
            innerText: 'Header',
            contentEditable: true
        }
    },
    footer: {
        name: 'footer',
        styleClasses: {
            textAlign: 'text-center',
            bgColor: 'bg-dark',
            textColor: 'text-light',
            padding: 'p-2',
            textSize: 'fs-4',
        },
        editable: true, 
        attributes: {
            innerText: 'Footer',
            contentEditable: true
        }
    },
    button: {
        name: 'div',
        editable: false,
        children: [
            {
                name:'button',
                editable: true,
                styleClasses: {
                    button: 'btn',
                    buttonColor: 'btn-primary',
                    horizontalAlign: 'mx-auto',
                    display: 'd-block',
                    width: 'w-25'
                },
                attributes: {
                    role: 'button',
                    innerText: 'button',
                    contentEditable: true
                }                
            }
        ]
    },
}