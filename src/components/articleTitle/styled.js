import styled from 'styled-components';

const StyledArticleTitle = styled.h2`
	font-size: 2.5rem;
	text-align: center;
	
	padding-top: 2rem;
	padding-bottom: 2rem;
	margin: 0;
	color: white;
	
	@media screen and (min-width: 768px) {
		font-size: 3rem;
		margin-left: auto;
	margin-right: auto;
		width: 768px;
	}
`;

export { StyledArticleTitle };
