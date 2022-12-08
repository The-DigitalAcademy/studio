export default 
{
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
            innerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa ultricies, hendrerit nulla sed, congue erat.', 
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
    },
    emailInput: {
        name: 'input',
        editable: true,
        styleClasses: {
            form: 'form-control'
        },
        attributes: {
            type: 'email',
            placeholder: 'john@email.com'
        }
    },
    phoneInput: {
        name: 'input',
        editable: true,
        styleClasses: {
            form: 'form-control'
        },
        ayobaApiOptions: ['msisdn'],
        ayobaApi: '',
        attributes: {
            type: 'tel',
            placeholder: '0981234567'
        }
    },
    textarea: {
        name: 'textarea',
        editable: true,
        styleClasses: {
            form: 'form-control'
        },
        ayobaApiOptions: ['msisdn', 'location', 'country'],
        ayobaApi: '',
        attributes: {
            placeholder: 'enter text'
        }
    },
    label: {
        name: 'label',
        editable: true,
        styleClasses: {
            form: 'form-label',
            textColor: 'text-dark',
            textSize: '.',
        },
        attributes: {
            innerText: 'Form Label',
            contentEditable: true
        }
    },
    radioInput: {
        name: 'input',
        editable: true,
        styleClasses: {
            form: 'form-check-input'
        },
        attributes: {
            type: 'radio',
            placeholder: 'john@email.com'
        }
    },
    textInput: {
        name: 'input',
        editable: true,
        styleClasses: {
            form: 'form-control'
        },
        ayobaApiOptions: ['msisdn', 'location', 'country'],
        ayobaApi: '',
        attributes: {
            type: 'text',
            placeholder: 'text'
        }
    }
}