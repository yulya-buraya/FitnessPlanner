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
router.get('/:name', async(req, res)=>{
    try{
        let { name } = req.body
        const exercise = await Exercise.findOne({ name: name })
        res.json(exercise)
        console.log(exercise)
    }
    catch(e){
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.delete('/delete', async (req, res) => {
    try {
        let { id } = req.body
        await Exercise.deleteOne({ _id: id })
        res.status(200).json({ message: 'Упражнение успешно удалено' })
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: 'Что-то пошло не так' })
    }
})
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const exercise = await Exercise.findOneAndUpdate({_id:req.params.id},{ $set: req.body })
        console.log(exercise)
        await exercise.save()
    res.status(200).json({ message: 'Упражнение успешно изменено' }) 
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router