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
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledBannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem;
	background: linear-gradient(
		45deg,
		${COLORS.gradientFromCard},
		${COLORS.gradientToCard}
	);
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export {
	StyledButtonsContainer,
	StyledResourcesContent,
	StyledResourcesContainer,
	StyledTabsContainer,
	StyledBannerContainer
};
