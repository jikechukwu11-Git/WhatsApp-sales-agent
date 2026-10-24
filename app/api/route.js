import mongoose from "mongoose";
import Product from "../../../models/Product";

async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) return;
    console.log("Connecting to MongoDB...");
    return await mongoose.connect(process.env.MONGODB_URI);
  } catch (e) {
    console.error("DB Connect Error:", e);
    throw e;
  }
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return Response.json(products);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    console.log("Creating product:", body);
    const product = await Product.create(body);
    return Response.json(product);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    await Product.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}


