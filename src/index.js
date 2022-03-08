/* en package.json el start tambien puede estar asi-> "start": "babel-node src/index.js"*/
/* "start": "nodemon --exec npx babel-node src/index.js"*/

import {PORT} from './config';
import app from './app';
import './database';


app.listen(PORT);
console.log("server on port", PORT);
