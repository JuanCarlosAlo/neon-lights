
import { reviews } from "../../constants/reviews"
import ArticleTitle from "../articleTitle/ArticleTitle"
import ReviewCard from "../review-card/ReviewCard"
import { StyledSectionContent, StyledSectionReview, StyledTestimonialsContainer } from "./styled"

const SectionReviews =()=>{
    return(
        <StyledSectionReview>
            <StyledSectionContent>
            <ArticleTitle text={'Sound too good ? Hear what our customers have to say'}/>
            <StyledTestimonialsContainer>
                {
                    reviews.map(card=>
                        <ReviewCard key={card.id} {...card}/>
                        )
                }
            </StyledTestimonialsContainer>
            </StyledSectionContent>
        </StyledSectionReview>
    )
}

export default SectionReviews