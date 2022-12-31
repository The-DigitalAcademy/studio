export default 
{
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