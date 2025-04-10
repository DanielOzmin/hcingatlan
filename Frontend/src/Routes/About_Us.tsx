import AboutUsFixIntroduction from "../Components/AboutUs/AboutUsFixIntroduction"
import AgentCard from "../Components/AboutUs/AgentCard"
import IntroductionHighLight from "../Components/AboutUs/IntroductionHighLight"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"
import { employees } from "../dummyData"
import "./RoutesCSS/AboutUs.css"

const AboutUs = () => {
    return (
        <>
            <Header />
            <Highlight title="About Us" />
            <AboutUsFixIntroduction />
            <IntroductionHighLight />
            <div className="agent-list">
                {employees.map((employee, index) =>
                    <AgentCard key={index} agent={employee} />)}
            </div>
        </>
    )
}

export default AboutUs