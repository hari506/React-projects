import { useState, Fragment } from "react";
import Loader from "../UI/Loader";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../../Actions/auth";
import { useDispatch } from "react-redux";

const LoginORSignup = () => {
    let [details, setDetails] = useState({
        email: '',
        password: ''
    });

    let [loader, setLoader] = useState(false);
    let params = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const Handler = [
        loginUser,
        signupUser
    ]

    const handleInput = (event) => {
        setDetails({
            ...details,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmission = (event) => {
        setLoader(true)
        event.preventDefault();
        dispatch(Handler[params.type === 'login' ? 0 : 1](details, (res) => {
            console.log(res)
            if(res.error){
                alert(res?.data?.response?.data?.error?.message)
            }else{
               navigate('/')
            }

            setLoader(false)
        }))
    }





    return (
        <Fragment>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink exact to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink exact to={"/signup"}><h3>Signup</h3></NavLink>
                    </div>
                    <form autoComplete={"off"} onSubmit={handleSubmission}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                value={details.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {params.type === "login" ? "Login" : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {loader && <Loader />}
        </Fragment>
    );
}

export default LoginORSignup;