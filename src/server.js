const Hapi = require('hapi');
const Route = require('./routes');
const Good = require('good');

const redis = require('redis');


const redisClient = redis.createClient({ host: '192.168.64.2', post: 666 });

redisClient.on('error', (error) => {
  console.log('failed to connect to redis', error);
});

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
}, (err) => {
  throw err;
});

if(!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
}

module.exports = server;