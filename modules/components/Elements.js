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
    },
    linkButton: {
        name: 'div',
        editable: false,
        children: [
            {
                name:'a',
                editable: true,
                styleClasses: {
                    button: 'btn',
                    buttonColor: 'btn-primary',
                    horizontalAlign: 'mx-auto',
                    display: 'd-block',
                    width: 'w-25'
                },
                routeToPage: '',
                attributes: {
                    role: 'button',
                    innerText: 'button',
                    href: '#'
                }                
            }
        ]
    },
    product: {
        name: 'div',
        styleClasses: {grid: 'col-6'},
        children: [
            {
                name:'img',
                styleClasses: {image: 'img-fluid'},
                editable: true,
                attributes: {
                    src: 'https://picsum.photos/130/180'
                }
            },
            {
                name: 'div',
                children: [
                    {
                        name: 'p',
                        styleClasses: {textColor: 'text-muted', margin: 'mb-1'},
                        attributes: {
                            contentEditable: true,
                            innerText: 'Product Name'
                        }
                    },
                    {
                        name: 'p',
                        styleClasses: {textColor: '.'},
                        attributes: {
                            contentEditable: true,
                            innerText: `R${Math.floor(Math.random()*(999-100+1)+100)}`
                        }
                    }
                ]
            }
        ]
    }
}