import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/loginReducer'
import { showErrorNotification } from '../reducers/notificationReducer'

const LoginForm = ({setModalOpen}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const login = (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            dispatch(showErrorNotification('Fill out all fields'))
        } else {
            dispatch(loginAction({email, password}))
        }
    }
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input required value={email} onChange={({ target }) => setEmail(target.value)} />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input required value={password} type='password' onChange={({ target }) => setPassword(target.value)} />
                    <label>Password</label>
                </div>
                <div className='login-buttons'>
                    <div className='login-btn' onClick={login}>Login</div>
                    <div onClick={()=> setModalOpen(false)}>Cancel</div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
