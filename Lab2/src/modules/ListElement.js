export default class ListElement {


    constructor(wrapperClassName,title, text, date) {
        

        this.wrapper = document.createElement('div');
        this.wrapper.className = wrapperClassName;

        this.innerWrapper = document.createElement('div');
        this.innerWrapper.className = 'inner';


        this.h3 = document.createElement('h3');
        this.h3.textContent = title;

        this.p = document.createElement('p');
        this.p.textContent = text;

        this.pDate = document.createElement('p');
        this.pDate.textContent = date;
       
        
        this.itemsWrapper = document.createElement('div');
        this.itemsWrapper.className = 'itemsWrapper'; 
        
        this.innerWrapper.append(this.h3, this.p, this.pDate, this.itemsWrapper);
       

        this.items = [];

        this.wrapper.append(this.innerWrapper);
    }

    render(parentNode) {
        parentNode.appendChild(this.wrapper);
    }

    values() {
        return this.items.map(item => item.value());
    }

}