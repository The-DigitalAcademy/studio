import { generateUuid } from "../utils.js" 

export default {
    "id": generateUuid(),
    "name": "landing",
    "pages": [
        {
            "id": "e3ea9fa2-2142-445b-90cf-e168835f7ce4",
            "name": "Home",
            "filename": "index",
            "components": [
                {
                    "name": "header",
                    "styleClasses": {
                        "textAlign": "text-center",
                        "bgColor": "bg-dark",
                        "textColor": "text-light",
                        "padding": "p-2",
                        "textSize": "fs-5"
                    },
                    "editable": true,
                    "attributes": {
                        "innerText": "Landing Page ",
                        "contentEditable": true
                    },
                },
                {
                    "name": "p",
                    "editable": true,
                    "styleClasses": {
                        "textAlign": "text-center",
                        "textColor": "text-dark",
                        "textSize": "small"
                    },
                    "attributes": {
                        "contentEditable": true,
                        "innerText": "Lorem ipsum dolor sit , elit. Aliquam id massa, nulla sed, erat."
                    },
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
                        "src": "https://picsum.photos/600/300"
                    },
                },
                {
                    "name": "p",
                    "editable": true,
                    "styleClasses": {
                        "textAlign": "text-center",
                        "textColor": "text-dark",
                        "textSize": "."
                    },
                    "attributes": {
                        "contentEditable": true,
                        "innerText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa ultricies, hendrerit nulla sed, congue erat."
                    },
                }
            ]
        },
    ]
}