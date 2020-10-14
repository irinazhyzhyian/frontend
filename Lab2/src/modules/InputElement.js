const wapperClassName = 'inputElement'; 

export default class InputElement {
    constructor(isValidFunc) {
        
        this.wrapper = document.createElement('div');
        this.wrapper.className = wapperClassName;

        this.input = document.createElement('input');
        this.input.type = 'text';

        this.isValid = false;
        this.input.onchange = () => this.isValid = isValidFunc(this.value());
        
        this.wrapper.append(this.input);
    }

    value() {
        return this.input.value;
    }

    render(parentNode) {
        return parentNode.append(this.wrapper);
    }
}