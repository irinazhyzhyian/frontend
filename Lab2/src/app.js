import CreateForm from './modules/Form.js';
import PostsList from './modules/PostsList.js';
import InputElement from './modules/InputElement.js';
import TextAreaElement from './modules/TextAreaElement.js';

const  form = new CreateForm('Form', 'formWrapper');


const node = document.querySelector('#main');
form.render(node);