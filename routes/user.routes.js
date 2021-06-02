const fs = require('fs');
const { Router } = require('express')
const UserInfo = require('../models/UserInfo')
const User = require('../models/User')
const router = Router()
const { upload } = require('../config/multerConfig');

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

router.put('/editphoto', upload, async (req, res) => {
    try {
        console.log(req.body);
        const { id } = req.body;
        const path = `data/users/${id}.jpg`;
        fs.renameSync(req?.file.path, path);
        res.status(200).json({ message: 'Фотография успешно изменена' });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

module.exports = router;