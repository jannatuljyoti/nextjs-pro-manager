import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await dbConnect("products");
    const result = await collection.insertOne(body);

    return NextResponse.json(
      { message: "Product added", product: result },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const collection = await dbConnect("products");
    const products = await collection.find({}).toArray();
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
