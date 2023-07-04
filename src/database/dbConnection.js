import { connect } from 'mongoose'
import { MONGODB_URI } from '../config'
//opcion 1 de conectarse a la base de datos
// (async () => {
//     try {
//         const db = await connect(MONGODB_URI)
//         console.log(`DB conectada en ${db.connection.name}`);
//     } catch (error) {
//         console.log(error)
//     }





// })()
 

//opcion 2 de conectarse a la base de datos
connect(MONGODB_URI).then(resp => console.log(`DB conectada en ${resp.connection.name}`)).catch(error => console.log(error));