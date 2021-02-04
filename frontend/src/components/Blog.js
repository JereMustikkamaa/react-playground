import React from 'react'
import { useHistory } from 'react-router-dom'

const Blog = () => {
    const history = useHistory()

    const handleOpen = (id) => {
        history.push(`blogposts/${id}`)
    }

    return (
        <div className='blogposts-main'>
            <h1 className='blogposts-header'>Blogposts</h1>
            <div className='blogpost' onClick={()=>handleOpen('test')}>
                <div className='bp-initials'>
                    jm
                </div>
                <div className='bp-header'>
                    first blogpost
                </div>
            </div>
        </div>
    )
}

export default Blog
