import { React, useContext } from "react";
import styled from "styled-components";
import { Layout } from "../Container/Layout";
import { Recipe } from "../components/Recipe";
import { Ingredients } from "../components/Ingredients";
import { AppContext } from "../Context/AppContext";

const RecipeInformation = () => {
	const {
		state: { selectedRecipe },
	} = useContext(AppContext);

	return (
		<>
			<Recipe
				JustifyContent={"space-between"}
				HeightRecipeContainer={"15rem"}
				recipe={selectedRecipe}
				isInformation={true}
				cursorValue={"none"}
			/>
			<Ingredients></Ingredients>
		</>
	);
};

export { RecipeInformation };
