import { useEffect, useState } from "react";
import Modal from "./UI/Model";

const AnalyseWin = (props) => {
    let [showModal, setShowModal] = useState(false);
    let [winner, setWinner] = useState('');
    let winningArr = [
        [1, 2, 3],
        [4, 5, 6],
        [3, 6, 9],
        [7, 8, 9],
        [1, 4, 7],
        [1, 5, 9],
        [3, 5, 7]
    ];

    let user1 = props.result.filter((res, index) => {
        return index % 2 === 0;
    })

    let user2 = props.result.filter((res, index) => {
        return index % 2 !== 0
    })

    const checkWinning = async () => {
        console.log(user1, user2);
        let win1 = await checkIsUserWinner(user1)
        let win2 = await checkIsUserWinner(user2)
        if (win1 || win2) {
            setWinner(win1 === true ? "user1" : "user2")
            setShowModal(true)
        }
    }

    async function checkIsUserWinner(user) {

        let isWin = false;
        for (let i = 0; i <= winningArr.length - 1; i++) {
            let arr = winningArr[i];
            console.log("the compare array is ", arr)
            isWin = arr.every(ele => {
                return user.find(val => val.value === ele)
            })
            if (isWin === true) {
                break;
            }
        }

        return isWin;
    }

    useEffect(() => {
        checkWinning();
        if (props.result.length === 9 && showModal === false) {
            setWinner(" the game is draw, Nice Game Both Of You!");
            setShowModal(true)
        }
    }, [props.result])



    const closeModal = () => {
        setShowModal(false);
        window.location.reload()
    }

    return (
        <>
            {
                showModal && <Modal handleModal1={closeModal} className="card">
                    <div className="text-right cross"> <i className="fa fa-times"></i> </div>
                    <div className="card-body text-center"> <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" alt="card" />
                        <h4>CONGRATULATIONS! ({winner})</h4>
                        <p>You Won the Game!, Keep It up</p> <button className="btn btn-out btn-square continue" onClick={closeModal}>CONTINUE</button>
                    </div>
                </Modal>
            }

        </>
    )
}

export default AnalyseWin
