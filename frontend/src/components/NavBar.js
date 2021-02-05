import React, { useEffect, useRef, useState } from 'react'
import home from '../assets/images/home.svg'
import book from '../assets/images/book.svg'
import signin from '../assets/images/sign-in.svg'
import signout from '../assets/images/sign-out.svg'
import reactlogo from '../assets/images/react.svg'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import LoginForm from './LoginForm'

const NavBar = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const ref = useRef(null)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    const navItems = [
        {
            text: 'Home',
            icon: home,
            path: '/'
        },
        {
            text: 'Blog',
            icon: book,
            path: '/blogposts'
        }
    ]

    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', handleClick)
        // return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, []) //eslist-disable-line

    const handleClick = e => {
        if (ref && ref.current) {
            if (ref.current.contains(e.target)) return 
            setModalOpen(false)
        }
    }
    return (
        <>
            <div className='navbar' >
                <ul className='navbar-nav' >
                    <li className='logo'>
                        <Link to='/' className='nav-link'>
                            <img src={reactlogo} alt={'React'} />
                            <div className='link-text'>
                                React.jm
                        </div>
                        </Link>

                    </li>
                    {
                        navItems.map((item, i) => {
                            return (
                                <li className='nav-item' key={i} >
                                    <Link to={item.path} className='nav-link' >
                                        <img src={item.icon} alt={item.text} />
                                        <div className='link-text'>
                                            {item.text}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li className='nav-item' >
                        <div className='nav-link' onClick={() => setModalOpen(true)}>
                            <img src={true ? signin : signout} alt='login' />
                            <div className='link-text'>
                                {true ? 'Sign In' : 'Sign Out'}
                            </div>
                        </div>
                    </li>
                </ul>
                {/* <Modal
                isOpen={modalOpen}
                contentLabel='Login '
                onRequestClose={() => setModalOpen(false)}
                style={customStyles}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
            > */}
                {/* <div className='login'>
                    <h2>Sign In</h2>
                    <form className='login-form'>
                        <input placeholder='Email' type='email' value={email} onChange={({ target }) => setEmail(target.value)} />
                        <input placeholder='Password' value={password} type='password' onChange={({ target }) => setPassword(target.value)} />
                    </form>
                    <div className='login-buttons'>
                        <button>Cancel</button>
                        <button>Login</button>
                    </div>
                </div> */}

                {/* </Modal> */}
            </div>
            {modalOpen &&
                <div ref={ref} id='login' className='login-open'>
                    <LoginForm setModalOpen={setModalOpen} />
                </div>
            }
        </>
    )
}

export default NavBar