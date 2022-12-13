import { generateUuid } from "../utils.js" 

export default {
    "id": generateUuid(),
    "name": "landing",
    "pages": [
        {
            "id": "e3ea9fa2-2142-445b-90cf-e168835f7ce4",
            "name": "Home",
            "fileName": "index",
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
                    "id": "75f791ff-b042-425e-abb3-4fce2a8f5cde"
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
                    "id": "b45f0c70-cd11-4b8b-939e-61157219d7bc"
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
                    "id": "37616299-e951-44c7-aca9-68b23735c7ed"
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
                    "id": "af83e96f-835f-4825-a879-a415142190ad"
                }
            ]
        },
    ]
}