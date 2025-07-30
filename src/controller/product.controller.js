import Product from "../model/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.status(201).json({
      message: "Product created",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating product",
      error: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {

    const {page, limit} = req.query

    const skip = (page - 1) * limit
   
    
    const products = await Product.find().limit(limit).skip(skip);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting products",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.query;

    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting product",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Product deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while deleting products",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body, {
      new:true
    });

    return res.status(201).json({
      message: "Product update",
      product
    })

  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while updating products",
      error: error.message,
    });
  }
};
