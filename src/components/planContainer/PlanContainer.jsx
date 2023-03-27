import { v4 } from "uuid"
import { cards } from "../../constants/const"
import ArticleTitle from "../articleTitle/ArticleTitle"
import CardItem from "../cardItem/CardItem"
import { StyledPlanContainer } from "./styled"

const PlanContainer =()=>{
    return <StyledPlanContainer>
        <ArticleTitle text={"Find a plan that's right for you"}/>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
        <div>
            {
                cards.map(card=>
                   <CardItem key={v4()} {...card}/>
                   )
            }
        </div>
    </StyledPlanContainer>
}

export default PlanContainer