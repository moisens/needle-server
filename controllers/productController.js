import Product from "../models/Products.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const queryObject = {};
  const { tailorname, price, maincategories, subcategories, size, featured } =
    req.query;

  if (maincategories) {
    queryObject.maincategories = maincategories;
  }
  if (subcategories && subcategories !== "all") {
    queryObject.subcategories = subcategories;
  }
  if (tailorname) {
    queryObject.tailorname = tailorname;
  }
  if (price) {
    queryObject.price = price;
  }
  if (size) {
    queryObject.size = size;
  }
  if (featured) {
    queryObject.featured = featured;
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const skip = (page - 1) * limit;
  let result = Product.find(queryObject);
  result = result.skip(skip).limit(limit);

  const products = await result;
  const totalProduct = await Product.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalProduct / limit);

  res.status(StatusCodes.OK).json({ products, totalProduct, numOfPages });
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
