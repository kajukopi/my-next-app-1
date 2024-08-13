// pages/api/items/[id].js
import connectToDatabase from "@/lib/mongodb"
import Item from "@/models/Item"

export default async function handler(req, res) {
  await connectToDatabase()
  const {id} = req.query

  if (req.method === "PUT") {
    try {
      const updatedItem = await Item.findByIdAndUpdate(id, req.body, {new: true})
      if (!updatedItem) return res.status(404).json({error: "Item not found"})
      res.status(200).json(updatedItem)
    } catch (error) {
      res.status(500).json({error: "Failed to update item"})
    }
  } else if (req.method === "DELETE") {
    try {
      await Item.findByIdAndDelete(id)
      res.status(204).end()
    } catch (error) {
      res.status(500).json({error: "Failed to delete item"})
    }
  } else {
    res.setHeader("Allow", ["PUT", "DELETE"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
