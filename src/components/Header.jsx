import React from "react";
import styled from "styled-components";
import { MdTimer } from "react-icons/md";

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 12vh;
	box-shadow: 1px 4px 8px 0px #3f494c;
`;
const Title = styled.h1`
	font-size: 20px;
	color: #ff9800;
`;
const iconStyles = {
	position: "absolute",
	right: "10px",
	width: "26px",
	height: "26px",
};

const Header = () => {
	return (
		<StyledHeader>
			<Title>Recipes</Title>
			<MdTimer style={iconStyles} />
		</StyledHeader>
	);
};

export { Header };
