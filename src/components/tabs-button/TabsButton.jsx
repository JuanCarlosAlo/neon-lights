import { StyledButton } from './styled';

const TabsButton = ({ img, text, index, setCard, boxShadow, rotate }) => {
	return (
		<StyledButton
			onClick={() => setCard(index)}
			boxShadow={boxShadow}
			rotate={rotate}
		>
			<img src={img} alt='' />
			<span>{text}</span>
		</StyledButton>
	);
};

export default TabsButton;
