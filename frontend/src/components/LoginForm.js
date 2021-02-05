import React, { useState } from 'react'

const LoginForm = ({setModalOpen}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input required='true' value={email} onChange={({ target }) => setEmail(target.value)} />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input required='true' value={password} type='password' onChange={({ target }) => setPassword(target.value)} />
                    <label>Password</label>
                </div>
                <div className='login-buttons'>
                    <div className='login-btn'>Login</div>
                    <div onClick={()=> setModalOpen(false)}>Cancel</div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
