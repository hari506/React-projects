import React, { useState } from 'react'
import Modal from '../../popin/popin'
import UserForm from './UserForm'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserDetails } from '../../../actions'

const User = (props) => {
    let [showModal, setShowModal] = useState(false)
    const dispath = useDispatch()

    const onClose = () => {
        setShowModal(previousVal => !previousVal)
    }

    const handleUserDelete = e => {
        dispath(deleteUserDetails(props.userObj.id))
    }

    const handleUserEdit = e => {
        e.preventDefault();
        setShowModal(true);
    }

    return (
        <>

            {
                props.userObj &&
                <tr key={`user-${props.userObj.id}`}>
                    <td>
                        {props.userObj?.fname}
                    </td>
                    <td>
                        {props.userObj?.lname}
                    </td>
                    <td>
                        {props.userObj?.phone}
                    </td>
                    <td>
                        <Link onClick={handleUserEdit}> Edit </Link>
                    </td>
                    <td>
                        <Link onClick={handleUserDelete}> Delete </Link>
                    </td>
                </tr>
            }
            {
                showModal &&
                <Modal onClose={onClose}>
                    <div>
                        <UserForm
                            userDetails={props.userObj}
                            isEdit={true}
                            onClose={onClose}
                        />
                    </div>
                </Modal>
            }

        </>
    )
}

export default User
