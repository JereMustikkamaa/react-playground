import {combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { loginReducer } from './reducers/loginReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { blogReducer } from './reducers/blogsReducer'
import { loadUser } from './utils/storage'
 
const user = loadUser() || null
const storeState = {user: user}
const reducer = combineReducers ({
  notification: notificationReducer,
  blogs: blogReducer,
  user: loginReducer
})

const store = createStore(
    reducer,
    storeState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
)

export default store