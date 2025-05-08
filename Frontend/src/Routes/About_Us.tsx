import { useEffect, useState } from "react"
import AboutUsFixIntroduction from "../Components/AboutUs/AboutUsFixIntroduction"
import AgentCard from "../Components/AboutUs/AgentCard"
import IntroductionHighLight from "../Components/AboutUs/IntroductionHighLight"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"
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
            
            <div className="w-full flex justify-center px-4">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 p-4 max-w-screen-xl w-full justify-items-center">
                {employees.map((employee, index) =>
                    <AgentCard key={index} agent={employee} />)}
            </div>
            </div>
        </>
    )
}

export default AboutUs