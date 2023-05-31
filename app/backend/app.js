const express = require('express')
require('express-async-errors')
require('dotenv').config()
var bodyParser = require('body-parser')
const cors = require('cors')
const log4js = require('log4js');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const produce = require("./producer")
const consume = require("./consumer")

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API',
      description: 'API Information',
      contact: {
        name: 'Developer Name'
      },
      servers: ['http://localhost:3001']
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//Configurando Log de Usuários
log4js.configure({
    appenders: {
      multi: {
        type: "multiFile",
        base: "logs/",
        property: "categoryName",
        extension: ".log",
      },
    },
    categories: {
      default: { appenders: ["multi"], level: "debug" },
    },
});

const app = express()
app.use(cors())

app.use(express.json()) //Irá suportar JSON
app.use(
    bodyParser.urlencoded({
        // Irá suportar urlenconded
        extended: true,
    })
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.send('Pong!')
})

// Rotas
const userRouter = require('./routes/user')
const ContentRouter = require('./routes/content');
const projectRouter = require('./routes/project');

app.use('/v1/content', ContentRouter);
app.use('/v1/user', userRouter)
app.use('/v1/project', projectRouter)

app.use((req, res, next) => {
    res.status(404).send({ error: 'Not found', status: 404, url: req.url })
})


// chame a função `produce` e registre um erro se ocorrer
produce().catch((err) => {
    console.error("erro no produtor: ", err)
})

// inicie o consumidor e registre quaisquer erros
consume().catch((err) => {
    console.error("erro no consumidor: ", err)
})

// O resto do seu código segue aqui


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})