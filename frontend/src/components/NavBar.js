import React from 'react'
import home from '../assets/images/home.svg'
import right from '../assets/images/arrow-right.svg'
import reactlogo from '../assets/images/react.svg'

const NavBar = () => {
    const navItems = [
        {
            text: 'Home',
            icon: home,
            path: '/'
        },
        {
            text: 'Right',
            icon: right,
            path: '/right'
        },
    ]
    return (
        <div className='navbar' >
            <ul className='navbar-nav' >
                <li className='logo'>
                    <a href='/' className='nav-link'>
                        <img src={reactlogo} alt={'React'} />
                        <div className='link-text'>
                            React.jm
                        </div>
                    </a>

                </li>
                {
                    navItems.map((item, i) => {
                        return (
                            <li className='nav-item' key={i} >
                                <a href='/' className='nav-link'>
                                    <img src={item.icon} alt={item.text} />
                                    <div className='link-text'>
                                        {item.text}
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavBar