import React from 'react'
import home from '../assets/images/home.svg'
import book from '../assets/images/book.svg'
import reactlogo from '../assets/images/react.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
        },
    ]
    return (
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
            </ul>
        </div>
    )
}

export default NavBar