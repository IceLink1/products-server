import Product from "../models/Product.model.js";

class ProductController {
  constructor() {}

  static async create(req, res) {
    console.log(req.body);
    try {
      const { title, description, image } = req.body;
      if (title && description && image) {
        const findProduct = await Product.find({ title });
        if (findProduct) {
          const product = {
            title,
            description,
            image,
          };
          const newUser = await Product.create(product);
          res.json(newUser);
        }
        return res.json({ message: "Product already added!" });
      }
      return res.json({ message: "title or description or image not found" });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll(req, res) {
    const products = await Product.find();
    res.json(products);
  }
}

export default ProductController;
