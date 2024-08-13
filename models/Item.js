// models/Item.js
import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  price: {type: Number},
})

export default mongoose.models.Item || mongoose.model("Item", itemSchema)
