import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NotFound } from "@pages/NotFound";
import { RecipeInformation } from "./RecipeInformation";
import { Home } from "@pages/Home";
import { Layout } from "@container/Layout";
import { AppContext } from "../Context/AppContext";
import { useInitial } from "../hooks/useInitial";

const App = () => {
	const initialValue = useInitial();
	return (
		<AppContext.Provider
			value={
				initialValue
			}
		>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route
							exact
							path="/"
							element={
								<Home />
							}
						/>
						<Route
							exact
							path="/recipe-information"
							element={
								<RecipeInformation />
							}
						/>
						<Route
							exact
							path="*"
							element={
								<NotFound />
							}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export { App };
