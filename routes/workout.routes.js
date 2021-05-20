const { Router } = require('express')
const router = Router()
const Workout = require('../models/Workout')
const User = require('../models/User')


router.post('/create', async (req, res) => {
    try {
        const newWorkout= await Workout.findOne({ name: req.body.name })

        if (newWorkout){
            return res.status(400).json({ message: 'Программма с таким названием уже существует!' })
        }
        const workout = new Workout(
            { ...req.body }
        )
        await workout.save()

        res.status(201).json({ message: 'План тренировок успешно добавлен', workout })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find()
        res.json(workouts)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

})
router.get('/:id', async (req, res) =>{
    try{
        const workout = await Workout.findById(req.params.id).populate('exercise')
        res.json(workout)
    }
    catch(e){
        console.log("error", e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})
router.delete('/delete', async (req, res) => {
    try {
        let { id } = req.body
        await Workout.deleteOne({ _id: id })
        res.status(200).json({ message: 'Программа тренировок успешно удалена' })
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: 'Что-то пошло не так' })
    }
})
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const workout = await Workout.findOneAndUpdate({_id:req.params.id},{ $set: req.body })
        await workout.save()
    res.status(200).json({ message: 'План тренировок успешно изменен' }) 
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router