import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  try {
    await dbConnect();

    if (method === "GET") {
      const order = await Order.findById(id);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } else if (method === "PUT") {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } else if (method === "DELETE") {
      const deletedOrder = await Order.findByIdAndDelete(id);
      if (deletedOrder) {
        res.status(200).json({ message: "Order deleted successfully" });
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (err) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};

export default handler;
