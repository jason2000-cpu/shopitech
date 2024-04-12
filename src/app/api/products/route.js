import { NextResponse } from "next/server";
import { flashsales } from "./data";

const API_URL = "https://fakestoreapi.com/products?limit=5";
export async function GET() {
  try {
    // const response = await fetch(API_URL);
    // const products = await response.json();
    return NextResponse.json(flashsales);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
}

export async function POST(request){
  try {
    return NextResponse.json({
      message: "This is a POST Request."
    })
  } catch (error) {
    return `${error} An Error occured while posting!`
  }

}

export async function PUT(request){
  try {
    return NextResponse.json({
      message: "This is a PUT Request."
    })
  } catch (error) {
    return `${error} An Error occured while posting!`
  }

}