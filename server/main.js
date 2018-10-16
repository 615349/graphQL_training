const app = require('express')();
const graphQl = require('express-graphql');
const cors = require('cors');
const root  = require('./apis');
const schemas = require('./schemas');

const CORS_OPTIONS = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  optionsSuccessStatus: 200
};

app.use(cors(CORS_OPTIONS));

app.use('/graphql', graphQl({
  schema: schemas,
  rootValue: root,
  graphiql: true
}));

app.listen(3001, () => console.log('server running on localhost:3001/graphql'));
