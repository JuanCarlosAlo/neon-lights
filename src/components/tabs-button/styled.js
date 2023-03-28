import styled from 'styled-components';

const StyledButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-radius: 2rem;
	width: 160px;
	color: var(--terciary-color);
	background-color: var(--card-color);
	transform: rotate(${({ rotate }) => rotate});
	box-shadow: ${({ boxShadow }) => boxShadow};
	&:hover {
		cursor: pointer;
		color: white;
	}
`;

export { StyledButton };
