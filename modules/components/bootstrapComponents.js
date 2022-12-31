import components from "./formComponents.js";

export default {
  card: {
    displayName: 'card',
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
  navHeader: {
    displayName: 'nav header',
    name: 'header',
    styleClasses: {},
    children: [
      {
        name: 'nav',
        styleClasses: {navbar:'navbar navbar-expand-xs navbar-dark bg-dark'},
        children: [
          {
            name: 'div',
            styleClasses: {container: 'container-fluid'},
            children: [
              {
                name: 'a',
                styleClasses: {navbar: 'navbar-brand'},
                attributes: {innerText: 'Brand Name'}
              },
              {
                name: 'button',
                styleClasses: {navbar: 'navbar-toggler'},
                attributes: {
                  type: 'button',
                  dataset: {
                    bsToggle: 'collapse',
                    bsTarget: '#navbarNavAltMarkup',                    
                  },
                  ariaControls: "navbarNavAltMarkup",
                  ariaExpanded: "false",
                  ariaLabel: "Toggle navigation",
                  innerHTML: '<span class="navbar-toggler-icon"></span>',
                }
              },
              {
                name: 'div',
                id: 'navbarNavAltMarkup',
                styleClasses: {navbar: "collapse navbar-collapse"},
                children: [
                  {
                    name: 'div',
                    styleClasses: {navbar: "navbar-nav"},
                    children: [
                      {
                         name: 'a',
                          styleClasses: {navbar: 'nav-link'},
                          editable: true,
                          attributes: {innerText: 'About', contentEditable: true}
                      },
                      {
                        name: 'a',
                         styleClasses: {navbar: 'nav-link'},
                         editable: true,
                         attributes: {innerText: 'Products', contentEditable: true}
                     },
                     {
                      name: 'a',
                       styleClasses: {navbar: 'nav-link'},
                       editable: true,
                       attributes: {innerText: 'contact us', contentEditable: true}
                   }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
