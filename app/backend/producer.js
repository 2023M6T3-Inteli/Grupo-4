const { Kafka, Partitioners } = require('kafkajs');

// O ID do cliente permite que o Kafka saiba quem está produzindo as mensagens
const clientId = 'my-app';
// Podemos definir a lista de corretores no cluster
const brokers = ['localhost:9092'];
// Este é o tópico para o qual queremos escrever mensagens
const topic = 'message-log';

// Inicialize um novo cliente Kafka e inicialize um produtor a partir dele
const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

// Definimos uma função assíncrona que escreve uma nova mensagem a cada segundo
const produce = async () => {
  await producer.connect();
  let i = 0;

  // Depois que o produtor se conectou, iniciamos um temporizador de intervalo
  setInterval(async () => {
    try {
      // Envie uma mensagem para o tópico configurado com a chave e o valor formados a partir do valor atual de `i`
      await producer.send({
        topic,
        messages: [
          {
            key: String(i),
            value: 'esta é a mensagem ' + i,
          },
        ],
      });

      // Se a mensagem for escrita com sucesso, registre-a e incremente `i`
      console.log('writes:', i);
      i++;
    } catch (err) {
      console.error('não foi possível escrever a mensagem', err);
    }
  }, 1000);
};

module.exports = produce;
