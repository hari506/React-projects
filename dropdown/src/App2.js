import React, { useState } from 'react'

const App2 = () => {
    let [namesList, setNamesList] = useState(['hari', 'bhanu', 'ravi']);
    const handleAddListItem = (e) => {
        e.preventDefault();
        let items = [...namesList];
        items.push(document.getElementById('new_list_item').value)
        setNamesList([...items])
    }

    return (
        <div>
            <input type='text' id="new_list_item"/>
            <button onClick={handleAddListItem}> Add </button>

            <ul>
                {
                    namesList.map((item, index) => <li key={index}> {item} </li>)
                }
            </ul>

            
        </div>
    )
}

export default App2
