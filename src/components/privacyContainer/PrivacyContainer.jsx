import ArticleTitle from '../articleTitle/ArticleTitle';
import CheckedListItem from '../checkedListItem/CheckedListItem';
import { StyledContentPrivacy, StyledListPrivacy, StyledPrivacyContainer, StyledPrivacySubTitle, StyledPrivacyText } from './styled';

const PrivacyContainer = () => {
	return (
		<StyledPrivacyContainer>
			<ArticleTitle text={'Use sensitive data without sacrificing privacy'} />
			<StyledPrivacyText>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est.
			</StyledPrivacyText>
			<div>
				<img src='/images/features-02.png' alt='' />
				<StyledContentPrivacy>
					<StyledPrivacySubTitle>Standardized dev environments</StyledPrivacySubTitle>
					<StyledPrivacyText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</StyledPrivacyText>
                    <StyledListPrivacy>

                   
					<CheckedListItem text={'Performance reviews'} />
					<CheckedListItem text={'Objectives and goal setting'} />
					<CheckedListItem text={'Manager check-ins'} />
                    </StyledListPrivacy>
				</StyledContentPrivacy>
			</div>
		</StyledPrivacyContainer>
	);
};
export default PrivacyContainer;
