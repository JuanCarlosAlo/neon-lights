import styled from 'styled-components';

const StyledSectionReview = styled.div`
	position: relative;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 4rem;
	background: linear-gradient(
		0deg,
		rgba(17, 24, 39, 1) 60%,
		rgba(25, 34, 49, 1) 100%
	);

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			0deg,
			rgba(17, 24, 39, 1) 0%,
			rgba(25, 34, 49, 0) 40%
		);
	}
`;
const StyledSectionContent = styled.div`
	margin-left: auto;
	margin-right: auto;
	@media screen and (min-width: 768px) {
		width: var(--max-width);
	}
`;

const StyledTestimonialsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export {
	StyledSectionReview,
	StyledTestimonialsContainer,
	StyledSectionContent
};
