const Form = (props) => {
    return (
        <form onSubmit={props.onFormSubmit}>
            <input type="text" value={props.item.title} name={"title"} onChange={props.onChangeInput} />
            <input type="text" value={props.item.price} name={"price"} onChange={props.onChangeInput} />
            <input type="text" value={props.item.discountPrice} name={"discountPrice"} onChange={props.onChangeInput} />
            <input type="text" value={props.item.thumbNail} name={"thumbNail"} onChange={props.onChangeInput} />
            <button>submit</button>
        </form>
    );
}

export default Form;