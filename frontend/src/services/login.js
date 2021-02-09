import axios from 'axios'
const baseUrl = '/signin'

export const loginService = async (body) =>{
    try {
        const response = await axios.post(baseUrl, body)
        return response.data
    } catch (e) {
        console.error(e)
        throw new Error('Login failed')
    }
    
}