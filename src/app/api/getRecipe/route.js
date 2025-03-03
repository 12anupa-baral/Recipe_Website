import { db } from "@/db/db";
import { NextResponse } from "next/server";
import { recipes } from "@/db/schema"; 

export async function GET() {
  return NextResponse.json({
    message: "This is a recipe",
    // recipes: recipes, // Uncomment if needed
  });
}


export async function POST(request) {
  // return NextResponse.json({
    // message: "This is a  request recipe",

    let data =await request.json();
    // console.log(data);
    try{
   await   db.insert(recipes).values(data)
   return Response.json({
    message: "Data Inserted",
   },{status:201})
    }
    catch(error){
     return Response.json({
      message: "Error inserting data",
     },{status:500})
    }
   
    // recipes: recipes, // Uncomment if needed
  // });
}

