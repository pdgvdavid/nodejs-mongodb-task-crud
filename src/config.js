import { config } from 'dotenv'; 

config(); 
//console.log("archivo env");
//console.log( process.env.MONGODB_URI);

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/crud-mongo';

export const PORT = process.env.PORT || 3000; 