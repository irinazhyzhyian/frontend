export default class Post
{
    constructor(onClickHandler, title, text, date, wrapperClassName) {
        

        //Creating text element
        this.h3 = document.createElement('h3');
        this.h3.textContent = title;

        this.p = document.createElement('p');
        this.p.textContent = text;

        this.pDate = document.createElement('p');
        this.pDate.textContent = date;
        
        //Creating delete button
        this.button = document.createElement('button');
        this.button.textContent = "X";
        

        //Wrapping elements 
        this.wrapper = document.createElement('div');
        this.wrapper.append(this.h3, this.p, this.pDate, this.button);
        this.wrapper.className = wrapperClassName;
        
        this.button.onclick = () => {
            onClickHandler(this);
            this.wrapper.remove();
        }

        this.render = parentNode => parentNode.appendChild(this.wrapper);

        this.value = () => this.h3.textContent;
    }    
}