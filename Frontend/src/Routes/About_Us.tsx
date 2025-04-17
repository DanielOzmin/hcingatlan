import { useEffect, useState } from "react"
import AboutUsFixIntroduction from "../Components/AboutUs/AboutUsFixIntroduction"
import AgentCard from "../Components/AboutUs/AgentCard"
import IntroductionHighLight from "../Components/AboutUs/IntroductionHighLight"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"
import "./RoutesCSS/AboutUs.css"
import { Employee, fetchAllEmployee } from "../Apis"
import { useTranslation } from "react-i18next"

const AboutUs = () => {
    const [employees, setEmployees] = useState<Employee[]>([]) 
    const { t } = useTranslation()

    useEffect(()=>{
        
        fetchAllEmployee(setEmployees)
        
    },[])

    return (
        <>
            <Header />
            <Highlight title={t("About")} />
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