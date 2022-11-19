import Express from "express";

import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = Express.Router();

// route get all product
router.get('/', getProducts);
// route get single product
router.get('/:id', getProductById);
// route create product
router.post('/', saveProduct);
// route update product
router.patch('/:id', updateProduct);
// route delete product
router.delete('/:id', deleteProduct);


export default router;