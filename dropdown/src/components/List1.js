import React, { Children, cloneElement, useState } from 'react'

const List1 = ({ children }) => {
    let [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div>
            {
                Children.map(children, (child, index) => {
                    console.log("index", index, selectedIndex)
                   return cloneElement(child, {
                        isHilighted: index === selectedIndex
                    })
                })
            }
            <button onClick={() => setSelectedIndex(i => (i + 1) % Children.count(children))}> Next </button>
        </div>
    )
}

export default List1
