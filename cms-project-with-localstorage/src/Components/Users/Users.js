import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from './User/User';
import { useLocation } from 'react-router-dom';
import { setUserDetails } from '../../actions';

const Users = () => {

    let usersObj = useSelector(state => state.users);
    let dispath = useDispatch();
    let location = useLocation();
    let searchVal = new URLSearchParams(location.search).get('users')
    useEffect(() => {
        let localUsers = JSON.parse(localStorage.getItem('users') || "[]");
        localUsers = localUsers ? localUsers : [];
        if (searchVal) {
            localUsers = localUsers?.filter(user => user.fname.search(searchVal) !== - 1 ? true : false)
        }

        dispath(setUserDetails(localUsers))
    }, [searchVal])

    return (
        <div className="users-container">
            <div className="row">
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> Phone </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersObj?.map((user, index) => {
                                    return <User userObj={user} key={`user-${index}`} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users
