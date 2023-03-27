import styled from 'styled-components';

const StyledPrivacyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 4rem;
	padding-top: 2rem;
	color: white;
	color: var(--terciary-color);

	background: var(--main-color) url('/images/features-illustration.svg');
	background-repeat: no-repeat;
	background-position: top right;
`;

const StyledPrivacyContent = styled.div`
	@media screen and (min-width: 768px) {
		width: var(--max-width);
	}
`;
const StyledPrivacyContentFlex = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 4rem;
	border-bottom: 1px solid var(--gradiant-white);
	@media screen and (min-width: 768px) {
		flex-direction: row-reverse;
	}
`;
const StyledPrivacyImg = styled.img`
	@media screen and (min-width: 768px) {
		max-width: 540px;
	}
`;
const StyledPrivacyText = styled.p`
	font-size: 1.4rem;
	line-height: 26px;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`;
const StyledPrivacyUpperText = styled.p`
	font-size: 1.4rem;
	line-height: 26px;
	
`;

const StyledPrivacySubTitle = styled.p`
	font-size: 3rem;
	color: white;
	margin: 0;
	font-weight: 500;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`;

const StyledContentPrivacy = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 2rem;

	@media screen and (min-width: 768px) {
		align-items: flex-start;
	}
`;

const StyledListPrivacy = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export {
	StyledPrivacyContainer,
	StyledContentPrivacy,
	StyledListPrivacy,
	StyledPrivacyText,
	StyledPrivacySubTitle,
	StyledPrivacyContent,
	StyledPrivacyContentFlex,
	StyledPrivacyImg,
	StyledPrivacyUpperText
};
