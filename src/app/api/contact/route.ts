import { NextRequest, NextResponse } from "next/server";

import mongoDBClient from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await mongoDBClient.connect();

    await mongoDBClient
      .db("cinema-park")
      .collection("connections")
      .insertOne(body);

    return new NextResponse(JSON.stringify("OK"), { status: 200 });
  } catch (e) {
    return new NextResponse("Can't save user comment", { status: 500 });
  }
}
