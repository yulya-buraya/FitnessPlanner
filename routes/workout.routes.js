const { Router } = require('express')
const fs = require('fs');
const router = Router()
const Workout = require('../models/Workout')
const Exercise = require('../models/Exercise')
const { upload } = require('../config/multerConfig');


router.post('/create', upload, async (req, res) => {
    try {
        let body = req.body;
        body.days = JSON.parse(body.days);

        const newWorkout = await Workout.findOne({ name: req.body.name })

        if (newWorkout) {
            return res.status(400).json({ message: 'Программма с таким названием уже существует!' })
        }

        const workout = new Workout(
            { ...req.body }
        );
        await workout.save()

        let file = null
        const _workout = workout.toObject();
        if (req.file) {
            const path = `data/workouts/${workout._id}.jpg`;
            fs.renameSync(req.file.path, path);
            file = fs.readFileSync(path);
            _workout.image = 'data:image/jpeg;base64,' + new Buffer.from(file).toString('base64');
        }

        res.status(201).json({ message: 'План тренировок успешно добавлен', workout: _workout })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

router.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find()
        const mappedWorkouts = workouts.map((workout) => {
            const _workout = workout.toObject();
            const imagePath = `data/workouts/${_workout._id}.jpg`;

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
        const workout = await Workout.findById(req.params.id).populate({ path: 'days.exercises' })
        const _workout = workout.toObject();
        const imagePath = `data/workouts/${_workout._id}.jpg`;
        if (fs.existsSync(imagePath)) {
            const image = fs.readFileSync(imagePath);
            _workout.image = 'data:image/jpeg;base64,' + new Buffer.from(image).toString('base64');
        }

        res.json(_workout);
    } catch (e) {
        console.log("error", e)
        res.status(500).json({ message: e.message })
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

router.put('/:id', upload, async (req, res) => {
    try {
        const { id } = req.params;
        await Workout.findByIdAndUpdate(id, { ...req.body, days: JSON.parse(req.body.days) });

        if (req.file) {
            const path = `data/workouts/${id}.jpg`;
            fs.renameSync(req.file.path, path);
        }

        res.status(200).json({ message: 'План тренировок успешно изменен' })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

module.exports = router