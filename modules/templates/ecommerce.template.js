import bootstrapComponents from "../components/bootstrapComponents.js";
import components from "../components/components.js";
import Elements from "../components/Elements.js";
import { generateUuid } from "../utils.js";

export default {
  "id": "6732c6d9-f83f-42a6-bbf7-2895f7cd3ac8",
  "name": "ecommerce",
  "pages": [
    {
      "id": "0bd2a91c-9291-43b5-9a80-0c4585bd66a3",
      "name": "Home",
      "filename": "index.html",
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
          "id": "23408c33-6c8d-40a5-88fb-50ad18abb4f4"
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
          "id": "e4b27da3-e737-40a1-aaf1-6eeeab754fd7"
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
          "id": "253f4c3c-bf0f-458a-a463-b13e26bc0498"
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
                  "id": "b807648d-c1c9-41e0-a497-4f93a671656a"
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
                      "id": "119500ca-17cb-49d4-81ab-639f808d55d1"
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
                      "id": "a7371406-d00d-43f2-ac69-59d7caf0955a"
                    }
                  ],
                  "id": "76f354fa-5b72-4574-98d4-ab4749a0e76f"
                }
              ],
              "id": "25a78f85-b256-45c2-9419-6a73ff36cdfd"
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
                  "id": "d6ad11d3-e113-41bb-8600-8a3fd4e652bf"
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
                      "id": "5b232b43-91d0-4c6c-ae3f-56cea6c927cf"
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
                      "id": "67855b46-50a7-4a7a-8604-5c0fe05889ab"
                    }
                  ],
                  "id": "249e664b-e642-44bd-a4e9-82386912840d"
                }
              ],
              "id": "666c7300-2fc1-4951-a399-5e2ae4a6c5b3"
            }
          ],
          "id": "226e69b3-6a30-4c4e-9b24-144a36184dc6"
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
          "id": "cb8416b4-f7ff-4981-9577-a3a01dc2eead"
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
                  "id": "a7dfe5df-7d7e-47b7-bca0-fad5bf0fd1e7"
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
                      "id": "b7aa61e2-9822-47e3-8f08-3e5aae02f63e"
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
                      "id": "3be78320-10d9-467d-ab85-71e906eabc26"
                    }
                  ],
                  "id": "3fb5f713-85e4-4d2f-b62d-15a1a466b62b"
                }
              ],
              "id": "58983dfb-438d-47d7-ba49-b9230923fb05"
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
                  "id": "854ebe95-3165-4f23-aa07-1152b5b39fc6"
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
                      "id": "4cf21c6b-1a78-42ca-9873-b5fe144b44a8"
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
                      "id": "b09551f0-1d21-42e2-a160-401537266232"
                    }
                  ],
                  "id": "04fafe3b-309f-4542-8fce-05a9ae50ca72"
                }
              ],
              "id": "b734df1f-7779-4cc8-ab43-2ef2f2cb0450"
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
                  "id": "adb99f0e-374a-457b-9659-aa006ed01625"
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
                      "id": "216b96c6-3b8b-4995-99f8-ba7820c54e0b"
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
                      "id": "823a29cc-3f32-4a84-a514-b7ce65c73115"
                    }
                  ],
                  "id": "9e90c8f7-19ba-45a1-b5a9-52c78e391cc8"
                }
              ],
              "id": "9eac1908-5064-4451-9f32-bec2c8ad295a"
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
                  "id": "16eb1697-e589-4cab-9422-6871629ff558"
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
                      "id": "35bfd3c8-06c1-47f8-bd3e-36080f04d226"
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
                      "id": "4c634c03-2b75-4aed-b552-0877c29606cc"
                    }
                  ],
                  "id": "f0beea4b-418d-4f2c-bbbd-a52aed52ea77"
                }
              ],
              "id": "d1e4ae1d-3ef2-4f2a-af36-649da2e070b1"
            }
          ],
          "id": "6ffa47c9-169d-46a7-95f3-bb05903db411"
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
          "id": "0e8f9754-6df5-4fd9-a7cf-8bbad4640c01"
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
          "id": "ad4306b7-e34e-4433-a567-1f2434cd2c8e"
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
          "id": "4e86d756-bf40-4f8d-8e0a-33014295b172"
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
          "id": "29c9c3e4-f25f-44b7-b1f8-eac0b0994293"
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
          "id": "db255713-6685-46f6-ad9c-872a24c79c1e"
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
          "id": "6ec2f8cb-97e3-42da-b796-70f00330dbf8"
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
          "id": "66e58147-3ea7-4e02-a441-aefe484c30e9"
        }
      ]
    }
  ]
}
