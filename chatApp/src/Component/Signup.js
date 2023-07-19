import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {

    let [formData, setFormData] = useState({
        username: '',
        secret: '',
        email: '',
        first_name: '',
        last_name: ''
    })
    let [error, setError] = useState('');
    let navigate = useNavigate();

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': "b9b31f38-9b1e-4b6f-bbd7-6e1bbd1f2137"
            },
            data: formData
        };

        try {
            await axios(config)
            localStorage.setItem("username", formData.username);
            localStorage.setItem("password", formData.secret)
            setError('')
            navigate("/")
        } catch (error) {
            setError('error on signup')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" name="username" value={formData.username} onChange={handleInput} className="input" placeholder="Username" required autoComplete="off" />
                    <input type="password" name="secret" value={formData.secret} onChange={handleInput} className="input" placeholder="Password" required autoComplete="off" />
                    <input type="text" name="email" value={formData.email} onChange={handleInput} className="input" placeholder="enter email" autoComplete="off" />
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleInput} className="input" placeholder="enter first name" autoComplete="off" />
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleInput} className="input" placeholder="enter last name" autoComplete="off" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <div>
                    <label className="signup-label"> If you have already an account </label>
                    <button className="signup-button" onClick={(e) => {
                        e.preventDefault();
                        navigate("/login")
                    }}> Login </button>
                </div>
                <h1>{error}</h1>
            </div>
        </div>
    );
}

export default Signup;