import React from "react";
const useInitial = () => {
	const [state, setState] = React.useState({});

	const selectRecipe = (payload) => {
		setState({
			...state,
			selectedRecipe: payload,
		});
	};
	return {
		state,
		selectRecipe,
	};
};

export { useInitial };
