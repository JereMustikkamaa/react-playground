import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = '/api/blogs'

export const getConfig = async () => {
    return {
        headers: { Authorization: `Bearer ${storage.loadUser().token}` }
    }

}

export const getAllBlogs = async () => {
    try {
        const request = await axios.get(baseUrl)
        return request.data
    } catch (e) {
        throw e
    }
}

export const createBlog = async (blog) => {
    try {
        const request = await axios.post(baseUrl, blog, getConfig())
        return request.data
    } catch (e) {
        throw e
    }
}

export const updateBlog = async (blog) => {
    try {
        console.log(blog.id)
        const request = await axios.put(`${baseUrl}/${blog.id}`, blog, getConfig())
        return request.data
    } catch (e) {
        throw e
    }
}

export const removeBlog = async (id) => {
    try {
        const request = await axios.delete(`${baseUrl}/${id}`, getConfig())
        return request.data
    } catch (e) {
        throw e
    }
}
