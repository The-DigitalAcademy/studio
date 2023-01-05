import { generateUuid } from "../utils.js" 

export default {
    "id": generateUuid(),
    "name": "landing",
    "pages": [
        {
            "id": "7bbd68c7-0dfe-453a-b06e-4e22700b438c",
            "name": "Home",
            "filename": "index.html",
            "components": [
                {
                    "name": "header",
                    "styleClasses": {
                        "textAlign": "text-center",
                        "bgColor": "bg-dark",
                        "textColor": "text-light",
                        "padding": "p-2",
                        "textSize": "fs-4"
                    },
                    "editable": true,
                    "attributes": {
                        "innerText": "Header Title",
                        "contentEditable": true
                    },
                },
                {
                    "name": "h1",
                    "editable": true,
                    "styleClasses": {
                        "textAlign": "text-center",
                        "textSize": "fs-3",
                        "margin": "mx-min"
                    },
                    "attributes": {
                        "contentEditable": true,
                        "innerText": "Heading 1"
                    },
                },
                {
                    "displayName": "nav header",
                    "name": "header",
                    "styleClasses": {},
                    "attributes": {
                        "dataset": {
                            "appendable": false
                        }
                    },
                    "children": [],
                },
                {
                    "name": "img",
                    "editable": true,
                    "styleClasses": {
                        "display": "d-block",
                        "borderRadius": "rounded-0",
                        "horizontalAlign": "mx-auto",
                        "width": "w-100"
                    },
                    "attributes": {
                        "src": "https://picsum.photos/200/100"
                    },
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
                        "innerText": "Intro for a landing page of a websit"
                    },
                }
            ]
        }
    ]
}