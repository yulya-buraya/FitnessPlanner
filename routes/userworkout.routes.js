const { Router } = require('express')
const fs = require('fs');
const multer = require('multer');
const router = Router()
const User = require('../models/User')
const UserWorkout = require('../models/UserWorkout')
const Exercise = require('../models/Exercise')
const { upload } = require('../config/multerConfig');

router.post('/create', upload, async (req, res) => {
    try {
        console.log('body', req.body)
        let body = req.body;
        body.days = JSON.parse(body.days);

        const newWorkout = await UserWorkout.findOne({ name: req.body.name })

        if (newWorkout) {
            return res.status(400).json({ message: 'Программма с таким названием уже существует!' })
        }

        const workout = new UserWorkout(
            { ...req.body }
        );
        await workout.save()

        if (req.file) {
            const path = `data/userworkouts/${workout._id}.jpg`;
            fs.renameSync(req.file.path, path);
        }

        res.status(201).json({ message: 'План тренировок успешно добавлен' })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

router.get('/workouts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const workouts = await UserWorkout.find({ user: id });
        const mappedWorkouts = workouts.map((workout) => {
            const _workout = workout.toObject();
            const imagePath = `data/userworkouts/${_workout._id}.jpg`;

            if (fs.existsSync(imagePath)) {
                const image = fs.readFileSync(imagePath);
                _workout.image = 'data:image/jpeg;base64,' + new Buffer.from(image).toString('base64');
            }

            return _workout;
        });

        res.json(mappedWorkouts);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const workout = await UserWorkout.findById(req.params.id).populate({ path: 'days.exercises' })
        res.json(workout)
    } catch (e) {
        console.log("error", e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        let { id } = req.body
        await UserWorkout.deleteOne({ _id: id })
        res.status(200).json({ message: 'Программа тренировок успешно удалена' })
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: e.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        await UserWorkout.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        res.status(200).json({ message: 'План тренировок успешно изменен' })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router