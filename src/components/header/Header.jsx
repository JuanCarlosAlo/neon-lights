import Button from '../button/Button';
import {
	StyledHeader,
	StyledHeaderBottom,
	StyledHeaderButtonsContainer,
	StyledHeaderContainer,
	StyledHeaderImg,
	StyledHeaderLinkContainer,
	StyledHeaderSignInContainer,
	StyledHeaderSubTitle,
	StyledHeaderTitle,
	StyledHeaderTop
} from './styled';
import { COLORS } from '../../constants/const';
import { StyledLink } from '../linkElement/styled';
import LinkElement from '../linkElement/LinkElement';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
			<StyledHeaderTop>
				<StyledHeaderImg src='/images/logo.svg' alt='' />
				<StyledHeaderSignInContainer>
					<div>Sign In</div>
					<Button
						text={'Get Started'}
						bgcolor={COLORS.buttonBlue}
						color={COLORS.buttonBlueColor}
						gradiantColor={COLORS.buttonBlueGradiant}
					/>
				</StyledHeaderSignInContainer>
			</StyledHeaderTop>
			<StyledHeaderBottom>
			<StyledHeaderLinkContainer>
				<div>
					Launching Infinite Workspaces. <LinkElement text={'Learn More'} color={'var(--secondary-color)'}/>
				</div>
			</StyledHeaderLinkContainer>
			<StyledHeaderTitle>Where the world builds software</StyledHeaderTitle>
			<StyledHeaderSubTitle>
				Our landing page template works on all devices, so you only have to set
				it up once, and get beautiful results forever.
			</StyledHeaderSubTitle>
			<StyledHeaderButtonsContainer>
				<Button
					text={'Get Started For Free'}
					bgcolor={COLORS.buttonBlue}
					color={COLORS.buttonBlueColor}
					gradiantColor={COLORS.buttonBlueGradiant}
				/>
				<Button
					text={'Explore Docs'}
					bgcolor={COLORS.buttonBlack}
					color={COLORS.buttonBlackColor}
					gradiantColor={COLORS.buttonBlackGradiant}
				/>
			</StyledHeaderButtonsContainer>
			</StyledHeaderBottom>
			</StyledHeaderContainer>
			
			
		</StyledHeader>
	);
};

export default Header;
