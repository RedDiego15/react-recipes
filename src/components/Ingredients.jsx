import React from "react";
import styled from "styled-components";

const ContainerIngridients = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 1rem;
	padding: 1.8rem;
`;
const Ingredient = styled.a`
	font-size: 16px;
	line-height: 24px;
`;
const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	padding-rigth: 0.8rem;
`;
const Title = styled.h2`
	font-size: 24px;
`;
const ListItem = styled.li``;
const Ingredients = () => {
	return (
		<ContainerIngridients>
			<Title>
				Ingredients
			</Title>
			<StyledList>
				<ListItem>
					<Ingredient>
						Ingredient
					</Ingredient>
				</ListItem>
				<ListItem>
					<Ingredient>
						Ingredient
					</Ingredient>
				</ListItem>
				<ListItem>
					<Ingredient>
						Ingredient
					</Ingredient>
				</ListItem>
				<ListItem>
					<Ingredient>
						Ingredient
					</Ingredient>
				</ListItem>
				<ListItem>
					<Ingredient>
						Ingredient
					</Ingredient>
				</ListItem>
			</StyledList>
		</ContainerIngridients>
	);
};

export { Ingredients };
