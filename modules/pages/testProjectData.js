import components from "../components/components.js";
import { generateUuid } from "../utils.js";

export default
{
    id: '82f07ea8-0ec5-41e6-809d-1e7edc05078a',
    name: 'My Web Site',
    pages: [
        {
            id: 'bca5c84e-32dc-4320-99a4-9555fc878cc0',
            name: 'Home',
            fileName: 'index',
            components: [
                components.header,
                components.h3,
            ]
        }
    ]
}