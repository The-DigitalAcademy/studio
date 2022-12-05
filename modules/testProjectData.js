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
                components.header,
                components.h3,
            ]
        },
        {
            id: generateUuid(),
            name: 'about',
            fileName: 'about',
            components: [
                components.header,
                components.paragraph1,
            ]
        }
    ]
}