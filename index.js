import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import * as dotenv from 'dotenv';

dotenv.config(); // puedo leer variables de entorno
// crear una instancia de express

const app = express();
// configurar un puerto
app.set('port', process.env.PORT ||  4000);
app.listen(app.get("port"), ()=>{
    console.log('estoy en el puerto '+ app.get('port'));
});
//middlewares : funciones que ejecutan alguna tarea antes de llegar a las rutas
   app.use(cors());// permite conexiones remotas.
   app.use(express.json()); // permite interpretar el formato json
   app.use(express.urlencoded({extended: true})); // permite en el objeto request los strings y arrays 
   app.use(morgan('dev')) // nos da informacion extra en la terinal

//RUTAS es de las partes mas importantes del back
app.get('/prueba', (req, res)=>{
  res.send('esto es una prueba de la peticion GET a mi backend')
})

