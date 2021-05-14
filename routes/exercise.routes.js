const { Router } = require('express')
const router = Router()
const Exercise = require('../models/Exercise')


router.post('/create', async (req, res) => {
    try {
        const newExercise = await Exercise.findOne({ name: req.body.name })

        if (newExercise) {
            return res.status(400).json({ message: 'Такое упражнение уже есть!' })
        }
        const exercise = new Exercise(
            { ...req.body }
        )

        await exercise.save()
        res.status(201).json({ message: 'Упражнение успешно добавлено', exercise })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/exercises', async (req, res) => {
    try {
        const exercises = await Exercise.find()
        res.json(exercises)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

})

module.exports = router