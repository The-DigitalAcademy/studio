import ELEMENTS from "./components.js";
import eCommerce from "./eCommerce/eCommerce.js";

const { Header, EmailForm, RadioForm2, RadioForm, TextForm, RadioForm3, PhoneForm, TextAreaForm, Image, Button } = ELEMENTS;

const TEMPELEMENTS = {
    Template1: {
        icon: `<p>Survey Template</p>`,
        elements: [Header, EmailForm, RadioForm, RadioForm2, TextForm, RadioForm3, PhoneForm, TextAreaForm, Image, Button],
    }
}

export default TEMPELEMENTS
