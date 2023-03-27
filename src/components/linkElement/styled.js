import styled from 'styled-components';

const StyledLink = styled.a`
	position: relative;
	display: inline-block;

	color: ${({ color }) => color};
	&::after {
		content: '';
		position: absolute;
		top: 2px;
		right: -15px;
		width: 15px;
		height: 15px;
		background-size: cover;
		background-image: url('/images/arrow-right.svg');
		filter: invert(27%) sepia(98%) saturate(2485%) hue-rotate(216deg)
			brightness(95%) contrast(93%);
	}
`;

export { StyledLink };
