import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    tailorname: {
      type: String,
      trim: true,
      required: [true, "Please provide the tailor's name"],
      maxLength: [100, "tailor's name can only have 100 characters!"],
    },
    color: {
      type: String,
      default: "white",
      required: true,
    },
    price: {
      type: Number,
      required: [true, "please provide a price"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      maxLength: [1500, "Description can't be more than 1500 characters"],
    },
    clothesmaterials: {
      type: [String],
      required: [true, "Please provide a clothe material"],
    },
    image: {
      type: [String],
      required: [true, "Please, provide at least one image"],
    },
    maincategories: {
      type: String,
      required: [true, "Please provide a main category"],
      enum: ["women", "men"],
    },
    subcategories: {
      type: String,
      required: [true, "Please provide a sub category"],
      default: "shirt",
    },
    size: {
      type: [String],
      required: [true, "Please, provide a size"],
      default: ["M"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
