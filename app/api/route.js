import connectToDatabase from "@/lib/mongodb"
import Item from "@/models/Item"

export async function GET(request) {
  try {
    await connectToDatabase()
    const items = await Item.find().lean()
    return new Response(JSON.stringify(items))
  } catch (error) {
    return new Response(JSON.stringify(error))
  }
}
