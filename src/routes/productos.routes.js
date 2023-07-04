import { Router } from "express";

const router = Router();


// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de la peticion GET a mi backend')
//   })
  
  router.route('/productos').get((req, res)=>{
    res.send('esto es una prueba de la peticion GET a mi backend')
  })

  export default router