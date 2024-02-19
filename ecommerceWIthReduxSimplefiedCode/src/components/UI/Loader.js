import ReactDOM from "react-dom";

export const Backdrop = (props) => {
    const handleClick = (event) => {
        event.stopPropagation();
        if (props.onClose) {
            props.onClose(event);
        }
    }

    return (
        <div onClick={handleClick} className="loader-overlay"></div>
    )
}


const Loader = () => {

    return (
        ReactDOM.createPortal(
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>,
            document.getElementById('loader-root')
        )
    )
}

export default Loader;