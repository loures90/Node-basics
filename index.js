// const { Person } = require('./person');
const dotenv = require('dotenv');
const connectToDataBase = require('./src/database/connect')


dotenv.config()
connectToDataBase()

// require('./modules/path');
// require('./modules/fs');
// require('./modules/http.js');
require('./modules/express.js');

// const person = new Person('José')
// console.log(person.sayMyName())
