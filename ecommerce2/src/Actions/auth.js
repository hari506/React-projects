import axios from "axios";

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/'
const API_KEY = 'AIzaSyBKz-kQMis_F00rt1T1UPQXN_3P_9e425s'

export const loginUser = (details, callback) => {
    return async (dispatch) => {
        let result = {}
        try {
            result = await axios.post(`${BASE_URL}accounts:signInWithPassword?key=${API_KEY}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true
            });

            dispatch({
                type: 'LOGIN',
                payload: {
                    ...result.data
                }
            });

            return callback({
                error: false,
                response: result.data
            });

        } catch (error) {
            return callback({
                error: true,
                data: error
            })
        }
    }
}

export const signupUser = (details, callback) => {
    return async (dispatch) => {
        let result = {};
        try {
            result = await axios.post(`${BASE_URL}accounts:signUp?key=${API_KEY}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true
            })

            dispatch({
                type: 'SIGNUP',
                payload: result.data
            })

            return callback({
                error: false,
                response: result.data
            })

        } catch (error) {
            return callback({
                error: true,
                response: error
            })
        }
    }

}

export const handlePlaceOrder = (callback) => {
    return async (dispatch, getState) => {
        try {
            let { cart, auth } = getState();

            if(!auth.localId){
                return callback({
                    error: true,
                    data : {
                        error: 'User Not Authorized!'
                    }
                })
            }

            let result = await axios.post(
                `https://react-ecommerce-565a4-default-rtdb.firebaseio.com/orders/${auth.localId}.json?auth=${auth.idToken}`,
                {
                    ...cart
                })

            dispatch({
                type: 'CLEAR_CART'
            })

            return callback({
                error: false,
                response: result.data
            })
        } catch (error) {
            return callback({
                error: true,
                response: error
            })
        }

    }

}


export const Logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}
