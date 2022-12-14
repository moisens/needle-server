import express from "express";

import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const router = express();

router.route("/").post(createProduct).get(getAllProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .path(updateProduct)
  .delete(deleteProduct);

export default router;
