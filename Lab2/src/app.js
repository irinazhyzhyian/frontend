import Post from './Post';

let postList = [];

window.onload = () => {
    document.getElementById('submitBtn').onclick = handleSubmit;
    document.getElementById('title').oninput = handleChange;
    document.getElementById('text').oninput = handleChange;
}

function handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const text = document.getElementById('text').value;
    const date = new Date().toLocaleDateString();

    const post = new Post(title, text, date);
    postList.push(post);
    post.show();
    post.send();
}

function isValid(title, text) {
    return text.length == 0 || title.length == 0;
}

function handleChange() {
    const text = document.getElementById('text').value;
    const title = document.getElementById('title').value;

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = isValid(text, title);
}

export function handleDelete(id) {
    const delDiv = document.getElementById(id);
    postList = postList.filter(p => p.id !== id);
    delDiv.remove();
}

