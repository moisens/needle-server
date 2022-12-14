import express from "express";

import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express();

router.route("/").post(createProduct).get(getAllProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
