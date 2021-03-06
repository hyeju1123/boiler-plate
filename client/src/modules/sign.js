import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER'
const REGISTER_USER = 'REGISTER_USER'
const AUTH_USER = 'AUTH_USER';

export function loginUser(dataToSubmit) {
    const request =  axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request =  axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth() {
    const request =  axios.get('/api/users/auth')
        .then(response => response.data)
    return {
        type: AUTH_USER,
        payload: request
    }
}


const initialState = {};

export default function sign(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return { ...state, registerSuccess: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        default:
            return state;
    }
}