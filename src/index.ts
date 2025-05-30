import express from 'express'
import pingRoute from './routes/index'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('./ping', pingRoute)

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}')
})