import { mongoConnect } from "@/lib/mongoConnect";
import { ProdModel } from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await mongoConnect();
    const details = await ProdModel.find();
    if (!details)
      return NextResponse.json(
        { success: false, message: "Data Not Available" },
        { status: 404 },
      );

    return NextResponse.json({
      success: true,
      message: "Data Received",
      details,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}


export async function POST(req) {
  try {
    await mongoConnect();

    const { title, description, category, price, stock,image } =
      await req.json();

    if (!title || !category || !price) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing",
        },
        { status: 400 }
      );
    }

    const newDataProd = new ProdModel({
      title,
      description,
      category,
      price,
      stock,
      image
    });

    await newDataProd.save();

    return NextResponse.json({
      success: true,
      message: "Product Details Added",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
