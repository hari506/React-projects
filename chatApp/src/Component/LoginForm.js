import { useState } from "react";
import axios from "axios"

const LoginForm = () => {
    let [userName, setUserName] = useState();
    let [password, setPassword] = useState();
    let [error, setError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const authObject = { 'Project-ID': "b3dfde2e-f466-4125-8663-db8ce15ad7b9", 'User-Name': userName, 'User-Secret': password }
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem("username", userName);
            localStorage.setItem("password", password);
            setError('');
            window.location.reload();
        } catch (error) {
            setError('OOPS, User not Authorised')
        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>

    )
}

export default LoginForm;