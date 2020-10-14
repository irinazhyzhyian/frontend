const wapperClassName = 'textareaElement'; 

export default class TextAreaElement {
    constructor(isValidFunc) {
        
        this.wrapper = document.createElement('div');
        this.wrapper.className = wapperClassName;

        this.textarea = document.createElement('textarea');

        this.isValid = false;
        this.textarea.onchange = () => this.isValid = isValidFunc(this.value());
        
        this.wrapper.append(this.textarea);
    }

    value() {
        return this.textarea.value;
    }

    render(parentNode) {
        return parentNode.append(this.wrapper);
    }
}