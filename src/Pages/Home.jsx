import React, { Suspense } from "react";
import { Recipes } from "../Container/Recipes";
import { useGetRecipes } from "../hooks/useGetRecipes";
const Recipe = React.lazy(() => import("../components/Recipe"));

const Home = () => {
	const { isLoading, errorGetRecipes, recipes } =
		useGetRecipes();

	return (
		<Recipes>
			{recipes.map(
				(
					meal
				) => (
					<Suspense
						fallback={
							<p>
								Loading...
							</p>
						}
						key={
							meal.idMeal
						}
					>
						<Recipe
							JustifyContent={
								"center"
							}
							recipe={
								meal
							}
							isInformation={
								false
							}
							cursorValue={
								"pointer"
							}
						/>
					</Suspense>
				)
			)}
		</Recipes>
	);
};

export { Home };
