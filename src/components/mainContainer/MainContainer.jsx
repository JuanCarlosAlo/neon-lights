import FocusContainer from "../focusContainer/FocusContainer"
import Header from "../header/Header"
import PlanContainer from "../planContainer/PlanContainer"
import PrivacyContainer from "../privacyContainer/PrivacyContainer"
import SectionReviews from "../section-reviews/SectionReviews"

const MainContainer =()=>{
    return(
        <>
        <Header/>
        <FocusContainer/>
        <PrivacyContainer/>
        <PlanContainer/>
        <SectionReviews/>
        </>
    )
}

export default MainContainer