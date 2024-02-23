import React from 'react';

function NotesItems(props) {
    
    function handleClick() {
        props.onDelete(props.keyArray);
    }

    return (
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><span>DELETE</span></button>
    </div>
    );
}

export default NotesItems;