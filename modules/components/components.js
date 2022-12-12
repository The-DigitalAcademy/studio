import { generateUuid } from "../utils.js"
import Elements from "./Elements.js"

export default
    {
        header: JSON.parse(JSON.stringify(Elements.header)),
        footer: JSON.parse(JSON.stringify(Elements.footer)),
        emailForm: {
            name: 'form',
            editable: true,
            styleClasses: {
                margin: 'mb-3',
                container: 'container',
                textAlign: 'text-start',
            },
            children: [
                JSON.parse(JSON.stringify(Elements.label)),
                JSON.parse(JSON.stringify(Elements.emailInput))
            ]
        },
        phoneForm: {
            name: 'form',
            styleClasses: {
                margin: 'mb-3',
                container: 'container'
            },
            children: [
                JSON.parse(JSON.stringify(Elements.label)),
                JSON.parse(JSON.stringify(Elements.phoneInput))
            ]
        },
        textareaForm: {
            name: 'form',
            styleClasses:{
                margin: 'mb-3',
                container: 'container'
            },
            children: [
                JSON.parse(JSON.stringify(Elements.label)),
                JSON.parse(JSON.stringify(Elements.textarea))
            ]
        },
        p: JSON.parse(JSON.stringify(Elements.p)),
        radioForm: {
            name: 'form',
            editable: true,
            styleClasses: {
                margin: 'mb-3',
                container: 'container'
            },
            children: [
                JSON.parse(JSON.stringify(Elements.label)),
                JSON.parse(JSON.stringify(Elements.radioInput)),
                JSON.parse(JSON.stringify(Elements.radioInput))
            ]
        },
        img: JSON.parse(JSON.stringify(Elements.img))


    }