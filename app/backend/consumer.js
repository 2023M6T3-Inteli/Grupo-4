// a instância kafka e as variáveis de configuração são as mesmas de antes
const { Kafka } = require("kafkajs")
const clientId = "my-app"
const brokers = ["localhost:9092"]
const topic = "message-log"

const kafka = new Kafka({ clientId, brokers })
const consumer = kafka.consumer({ groupId: clientId })

const consume = async () => {
    // primeiro, esperamos que o cliente se conecte e se inscreva no tópico fornecido
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        // esta função é chamada toda vez que o consumidor recebe uma nova mensagem
        eachMessage: ({ message }) => {
            // aqui, apenas registramos a mensagem na saída padrão
            console.log(`mensagem recebida: ${message.value}`)
        },
    })
}

module.exports = consume
