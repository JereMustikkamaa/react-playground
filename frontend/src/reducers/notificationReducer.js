const initialState = {}

//REDUCERS
export const notificationReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case 'SHOW_ERROR':
            return { message: payload, error: true, show: true }
        case 'SHOW_SUCCESS':
            return { message: payload, error: false, show: true }
        case 'HIDE':
            return { show: false }
        default:
            return state
    }
}


//ACTION CREATORS
export const showErrorNotification = (payload) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_ERROR',
            payload: payload
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        }, 3000)
    }
}

export const showSuccessNotification = (payload) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_SUCCESS',
            payload: payload
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        }, 3000)
    }
}