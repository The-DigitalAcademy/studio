import { generateUuid } from "../utils.js";

export default {
  "id": generateUuid(),
  "name": "ecommerce",
  "pages": [
      {
          "id": "0bd2a91c-9291-43b5-9a80-0c4585bd66a3",
          "name": "Home",
          "filename": "index",
          "components": [
              {
                  "displayName": "nav header",
                  "name": "header",
                  "styleClasses": {},
                  "attributes": {
                      "dataset": {
                          "appendable": false
                      }
                  },
                  "children": [
                      {
                          "name": "nav",
                          "styleClasses": {
                              "navbar": "navbar navbar-expand-xs navbar-dark bg-dark"
                          },
                          "attributes": {
                              "dataset": {
                                  "appendable": false
                              }
                          },
                          "children": [
                              {
                                  "name": "div",
                                  "styleClasses": {
                                      "container": "container-fluid"
                                  },
                                  "attributes": {
                                      "dataset": {
                                          "appendable": false
                                      }
                                  },
                                  "children": [
                                      {
                                          "name": "a",
                                          "styleClasses": {
                                              "navbar": "navbar-brand"
                                          },
                                          "attributes": {
                                              "innerText": "Brand Name",
                                              "contentEditable": true
                                          },
                                          "id": "5e3b564e-6fa8-457a-8d5f-4ce18b2390b5"
                                      },
                                      {
                                          "name": "button",
                                          "styleClasses": {
                                              "navbar": "navbar-toggler"
                                          },
                                          "attributes": {
                                              "type": "button",
                                              "dataset": {
                                                  "appendable": false,
                                                  "bsToggle": "collapse",
                                                  "bsTarget": "#navbarNavAltMarkup"
                                              },
                                              "ariaControls": "navbarNavAltMarkup",
                                              "ariaExpanded": "false",
                                              "ariaLabel": "Toggle navigation",
                                              "innerHTML": "<span class=\"navbar-toggler-icon\"></span>"
                                          },
                                          "id": "4474f552-d5dd-4647-b9e9-9057c57db67d"
                                      },
                                      {
                                          "name": "div",
                                          "id": "navbarNavAltMarkup",
                                          "styleClasses": {
                                              "navbar": "collapse navbar-collapse"
                                          },
                                          "children": [
                                              {
                                                  "name": "div",
                                                  "styleClasses": {
                                                      "navbar": "navbar-nav"
                                                  },
                                                  "children": [
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "About",
                                                              "contentEditable": true
                                                          },
                                                          "id": "368d0558-a2ac-4f64-a9a0-91a1f8bfb803"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "Products",
                                                              "contentEditable": true
                                                          },
                                                          "id": "607a6754-0e26-477e-b2a3-d7f0e4956977"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "contact us",
                                                              "contentEditable": true
                                                          },
                                                          "id": "7d54e747-db23-4a23-a759-4fbd17a32c80"
                                                      }
                                                  ],
                                                  "id": "f53cdcd2-ef67-4e7f-a8f5-e8e2f94a00e1"
                                              }
                                          ]
                                      }
                                  ],
                                  "id": "39823597-dfb5-4699-918b-1438e54e0604"
                              }
                          ],
                          "id": "529826e5-9beb-4f44-9bec-cdf874eb1801"
                      }
                  ],
                  "id": "f5d47314-f693-4744-a314-24e03ce0a17c"
              },
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
                  "id": "86478ca1-5a11-4ad4-aa5c-1a23288bef3c"
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
                  "id": "17a649fe-ebfe-4a37-99a0-b21a032363f4"
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
                  "id": "15541b98-8f0e-4d25-8581-2a81431cca8c"
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
                                  "id": "41c0a88a-d476-4645-8816-903a257a9b49"
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
                                          "id": "8be2b748-fbd7-4b3d-ab55-2f1156d43ac1"
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
                                          "id": "e0884b09-a053-4db0-9ff0-df6d36db2fc3"
                                      }
                                  ],
                                  "id": "e08fb941-0fe8-4a08-94e7-bed74b7f9261"
                              }
                          ],
                          "id": "b42c21c7-a16a-47da-9124-91356c848911"
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
                                  "id": "f6cf1b72-9264-4ee6-948f-0c56571e8967"
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
                                          "id": "83db09a1-7d34-4acd-b0e8-42c2cc1c7a44"
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
                                          "id": "d40f3844-133a-4afa-abf4-3c728d1f4866"
                                      }
                                  ],
                                  "id": "e0917084-f682-4e18-8608-a3375f98fe33"
                              }
                          ],
                          "id": "87583730-54ac-4a46-971b-c52bb9fac252"
                      }
                  ],
                  "id": "43a0503c-9175-453d-8d31-c403bd9ec147"
              }
          ]
      },
      {
          "id": "76a2d808-82aa-415f-861a-6c6924080686",
          "name": "products",
          "filename": "products",
          "components": [
              {
                  "displayName": "nav header",
                  "name": "header",
                  "styleClasses": {},
                  "attributes": {
                      "dataset": {
                          "appendable": false
                      }
                  },
                  "children": [
                      {
                          "name": "nav",
                          "styleClasses": {
                              "navbar": "navbar navbar-expand-xs navbar-dark bg-dark"
                          },
                          "attributes": {
                              "dataset": {
                                  "appendable": false
                              }
                          },
                          "children": [
                              {
                                  "name": "div",
                                  "styleClasses": {
                                      "container": "container-fluid"
                                  },
                                  "attributes": {
                                      "dataset": {
                                          "appendable": false
                                      }
                                  },
                                  "children": [
                                      {
                                          "name": "a",
                                          "styleClasses": {
                                              "navbar": "navbar-brand"
                                          },
                                          "attributes": {
                                              "innerText": "Brand Name",
                                              "contentEditable": true
                                          },
                                          "id": "757c8038-200f-4815-ab2d-2a1785ee0f66"
                                      },
                                      {
                                          "name": "button",
                                          "styleClasses": {
                                              "navbar": "navbar-toggler"
                                          },
                                          "attributes": {
                                              "type": "button",
                                              "dataset": {
                                                  "appendable": false,
                                                  "bsToggle": "collapse",
                                                  "bsTarget": "#navbarNavAltMarkup"
                                              },
                                              "ariaControls": "navbarNavAltMarkup",
                                              "ariaExpanded": "false",
                                              "ariaLabel": "Toggle navigation",
                                              "innerHTML": "<span class=\"navbar-toggler-icon\"></span>"
                                          },
                                          "id": "14aa996d-3089-4a78-a1b2-0e0a5dee6294"
                                      },
                                      {
                                          "name": "div",
                                          "id": "navbarNavAltMarkup",
                                          "styleClasses": {
                                              "navbar": "collapse navbar-collapse"
                                          },
                                          "children": [
                                              {
                                                  "name": "div",
                                                  "styleClasses": {
                                                      "navbar": "navbar-nav"
                                                  },
                                                  "children": [
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "About",
                                                              "contentEditable": true
                                                          },
                                                          "id": "fb82b475-a6ee-49fc-a690-51f4f55d7e7a"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "Products",
                                                              "contentEditable": true
                                                          },
                                                          "id": "b5154d0a-4bb7-4490-83ca-4347880896a8"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "contact us",
                                                              "contentEditable": true
                                                          },
                                                          "id": "7900e372-84a3-46de-b141-6ea0f86f2986"
                                                      }
                                                  ],
                                                  "id": "7dff70b6-1275-41ea-8b15-799ab78d102d"
                                              }
                                          ]
                                      }
                                  ],
                                  "id": "525990cc-c694-4857-b5a8-3a00ffade045"
                              }
                          ],
                          "id": "a1e183ce-183f-4299-88e8-88886cb5d081"
                      }
                  ],
                  "id": "0cd728af-c90d-4936-a2a9-8a510e5838f2"
              },
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
                  "id": "fdfbebcb-c4c6-4829-b987-ad01f78bb536"
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
                                  "id": "199f860f-2497-4f09-b635-62d6dc662661"
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
                                          "id": "a7bd2c3f-7ee8-4046-9bd6-1775bca09c2b"
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
                                          "id": "d2a08313-832f-4373-a110-3455e5612486"
                                      }
                                  ],
                                  "id": "0e4ff952-b0a8-49ea-8007-0c13d279e0b4"
                              }
                          ],
                          "id": "93c95c92-4d6c-46a8-a567-86cb0fa03a2f"
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
                                  "id": "dd98a42b-b73c-4890-ae6a-8afc71a49bec"
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
                                          "id": "d4f62077-a7e6-4618-8e54-d071f3c5f0c5"
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
                                          "id": "54e2f8c1-0011-452a-9a23-f7bdf05573ad"
                                      }
                                  ],
                                  "id": "bfa2454c-0ebd-46df-8d4c-6db69e74849f"
                              }
                          ],
                          "id": "5054d626-31de-4671-9e94-6a1d80911d90"
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
                                  "id": "c53d9817-494a-414b-b4f0-8ed1e6d62f0a"
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
                                          "id": "6a2a051f-893b-4436-8a91-08c55675ca60"
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
                                          "id": "63fb691b-76a7-46ef-aabd-e2dcfa176cab"
                                      }
                                  ],
                                  "id": "dc3fe158-4f5e-4cf5-8f89-9ce5e775653c"
                              }
                          ],
                          "id": "0670b8e5-1ebc-4fcb-8846-40934c3799f0"
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
                                  "id": "f01afe05-c276-4624-b943-e446063521f0"
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
                                          "id": "102070d5-a8b5-4e38-be0e-2ad60667a324"
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
                                          "id": "dc2898e2-36f6-4c14-a7a2-fb2a446bc176"
                                      }
                                  ],
                                  "id": "821dc1f0-7b7c-40e0-bac7-13f238c340e1"
                              }
                          ],
                          "id": "c657d2dc-5881-45c3-b517-b919b3f9c9f4"
                      }
                  ],
                  "id": "000eb837-ac73-4e17-a91c-3dde102b5751"
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
                  "id": "3db1ff69-b95a-4d1d-9504-5b5a7c093437"
              }
          ]
      },
      {
          "id": "ab1f661e-87fa-48eb-857c-a6e330681689",
          "name": "about",
          "filename": "about",
          "components": [
              {
                  "displayName": "nav header",
                  "name": "header",
                  "styleClasses": {},
                  "attributes": {
                      "dataset": {
                          "appendable": false
                      }
                  },
                  "children": [
                      {
                          "name": "nav",
                          "styleClasses": {
                              "navbar": "navbar navbar-expand-xs navbar-dark bg-dark"
                          },
                          "attributes": {
                              "dataset": {
                                  "appendable": false
                              }
                          },
                          "children": [
                              {
                                  "name": "div",
                                  "styleClasses": {
                                      "container": "container-fluid"
                                  },
                                  "attributes": {
                                      "dataset": {
                                          "appendable": false
                                      }
                                  },
                                  "children": [
                                      {
                                          "name": "a",
                                          "styleClasses": {
                                              "navbar": "navbar-brand"
                                          },
                                          "attributes": {
                                              "innerText": "Brand Name",
                                              "contentEditable": true
                                          },
                                          "id": "94b6212b-7a16-4c6a-80a4-ab773ec5441f"
                                      },
                                      {
                                          "name": "button",
                                          "styleClasses": {
                                              "navbar": "navbar-toggler"
                                          },
                                          "attributes": {
                                              "type": "button",
                                              "dataset": {
                                                  "appendable": false,
                                                  "bsToggle": "collapse",
                                                  "bsTarget": "#navbarNavAltMarkup"
                                              },
                                              "ariaControls": "navbarNavAltMarkup",
                                              "ariaExpanded": "false",
                                              "ariaLabel": "Toggle navigation",
                                              "innerHTML": "<span class=\"navbar-toggler-icon\"></span>"
                                          },
                                          "id": "6cde5a26-8be6-4a4f-863c-00d6d0b5e9d7"
                                      },
                                      {
                                          "name": "div",
                                          "id": "navbarNavAltMarkup",
                                          "styleClasses": {
                                              "navbar": "collapse navbar-collapse"
                                          },
                                          "children": [
                                              {
                                                  "name": "div",
                                                  "styleClasses": {
                                                      "navbar": "navbar-nav"
                                                  },
                                                  "children": [
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "About",
                                                              "contentEditable": true
                                                          },
                                                          "id": "97dba427-d10a-4869-8ac4-355bd970751e"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "Products",
                                                              "contentEditable": true
                                                          },
                                                          "id": "d394509f-b01a-4672-a6eb-a12fc1591cce"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "contact us",
                                                              "contentEditable": true
                                                          },
                                                          "id": "703048db-2af4-48ab-aeaa-b9958bb6e366"
                                                      }
                                                  ],
                                                  "id": "9d4bc07a-2dab-4c67-965d-da29b137281c"
                                              }
                                          ]
                                      }
                                  ],
                                  "id": "43df1b94-a958-4825-ab45-d95e969d8913"
                              }
                          ],
                          "id": "19d6e13e-1595-4f8d-8d4c-9b0ea015cd4e"
                      }
                  ],
                  "id": "b6f220eb-b984-4a28-b476-7024ade1d023"
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
                      "innerText": "Our Story  "
                  },
                  "id": "6caacba7-822d-4844-bad6-3d2689308a04"
              },
              {
                  "name": "img",
                  "editable": true,
                  "styleClasses": {
                      "display": "d-block",
                      "borderRadius": "rounded-0",
                      "horizontalAlign": "mx-auto",
                      "width": "w-50"
                  },
                  "attributes": {
                      "src": "https://picsum.photos/200/100"
                  },
                  "id": "54cdc98f-7de6-4272-abc6-a73b327d2ea8"
              },
              {
                  "name": "p",
                  "editable": true,
                  "styleClasses": {
                      "textAlign": "text-center",
                      "textColor": "text-dark",
                      "textSize": ".",
                      "margin": "mx-min"
                  },
                  "attributes": {
                      "contentEditable": true,
                      "innerText": "\"On the other hand, we denounce with , so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
                  },
                  "id": "6dd7b63d-5579-45ac-bcac-8f9861b73299"
              },
              {
                  "name": "img",
                  "editable": true,
                  "styleClasses": {
                      "display": "d-block",
                      "borderRadius": "rounded-0",
                      "horizontalAlign": "mx-auto",
                      "width": "w-75"
                  },
                  "attributes": {
                      "src": "https://picsum.photos/200/100"
                  },
                  "id": "393ad98d-9318-4735-b5ff-247b2b7597b4"
              },
              {
                  "name": "p",
                  "editable": true,
                  "styleClasses": {
                      "textAlign": "text-center",
                      "textColor": "text-dark",
                      "textSize": ".",
                      "margin": "mx-min"
                  },
                  "attributes": {
                      "contentEditable": true,
                      "innerText": "\"On the other hand, we denounce with , so blinded by desire, rinking from toil and pain. "
                  },
                  "id": "4e7d53d4-e57c-4a85-9716-f01b11ed7166"
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
                  "id": "1336d1b2-053a-4eea-bcb3-d1a846e9604b"
              }
          ]
      },
      {
          "id": "00e948ee-8d33-4ac5-9555-78dba74b2c35",
          "name": "contact",
          "filename": "contact",
          "components": [
              {
                  "displayName": "nav header",
                  "name": "header",
                  "styleClasses": {},
                  "attributes": {
                      "dataset": {
                          "appendable": false
                      }
                  },
                  "children": [
                      {
                          "name": "nav",
                          "styleClasses": {
                              "navbar": "navbar navbar-expand-xs navbar-dark bg-dark"
                          },
                          "attributes": {
                              "dataset": {
                                  "appendable": false
                              }
                          },
                          "children": [
                              {
                                  "name": "div",
                                  "styleClasses": {
                                      "container": "container-fluid"
                                  },
                                  "attributes": {
                                      "dataset": {
                                          "appendable": false
                                      }
                                  },
                                  "children": [
                                      {
                                          "name": "a",
                                          "styleClasses": {
                                              "navbar": "navbar-brand"
                                          },
                                          "attributes": {
                                              "innerText": "Brand Name",
                                              "contentEditable": true
                                          },
                                          "id": "939bc9c6-dbb8-4cd8-88ee-555e999a9094"
                                      },
                                      {
                                          "name": "button",
                                          "styleClasses": {
                                              "navbar": "navbar-toggler"
                                          },
                                          "attributes": {
                                              "type": "button",
                                              "dataset": {
                                                  "appendable": false,
                                                  "bsToggle": "collapse",
                                                  "bsTarget": "#navbarNavAltMarkup"
                                              },
                                              "ariaControls": "navbarNavAltMarkup",
                                              "ariaExpanded": "false",
                                              "ariaLabel": "Toggle navigation",
                                              "innerHTML": "<span class=\"navbar-toggler-icon\"></span>"
                                          },
                                          "id": "bb3ff447-69e9-44ac-918d-2cb94f4e9bc1"
                                      },
                                      {
                                          "name": "div",
                                          "id": "navbarNavAltMarkup",
                                          "styleClasses": {
                                              "navbar": "collapse navbar-collapse"
                                          },
                                          "children": [
                                              {
                                                  "name": "div",
                                                  "styleClasses": {
                                                      "navbar": "navbar-nav"
                                                  },
                                                  "children": [
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "About",
                                                              "contentEditable": true
                                                          },
                                                          "id": "fc51eeb1-4fdf-43f8-869f-4b55240f1e1c"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "Products",
                                                              "contentEditable": true
                                                          },
                                                          "id": "54ee3f8f-fafc-4257-b04e-e901fb7472a5"
                                                      },
                                                      {
                                                          "name": "a",
                                                          "styleClasses": {
                                                              "navbar": "nav-link"
                                                          },
                                                          "editable": true,
                                                          "attributes": {
                                                              "innerText": "contact us",
                                                              "contentEditable": true
                                                          },
                                                          "id": "b85bd5e9-eca7-48be-84ef-c23e8650c491"
                                                      }
                                                  ],
                                                  "id": "f05c7e6e-3b95-4d78-86c7-735b493714d9"
                                              }
                                          ]
                                      }
                                  ],
                                  "id": "6c64ae13-3bd2-4368-b0fe-a624b158fd83"
                              }
                          ],
                          "id": "266e6061-8b70-45ab-a4ab-69bacbc72099"
                      }
                  ],
                  "id": "e2c9f268-a07f-4eb8-aae5-0d54d55c5ea1"
              },
              {
                  "name": "p",
                  "editable": true,
                  "styleClasses": {
                      "textAlign": "text-center",
                      "textColor": "text-dark",
                      "textSize": ".",
                      "margin": "mx-min"
                  },
                  "attributes": {
                      "contentEditable": true,
                      "innerText": "We would love to hear from you. Enter your name, email and message below, and we'll contact you."
                  },
                  "id": "ca5cc315-8077-4e00-82fa-3ea678312886"
              },
              {
                  "displayName": "email",
                  "name": "div",
                  "editable": true,
                  "styleClasses": {
                      "margin": "mx-min mb-3 py-1",
                      "container": "container",
                      "textAlign": "text-start",
                      "form": "input-group"
                  },
                  "attributes": {
                      "dataset": {
                          "appendable": false
                      }
                  },
                  "children": [
                      {
                          "name": "span",
                          "editable": false,
                          "styleClasses": {
                              "form": "input-group-text"
                          },
                          "attributes": {
                              "innerHTML": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-envelope-at-fill\" viewBox=\"0 0 16 16\">\n                        <path d=\"M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z\"/>\n                        <path d=\"M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z\"/>\n                      </svg>",
                              "dataset": {
                                  "appendable": false
                              }
                          },
                          "id": "60b6a467-2450-4d18-8e84-4eac7ca4f2a7"
                      },
                      {
                          "name": "input",
                          "editable": false,
                          "styleClasses": {
                              "form": "form-control"
                          },
                          "attributes": {
                              "type": "email",
                              "placeholder": "john@email.com",
                              "dataset": {
                                  "appendable": false
                              }
                          },
                          "id": "15c30991-9890-442b-86bf-14c868d6fcbf"
                      }
                  ],
                  "id": "19c33ffa-e607-4ac1-bd7e-c7e4a5210ee1"
              },
              {
                  "name": "textarea",
                  "editable": true,
                  "styleClasses": {
                      "form": "form-control",
                      "margin": "mx-min"
                  },
                  "ayobaApiOptions": [
                      "msisdn",
                      "location",
                      "country"
                  ],
                  "ayobaApi": "",
                  "attributes": {
                      "placeholder": "enter text"
                  },
                  "id": "f99ac0a7-f292-4527-8dc7-2019e8c8d0b1"
              },
              {
                  "name": "hr",
                  "styleClasses": {
                      "margin": "mx-min my-2"
                  },
                  "id": "7144a077-a6d6-4b4b-9011-7691e4b43821"
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
                  "id": "eab77de9-d2ea-4484-98f7-5b2b94287bca"
              }
          ]
      }
  ]
}
