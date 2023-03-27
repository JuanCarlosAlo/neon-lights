import styled from 'styled-components';

const StyledCheckedListItem = styled.p`
	position: relative;
	padding-left: 2rem;
	text-align: left;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 1rem;
		width: 1rem;
		background-image: url('/images/check.svg');
		background-size: cover;
		opacity: 1;
		color: rgb(16 185 129);
	}
`;

export { StyledCheckedListItem };
