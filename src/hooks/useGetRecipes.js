import React from "react";
const API = process.env.REACT_APP_API_URL;

const useGetRecipes = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [errorGetRecipes, setErrorGetRecipes] =
		React.useState(false);
	const [recipes, setRecipes] = React.useState([]);

	React.useEffect(() => {
		async function fetchData() {
			try {
				const response =
					await fetch(
						API
					);
				const data =
					await response.json();
				setRecipes(
					data.meals
				);
			} catch (error) {
				console.log(
					"error get products"
				);
				setErrorGetRecipes(
					false
				);
			}
		}
		fetchData();
		setIsLoading(false);
		setErrorGetRecipes(false);
	}, []);

	return {
		isLoading,
		errorGetRecipes,
		recipes,
	};
};

export { useGetRecipes };
