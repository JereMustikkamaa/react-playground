import { loginService } from '../services/login'
import { showErrorNotification, showSuccessNotification } from './notificationReducer'
import { logoutUser, saveUser } from '../utils/storage'
const initialState = {}

//REDUCERS
export const loginReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'REQUEST':
            return { loading: true }
        case 'ERROR':
            return { loading: false }
            case 'LOGIN':
                return payload
            case 'LOGOUT':
                return null
        default:
            return state
    }
}


//ACTION CREATORS
export const loginAction = (payload) => {
    return async dispatch => {
        try {
            const user = await loginService(payload)
            saveUser(user)
            dispatch(showSuccessNotification('Welcome back!'))
            dispatch({
                type: 'LOGIN',
                payload: user
            })
        } catch (e) {
            dispatch(showErrorNotification('Wrong username or password'))
            throw new Error('fail')
        }

    }
}
export const logoutAction = () => {
    return dispatch => {
        logoutUser()
        dispatch({
            type: 'LOGOUT'
        })
    }
}