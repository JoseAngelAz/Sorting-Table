const {Router} = require('express');//Metodo para requerir más rutas por a parte.
const router = Router();
const Product = require('../models/product');
/*Cuando visite la ruta inicial voy a hacer una consulta a la db para traerme todos los productos que tenga guardados.
    */
router.get('/',async(req,res)=>{
   const Products = await Product.find().sort('sorting');
    //le pasamos los productos a la vista atravez de una variable llamada products, inicializada con los productos.
    console.log(Products);
   res.render('index',{products:Products});
});

router.post('/add-product',async(req,res)=>{
    const newProduct = new Product(req.body);
     await newProduct.save();
    res.redirect('/');
});

router.post('/products/ordering',async (req,res)=>{
    const ids = req.body['id[]'];
    
    for(let i = 0; i < ids.length; i ++){
       // console.log(ids[i]);
        const id = ids[i];
        const product = await Product.findById(id);
        product.sorting = i;
        await product.save();
    }
    res.send('ordered');
});

module.exports  = router;
