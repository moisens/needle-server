import Product from "../models/Products";




const createProduct = (req, res) => {
 res.send("creating product");
}


const getAllProducts = (req, res) => {
  res.send("getting al the products");
}


const getSingleProduct = (req, res) => {
  res.send("getting a single product")
}


const updateProduct = (req, res) => {
  res.send("updating a product");
}


const deleteProduct = (req, res) => {
  res.send("deleting a product")
}



export {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
}
