import React, {useState, useEffect} from "react";

const User = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const loginToken = localStorage.getItem('login-token');
        setIsLogin(loginToken);
    }, []);
    const handleLogin = () => {
        localStorage.setItem('login-token', true);
        setIsLogin(true);
    }

    const handleLogout= () => {
        localStorage.removeItem('login-token');
        setIsLogin(false);
    }

    return(
        <div style={{margin: "50px", fontWeight: "bold"}}>
            <span>{isLogin ? "User is Logged In" : "Welcome User"}</span><br></br>
            {
                isLogin ?
                <button onClick={handleLogout}>Logout</button>
                :
                <button onClick={handleLogin}>Login</button>
            }
           
        </div>
    );
}

export default User;