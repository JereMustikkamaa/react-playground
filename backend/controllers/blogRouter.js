const blogRouter = require('express').Router()
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog')
// const jwt = require('jsonwebtoken')
const requireAuth = require('../utils/requireAuth')

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { email: 1 })
    console.log(blogs)
    response.json(blogs.map(blog => blog.toJSON()))
})


blogRouter.post('/', requireAuth, async (request, response, next) => {
    try {
        const body = request.body
        console.log(body)

        const user = request.user
        console.log(user)
        const blog = new Blog({
            title: body.title,
            content: body.content,
            user: user._id
        })

        const savedBlog = await blog.save()
        // user.blogs = user.blogs.concat(savedBlog._id)
        // await user.save()
        await savedBlog.populate('user', { email: 1 }).execPopulate();
        response.json(savedBlog.toJSON())

    } catch (e) {
        next(e)
    }
})

blogRouter.delete('/:id', requireAuth, async (req, response, next) => {
    try {
        const id = req.params.id
        const blog = await Blog.findById({ _id: id })

        if (blog) {
            console.log('blog', blog)
            // const decodedToken = jwt.verify(req.token, process.env.SECRET)
            const user = req.user
            console.log('käyttäjä', blog.user)

            if (blog.user.toString() === user.id.toString()) {
                await Blog.findByIdAndRemove(id)
                response
                    .status(204)
                    .json({ message: "blog deleted" })
                    .end()
            } else {
                response
                    .status(401)
                    .json({ error: 'Not authorized' })
            }
        } else {
            response.status(404).json({ error: "Blog not found" })
        }

    } catch (e) {
        next(e)
    }
})

blogRouter.put('/:id', requireAuth, async (request, response, next) => {
    try {
        const blog = request.body
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog)
        if (updatedBlog) {
            response.json(updatedBlog.toJSON())
        }
    } catch (e) {
        next(e)
    }
})

module.exports = blogRouter