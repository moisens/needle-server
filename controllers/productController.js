import Product from "../models/Products.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  //product = await Product.findOne({ slug: req.params.slug })
  const product = await Product.findOne({ _id: productId });
  if (!product)
    throw new NotFoundError(
      `Couldn't find a product with the id: ${productId}`
    );
  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const { tailorname, size, color, subcategories } = req.body;

  if (!tailorname || !size || !color || !subcategories)
    throw new BadRequestError(
      `Make sure to provide all the values: tailorname, size, color, subcategories. Thanks.`
    );

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product)
    throw new NotFoundError(
      `Couldn't find a product with the id: ${productId}`
    );
  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  if (!product)
    throw new NotFoundError(`Couldn't find a product with the id ${productId}`);
  await product.remove();
  res.status(StatusCodes.OK).json({ product });
};

export {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
