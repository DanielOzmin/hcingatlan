import AboutUsFixIntroduction from "../Components/AboutUs/AboutUsFixIntroduction"
import AgentCard from "../Components/AboutUs/AgentCard"
import IntroductionHighLight from "../Components/AboutUs/IntroductionHighLight"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"
import { customers } from "../dummyData"
import "./RoutesCSS/AboutUs.css"

const AboutUs = () => {
    return (
        <>
            <Header />
            <Highlight title="About Us" />
            <AboutUsFixIntroduction />
            <IntroductionHighLight />
            <div className="agent-list">
                {customers.map((customer, index) =>
                    <AgentCard key={index} agent={customer} />)}
            </div>
        </>
    )
}

export default AboutUs