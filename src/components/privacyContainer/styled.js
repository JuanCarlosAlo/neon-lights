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

const StyledPrivacyText = styled.p`
	font-size: 1.4rem;
	line-height: 26px;
`;

const StyledPrivacySubTitle = styled.p`
	font-size: 3rem;
	color: white;
	margin: 0;
	font-weight: 500;
`;

const StyledContentPrivacy = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 2rem;
	border-bottom: 2px solid var(--terciary-color);
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
	StyledPrivacySubTitle
};
