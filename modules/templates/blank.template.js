import { generateUuid } from "../utils.js";

export default {
    "id": generateUuid(),
    "name": "blank",
    "pages": [
        {
            id: generateUuid(),
            name: 'Home',
            filename: 'index',
            components: []
        }
    ]
}