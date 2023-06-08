import React, { useState, useEffect } from 'react';
import "./TodosWithLocalStorage.css";

const TodosWithLocalStorage = () => {
    const [items, setItems] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const submitButton = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            setItems([...items, inputText]);
            setInputText('');
        }
    };

    const deleteButton = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <div className='container'>

            <h1 className='title'>You have {items.length} Todos</h1>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <p className='entry'>{item}</p>
                        <button className='btn' onClick={() => deleteButton(index)}>X</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={submitButton}>
                <input placeholder='Enter item' className='input'
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className='submit' type="submit">Submit</button>
            </form>

        </div>
    );
};

export default TodosWithLocalStorage;
