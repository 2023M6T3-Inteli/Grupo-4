const { Kafka, Partitioners } = require('kafkajs');

const clientId = 'my-app';
const brokers = ['localhost:9092'];
const topic = 'message-log';

const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

const produce = async () => {
  await producer.connect();
  let i = 0;

  setInterval(async () => {
    try {
      const result = await producer.send({
        topic,
        messages: [
          {
            key: String(i),
            value: 'esta é a mensagem ' + i,
          },
        ],
      });

      // Log the result to see more details about the successful message send
      console.log('Message sent successfully:', result);
      console.log('writes:', i);
      i++;
    } catch (err) {
      console.error('não foi possível escrever a mensagem', err);

      // If there's an error in sending the message, log more details about the error
      if (err.message) {
        console.error('Error message:', err.message);
      }
      if (err.stack) {
        console.error('Stack trace:', err.stack);
      }
    }
  }, 1000);
};

module.exports = produce;
