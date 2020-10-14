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
    }

    return (
       <div className='center'>
        <div className="inputForm">
            <input
                type="text"
                value={title}
                onChange={onInputChange}
                placeholder="Title"
                required={true}
            />
            <textarea onChange={onTextChange}  required={true}>
                {text}
            </textarea>

            <button type='submit' disabled={!isValidElem()} onClick={onSubmit}>ADD</button>
        </div>
        </div>

    );
}

export default InputForm;