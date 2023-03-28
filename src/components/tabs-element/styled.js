import styled from 'styled-components';

const StyledTabElement = styled.div`
	padding: 2rem;
	width: 100%;
	color: var(--terciary-color);
	background-color: var(--card-color);
`;
const StyledImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	background: linear-gradient(rgb(255, 250, 255, 0.1) 50%, transparent);
`;
const StyledTabImg = styled.img`
	width: 24px;
`;

export { StyledTabElement, StyledTabImg, StyledImgContainer };
