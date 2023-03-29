import FocusContainer from "../focusContainer/FocusContainer"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import PlanContainer from "../planContainer/PlanContainer"
import PrivacyContainer from "../privacyContainer/PrivacyContainer"
import SectionResources from "../section-resources/SectionResources"
import SectionReviews from "../section-reviews/SectionReviews"

const MainContainer =()=>{
    return(
        <>
        <Header/>
        <FocusContainer/>
        <PrivacyContainer/>
        <PlanContainer/>
        <SectionReviews/>
        <SectionResources/>
        <Footer/>
        </>
    )
}

export default MainContainer