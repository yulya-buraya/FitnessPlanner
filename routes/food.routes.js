const { Router } = require('express')
const Food = require('../models/Food')
const router = Router()

router.post('/create', async (req, res) => {
    try {
        const newFood = await Food.findOne({ name: req.body.name })

        if (newFood) {
            return res.status(400).json({ message: 'Такое название уже есть!' })
        }
        const food = new Food(
            { ...req.body }
        )

        await food.save()
        res.status(201).json({ message: 'Продукт питания успешно добавлен', food })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/', async (req, res) => {
    try {
        const foods = await Food.find()
        res.json(foods)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

})
router.delete('/delete', async (req, res) => {
    try {
        let { id } = req.body
        await Food.deleteOne({ _id: id })
        res.status(200).json({ message: 'Продукт питания успешно удален' })
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: 'Что-то пошло не так' })
    }
})
router.put('/:id', async (req, res) => {
    try {
        await Food.findOneAndUpdate({ _id: req.params.id }, { $set: req.body });
        res.status(200).json({ message: 'Продукт питания успешно изменен' })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


module.exports = router