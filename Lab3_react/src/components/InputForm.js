import React, {isValidElem, useState} from 'react';
import '../style.css'

function InputForm(props) {

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const date = new Date();

    const isValidElem = () => {
        return text.length > 1 && title.length > 1;
    }

    const onTextChange = (event) => {
        const newValue = event.target.value;
        setText(()=>newValue);
    }

    const onInputChange = (event) => {
        const newValue = event.target.value;
        setTitle(()=>newValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit(title, text);
        send();
    }

    const send = async () => {    
        alert('sent to server');
         const response = await fetch('https://god.com/api/posts', {
             method: 'POST',
             headers: {'Content-Type': 'application/json;charset=utf-8'},
             body: JSON.stringify({
                 title: title,
                 text: text,
                 date: date
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
 

    return (
        <div className="inputForm">
            <input
                type="text"
                value={title}
                onChange={onInputChange}
                placeholder="Title"
                required={true}
            />
            <textarea onChange={onTextChange}  required={true} defaultValue={text} placeholder="Text">
            </textarea>

            <button type='submit' className='add-btn' disabled={!isValidElem()} onClick={onSubmit}>ADD POST</button>
        </div>

    );
}

export default InputForm;