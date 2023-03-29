import { footer } from "../../constants/footer"
import FooterMenu from "../footer-menu/FooterMenu"
import { FooterMenuContainer, StyledFooter, StyledFooterContent, StyledFooterLogo } from "./styles"

const Footer =()=>{
    return <StyledFooter>
        <StyledFooterContent>
        <div>
            <StyledFooterLogo src="/images/logo.svg" alt="" />
            <p>Terms · Privacy Policy</p>
        </div>
        <FooterMenuContainer>
            {
                footer.map(element => 
                   
                    <FooterMenu key={element.id} title={element.title} item={[...element.items]}/>
                    )
            }
        </FooterMenuContainer>
        </StyledFooterContent>
    </StyledFooter>
}

export default Footer