import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose, { Schema, model, models } from "mongoose";

// Schema
const NewsletterSchema = new Schema({
  email: { type: String, required: true, unique: true },
});
const Newsletter = models.Newsletter || model("Newsletter", NewsletterSchema);

// POST subscriber
export async function POST(req: Request) {
  await connectDB();
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
  try {
    const sub = await Newsletter.create({ email });
    return NextResponse.json(sub);
  } catch (err) {
    return NextResponse.json({ error: "Already subscribed or invalid" }, { status: 400 });
  }
}
