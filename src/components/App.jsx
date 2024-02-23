import React, { useState } from 'react';
import CreateArea from './CreateArea';
import Footer from './Footer';
import Header from './Header';
import NotesItems from './NoteItems';

function App() {
    const [items, setItems] = useState([]);


    function addItem(inputText) {
        setItems(prevValues => {
            return [
                ...prevValues,
                inputText
            ]
        })
    }

    function deleteItem(keyArray) {
        setItems((prevValues) => {
           return prevValues.filter((item, index)=>{
                return keyArray !== index
            })
        })
    }

    return <div>
        <Header />
        <CreateArea
            onAdd={addItem}
        />
        {items.map((item, index) => {
            return <NotesItems
                key={index}
                keyArray={index}
                title={item.title}
                content={item.content}
                onDelete={deleteItem}
            />
        })}
        <Footer />
    </div>
}

export default App;