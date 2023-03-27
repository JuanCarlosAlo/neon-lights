import styled from 'styled-components';

const StyledButton = styled.div`
	position: relative;
	padding: 1rem;
	background: ${({ gradiantColor }) => gradiantColor};
	color: ${({ color }) => color};
	border-radius: 0.4rem;
	text-align: center;
	cursor: pointer;
	&:hover {
		background: ${({ bgcolor }) => bgcolor};
	}
`;

export { StyledButton };
