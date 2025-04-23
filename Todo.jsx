import React, { useState } from 'react';

export default function Todo() {
    const [state, setState] = useState('');
    const [arr, setArr] = useState([]);

    function addText(e) {
        e.preventDefault();
        setState(e.target.value);
    }

    function add(e) {
        e.preventDefault();
        if (state.trim() !== '') {
            setArr([...arr, state]);
            setState('');
        }
    }

    function editData(index, newText) {
        const newArr = [...arr];
        newArr[index] = newText;
        setArr(newArr);
    }

    function deleteData(index) {
        const newArr = [...arr];
        newArr.splice(index, 1);
        setArr(newArr);
    }


    return (
        <div>
            <h1>Todo List</h1>

            <form onSubmit={add}>
                <input type="text" value={state} placeholder="Enter todo" onChange={addText} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {arr.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => editData(index, prompt('Enter new text:', todo))}>Edit</button>
                        <button onClick={() => deleteData(index)}>Delete</button>
                    </li>
                ))}

            </ul>

        </div>
    );
}
