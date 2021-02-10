import React from 'react'
import { useLocation } from 'react-router-dom'

const Blogpost = () => {
    const url_location = useLocation()
    const { blogpost } = url_location.state
    if (!blogpost) {
        return <div>loading</div>
    }
    return (
        <div className='blogpost-content'>
            <h2>{blogpost.title}</h2>
            <div>
                {blogpost.content}
            </div>
            <div className='blogpost-author'>
                - <h4>{blogpost.user.email}</h4>
            </div>
        </div>

    )
}

export default Blogpost
