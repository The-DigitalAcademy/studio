import { generateUuid } from "../utils.js";

export default {
    "id": generateUuid(),
    "name": "BlankTemplate",
    "pages": [
        {
            id: generateUuid(),
            name: 'Home',
            filename: 'index.html',
            components: []
        }
    ]
}