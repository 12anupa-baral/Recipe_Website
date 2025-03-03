import { db } from "@/db/db";
import { recipes } from "@/db/schema"
import { eq } from "drizzle-orm";

export async function GET(request,data){
    // const id =Number(params.id )
    const id =data.params.id*1;
    try{
   let recipe =  await  db.select().from(recipes).where(eq(recipes.id,id));
   if(recipe.length === 0){
    return Response.json({
        mesaage:"No recipe found with that id",
    },{status:404}
   )}
   return Response.json({
    mesaage:"Data fetched successfully",
    recipe:recipe
},{status:200})
    }
    catch(error){
        return Response.json({
            message:error.mesaage
           
        },{status:500})
    }  
}