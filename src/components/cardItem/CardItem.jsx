import { v4 } from 'uuid';
import { COLORS } from '../../constants/const';
import Button from '../button/Button';
import CheckedListItem from '../checkedListItem/CheckedListItem';
import LinkElement from '../linkElement/LinkElement';
import { StyledCardItem } from './styled';

const CardItem = ({
	title,
	price,
	text,
	featuringText,
	checkedText,
	bgColor
}) => {
	console.log(bgColor);
	return (
		<StyledCardItem bgColor={bgColor}>
			<p>{title}</p>
			<p>${price}/mo</p>
			<p>{text}</p>
			<Button
				text={'Start Free Trial'}
				bgcolor={COLORS.buttonBlue}
				color={COLORS.buttonBlueColor}
				gradiantColor={COLORS.buttonBlueGradiant}
			>
				<LinkElement />
			</Button>
			<p>{featuringText}</p>
			{checkedText.map(text => (
				<CheckedListItem key={v4()} text={text} />
			))}
		</StyledCardItem>
	);
};

export default CardItem;
