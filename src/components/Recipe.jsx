import { React, useContext } from "react";
import styled from "styled-components";
import { RecipeNameContainer } from "../Container/RecipeNameContainer";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const RecipeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
	width: 100%;
	height: ${(p) => p.HeightRecipeContainer || "inherit"};
	background-image: url(${(p) => p.image});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const RecipeName = styled.h2`
	font-size: 20px;
	color: white;
`;
const ShareLink = styled.a`
	color: white;
	margin-right: 1rem;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const Recipe = ({
	isInformation,
	recipe,
	HeightRecipeContainer,
	JustifyContent,
	cursorValue,
}) => {
	const { selectRecipe } = useContext(AppContext);
	const navigate = useNavigate();

	const handleRecipeClick = () => {
		console.log("entra a handle");
		selectRecipe(recipe);
		navigate(
			"/recipe-information"
		);
	};

	return (
		<RecipeContainer
			image={
				recipe.strMealThumb
			}
			HeightRecipeContainer={
				HeightRecipeContainer
			}
		>
			<RecipeNameContainer
				onClick={() =>
					handleRecipeClick()
				}
				cursorValue={
					cursorValue
				}
				JustifyContent={
					JustifyContent
				}
			>
				<RecipeName>
					{
						recipe.strMeal
					}
				</RecipeName>
				{isInformation && (
					<ShareLink>
						Share
					</ShareLink>
				)}
			</RecipeNameContainer>
		</RecipeContainer>
	);
};

export default Recipe;
