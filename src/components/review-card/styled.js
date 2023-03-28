import styled from 'styled-components';

const StyledReviewCard = styled.div`
	padding: 2rem;
	color: var(--terciary-color);
	background-color: var(--card-color);
`;

const StyledReviewImg = styled.img`
	width: 48px;
	border-radius: 50%;
`;

const StyledNameContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
`;

const StyledReviewApp = styled.p`
	color: #387cf0;
`;

export {
	StyledReviewCard,
	StyledReviewImg,
	StyledNameContainer,
	StyledReviewApp
};
