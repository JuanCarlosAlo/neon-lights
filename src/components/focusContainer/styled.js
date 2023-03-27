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

const StyledFocusContent = styled.div`
	@media screen and (min-width: 768px) {
		width: var(--max-width);
	}
`;

const StyledSponsorsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	padding-bottom: 2rem;
	border-bottom: 1px solid var(--gradiant-white);
`;
const StyledSponsorsImg = styled.img`
	width: 125px;
	height: 30px;
	filter: invert(1);
	opacity: 0.4;
`;
const StyledFeaturedListContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		gap: 8rem;
	}
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
	StyledFeaturedText,
	StyledFeaturedListContainer,
	StyledFocusContent
};
