const { Router } = require('express')
const UserInfo = require('../models/UserInfo')
const router = Router()
const auth = require('./middleware/auth.middleware')
const config =require('config')

router.post('/createBiodata', auth, async (req, res) => {
    try {
    const {firstname, lastname, age, gender, height, weight, purpose, activity} = req.body
    const errors = validationResult(req)

     const userDetails = await UserInfo.findOne({ user: req.user.userId})
      if (userDetails) {
        return res.status(400).json({ message: 'Для этого пользователя данные уже записаны!' })
      }
      const userInfo = new UserInfo({firstname, lastname, age, gender, height, weight, purpose, activity, user: req.user.userId})

      await userInfo.save()
      res.status(201).json({ message: 'Биоданные этого пользователя добавлены' })
    } catch (e) {
      res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }     
})

router.get('/', auth, async (req, res) => {
    try {
        const biodatas = await UserInfo.find({ user: req.user.userId })
        res.json(biodatas)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

})
 router.get('/:id', async (req, res) => {
    try {
        const biodata = await UserInfo.findById(req.params.id)
        res.json(biodata)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

})

module.exports = router
