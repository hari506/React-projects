import reactDom from 'react-dom';
import { Backdrop } from './Loader';
const Modal = ({handleModal1, children }) => {

    return (
        reactDom.createPortal(
            <>
               <Backdrop onClose={handleModal1}/>
               <div className="modal">
                     <button type="close" onClick={handleModal1}>X</button>
                    <div className="content"> {children}</div>
                </div>
            </>,
            document.getElementById('modal-root')
        )
    );

}

export default Modal;