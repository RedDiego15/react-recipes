import React from "react";
import { Header } from "@components/Header";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
const AppContainer = styled.div`
	max-width: 680px;
	width: 100%;
`;
const Layout = ({ children }) => {
	return (
		<Container>
			<AppContainer>
				<Header />
				{
					children
				}
			</AppContainer>
		</Container>
	);
};
export { Layout };
