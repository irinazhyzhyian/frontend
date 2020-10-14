import Post from './Post.js';
import PostCreater from './PostCreater.js';
import ListElement from './ListElement.js';

const addressItemsClass = 'postItem';

export default class PostsList extends ListElement{
    constructor(wrapperClassName,title, text, data) {
        super(wrapperClassName, title, text, data);        
        this.postCreater = new PostCreater('postCreater', value => { 
            const post = new Post(post => this.items.pop(post), title, text, data);
            post.render(this.itemsWrapper);
            this.items.push(post);
        }, title => title.length>1);

        this.postCreater.render(this.wrapper);
    }
}