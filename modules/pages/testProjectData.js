import components from "../components/components.js";
import { generateUuid } from "../utils.js";

export default
{
    id: generateUuid(),
    name: 'My Web Site',
    pagesData: [
        {
            id: generateUuid(),
            name: 'Home',
            fileName: 'index',
            componentsData: [
                components.header,
                components.h3
            ]
        }
    ]
}