
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { mongoConnect } from "@/lib/mongoConnect";
import { UserModel } from "@/models/userModel";

//user login
export async function POST(req) {
    await mongoConnect();
      const { email, password } = await req.json();
  try {
    const existUser = await UserModel.findOne({ email });
    if (!existUser)
      return NextResponse.json(
        { success: false, message: "User donot exist" },
        { status: 404 },
      );

    const isUser = await bcrypt.compare(password, existUser.password);
    if (!isUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 },
      );
    }
    const token = jwt.sign(
      {
        id: existUser._id,
        role: existUser.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    existUser.isloggedin = true;
    await existUser.save();
    return NextResponse.json(
      {
        success: true,
        message: "User logged in successfully",
        existUser,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
  }
}
