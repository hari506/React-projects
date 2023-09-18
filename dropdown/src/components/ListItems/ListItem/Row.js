import React from 'react'

const Row = ({title, isHilighted}) => {
    console.log('isHilighted', isHilighted, title)
    let color = isHilighted === true ? 'red' : 'white';
    return (
        <div style={{backgroundColor: color}}>
            {title}
        </div>
    )
}

export default Row;

