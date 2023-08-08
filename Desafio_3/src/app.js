import express from 'express'
import {ProductManager} from './ProductManager.js'

const app = express()
app.get(express.json());
app.get(express.urlencoded({extended:true}))
app.listen(8080, ()=>console.log("Server online in PORT 8080"));

const productManager1 = new ProductManager("./data/productos.json");

app.get('/products', (req, res) => {
    let products = productManager1.getProducts();
    let limit = req.query.limit
    if (limit && !isNaN(parseInt(limit))) {
        products = products.slice(0, parseInt(limit));
    }
    console.log(products)
    return res.send({products});
    
});


app.get('/products/:pid', (req, res) => {

    if (req.params.pid && !isNaN(parseInt(req.params.pid))) {
        const product = productManager1.getProductById(parseInt(req.params.pid));
        console.log(product)
        return res.send(product);
    }
    else {
        return res.status(404).send({ error: 'Insert a valid numeric id!' });
    }

});

app.get('/saludo', (req, res)=>{
    res.send("Bienvenidos a nuestro servidor de Express");
})

app.get('/unparametro/:nombre', (req, res)=>{
    res.send(`Hola a: ${req.params.nombre}`);
})

app.get('/dosparametro/:nombre/:apellido', (req, res)=>{
    res.send(`Nombre completo: ${req.params.nombre} ${req.params.apellido}`);
})

