import React from "react";
import { Recipes } from "@Container/Recipes";
import { Recipe } from "../components/Recipe";
import { useGetRecipes } from "../hooks/useGetRecipes";

const Home = () => {
	const { isLoading, errorGetRecipes, recipes } = useGetRecipes();

	return (
		<Recipes>
			{recipes.map((meal) => (
				<Recipe
					key={meal.idMeal}
					JustifyContent={"center"}
					recipe={meal}
					isInformation={false}
					cursorValue={"pointer"}
				/>
			))}
		</Recipes>
	);
};

export { Home };
