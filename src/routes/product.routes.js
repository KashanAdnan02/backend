
import express from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controller/product.controller.js"

const productRoutes = express.Router()

productRoutes.post('/', createProduct)
productRoutes.get('/', getProducts)
productRoutes.get('/:id', getProductById)
productRoutes.delete('/:id', deleteProduct)
productRoutes.put('/:id', updateProduct)






export default productRoutes