import Component from "./componentClass";

class headerComponent extends Component {

    #editingTools
    #AyobaApiOptions
    #icon
    #content

    constructor() {
        super();
        this.#icon;
        this.#editingTools = ['textAlign', 'bgColor', 'textColor', 'border']

    }
}