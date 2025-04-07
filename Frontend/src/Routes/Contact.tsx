import ContactForm from "../Components/Contact/ContactForm"
import ContactMainInfo from "../Components/Contact/ContactMainInfo"
import ReportAndCompanyInfo from "../Components/Contact/ReportAndCompanyInfo"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"



const Contact = () => {
    return (
        <>
            <Header/>
            <Highlight title="Contact" />
            <ContactMainInfo/>
            <ReportAndCompanyInfo/>
            <ContactForm/>
        </>
    )
}

export default Contact