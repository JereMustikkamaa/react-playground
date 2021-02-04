import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input required='true' type='email' value={email} onChange={({ target }) => setEmail(target.value)} />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input required='true' value={password} type='password' onChange={({ target }) => setPassword(target.value)} />
                    <label>Password</label>
                </div>
                <div className='login-buttons'>
                    <div>Cancel</div>
                    <div>Login</div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
