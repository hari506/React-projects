import axios from "axios";

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/'
const API_KEY = 'AIzaSyBKz-kQMis_F00rt1T1UPQXN_3P_9e425s'


export const actionForSignup = (formData, callback) => {
    console.log("singup2");
    return async (dispatch) => {
        try {
            let res = await axios.post(`${BASE_URL}accounts:signUp?key=${API_KEY}`, {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            });

            dispatch({
                type: 'SIGNUP',
                payload: res.data
            })

            localStorage.setItem("userToken", res.data.idToken)
            return callback({
                response: res.data
            })
        } catch (error) {
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const loginACtion = (formData, callback) => {

    return async (dispatch) => {
        try {

            let res = await axios.post(`${BASE_URL}accounts:signInWithPassword?key=${API_KEY}`, {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            });

            dispatch({
                type: 'LOGIN',
                payload: res.data
            })

            localStorage.setItem("userToken", res.data.idToken)
            return callback({
                response: res.data
            })

        } catch (error) {
            callback({
                error: true,
                response: error.response
            })
        }
    }


}


export const checkUserSignedIn = (callback) => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem("userToken")
            if(!token){
                return;
            }

            let res = await axios.post(`${BASE_URL}accounts:lookup?key=${API_KEY}`, {
                idToken: token
            });

            dispatch({
                type: "LOGIN",
                payload:{
                    idToken: token,
                    localId: res.data.users[0].localId,
                    ...res.data
                }
            })
            return callback({
                response: res.data
            })
        } catch (error) {
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const logout = () => {
    return (dispath) => {
        localStorage.removeItem("userToken");
        dispath({
            type: "LOGOUT"
        })
    }
}

