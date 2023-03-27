import ArticleTitle from '../articleTitle/ArticleTitle';
import CheckedListItem from '../checkedListItem/CheckedListItem';
import {
	StyledContentPrivacy,
	StyledListPrivacy,
	StyledPrivacyContainer,
	StyledPrivacyContent,
	StyledPrivacyContentFlex,
	StyledPrivacyImg,
	StyledPrivacySubTitle,
	StyledPrivacyText,
	StyledPrivacyUpperText
} from './styled';

const PrivacyContainer = () => {
	return (
		<StyledPrivacyContainer>
			<StyledPrivacyContent>
				<ArticleTitle text={'Use sensitive data without sacrificing privacy'} />
				<StyledPrivacyUpperText>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est.
				</StyledPrivacyUpperText>
				<StyledPrivacyContentFlex>
					<StyledPrivacyImg src='/images/features-02.png' alt='' />
					<StyledContentPrivacy>
						<StyledPrivacySubTitle>
							Standardized dev environments
						</StyledPrivacySubTitle>
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
				</StyledPrivacyContentFlex>
			</StyledPrivacyContent>
		</StyledPrivacyContainer>
	);
};
export default PrivacyContainer;
