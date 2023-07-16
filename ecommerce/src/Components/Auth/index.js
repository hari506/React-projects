import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader"
import { useDispatch, useSelector } from "react-redux";
import { actionForSignup, loginACtion } from "../../actions/auth"

const Authentication = () => {
    let location = useLocation();
    let [formData, setFromData] = useState({
        email: "",
        password: ""
    });
    let dispatch = useDispatch()
    let navigater = useNavigate()

    let [loader, setLoader] = useState(false);

    const handleInput = (e) => {
        setFromData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        setLoader(true)
        e.preventDefault();
        if (location.pathname === "/login") {
            handleLoginAction()
        } else if (location.pathname === "/signup") {
            console.log("index31");
            handleSignupAction()
        }

        setLoader(false)
    }

    const handleSignupAction = () => {
        dispatch(actionForSignup(formData, data => {
            if (data.error) {
                alert(data.response.data.error.message)
            } else {
                navigater("/")
            }
        }))
    }

    const handleLoginAction = () => {
        dispatch(loginACtion(formData, data => {
            if (data.error) {
                alert(data.response.data.error.message)
            } else {
                navigater("/")
            }
        }))
    }

    return (
        <>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink to={"/signup"}><h3>Signup</h3></NavLink>
                    </div>
                    <form autoComplete={"off"} onSubmit={handleFormSubmit}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {location.pathname === "/login" ? "Login" : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {loader && <Loader />}
        </>
    )
}

export default Authentication;