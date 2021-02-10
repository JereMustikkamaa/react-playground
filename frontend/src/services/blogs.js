import axios from 'axios'
import { loadUser } from '../utils/storage'

const baseUrl = '/api/blogs'

export const getConfig = async () => {
    return {
        headers: { Authorization: `Bearer ${loadUser().token}` }
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
