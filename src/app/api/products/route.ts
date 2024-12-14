import { NextResponse } from "next/server";

import mongoDBClient from "@/lib/db";

export async function GET() {
  try {
    await mongoDBClient.connect();

    const products = await mongoDBClient
      .db("cinema-park")
      .collection("products")
      .find()
      .toArray();

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (e) {
    return new NextResponse("Can't get products list", { status: 500 });
  }
}
