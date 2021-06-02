const { Router } = require('express')
const fs = require('fs');
const Recipe = require('../models/Recipe')
const Food = require('../models/Food')
const router = Router()
const auth = require('./middleware/auth.middleware')
const config = require('config')
const { upload } = require('../config/multerConfig');

router.post('/create', upload, async (req, res) => {
    try {
        let { food, ingredients, instructions, duration, servings } = req.body;
        ingredients = JSON.parse(ingredients);
        instructions = JSON.parse(instructions);

        const recipe = await Food.findOne({ name: req.body.name })
        if (recipe) {
            return res.status(400).json({ message: 'Рецепт с таким именем уже существует!' })
        }

        const newRecipe = new Recipe({ duration, food, servings, ingredients, instructions });
        await newRecipe.save()

        if (req.file) {
            const path = `data/recipes/${newRecipe._id}.jpg`;
            fs.renameSync(req.file.path, path);
        }

        res.status(201).json({ message: 'Рецепт добавлен' })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

router.get('/', async (req, res) => {
    try {
        let recipes = await Recipe.find().populate('food')

        recipes = recipes.map((recipe) => {
            const _recipe = recipe.toObject();
            const imagePath = `data/recipes/${_recipe._id}.jpg`;

            if (fs.existsSync(imagePath)) {
                const image = fs.readFileSync(imagePath);
                _recipe.image = 'data:image/jpeg;base64,' + new Buffer.from(image).toString('base64');
            }

            return _recipe;
        });

        res.status(200).json(recipes)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let recipe = (await Recipe.findById(req.params.id).populate('food')).toObject();
        const imagePath = `data/recipes/${recipe._id}.jpg`;

        if (fs.existsSync(imagePath)) {
            const image = fs.readFileSync(imagePath);
            recipe.image = 'data:image/jpeg;base64,' + new Buffer.from(image).toString('base64');
        }

        res.json(recipe)
    } catch (e) {
        console.log("error", e)
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        let { id } = req.body
        await Recipe.deleteOne({ _id: id })
        res.status(200).json({ message: 'Рецепт удален' })
    } catch (e) {
        res.status(400).json({ message: 'Что-то пошло не так' })
    }
})

router.put('/edit', upload, async (req, res) => {
    try {
        console.log(req.body);
        let { food, ingredients, instructions, duration, servings, id } = req.body;
        food = JSON.parse(food);
        ingredients = JSON.parse(ingredients);
        instructions = JSON.parse(instructions);

        await Food.findByIdAndUpdate(food._id, food);

        await Recipe.findByIdAndUpdate(id, {
            food: food._id,
            ingredients,
            instructions,
            duration,
            servings
        });

        if (req.file) {
            const path = `data/recipes/${id}.jpg`;
            fs.renameSync(req.file.path, path);
        }

        return res.status(200).json({ message: 'Рецепт успешно обновлен' });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
});

module.exports = router