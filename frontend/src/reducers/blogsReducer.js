import { getAllBlogs } from '../services/blogs'
import { errorAction } from './notificationReducer'
const initialState = {}


//REDUCERS
export const blogReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'REQUEST':
            return { loading: true }
        case 'ERROR':
            return { loading: false }
        case 'GET-SUCCESS':
            return { loading: false, payload }
        case 'CREATE-SUCCESS':
            return { loading: false, blogposts: payload }
        default:
            return state
    }
}


//ACTION CREATORS
export const getBlogpostsAction = (payload) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'REQUEST'
            })
            const data = getAllBlogs(payload)
            dispatch({
                type: 'GET-SUCCESS',
                payload: data
            })
        } catch (e) {
            errorAction('Error fetching blogposts')
        }

    }
}
