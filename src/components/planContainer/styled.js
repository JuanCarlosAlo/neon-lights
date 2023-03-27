import styled from 'styled-components';

const StyledPlanContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 4rem;
	padding-top: 2rem;
	color: white;
	color: var(--terciary-color);

	background: var(--main-color);
	background-repeat: no-repeat;
	background-position: top right;
`;

const StyledPlanContent = styled.div`
	max-width: var(--max-width);
`;

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 4rem;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export { StyledPlanContainer, StyledCardsContainer, StyledPlanContent };
