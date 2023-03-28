import { StyledNameContainer, StyledReviewApp, StyledReviewCard, StyledReviewImg } from "./styled"

const ReviewCard =({img,text,name,app})=>{
    return <StyledReviewCard>
        <StyledReviewImg src={img} alt="" />
        <p>{text}</p>
        <StyledNameContainer>
            <p>{name}</p>-<StyledReviewApp>{app}</StyledReviewApp>
        </StyledNameContainer>
    </StyledReviewCard>
}

export default ReviewCard