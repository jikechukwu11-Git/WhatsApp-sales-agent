import mongoose from "mongoose";
import Product from "@/models/Product";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGODB_URI);
}

export async function GET() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 });
  return Response.json(products);
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const product = await Product.create(body);
  return Response.json(product);
}

export async function DELETE(request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await Product.findByIdAndDelete(id);
  return Response.json({ success: true });
}