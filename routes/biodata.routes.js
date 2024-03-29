const fs = require('fs');
const { Router } = require('express')
const UserInfo = require('../models/UserInfo')
const User = require('../models/User')
const router = Router()
const auth = require('./middleware/auth.middleware')
const config = require('config')


router.post('/createBiodata', auth, async (req, res) => {
    try {
        const userDetails = await UserInfo.findOne({ user: req.user.userId })

        if (userDetails) {
            return res.status(400).json({ message: 'Для этого пользователя данные уже записаны!' })
        }

        const userInfo = new UserInfo({
            ...req.body,
            user: [req.user.userId]
        })

        await userInfo.save()
        res.status(201).json({ message: 'Биоданные этого пользователя добавлены' })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/', auth, async (req, res) => {
    try {
        let biodata = await UserInfo.findOne({ user: req.user.userId })
        if (biodata) {
            biodata = biodata.toObject();
            const imagePath = `data/users/${biodata.user[0]}.jpg`;

            if (fs.existsSync(imagePath)) {
                const image = fs.readFileSync(imagePath);
                biodata.image = 'data:image/jpeg;base64,' + new Buffer.from(image).toString('base64');
            }
        }

        res.json([biodata]);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

})

router.get('/users', async (req, res) => {
    try {
        const biodatas = await UserInfo.find().populate('user', 'email')
        res.status(200).json(biodatas)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const biodata = await UserInfo.findById(req.params.id)
        res.json(biodata);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова123dsasaddas' })
    }

})

router.put('/:id', async (req, res) => {
    try {
        await UserInfo.updateOne({ _id: req.params.id }, { $set: req.body })
        res.json()
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})
module.exports = router