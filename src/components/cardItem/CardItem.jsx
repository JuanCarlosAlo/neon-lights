import { v4 } from 'uuid';
import { COLORS } from '../../constants/const';
import Button from '../button/Button';
import CheckedListItem from '../checkedListItem/CheckedListItem';
import LinkElement from '../linkElement/LinkElement';
import { StyledCardItem, StyledListTitle, StyledMostPopular, StyledPlanTitle, StyledPriceDollar, StyledPriceNumber } from './styled';

const CardItem = ({
	title,
	price,
	text,
	featuringText,
	checkedText,
	bgColor,
	special
}) => {
	console.log(special);
	return (
		<StyledCardItem bgColor={bgColor}>
			{
				popularFilter(special)
			}
			<StyledPlanTitle>{title}</StyledPlanTitle>
			<StyledPriceDollar>$</StyledPriceDollar><StyledPriceNumber>{price}</StyledPriceNumber><span>/mo</span>
			<p>{text}</p>
			<Button
				text={'Start Free Trial'}
				bgcolor={COLORS.buttonBlue}
				color={COLORS.buttonBlueColor}
				gradiantColor={COLORS.buttonBlueGradiant}
			>
				<LinkElement />
			</Button>
			<StyledListTitle>{featuringText}</StyledListTitle>
			{checkedText.map(text => (
				<CheckedListItem key={v4()} text={text} special={special}/>
			))}
		</StyledCardItem>
	);
};

const popularFilter =(special)=>{
	if (special) {
		return (<StyledMostPopular>
			<img src="/images/fire.svg" alt="" />
			<p>Most Popular</p>
		</StyledMostPopular>)
		
	}
}

export default CardItem;
