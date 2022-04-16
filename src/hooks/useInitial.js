import React from "react";
const useInitial = () => {
	const [state, setState] = React.useState({});

	const selectRecipe = (payload) => {
		setState({ ...state, selectRecipe: payload });
	};
	return {
		state,
		selectRecipe,
	};
};

export { useInitial };
