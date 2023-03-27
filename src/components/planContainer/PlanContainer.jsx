import { v4 } from 'uuid';
import { cards } from '../../constants/const';
import ArticleTitle from '../articleTitle/ArticleTitle';
import CardItem from '../cardItem/CardItem';
import {
	StyledCardsContainer,
	StyledPlanContainer,
	StyledPlanContent
} from './styled';

const PlanContainer = () => {
	return (
		<StyledPlanContainer>
			<StyledPlanContent>
				<ArticleTitle text={"Find a plan that's right for you"} />
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est.
				</p>
				<StyledCardsContainer>
					{cards.map(card => (
						<CardItem key={v4()} {...card} />
					))}
				</StyledCardsContainer>
			</StyledPlanContent>
		</StyledPlanContainer>
	);
};

export default PlanContainer;
