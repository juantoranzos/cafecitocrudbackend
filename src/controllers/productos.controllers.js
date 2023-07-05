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

  //editar un producto
  export const editarProducto = async (req, res)=>{
    try{
        //extraer el id del request y del bdy
      await  Producto.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        mensaje: 'se edito con exito el producto'
      })

    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'el producto no se pudo editar'
        })
    }
  };

  //obtener un producto por el id
  export const obtenerProducto = async (req, res)=>{
    try{
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: 'no se puede obtener el producto buscado'
        })
    }
    
  };