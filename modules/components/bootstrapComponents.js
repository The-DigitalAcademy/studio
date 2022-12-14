import components from "./components.js";

export default {
  card: {
    name: "div",
    styleClasses: { card: "card" },
    children: [
      {
        name: "img",
        styleClasses: { card: "card-img-top" },
        attributes: { src: "https://picsum.photos/id/64/400/200" },
      },
      {
        name: "div",
        styleClasses: { card: "card-body" },
        children: [
          {
            name: "h5",
            styleClasses: { card: "card-title" },
            attributes: { innerText: "Product Title" },
          },
          {
            name: "p",
            styleClasses: { card: "card-text" },
            attributes: {
              innerText: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            },
          },
          {
            name: "a",
            editable: true,
            styleClasses: {
              button: "btn",
              buttonColor: "btn-primary",
            },
            routeToPage: "",
            attributes: {
              role: "button",
              innerText: "Buy Item",
              href: "#",
            },
          },
        ],
      },
    ],
  },
};
