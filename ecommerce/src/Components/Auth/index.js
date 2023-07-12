import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Authentication = () => {
    let location = useLocation();
    let [formData, setFromData] = useState({})

    const handleInput = (e) => {

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="auth-container">
            <div className="auth-container--box">
                <div className="tab-selector">
                    <NavLink to={"/login"}><h3>Login</h3></NavLink>
                    <NavLink to={"/signup"}><h3>Signup</h3></NavLink>
                </div>
                <form autoComplete={"off"}>
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
                        <button className="login-btn" onClick={handleFormSubmit}>
                            {location.pathname === "/login" ? "Login" : "Signup"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authentication;