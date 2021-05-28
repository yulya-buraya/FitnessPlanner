const { Router } = require('express')
const MealPlan = require('../models/MealPlan')
const router = Router()

router.post('/create', async (req, res) => {
    try {
        const mealplan = new MealPlan(
            { ...req.body }
        )

        await mealplan.save()
        res.status(201).json({ message: 'Продукт питания успешно добавлен', mealplan })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/', async (req, res) => {
    try {
        const mealPlans = await MealPlan.find()
        res.json(mealPlans)
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})
router.get('/mealplans/:user', async (req, res) => {
    try {
        const mealPlans = await MealPlan.find({user:req.params.user})
        res.json(mealPlans)
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const mealPlan = await MealPlan.findById(req.params.id )
        res.json(mealPlan)
        } catch (e) {
        res.status(400).json({error: e.message})
        console.log('error', e)
     }
})


router.delete('/delete', async (req, res) => {
    try {
        let { id } = req.body
        await MealPlan.deleteOne({ _id: id })
        res.status(200).json({ message: 'План питания успешно удален' })
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: 'Что-то пошло не так' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const mealplan = await MealPlan.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        console.log(mealplan)
        await mealPlan.save()
        res.status(200).json({ message: 'План питания успешно изменен' })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })

    }
})


module.exports = router