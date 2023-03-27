import FocusContainer from "../focusContainer/FocusContainer"
import Header from "../header/Header"
import PlanContainer from "../planContainer/PlanContainer"
import PrivacyContainer from "../privacyContainer/PrivacyContainer"

const MainContainer =()=>{
    return(
        <>
        <Header/>
        <FocusContainer/>
        <PrivacyContainer/>
        <PlanContainer/>
        </>
    )
}

export default MainContainer