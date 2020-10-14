import InputElement from './InputElement.js';
import TextAreaElement from './TextAreaElement.js';
import PostsList from './PostsList.js';

export default class CreateForm {
    constructor(wrapperClassName) {
        this._date = new Date;

        this.wrapper = document.createElement('div');
        this.wrapper.className = wrapperClassName;

        this.stringLength = 1;
        this.checkString = value => value.length > this.stringLength;
        this.title = new InputElement(this.checkString);
        this.text = new TextAreaElement(this.checkString);
        this.posts = new PostsList( 'itemsWrapper');

        this.submit = document.createElement('button');
        this.submit.textContent = 'submit';
        this.submit.onclick = async () => this.isValid() ? await this.sendData() : this.printErrors();

        this.errorsWrapper = document.createElement('ul');
        this.errorsWrapper.className = 'errorsWrapper';

        this.title.render(this.wrapper);
        this.text.render(this.wrapper);
        this.posts.render(this.wrapper);
        this.wrapper.append(this.submit, this.errorsWrapper);

        this.render = parentNode => parentNode.appendChild(this.wrapper);
    }

    async sendData() {
        alert('Sent to server');
        this.errorsWrapper.hidden = true;
        const response = await fetch('https://god.com/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                title: this.title.value(),
                text: this.text.value(),
                date: this._data
            })
        });
        
        if(response.ok) {
            alert('OK');
            console.log(await response.json());
        }
        else {
            alert(response.status);
        }
    }

    isValid() {
        this.errorsMessages = [];
        if(!this.title.isValid) this.errorsMessages.push(`Name length should be more than ${this.stringLength}`);
        if(!this.text.isValid) this.errorsMessages.push(`Surname length should be more than ${this.stringLength}`);

        return this.errorsMessages.length === 0;
    }

    printErrors() {
        this.errorsWrapper.hidden = false;
        this.errorsWrapper.innerHTML = '';
        this.errorsMessages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            this.errorsWrapper.appendChild(li);
        });
    }
}