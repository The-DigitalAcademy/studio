import bootstrapComponents from "../components/bootstrapComponents.js";
import components from "../components/formComponents.js";
import Elements from "../components/Elements.js";
import { generateUuid } from "../utils.js";

export default {
  "id": "6732c6d9-f83f-42a6-bbf7-2895f7cd3ac8",
  "name": "ecommerce",
  "pages": [
    {
      "id": "0bd2a91c-9291-43b5-9a80-0c4585bd66a3",
      "name": "Home",
      "filename": "index",
      "components": [
        JSON.parse(JSON.stringify(bootstrapComponents.navHeader)),
        {
          "name": "img",
          "editable": true,
          "styleClasses": {
            "display": "d-block",
            "borderRadius": "rounded-0",
            "horizontalAlign": "mx-auto",
            "width": "w-100"
          },
          "attributes": {
            "src": "https://picsum.photos/id/91/600/200"
          },
        },
        {
          "name": "p",
          "editable": true,
          "styleClasses": {
            "textAlign": "text-center",
            "textColor": "text-dark",
            "textSize": "."
          },
          "attributes": {
            "contentEditable": true,
            "innerText": " Quality clothing at affordable prices"
          },
        },
        {
          "name": "h3",
          "editable": true,
          "styleClasses": {
            "textAlign": "text-center",
            "textSize": "."
          },
          "attributes": {
            "contentEditable": true,
            "innerText": "Latest Items "
          },
        },
        {
          "name": "section",
          "styleClasses": {
            "container": "container",
            "display": "d-flex justify-content-evenly"
          },
          "children": [
            {
              "name": "div",
              "styleClasses": {
                "grid": "col-6"
              },
              "children": [
                {
                  "name": "img",
                  "styleClasses": {
                    "image": "img-fluid"
                  },
                  "editable": true,
                  "attributes": {
                    "src": "https://picsum.photos/130/180"
                  },
                },
                {
                  "name": "div",
                  "children": [
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "text-muted",
                        "margin": "mb-1"
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "Product Name"
                      },
                    },
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "."
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "R323"
                      },
                    }
                  ],
                }
              ],
            },
            {
              "name": "div",
              "styleClasses": {
                "grid": "col-6"
              },
              "children": [
                {
                  "name": "img",
                  "styleClasses": {
                    "image": "img-fluid"
                  },
                  "editable": true,
                  "attributes": {
                    "src": "https://picsum.photos/130/180"
                  },
                },
                {
                  "name": "div",
                  "children": [
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "text-muted",
                        "margin": "mb-1"
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "Product Name"
                      },
                    },
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "."
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "R323"
                      },
                    }
                  ],
                }
              ],
            }
          ],
        }
      ]
    },
    {
      "id": "76a2d808-82aa-415f-861a-6c6924080686",
      "name": "products",
      "filename": "products",
      "components": [
        JSON.parse(JSON.stringify(bootstrapComponents.navHeader)),
        {
          "name": "p",
          "editable": true,
          "styleClasses": {
            "textAlign": "text-center",
            "textColor": "text-secondary",
            "textSize": "fs-3"
          },
          "attributes": {
            "contentEditable": true,
            "innerText": "Products "
          },
        },
        {
          "name": "section",
          "styleClasses": {
            "container": "container",
            "display": "d-flex flex-wrap justify-content-evenly"
          },
          "children": [
            {
              "name": "div",
              "styleClasses": {
                "grid": "col-6"
              },
              "children": [
                {
                  "name": "img",
                  "styleClasses": {
                    "image": "img-fluid"
                  },
                  "editable": true,
                  "attributes": {
                    "src": "https://picsum.photos/130/180"
                  },
                },
                {
                  "name": "div",
                  "children": [
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "text-muted",
                        "margin": "mb-1"
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "Item 1 "
                      },
                    },
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "."
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "R39"
                      },
                    }
                  ],
                }
              ],
            },
            {
              "name": "div",
              "styleClasses": {
                "grid": "col-6"
              },
              "children": [
                {
                  "name": "img",
                  "styleClasses": {
                    "image": "img-fluid"
                  },
                  "editable": true,
                  "attributes": {
                    "src": "https://picsum.photos/130/180"
                  },
                },
                {
                  "name": "div",
                  "children": [
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "text-muted",
                        "margin": "mb-1"
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "Item 2 "
                      },
                    },
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "."
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "R279"
                      },
                    }
                  ],
                }
              ],
            },
            {
              "name": "div",
              "styleClasses": {
                "grid": "col-6"
              },
              "children": [
                {
                  "name": "img",
                  "styleClasses": {
                    "image": "img-fluid"
                  },
                  "editable": true,
                  "attributes": {
                    "src": "https://picsum.photos/130/180"
                  },
                },
                {
                  "name": "div",
                  "children": [
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "text-muted",
                        "margin": "mb-1"
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "Item 3 "
                      },
                    },
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "."
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "R599 "
                      },
                    }
                  ],
                }
              ],
            },
            {
              "name": "div",
              "styleClasses": {
                "grid": "col-6"
              },
              "children": [
                {
                  "name": "img",
                  "styleClasses": {
                    "image": "img-fluid"
                  },
                  "editable": true,
                  "attributes": {
                    "src": "https://picsum.photos/130/180"
                  },
                },
                {
                  "name": "div",
                  "children": [
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "text-muted",
                        "margin": "mb-1"
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "Item 4 "
                      },
                    },
                    {
                      "name": "p",
                      "styleClasses": {
                        "textColor": "."
                      },
                      "attributes": {
                        "contentEditable": true,
                        "innerText": "R189 "
                      },
                    }
                  ],
                }
              ],
            }
          ],
        },
        {
          "name": "footer",
          "styleClasses": {
            "textAlign": "text-center",
            "bgColor": "bg-dark",
            "textColor": "text-light",
            "padding": "p-2",
            "textSize": "small"
          },
          "editable": true,
          "attributes": {
            "innerText": "fashion store  2020",
            "contentEditable": true
          },
        }
      ]
    },
    {
      "id": "ab1f661e-87fa-48eb-857c-a6e330681689",
      "name": "about",
      "filename": "about",
      "components": [
        JSON.parse(JSON.stringify(bootstrapComponents.navHeader)),
        {
          "name": "h3",
          "editable": true,
          "styleClasses": {
            "textAlign": "text-center",
            "textSize": "."
          },
          "attributes": {
            "contentEditable": true,
            "innerText": "Our Story  "
          },
        },
        {
          "name": "img",
          "editable": true,
          "styleClasses": {
            "display": "d-block",
            "borderRadius": "rounded-0",
            "horizontalAlign": "mx-auto",
            "width": "w-10"
          },
          "attributes": {
            "src": "https://picsum.photos/200/100"
          },
        },
        {
          "name": "p",
          "editable": true,
          "styleClasses": {
            "textAlign": "text-center",
            "textColor": "text-dark",
            "textSize": "."
          },
          "attributes": {
            "contentEditable": true,
            "innerText": "\"On the other hand, we denounce with , so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain."
          },
        },
        {
          "name": "img",
          "editable": true,
          "styleClasses": {
            "display": "d-block",
            "borderRadius": "rounded-0",
            "horizontalAlign": "mx-auto",
            "width": "w-10"
          },
          "attributes": {
            "src": "https://picsum.photos/200/100"
          },
        },
        {
          "name": "p",
          "editable": true,
          "styleClasses": {
            "textAlign": "text-center",
            "textColor": "text-dark",
            "textSize": "."
          },
          "attributes": {
            "contentEditable": true,
            "innerText": "\"On the other hand, we denounce with , so blinded by desire, rinking from toil and pain."
          },
        },
        {
          "name": "footer",
          "styleClasses": {
            "textAlign": "text-center",
            "bgColor": "bg-dark",
            "textColor": "text-light",
            "padding": "p-2",
            "textSize": "fs-6"
          },
          "editable": true,
          "attributes": {
            "innerText": "Fashion Store © 202",
            "contentEditable": true
          },
        }
      ]
    }
  ]
}
