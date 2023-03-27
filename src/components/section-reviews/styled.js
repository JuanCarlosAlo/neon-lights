import styled from 'styled-components';

const StyledSectionReview = styled.div`
	position: relative;

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

export { StyledSectionReview };
