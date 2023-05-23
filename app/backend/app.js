const express = require('express')
require('express-async-errors')
require('dotenv').config()
var bodyParser = require('body-parser')
const cors = require('cors')



const app = express()
app.use(cors())

app.use(express.json()) //Irá suportar JSON
app.use(
    bodyParser.urlencoded({
        // Irá suportar urlenconded
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.send('Pong!')
})

// Rotas
const userRouter = require('./routes/user')

app.use('/v1/user', userRouter)

app.use((req, res, next) => {
    res.status(404).send({ error: 'Not found', status: 404, url: req.url })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})


