import cors from "cors";
import express from "express";
require('dotenv').config();
import productRoutes from './routes/Product';
import categoryRoutes from './routes/Category';

import db from "./config"; 

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(cors())
app.use(productRoutes);
app.use(categoryRoutes);



db();


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
