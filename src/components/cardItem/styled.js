import styled from 'styled-components';

const StyledCardItem = styled.div`
	position: relative;
	padding: 2rem;
	text-align: left;
	background-color: ${({ bgColor }) => bgColor};
`;
const StyledPlanTitle = styled.p`
	font-size: 1.2rem;
	margin: 0;
	color: white;
	padding-bottom: 1rem;
`;

const StyledPriceDollar = styled.span`
	font-size: 2rem;
`;
const StyledPriceNumber = styled.span`
	color: white;
	font-size: 2.5rem;
	font-weight: 600;
`;

const StyledListTitle = styled.p`
	color: white;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;
const StyledMostPopular = styled.div`
	position: absolute;
	top: -15px;
	right: 2rem;
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border-radius: 2rem;
	text-align: center;
	height: 30px;
	width: 130px;
	color: #12b981;
	background-color: #a7f3d0;
`;
export {
	StyledCardItem,
	StyledPlanTitle,
	StyledPriceDollar,
	StyledPriceNumber,
	StyledListTitle,
	StyledMostPopular
};
