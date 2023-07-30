import React, { useEffect, useState } from 'react'
import AnalyseWin from './AnalyseWin'

const Dashboard = () => {
    const [clickVal, setClickVal] = useState([])
    const [checkWinning, setCheckWinning] = useState(false)

    useEffect(() => {
        if (clickVal.length >= 5) {
            setCheckWinning(true);
        }
    }, [clickVal])

    const handleClick = (val) => {
        let btn = document.getElementById("btn_" + val);
        btn.disabled = true;
        let lastEle = clickVal ? clickVal[clickVal.length - 1] : {
            color: 'red'
        };

        let lastEleColor = lastEle ? lastEle.color : 'red';
        let newColor = lastEleColor === 'red' ? 'black' : 'red';
        btn.style.backgroundColor = newColor;
        setClickVal([
            ...clickVal,
            {
                value: val,
                color: newColor
            }
        ]);
    }
    return (
        <div className="container">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className='title'> WELCOME TO TIC TOC TOE</div>
                        <div> The Player You Start the game, the box color of the player is Black,and 
                            the second player box color is Red !
                        </div><br />
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col sm-4">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>
                                        <button id="btn_1" onClick={() => handleClick(1)}></button>
                                    </td>
                                    <td>
                                        <button id="btn_2" onClick={() => handleClick(2)}></button>
                                    </td>
                                    <td>
                                        <button id="btn_3" onClick={() => handleClick(3)}></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button id="btn_4" onClick={() => handleClick(4)}></button>
                                    </td>
                                    <td>
                                        <button id="btn_5" onClick={() => handleClick(5)}></button>
                                    </td>
                                    <td>
                                        <button id="btn_6" onClick={() => handleClick(6)}></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button id="btn_7" onClick={() => handleClick(7)}></button>
                                    </td>
                                    <td>
                                        <button id="btn_8" onClick={() => handleClick(8)}></button>
                                    </td>
                                    <td>
                                        <button id="btn_9" onClick={() => handleClick(9)}></button>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
            {
                checkWinning && <AnalyseWin result={clickVal} />
            }
        </div>
    )
}

export default Dashboard
