import React from 'react'
import '../style.css'

function Post(props) {

    return (
        <div className="post">
        <div className='center content'>
        <input type="button" className="deleteBtn" value="×" onClick={props.onRemoveClick}></input>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <h5 className="side">{props.date}</h5>
        </div>
    </div>
    );
}

export default Post;