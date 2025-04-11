import { useEffect, useState } from "react"
import AboutUsFixIntroduction from "../Components/AboutUs/AboutUsFixIntroduction"
import AgentCard from "../Components/AboutUs/AgentCard"
import IntroductionHighLight from "../Components/AboutUs/IntroductionHighLight"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"
import "./RoutesCSS/AboutUs.css"
import { Employee, fetchAllEmployee } from "../Apis"

const AboutUs = () => {
    const [employees, setEmployees] = useState<Employee[]>([]) 

    useEffect(()=>{
        
        fetchAllEmployee(setEmployees)
        
    },[])

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