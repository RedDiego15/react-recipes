import React from "react";
import styled from "styled-components";

const RecipesContainer = styled.div`
	padding: 1rem;
`;
const StyledRecipes = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 11.5rem;
	gap: 15px;
`;
const Recipes = ({ children }) => {
	return (
		<RecipesContainer>
			<StyledRecipes>{children}</StyledRecipes>
		</RecipesContainer>
	);
};

export { Recipes };
