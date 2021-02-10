import { getAllBlogs } from '../services/blogs'
import { showErrorNotification } from './notificationReducer'
const initialState = {}


//REDUCERS
export const blogReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'REQUEST':
            return { loading: true }
        case 'ERROR':
            return { loading: false }
        case 'GET-SUCCESS':
            return { loading: false, blogposts: payload }
        case 'CREATE-SUCCESS':
            return { loading: false, blogposts: payload }
        default:
            return state
    }
}


//ACTION CREATORS
export const getBlogpostsAction = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'REQUEST'
            })
            const data = await getAllBlogs()
            dispatch({
                type: 'GET-SUCCESS',
                payload: data
            })
        } catch (e) {
            showErrorNotification('Error fetching blogposts')
        }

    }
}
