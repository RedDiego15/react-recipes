import React from "react";
import styled from "styled-components";

const StyledRecipeNameContainer = styled.div`
	display: flex;
	justify-content: ${(p) => p.JustifyContent};
	padding: 0 15px;
	align-items: center;
	width: 100%;
	height: 4rem;
	background-color: #ff9800;
	&:hover {
		padding: 10px;
	}
	cursor: ${(p) => p.cursorValue};
	box-shadow: 0px 6px 5px 0px #726867;
`;
const RecipeNameContainer = ({
	onClick,
	JustifyContent,
	children,
	cursorValue,
}) => {
	return (
		<StyledRecipeNameContainer
			onClick={() =>
				onClick()
			}
			cursorValue={
				cursorValue
			}
			JustifyContent={
				JustifyContent
			}
		>
			{
				children
			}
		</StyledRecipeNameContainer>
	);
};

export { RecipeNameContainer };
