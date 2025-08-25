import { NextResponse } from "next/server";
import Product from "@/models/Product";
import connectDB from "@/lib/mongodb";

// ✅ GET all products
export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

// ✅ POST new product
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const product = await Product.create(body);
  return NextResponse.json(product);
}
