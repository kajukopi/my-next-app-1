// pages/api/items/create.js
import connectToDatabase from "@/lib/mongodb"
import Item from "@/models/Item"

export async function POST(req) {
  try {
    await connectToDatabase()
    const newItem = new Item(req.body)
    const item = await newItem.save()
    return new Response(JSON.stringify(item))
  } catch (error) {
    return new Response(JSON.stringify(error))
  }
}
