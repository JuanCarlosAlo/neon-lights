import { StyledButton } from "./styled"

const TabsButton =({img,text})=>{
    return <StyledButton>
        <img src={img} alt="" />
        <span>{text}</span>
    </StyledButton>
}

export default TabsButton