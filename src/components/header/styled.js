import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 4rem;

	color: var(--terciary-color);

	background: url('/images/hero-illustration.svg'),
		linear-gradient(180deg, var(--main-color) 90%, var(--gradiant-white));
	background-size: cover;
	background-position: center;
`;

const StyledHeaderContainer = styled.div`
	@media screen and (min-width: 768px) {
		width: var(--max-width);
	}
`;

const StyledHeaderBottom = styled.div`
	text-align: center;
	@media screen and (min-width: 768px) {
		text-align: left;
		width: 640px;
	}
`;
const StyledHeaderLinkContainer = styled.div`
	width: 100%;

	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1.8rem;
	background-color: var(--quaternary-color);
	border-radius: 2rem;
	@media screen and (min-width: 768px) {
		width: fit-content;
	}
`;

const StyledHeaderTitle = styled.h1`
	font-size: 4rem;
	color: white;
	@media screen and (min-width: 768px) {
		font-size: 5rem;
	}
`;
const StyledHeaderSubTitle = styled.p`
	font-size: 1.4rem;
	line-height: 2rem;
`;

const StyledHeaderImg = styled.img`
	width: 40px;
	height: 40px;
`;

const StyledHeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: var(--max--width);
	padding-top: 0.5rem;
	margin-bottom: 4rem;
`;
const StyledHeaderSignInContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledHeaderButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 4rem;
	width: 100%;
	gap: 0.5rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export {
	StyledHeaderImg,
	StyledHeaderTop,
	StyledHeaderSignInContainer,
	StyledHeaderButtonsContainer,
	StyledHeader,
	StyledHeaderTitle,
	StyledHeaderSubTitle,
	StyledHeaderLinkContainer,
	StyledHeaderContainer,
	StyledHeaderBottom
};
