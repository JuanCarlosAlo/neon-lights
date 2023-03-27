import { v4 } from 'uuid';
import { features, sponsors } from '../../constants/const';
import ArticleTitle from '../articleTitle/ArticleTitle';
import {
	StyledFeaturedImg,
	StyledFeaturedList,
	StyledFeaturedText,
	StyledFeaturedTitle,
	StyledFocusContainer,
	StyledSponsorsContainer,
	StyledSponsorsImg
} from './styled';

const FocusContainer = () => {
	return (
		<StyledFocusContainer>
			<StyledSponsorsContainer>
				{sponsors.map(element => (
					<StyledSponsorsImg key={v4()} src={element.img} alt='' />
				))}
			</StyledSponsorsContainer>
			<div>
				<ArticleTitle text={'Focus on solving bigger problems'}/>
				<img src='/images/features.svg' alt='' />
			</div>
			<div>
				{features.map(element=> 
					<StyledFeaturedList key={v4()}>
						<StyledFeaturedImg src={element.img} alt="" />
						<StyledFeaturedTitle>{element.title}</StyledFeaturedTitle>
						<StyledFeaturedText>{element.text}</StyledFeaturedText>
					</StyledFeaturedList>
					)}
			</div>
		</StyledFocusContainer>
	);
};

export default FocusContainer;
