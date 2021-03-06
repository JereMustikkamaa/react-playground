require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const router = express.Router()

// router.post('/signup', async (req, res) => {
//     try {
//         console.log(req.body)
//         const { email, password } = req.body

//         const user = new User({ email, password })
//         await user.save()

//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

//         res.send({ token })
//     } catch (e) {
//         return res.status(422).send(e.message)
//     }
// })

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password' })
    }
    const user = await User.findOne({ email })

    if (!user) {
        return res.status(422).send({ error: 'Invalid password or email' })
    }

    try {
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
        res.send({ token })
    } catch (e) {
        return res.status(422).send({ error: 'Invalid password or email' })
    }

})

module.exports = router