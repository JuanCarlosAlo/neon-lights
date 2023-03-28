import { tabsButtons } from "../../constants/tabs-buttons"
import ArticleTitle from "../articleTitle/ArticleTitle"
import TabsButton from "../tabs-button/TabsButton"
import { StyledButtonsContainer } from "./styled"

const SectionResources = ()=>{
    return <div>
        <div>
            <ArticleTitle text={'Resources to help you get the most out of Neon'}/>
            <StyledButtonsContainer>
              {
                tabsButtons.map(button=>
                    <TabsButton
                    key={button.id}
                    {...button}
                    />
                    )
              }
            </StyledButtonsContainer>
        </div>
    </div>
}

export default SectionResources