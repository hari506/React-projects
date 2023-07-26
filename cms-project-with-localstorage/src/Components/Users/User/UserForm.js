import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction, editUserAction } from "../../../actions";

const UserForm = (props) => {
    let [userDetails, setUserDetails] = useState(props.userDetails || {
        fname: '',
        lname: '',
        phone: ''
    });

    let dispatch = useDispatch();

    const handleInput = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (props.isEdit) {
            dispatch(editUserAction(userDetails))
        } else {
            dispatch(addUserAction(userDetails))
        }

        setUserDetails({
            fname: '',
            lname: '',
            phone: ''
        })
        props.onClose()
    }


    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <form className='user-form' onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="col-sm-12">
                                <input type='text' name="fname" value={userDetails.fname} onChange={handleInput} placeholder='enter first name' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input type='text' name="lname" value={userDetails.lname} onChange={handleInput} placeholder='enter last name' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input type='number' name="phone" value={userDetails.phone} onChange={handleInput} placeholder='enter mobile number' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default UserForm
