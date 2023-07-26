import React, { useEffect, useState } from 'react'
import User from './User/User';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../actions';

const Users = () => {
    let users = useSelector(state => state.users)
    console.log(users)
    let location = useLocation();
    let searchVal = new URLSearchParams(location.search).get('users');
    let [loader, setLoader] = useState(false);
    let dispatch = useDispatch();

    
    useEffect(() => {
        setLoader(true)
        dispatch(setUserDetails(searchVal, (data) => {
            setLoader(false)
            console.log(data)
           if(data.error){
            alert("some error occured, please try again after some time")
           }
        }))
       
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
                                users?.map((user) => {
                                    return user && <User userObj={user} key={`user-${user.id}`} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {
                loader && <Loader />
            }
        </div>
    )
}

export default Users
