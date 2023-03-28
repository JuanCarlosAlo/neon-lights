import { StyledImgContainer, StyledTabElement, StyledTabImg } from "./styled"

const TabsElement =({img,text})=>{
    return <StyledTabElement>
        <StyledImgContainer>
            <StyledTabImg src={img} alt="" />
        </StyledImgContainer>
        <p>{text}</p>
    </StyledTabElement>
}

export default TabsElement