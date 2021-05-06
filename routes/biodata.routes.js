const { Router } = require('express')
const UserInfo = require('../models/UserInfo')
const router = Router()
const auth = require('./middleware/auth.middleware')
const config =require('config')

router.post('/biodata', async (req, res) => {
    try {
            

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

/* 
router.get("/", async (req, res) => {


    try {

        const biodatas = await UserInfo.find({ user: null })
        res.json(biodatas)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

}) */
/* router.get('/:id', async (req, res) => {


    try {
        const biodata = await UserInfo.findById(req.params.id)
        res.json(biodata)


    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

})
 */
module.exports = router
