import styled from 'styled-components';

const StyledCardItem = styled.div`
	padding: 1rem;
	text-align: left;
	background-color: ${({ bgColor }) => bgColor};
`;

export { StyledCardItem };
