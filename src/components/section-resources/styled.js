import styled from 'styled-components';
import { COLORS } from '../../constants/const';

const StyledResourcesContainer = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 4rem;
`;

const StyledResourcesContent = styled.div`
	margin-left: auto;
	margin-right: auto;
	@media screen and (min-width: 768px) {
		width: var(--max-width);
	}
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
`;
const StyledTabsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem;
	margin-bottom: 2rem;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledBannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 4rem;

	color: rgb(191 219 254);
	background: linear-gradient(
		45deg,
		${COLORS.gradientFromCard},
		${COLORS.gradientToCard}
	);
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
	}
`;

const StyledBannerTitle = styled.h3`
	font-size: 2.5rem;
	text-align: center;
	width: fit-content;

	margin: 0;
	color: white;
`;

export {
	StyledButtonsContainer,
	StyledResourcesContent,
	StyledResourcesContainer,
	StyledTabsContainer,
	StyledBannerContainer,
	StyledBannerTitle
};
