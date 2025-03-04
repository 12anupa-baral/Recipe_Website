"use client";
import Image from "next/image";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]); // Store recipes in state

  const fetchRecipe = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/getRecipe", {
        cache: "no-store",
      });
      const data = await response.json();
      setRecipes(data?.recipes || []); // Set recipes in state
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // const {recipes}=await fetchRecipe()
  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className="w-full px-[10%] flex justify-center gap-3 flex-wrap">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <Card key={recipe.id} data={recipe} />)
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
}
