const {Router} = require('express')
const UserInfo = require('../models/UserInfo')
const router = Router()
const auth = require('./middleware/auth.middleware')
const config = require('config')


router.post('/createBiodata', auth, async (req, res) => {
    try {
        const userDetails = await UserInfo.findOne({user: req.user.userId})

        if (userDetails) {
            return res.status(400).json({message: 'Для этого пользователя данные уже записаны!'})
        }

        const userInfo = new UserInfo({
            ...req.body,
            user: [req.user.userId]
        })

        await userInfo.save()
        res.status(201).json({message: 'Биоданные этого пользователя добавлены'})
    } catch (e) {
        console.log('error', e)
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const biodatas = await UserInfo.find({user: req.user.userId})
        res.json(biodatas)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }

})
router.get('/:id', async (req, res) => {
    try {
        const biodata = await UserInfo.findById(req.params.id)
        res.json(biodata)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }

})
router.put('/:id', async(req,res)=>{
    try{
         const biodata = await UserInfo.findOneAndUpdate({_id:req.params.id}, {$set:req.body})
        console.log('body', req.body)

        await biodata.save()
        res.json(biodata)
    }
    catch(e){
        console.log('error', e)
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}) 
module.exports = router