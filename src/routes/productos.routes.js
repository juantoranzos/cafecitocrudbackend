import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProducto, obtenerProductos } from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();


// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de la peticion GET a mi backend')
//   })

router.route('/productos').get(obtenerProductos).post([check("nombreProducto")
.notEmpty()
.withMessage('el nombre del producto es obligatorio')
.isLength({min: 2, max: 100})
.withMessage('El nombre del producto debe contener entre 2 y 100 caracteres inclusive'), check('precio')
.notEmpty()
.withMessage('el precio es un dato obligatorio')
.isNumeric()
.withMessage('el precio debe ser un numero') 
.custom((value)=>{
    if(value >= 1 && value <=10000){
        return true
    }else{
     throw new Error('El precio debe estar entre 1 y 10000')
    }
}),
check ('imagen')
.notEmpty()
.withMessage('la imagen es un dato obligatorio')
.matches(/(http(s?):)([/l.|\w|\s|-])*\.(?:jpg|png|jpeg|svg)$/)
.withMessage('La imagen debe tener el formato jpg , png , svg'),
check('categoria')
.notEmpty()
.withMessage('la categoria es obligatoria')
.isIn(['dulce', 'salado', 'bebida fria', 'bebida caliente'])
.withMessage('debe ingresar una categoria valida')

],
 crearProducto)
router.route('/productos/:id').delete(borrarProducto).put(editarProducto).get(obtenerProducto);
export default router;