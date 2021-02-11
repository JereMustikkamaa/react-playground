import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import clouds from '../assets/images/clouds.svg'
import clouds_small from '../assets/images/clouds_small.svg'

const Background = ({ blur_always }) => {
    const [style, setStyle] = useState(null)
    const location = useLocation()

    useEffect(() => {
        console.log('ue', blur_always)
        blur_always ? setStyle({ filter: 'blur(10px)' }) : setStyle({ filter: 'blur(0px)' })
    }, [blur_always, location]) //eslint-disable-line

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, []) //eslint-disable-line

    const handleScroll = () => {
        // console.log(window.scrollY)
        if (!blur_always) {
            console.log('scroll')
            let y = window.scrollY
            let blur = Math.floor(y / 10)
            blur > 10 && (blur = 10)
            setStyle({ filter: `blur(${blur}px)` })
        }
    }

    return (
        <>
            <div className='bg-box' style={style}>
                <img src={clouds} className='bg-clouds' alt='clouds' style={{filter: 'blur(2px)'}} />
                <img src={clouds_small} className='bg-clouds-small' alt='clouds' style={{filter: 'blur(2px)'}} />
                <div className='bg'/>
            </div>
        </>
    )
}

export default Background
