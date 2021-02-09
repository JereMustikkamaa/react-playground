import React, { useEffect, useRef, useState } from 'react'
import home from '../assets/images/home.svg'
import book from '../assets/images/book.svg'
import signin from '../assets/images/sign-in.svg'
import signout from '../assets/images/sign-out.svg'
import reactlogo from '../assets/images/react.svg'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../reducers/loginReducer'

const NavBar = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const ref = useRef(null)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    console.log(user)
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
        document.addEventListener('mousedown', handleClick)
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
                        <div className='nav-link' onClick={() => !user ? setModalOpen(!modalOpen) : dispatch(logoutAction())}>
                            <img src={!user ? signin : signout} alt='login' />
                            <div className='link-text'>
                                {!user ? 'Sign In' : 'Sign Out'}
                            </div>
                        </div>
                    </li>
                </ul>
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