import styled from 'styled-components';

const StyledFocusContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 4rem;
	padding-top: 2rem;
	color: white;
	background-color: var(--main-color);
`;

const StyledSponsorsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	padding-bottom: 2rem;
	border-bottom: 1px solid var(--terciary-color);
`;
const StyledSponsorsImg = styled.img`
	width: 125px;
	filter: invert(1);
	opacity: 0.4;
`;

const StyledFeaturedList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding-top: 4rem;
	text-align: center;
`;
const StyledFeaturedImg = styled.img`
	width: 56px;
`;

const StyledFeaturedTitle = styled.h3`
	font-size: 2rem;
	margin: 0;
`;
const StyledFeaturedText = styled.p`
	font-size: 1.4rem;
	margin-top: 0;
	margin-bottom: 2rem;
	color: var(--terciary-color);
`;

export {
	StyledSponsorsImg,
	StyledSponsorsContainer,
	StyledFocusContainer,
	StyledFeaturedList,
	StyledFeaturedImg,
	StyledFeaturedTitle,
	StyledFeaturedText
};
