import Components from "./components/formComponents.js";
import Elements from "./components/Elements.js";
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
                JSON.parse(JSON.stringify(Elements.header)),
                // JSON.parse(JSON.stringify(Elements.h3)),
            ]
        },
        {
            id: generateUuid(),
            name: 'about',
            fileName: 'about',
            components: [
                JSON.parse(JSON.stringify(Elements.header)),
                JSON.parse(JSON.stringify(Elements.img)),
            ]
        },
        {
            id: generateUuid(),
            name: 'products',
            fileName: 'about',
            components: [
                JSON.parse(JSON.stringify(Elements.header)),
                JSON.parse(JSON.stringify(Elements.p)),
                JSON.parse(JSON.stringify(Components.emailForm))
            ]
        }
    ]
}