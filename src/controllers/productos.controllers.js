import Producto from '../models/producto';

 export const obtenerProductos = async (req, res)=>{
    try{
        const productos = await Producto.find();
        res.status(200).json(productos);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al buscar los productos'
        })
    }
    
  };


  ///controlador para crear un producto
  export const crearProducto = async (req, res)=>{
    try{
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: 'el producto fue creado'
        })

    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al crear el productos'
        })
    }
  }

  //borrar un producto
  export const borrarProducto = async (req, res)=>{
    try{
        //obtener el id y luego consultar a mongoose el borrar
     
        console.log(req.params.id);
      await  Producto.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje: 'el producto fue borrado'
      })


    }catch(error){

        console.log(error);
        res.status(404).json({
            mensaje: 'el producto no se borro'
        })

    }

  }