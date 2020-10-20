import {handleDelete} from './app';

export default class Post {
    constructor(title, text, date){
        this.id = Math.random();
        this.title = title;
        this.text = text;
        this.date = date;
    }

    show(){
        const main = document.getElementById('app');
        const mainDiv = document.createElement('div');
        const titleHeader = document.createElement('h5');
        const textArea = document.createElement('p');
        const dateLine = document.createElement('h6');

        mainDiv.id = this.id;
        mainDiv.className = 'post';
        dateLine.className = 'dateLine';

        titleHeader.innerHTML = this.title;
        textArea.innerHTML = this.text;
        dateLine.innerHTML = this.date;

        const removeButton = document.createElement('button');
        removeButton.className = 'deleteBtn';
        removeButton.innerHTML = 'x';
        removeButton.onclick = () => handleDelete(this.id);

        mainDiv.appendChild(removeButton);
        mainDiv.appendChild(titleHeader);
        mainDiv.appendChild(textArea);
        mainDiv.appendChild(dateLine);
        main.appendChild(mainDiv);
    }

    send(){ 
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.id,
                title: this.title,
                text: this.text,
                date: this.date
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}