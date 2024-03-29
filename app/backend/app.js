const express = require('express')
require('express-async-errors')
require('dotenv').config()
var bodyParser = require('body-parser')
const cors = require('cors')
const log4js = require('log4js');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
    },
    components: {
      securitySchemes: {
        BearerAuth: {   // This can be any name you want
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',   // Optional, as per https://swagger.io/docs/specification/authentication/bearer-authentication/
        },
      },
    },
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
const applyRouter = require('./routes/apply');

app.use('/v1/content', ContentRouter);
app.use('/v1/user', userRouter)
app.use('/v1/project', projectRouter)
app.use('/v1/apply', applyRouter)

app.use((req, res, next) => {
    res.status(404).send({ error: 'Not found', status: 404, url: req.url })
})




const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})