import {connect} from 'mongoose';

import  { MONGODB_URI } from './config';

( async () => {

    try {
        //const db = await connect("mongodb://localhost/crud-mongo"); // la bd se llamara crud-mongo si no existe lo creara    
        const db = await connect(MONGODB_URI); // la bd se llamara crud-mongo si no existe lo creara    
        console.log('DB connected to ', db.connection.name); 
        //console.log('works');
        
    } catch (error) {
        console.log(error);
    }


}) ()


//



