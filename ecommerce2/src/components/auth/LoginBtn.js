import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../Actions/auth";

const LoginBtn = () => {
    let navigate = useNavigate();
    let auth = useSelector(state => state.auth);
    let dispatch = useDispatch();


    const handleLogout = () => {
       dispatch(Logout())
    }
    return (
        auth.idToken ?
            <div className="user-actions">
                <button title="User Profile" className="material-icons">account_circle</button>
                <button title="Logout" onClick={handleLogout} className="material-icons">logout</button>
            </div>
            :
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
    )
}

export default LoginBtn;