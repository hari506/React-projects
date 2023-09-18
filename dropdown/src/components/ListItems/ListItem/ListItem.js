import React, { useEffect, useState } from 'react'

const ListItem = (props) => {
    let [showBtn, setShowBtn] = useState(false);
    const handleCheckboxOnChange = (event) => {
        if(event.currentTarget.checked){
            setShowBtn(true)
        }else{
            setShowBtn(false)
        }
    }

    useEffect(()=>{
        return () => {
            setShowBtn(false)
        }
    }, [])
    return (
        <tr>
            <td> <input type='checkbox' onChange={handleCheckboxOnChange}/></td>
            <td>{props.item}</td>
            <td>
                {
                    showBtn === true ?
                        <button onClick={() => props.deleteItem(props.index)}> Delete Item</button>
                        :
                        ''
                }

            </td>
        </tr>
    )
}

export default ListItem
