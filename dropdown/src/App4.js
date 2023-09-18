import React, { useState } from 'react'

const App4 = () => {
    let [textColor, setTextColor] = useState('red');
    const handleBtnTextColor = () => {
        console.log(textColor);
        setTextColor('white')
    }

    return (
        <div>
            <Button1 changleTextColor={handleBtnTextColor} textColor={textColor} />
            <Button2 changleTextColor={handleBtnTextColor} textColor={textColor} />
        </div>
    )
}


const Button1 = (props) => {
    return(
        <button style={{color: props.textColor}} onClick={props.changleTextColor}> Button1 </button>
    )
}


const Button2 = (props) => {
    return (
        <button style={{color: props.textColor}} onClick={props.changleTextColor}> Button2 </button>
    )

}

export default App4
