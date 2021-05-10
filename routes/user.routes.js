const { Router } = require('express')
const UserInfo = require('../models/UserInfo')
const User = require('../models/User')
const router = Router()

router.delete('/delete', async (req, res) => {
    try {
        let { id } = req.body
        await UserInfo.deleteOne({ user: [id] })
        await User.deleteOne({ _id: id })
        res.status(200).json({ message: 'Пользователь удален' })
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: 'Что-то пошло не так' })
    }
})

module.exports = router;