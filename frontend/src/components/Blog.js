import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getBlogpostsAction } from '../reducers/blogsReducer'

const Blog = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { loading, blogposts } = useSelector(state => state.blogs)

    const handleOpen = (blogpost) => {
        history.push({ pathname: `blogposts/${blogpost.id}`, state: { blogpost } })
    }
    useEffect(() => {
        dispatch(getBlogpostsAction())
    }, [dispatch])
    return (
        <div className='blogposts-main'>
            <h1 className='blogposts-header'>Blogposts</h1>

            { (!loading && blogposts) ?
                blogposts.map(bp =>
                    <div key={bp.id} className='blogpost' onClick={()=>handleOpen(bp)}>
                        <div className='bp-initials'>
                            {bp.user.email.slice(0, 1).toUpperCase()}
                        </div>
                        <h2>{bp.title}</h2>
                    </div>)
                    :
                    <div>Ladataan</div>
            }

        </div>
    )
}

export default Blog
