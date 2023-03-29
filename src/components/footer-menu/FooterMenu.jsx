import { v4 } from 'uuid';
import { StyledFooterMenu, StyledMenuItems, StyledMenuTitle } from './styles';

const FooterMenu = ({ title, item }) => {
	console.log(item);
	return (
		<StyledFooterMenu>
			<StyledMenuTitle>{title}</StyledMenuTitle>
			<StyledMenuItems>
				{item.map(element => (
					<div key={v4()}>{element}</div>
				))}
			</StyledMenuItems>
		</StyledFooterMenu>
	);
};

export default FooterMenu;
