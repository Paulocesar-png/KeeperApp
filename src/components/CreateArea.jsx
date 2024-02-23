import React, { useState } from 'react';

function CreateArea(props) {

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInputText(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(inputText);
        setInputText({
          title: "",
          content: ""
        });
        event.preventDefault();
      }

    return (
        <div>
            <form className="create-note">
                <input onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={inputText.title}
                />
                <textarea onChange={handleChange}
                    name="content"
                    type="text"
                    placeholder="Take a note"
                    value={inputText.content} rows="3"
                />
                <button onClick={submitNote}><span>Add</span></button>
            </form>

        </div>

    );
}


export default CreateArea;