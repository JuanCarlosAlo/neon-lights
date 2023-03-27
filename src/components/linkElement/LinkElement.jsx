import { StyledLink } from "./styled"

const LinkElement =({text,color})=>{
    console.log(text)
    return(
        <StyledLink color={color} href="">{text}</StyledLink>
    )
}

export default LinkElement