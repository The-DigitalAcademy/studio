import { generateUuid } from "../utils.js";

export default {
    "id": generateUuid(),
    "name": "survey",
    "pages": [
        {
            "id": "704102c8-d283-49e5-9d64-2b0174fda6ec",
            "name": "Home",
            "filename": "index.html",
            "components": [
                {
                    "name": "header",
                    "styleClasses": {
                        "textAlign": "text-start",
                        "bgColor": "bg-dark",
                        "textColor": "text-light",
                        "padding": "p-2",
                        "textSize": "fs-4",
                        "margin": "mb-3"
                    },
                    "editable": true,
                    "attributes": {
                        "innerText": "Tech knowledge ",
                        "contentEditable": true
                    },
                    "id": "e1e39cfb-0901-4bf2-ab76-8f7c0f882c3f"
                },
                {
                    "name": "p",
                    "editable": true,
                    "styleClasses": {
                        "textAlign": "text-center",
                        "textColor": "text-dark",
                        "textSize": ".",
                        "margin": "mx-min"
                    },
                    "attributes": {
                        "contentEditable": true,
                        "innerText": "This survey aims to collect data about how much Knowledge do people living in villages have about tech. "
                    },
                    "id": "e926856d-7935-46d2-841e-b35c5edebc64"
                },
                {
                    "name": "h3",
                    "editable": true,
                    "styleClasses": {
                        "textAlign": "text-center",
                        "textSize": "fs-4",
                        "margin": "mx-min",
                        "textColor": "text-danger"
                    },
                    "attributes": {
                        "contentEditable": true,
                        "innerText": "Complete the Survey Below "
                    },
                    "id": "072355e1-8197-44e7-9e2a-f6fd8296e1ad"
                },
                {
                    "name": "div",
                    "editable": true,
                    "styleClasses": {
                        "margin": "mb-3",
                        "container": "container",
                        "textAlign": "text-start",
                        "form": "input-group"
                    },
                    "children": [
                        {
                            "name": "span",
                            "editable": false,
                            "styleClasses": {
                                "form": "input-group-text"
                            },
                            "attributes": {
                                "innerHTML": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-envelope-at-fill\" viewBox=\"0 0 16 16\">\n                        <path d=\"M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z\"/>\n                        <path d=\"M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z\"/>\n                      </svg>"
                            },
                            "id": "84cb7499-96c9-4307-9a8d-bd388e15563c"
                        },
                        {
                            "name": "input",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-control"
                            },
                            "attributes": {
                                "type": "email",
                                "placeholder": "enter your email address"
                            },
                            "id": "a0682b74-51f7-4fc3-82c5-c6663db40a2d"
                        }
                    ],
                    "id": "0815a086-1ae0-442a-9634-46d5b409558c"
                },
                {
                    "name": "form",
                    "editable": true,
                    "styleClasses": {
                        "margin": "mb-3",
                        "container": "container"
                    },
                    "children": [
                        {
                            "name": "label",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-label",
                                "textColor": "text-dark",
                                "textSize": ".",
                                "fontWeight": "fw-bold"
                            },
                            "attributes": {
                                "innerText": "Have you ever used a computer before? ",
                                "contentEditable": true
                            },
                            "id": "5d3231d9-6fd3-41a6-9399-3b5655e6c4b3"
                        },
                        {
                            "name": "div",
                            "styleClasses": {
                                "form": "form-check"
                            },
                            "children": [
                                {
                                    "name": "input",
                                    "editable": false,
                                    "styleClasses": {
                                        "form": "form-check-input"
                                    },
                                    "attributes": {
                                        "type": "radio"
                                    },
                                    "id": "fa379067-e1ae-4c61-ad75-a10bd68544f4"
                                },
                                {
                                    "name": "label",
                                    "editable": true,
                                    "styleClasses": {
                                        "form": "form-label",
                                        "textColor": "text-dark",
                                        "textSize": "."
                                    },
                                    "attributes": {
                                        "for": "55acf2a7-ef76-4392-881f-4240fa90bf79",
                                        "innerText": "yes",
                                        "contentEditable": true
                                    },
                                    "id": "7185b4e9-8111-4b0a-94e2-6b60734098c4"
                                }
                            ],
                            "id": "058334ba-4aea-4346-bcdd-61c87fd9b225"
                        },
                        {
                            "name": "div",
                            "styleClasses": {
                                "form": "form-check"
                            },
                            "children": [
                                {
                                    "name": "input",
                                    "editable": false,
                                    "styleClasses": {
                                        "form": "form-check-input"
                                    },
                                    "attributes": {
                                        "type": "radio"
                                    },
                                    "id": "1b4a257d-5aec-4ebc-8887-5033074742c4"
                                },
                                {
                                    "name": "label",
                                    "editable": true,
                                    "styleClasses": {
                                        "form": "form-label",
                                        "textColor": "text-dark",
                                        "textSize": "."
                                    },
                                    "attributes": {
                                        "for": "d695bb86-70ea-4ca8-8ea7-b3b999715513",
                                        "innerText": "no",
                                        "contentEditable": true
                                    },
                                    "id": "ef37b17a-b3d7-4051-b537-3a91962acea6"
                                }
                            ],
                            "id": "78803324-ae2a-4940-ae07-c548867b1bbc"
                        }
                    ],
                    "id": "92642c8c-5d59-4f46-9436-9720ce03995a"
                },
                {
                    "name": "form",
                    "editable": true,
                    "styleClasses": {
                        "margin": "mb-3",
                        "container": "container"
                    },
                    "children": [
                        {
                            "name": "label",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-label",
                                "textColor": "text-dark",
                                "textSize": ".",
                                "fontWeight": "fw-bold"
                            },
                            "attributes": {
                                "innerText": "What is your gender?",
                                "contentEditable": true
                            },
                            "id": "2961be0c-cbb8-4266-872d-6084070b3d7b"
                        },
                        {
                            "name": "div",
                            "styleClasses": {
                                "form": "form-check"
                            },
                            "children": [
                                {
                                    "name": "input",
                                    "editable": false,
                                    "styleClasses": {
                                        "form": "form-check-input"
                                    },
                                    "attributes": {
                                        "name": "gender",
                                        "type": "radio"
                                    },
                                    "id": "0b96df85-2abf-472a-b2d7-94f1d02a9928"
                                },
                                {
                                    "name": "label",
                                    "editable": true,
                                    "styleClasses": {
                                        "form": "form-label",
                                        "textColor": "text-dark",
                                        "textSize": "."
                                    },
                                    "attributes": {
                                        "innerText": "male",
                                        "contentEditable": true
                                    },
                                    "id": "457a28aa-2c55-4051-b80b-fe6fd54fffd6"
                                }
                            ],
                            "id": "52fc8f63-848b-4691-aa91-e01c1f23f97b"
                        },
                        {
                            "name": "div",
                            "styleClasses": {
                                "form": "form-check"
                            },
                            "children": [
                                {
                                    "name": "input",
                                    "editable": false,
                                    "styleClasses": {
                                        "form": "form-check-input"
                                    },
                                    "attributes": {
                                        "type": "radio"
                                    },
                                    "id": "b4efeeb4-a8e4-4cd3-b143-a8955877797f"
                                },
                                {
                                    "name": "label",
                                    "editable": true,
                                    "styleClasses": {
                                        "form": "form-label",
                                        "textColor": "text-dark",
                                        "textSize": "."
                                    },
                                    "attributes": {
                                        "name": "female",
                                        "innerText": "female",
                                        "contentEditable": true
                                    },
                                    "id": "83df3163-c2e7-4ad3-8fe0-2c90dc0228f0"
                                }
                            ],
                            "id": "17392338-1484-4e33-a2b0-16de11472c06"
                        }
                    ],
                    "id": "56377ed2-5d4b-408e-b3d1-4a2f75c06129"
                },
                {
                    "name": "form",
                    "styleClasses": {
                        "margin": "mb-3",
                        "container": "container"
                    },
                    "children": [
                        {
                            "name": "label",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-label",
                                "textColor": "text-dark",
                                "textSize": ".",
                                "fontWeight": "fw-bold"
                            },
                            "attributes": {
                                "innerText": "Where are you located? ",
                                "contentEditable": true
                            },
                            "id": "7f97856b-87e3-43a2-9e9b-179fa2497f5a"
                        },
                        {
                            "name": "textarea",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-control"
                            },
                            "ayobaApiOptions": [
                                "msisdn",
                                "location",
                                "country"
                            ],
                            "ayobaApi": "",
                            "attributes": {
                                "placeholder": "enter text"
                            },
                            "id": "8d499121-b25b-4831-a279-74de9c0d4cbd"
                        }
                    ],
                    "id": "0f9ee9e0-c582-49c6-bfc5-d562e2abc982"
                },
                {
                    "name": "form",
                    "editable": true,
                    "styleClasses": {
                        "margin": "mb-3",
                        "container": "container"
                    },
                    "children": [
                        {
                            "name": "label",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-label",
                                "textColor": "text-dark",
                                "textSize": ".",
                                "fontWeight": "fw-bold"
                            },
                            "attributes": {
                                "innerText": "What do you use to access the internet? ",
                                "contentEditable": true
                            },
                            "id": "906ea1c4-bf5c-4ff5-a7ca-5b1fcf1e2a27"
                        },
                        {
                            "name": "div",
                            "styleClasses": {
                                "form": "form-check"
                            },
                            "children": [
                                {
                                    "name": "input",
                                    "editable": false,
                                    "styleClasses": {
                                        "form": "form-check-input"
                                    },
                                    "attributes": {
                                        "type": "radio"
                                    },
                                    "id": "a2980986-610d-4ff4-a411-ffe1e53e534a"
                                },
                                {
                                    "name": "label",
                                    "editable": true,
                                    "styleClasses": {
                                        "form": "form-label",
                                        "textColor": "text-dark",
                                        "textSize": "."
                                    },
                                    "attributes": {
                                        "innerText": "Mobile phone",
                                        "contentEditable": true
                                    },
                                    "id": "ef8a6baf-1ca3-4f6f-9e87-837865b118fc"
                                }
                            ],
                            "id": "44bd4fb7-49cd-41c8-8760-d61b79fca4ec"
                        },
                        {
                            "name": "div",
                            "styleClasses": {
                                "form": "form-check"
                            },
                            "children": [
                                {
                                    "name": "input",
                                    "editable": false,
                                    "styleClasses": {
                                        "form": "form-check-input"
                                    },
                                    "attributes": {
                                        "type": "radio"
                                    },
                                    "id": "40fbcf62-8805-443b-abde-32ec73e1b810"
                                },
                                {
                                    "name": "label",
                                    "editable": true,
                                    "styleClasses": {
                                        "form": "form-label",
                                        "textColor": "text-dark",
                                        "textSize": "."
                                    },
                                    "attributes": {
                                        "innerText": "Computer (laptop/desktop pc) ",
                                        "contentEditable": true
                                    },
                                    "id": "04769aaa-30c9-4a04-9e32-ec3a51a9037d"
                                }
                            ],
                            "id": "3ab7d817-f407-4c63-b3ce-26b4af878fd6"
                        }
                    ],
                    "id": "c015f79f-7a95-48fb-8d09-279af91c7523"
                },
                {
                    "name": "div",
                    "editable": true,
                    "styleClasses": {
                        "margin": "mb-3",
                        "container": "container",
                        "textAlign": "text-start",
                        "form": "input-group"
                    },
                    "children": [
                        {
                            "name": "span",
                            "editable": false,
                            "styleClasses": {
                                "form": "input-group-text"
                            },
                            "attributes": {
                                "innerHTML": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-telephone-fill\" viewBox=\"0 0 16 16\">\n                        <path fill-rule=\"evenodd\" d=\"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z\"/>\n                      </svg>"
                            },
                            "id": "60061ce0-399c-4675-9022-c65b4c1fac67"
                        },
                        {
                            "name": "input",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-control"
                            },
                            "ayobaApiOptions": [
                                "msisdn"
                            ],
                            "ayobaApi": "msisdn",
                            "attributes": {
                                "type": "tel",
                                "placeholder": "0981234567"
                            },
                            "id": "d6172af8-75f4-4dc6-b5a1-d04c2e65e74a"
                        }
                    ],
                    "id": "fe1d13c8-9fba-4380-956d-8fabd39acaea"
                },
                {
                    "name": "form",
                    "styleClasses": {
                        "margin": "mb-3",
                        "container": "container"
                    },
                    "children": [
                        {
                            "name": "label",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-label",
                                "textColor": "text-dark",
                                "textSize": ".",
                                "fontWeight": "fw-bold"
                            },
                            "attributes": {
                                "innerText": "In your own words explain the needs and benefits of  computers",
                                "contentEditable": true
                            },
                            "id": "25e7983f-c8a8-4b05-b99d-ab2b54de7642"
                        },
                        {
                            "name": "textarea",
                            "editable": true,
                            "styleClasses": {
                                "form": "form-control"
                            },
                            "ayobaApiOptions": [
                                "msisdn",
                                "location",
                                "country"
                            ],
                            "ayobaApi": "",
                            "attributes": {
                                "placeholder": "enter text"
                            },
                            "id": "3d327589-02e6-45d0-8563-e50d1e1dc0d6"
                        }
                    ],
                    "id": "87741f37-35c8-4cd2-b558-4605c5b74117"
                },
                {
                    "name": "div",
                    "editable": false,
                    "children": [
                        {
                            "name": "a",
                            "editable": true,
                            "styleClasses": {
                                "button": "btn",
                                "buttonColor": "btn-primary",
                                "horizontalAlign": "mx-auto",
                                "display": "d-block",
                                "width": "w-25"
                            },
                            "routeToPage": "",
                            "attributes": {
                                "role": "button",
                                "innerText": "button",
                                "href": "#"
                            },
                            "id": "2c9a056a-fcb8-4473-9bc6-700c041fb22a"
                        }
                    ],
                    "id": "428d67c1-f7f6-4120-8499-8c78f9ddea58"
                },
                {
                    "name": "footer",
                    "styleClasses": {
                        "textAlign": "text-center",
                        "bgColor": "bg-dark",
                        "textColor": "text-muted",
                        "padding": "p-2",
                        "textSize": "fs-6",
                        "margin": "mt-3"
                    },
                    "editable": true,
                    "attributes": {
                        "innerText": "copyright © Tech Knowledge",
                        "contentEditable": true
                    },
                    "id": "e82e8300-133f-457f-9ef1-6b47e53d173d"
                }
            ]
        }
    ]
}