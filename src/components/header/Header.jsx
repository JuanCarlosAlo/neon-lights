import {
	StyledHeaderImg,
	StyledHeaderSignInContainer,
	StyledHeaderTop
} from './styled';

const Header = () => {
	return (
		<header>
			<StyledHeaderTop>
				<StyledHeaderImg src='/images/logo.svg' alt='' />
				<StyledHeaderSignInContainer>
					<div>Sign In</div>
					<div>Get Started</div>
				</StyledHeaderSignInContainer>
			</StyledHeaderTop>
			<div>
				<div>Launching Infinite Workspaces. Learn More</div>
			</div>
			<h1>Where the world builds software</h1>
			<p>
				Our landing page template works on all devices, so you only have to set
				it up once, and get beautiful results forever.
			</p>
            <div>Get started for free</div>
            <div>Explore Docs</div>
		</header>
	);
};

export default Header;
