import ELEMENTS from "./components.js";
import eCommerce from "./eCommerce/eCommerce.js";


const { Main } = eCommerce;
const { Header, EmailForm, RadioForm2, RadioForm, TextForm, RadioForm3, PhoneForm, TextAreaForm, Image, Button } = ELEMENTS;


const TEMPELEMENTS = {
    Template1: {
        icon: `<p>Survey Template</p>`,

        elements: [EmailForm, RadioForm, RadioForm2, TextForm, RadioForm3, PhoneForm, TextAreaForm, Image, Button],
    },
    Template2: {
        icon: `<p>eCommerce Template</p>`,
        elements: [Main],
    }
}

export default TEMPELEMENTS
