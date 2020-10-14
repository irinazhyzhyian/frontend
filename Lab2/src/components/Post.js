import React from 'react'
import '../style.css'

function Post(props) {

    return (
        <div className="post">
        <input type="button" className="deleteBtn" value="×" onClick={props.onRemoveClick}></input>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <h5>{props.date}</h5>
    </div>
    );
}

export default Post;