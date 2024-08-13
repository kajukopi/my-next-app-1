// pages/api/items/index.js
import connectToDatabase from "@/lib/mongodb"
import Item from "@/models/Item"

export default async function handler(req, res) {
  await connectToDatabase()
  if (req.method === "GET") {
    try {
      const items = await Item.find({})
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json({error: "Failed to fetch items"})
    }
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
