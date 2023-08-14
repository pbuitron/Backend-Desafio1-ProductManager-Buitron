import express from "express";
import productsRoute from "../routes/products.routes.js";
import cartsRoute from "../routes/carts.routes.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRoute);
app.use('/api/carts', cartsRoute);

app.listen(PORT, ()=>{
    console.log(`Server online http://localhost:${PORT}`);
})