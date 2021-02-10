import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import clouds from '../assets/images/clouds.svg'
import clouds_small from '../assets/images/clouds_small.svg'

const Background = () => {
    const [style, setStyle] = useState(null)

    // const location = useLocation()
    // if (location.pathname !== '/' && style) {
    //     setStyle({ filter: 'blur(10px)' })
    // }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])
    const handleScroll = () => {
        // console.log(window.scrollY)
        let y = window.scrollY
        let blur = Math.floor(y / 10)
        blur > 10 && (blur = 10)
        setStyle({ filter: `blur(${blur}px)` })
    }

    return (
        <>
            <div className='bg-box'>
                <img src={clouds} className='bg-clouds' alt='clouds' style={style} />
                <img src={clouds_small} className='bg-clouds-small' alt='clouds' style={style} />
                <div className='bg' style={style} />
            </div>
        </>
    )
}

export default Background
