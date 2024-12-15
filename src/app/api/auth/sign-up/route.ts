import mongoDBClient from "@/lib/db";
import bcrypt from "bcrypt";
import { GridFSBucket } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData();

    const client = await mongoDBClient.connect();

    const grid = new GridFSBucket(client.db("cinema-park"));

    const hashedPassword = await bcrypt.hash(
      body.get("password") as string,
      10
    );

    const res = await client
      .db("cinema-park")
      .collection("users")
      .insertOne({
        email: body.get("email"),
        name: body.get("name"),
        surname: body.get("surname"),
        userName: body.get("userName"),
        birthDay: body.get("birthDay"),
        password: hashedPassword,
        gender: body.get("gender"),
        lovedMovies: body.get("lovedMovies"),
        tel: body.get("tel"),
        mailing: body.get("mailing") === "true",
        image: null,
      })
      .then((res) => res);

    if (res.insertedId) {
      const user: any = await client
        .db("cinema-park")
        .collection("users")
        .findOne({ _id: res.insertedId })
        .then((res) => res);

      return new NextResponse(JSON.stringify(user), { status: 200 });
    }
  } catch (e) {
    return new NextResponse("Sign Up issue", { status: 500 });
  }
}
