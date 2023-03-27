import { StyledButton } from "./styled"

const Button =({text,bgcolor,color,gradiantColor})=>{

    return(
        <StyledButton bgcolor={bgcolor} color={color} gradiantColor={gradiantColor}>
            {text}
        </StyledButton>
    )
}

export default Button