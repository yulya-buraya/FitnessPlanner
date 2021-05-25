const { Router } = require('express')

const Recipe = require('../models/Recipe')
const Food = require('../models/Food')
const router = Router()
const auth = require('./middleware/auth.middleware')
const config = require('config')


router.post('/create', async (req, res) => {
    const recipe= await Food.findOne({ name: req.body.name })
    if (recipe){
        return res.status(400).json({ message: 'Рецепт с таким именем уже существует!' })
    }
    try {

        const newRecipe = new Recipe({
            ...req.body
        })

        await newRecipe.save()
        res.status(201).json({ message: 'Рецепт добавлен' })
    } catch (e) {
        console.log('error', e)
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

 router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('food')
        res.json(recipes)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
}) 
router.get('/:id', async (req, res) =>{
    try{
        const recipe = await Recipe.findById(req.params.id).populate('food')
        res.json(recipe)
    }
    catch(e){
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
module.exports = router