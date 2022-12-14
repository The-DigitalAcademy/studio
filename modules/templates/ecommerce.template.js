import bootstrapComponents from "../components/bootstrapComponents.js";
import components from "../components/components.js";
import Elements from "../components/Elements.js";
import { generateUuid } from "../utils.js";

export default {
  id: generateUuid(),
  name: "ecommerce",
  pages: [
    {
      id: generateUuid(),
      name: "Home",
      filename: "index.html",
      components: [
        JSON.parse(JSON.stringify(components.header)),
        {
          name: "img",
          editable: true,
          styleClasses: {
            display: "d-block",
            borderRadius: "rounded-0",
            horizontalAlign: "mx-auto",
            width: "w-100",
          },
          attributes: {
            src: "https://picsum.photos/id/91/600/200",
          },
        },
        {
          name: "p",
          editable: true,
          styleClasses: {
            textAlign: "text-center",
            textColor: "text-dark",
            textSize: ".",
          },
          attributes: {
            contentEditable: true,
            innerText: "The latest in hot fashion trends",
          },
        },
        JSON.parse(JSON.stringify(Elements.h3)),
        {
            name: 'section',
            styleClasses: {container: 'container', display: 'd-flex'},
            children: [
                JSON.parse(JSON.stringify(components.product)),
                JSON.parse(JSON.stringify(components.product))
            ]
        }
      ],
    },
    {
        id: generateUuid(),
        name: 'products',
        filename: 'products',
        components: [
            JSON.parse(JSON.stringify(components.header)),
            JSON.parse(JSON.stringify(components.p)),
            {
                name: 'section',
                styleClasses: {container: 'container', display: 'd-flex flex-wrap'},
                children: [
                    JSON.parse(JSON.stringify(components.product)),
                    JSON.parse(JSON.stringify(components.product)),
                    JSON.parse(JSON.stringify(components.product)),
                    JSON.parse(JSON.stringify(components.product))
                ]

            }
        ]
    }
  ],
};
