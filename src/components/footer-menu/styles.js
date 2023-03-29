import styled from 'styled-components';

const StyledFooterMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: var(--terciary-color);
	padding-bottom: 4rem;
`;

const StyledMenuTitle = styled.p`
	color: white;
`;

const StyledMenuItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export { StyledFooterMenu, StyledMenuTitle, StyledMenuItems };
