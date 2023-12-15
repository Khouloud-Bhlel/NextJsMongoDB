import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  try {
    await dbConnect();

    if (method === "GET") {
      const product = await Product.findById(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } else if (method === "PUT") {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } else if (method === "DELETE") {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (deletedProduct) {
        res.status(200).json("The product has been deleted!");
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (err) {
    res.status(400).json({ message: "Internal Server Error" });
  }
}
