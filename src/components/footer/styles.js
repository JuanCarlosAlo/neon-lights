import styled from 'styled-components';

const StyledFooter = styled.div`
	padding-left: 2rem;
	padding-right: 2rem;
`;
const StyledFooterContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	color: var(--terciary-color);
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 2rem;
		width: var(--max-width);
	}
`;
const StyledFooterLogo = styled.img`
	width: 24px;
`;
const FooterMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		gap: 6rem;
	}
`;

export {
	FooterMenuContainer,
	StyledFooter,
	StyledFooterContent,
	StyledFooterLogo
};
