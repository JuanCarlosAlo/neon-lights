import { useState } from "react"
import { COLORS } from "../../constants/const"
import { tabsButtons, tabsContent } from "../../constants/tabs-buttons"
import ArticleTitle from "../articleTitle/ArticleTitle"
import Button from "../button/Button"
import TabsButton from "../tabs-button/TabsButton"
import TabsElement from "../tabs-element/TabsElement"
import { StyledBannerContainer, StyledButtonsContainer, StyledResourcesContainer, StyledResourcesContent, StyledTabsContainer } from "./styled"

const SectionResources = ()=>{
    const [card,setCard] = useState(0)
    
    return <div>
        <StyledResourcesContainer>
        <StyledResourcesContent>
            <ArticleTitle text={'Resources to help you get the most out of Neon'}/>
            <StyledButtonsContainer>
              {
                tabsButtons.map((button,index)=>
                    <TabsButton
                    index={index}
                    setCard={setCard}
                    key={button.id}
                    {...button}
                    boxShadow={index===card ? ' 0px 7px 50px -5px rgba(37, 99, 235, 1)' : 'none' }
                    rotate={index===card ? '3deg' : '0deg'}
                    />
                    )
              }
              </StyledButtonsContainer>
              <StyledTabsContainer>
                {
                    tabsContent[card].cards.map((element) =>
                       <TabsElement key={element.id} {...element}/> 
                        )
                   
                }
                </StyledTabsContainer>
                <StyledBannerContainer>
                  <div>
                  <ArticleTitle text={'Get started with Neon'}/>
                  <p>It only takes a few minutes to get started with Neon. Understand your users, start free, today.</p>
                  </div>
                  <Button
                  text={'Get Started'}
                  bgcolor={COLORS.buttonBlue}
                  color={COLORS.buttonBlueColor}
                  gradiantColor={COLORS.buttonBlueGradiant}
                  />

                </StyledBannerContainer>
              </StyledResourcesContent>
            
        </StyledResourcesContainer>
    </div>
}

export default SectionResources