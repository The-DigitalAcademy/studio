import ELEMENTS from "./components.js";

const { EmailForm, RadioForm2, RadioForm, TextForm, RadioForm3, PhoneForm, TextAreaForm, Image, Button } = ELEMENTS;

const TEMPELEMENTS = {
    Template1: {
        icon: `<p>Survey Template</p>`,
        elements: [EmailForm, RadioForm, RadioForm2, TextForm, RadioForm3, PhoneForm, TextAreaForm, Image, Button],
    }
}

export default TEMPELEMENTS
