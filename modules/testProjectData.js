import components from "./components/components.js";
import { generateUuid } from "./utils.js";

export default
{
    id: generateUuid(),
    name: 'My Web Site',
    pages: [
        {
            id: generateUuid(),
            name: 'Home',
            fileName: 'index',
            components: [
                JSON.parse(JSON.stringify(components.header)),
                JSON.parse(JSON.stringify(components.h3)),
            ]
        },
        {
            id: generateUuid(),
            name: 'about',
            fileName: 'about',
            components: [
                JSON.parse(JSON.stringify(components.header)),
                JSON.parse(JSON.stringify(components.img)),
            ]
        },
        {
            id: generateUuid(),
            name: 'products',
            fileName: 'about',
            components: [
                JSON.parse(JSON.stringify(components.header)),
                JSON.parse(JSON.stringify(components.p)),
            ]
        }
    ]
}