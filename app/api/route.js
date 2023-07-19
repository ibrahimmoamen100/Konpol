import { productss } from "@/data/Data";

export default function handler(req, res) {
  res.status(200).json(productss);
}
