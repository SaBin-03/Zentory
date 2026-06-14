
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { mongoConnect } from "@/lib/mongoConnect";
import { UserModel } from "@/models/userModel";


//user signin
export async function POST(req) {
  await mongoConnect();
  const { name, email, password } = await req.json();
  try {
    const existData = await UserModel.findOne({ email });
    if (existData)
      return NextResponse.json(
        { success: false, message: "User already exist" },
        { status: 400 },
      );

    const hashedpass = await bcrypt.hash(password, 10);

    const userData = new UserModel({
      name,
      email,
      password: hashedpass,
    });

    await userData.save();

    return NextResponse.json(
      { success: true, message: "User Register Successfully" },
      { status: 200 },
    );


  } catch (error) {
    console.log(error);
  }
}
