const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/biodata', require('./routes/biodata.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/exercise', require('./routes/exercise.routes'))
app.use('/api/workout', require('./routes/workout.routes'))
app.use('/api/food', require('./routes/food.routes'))
app.use('/api/recipe', require('./routes/recipe.routes'))
app.use('/api/mealplan', require('./routes/mealplan.routes'))
app.use('/api/userworkout', require('./routes/userworkout.routes'))


const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

