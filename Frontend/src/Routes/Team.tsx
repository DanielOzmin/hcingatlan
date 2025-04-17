import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import TeamCard from "../Components/Team/TeamCard"
import "./RoutesCSS/Team.css"
import Highlight from "../Components/DefaultHighLight/Highlights"
import { useEffect, useState } from "react"
import { Employee, fetchAllEmployee } from "../Apis"
import { useTranslation } from "react-i18next"

const Team = () => {
    const { id } = useParams()
    const [employees, setEmployees] = useState<Employee[]>([])
    const { t } = useTranslation() 

    useEffect(()=>{
        
        fetchAllEmployee(setEmployees)

    },[id])

    return (
        <>
            <Header />
            <Highlight title={t("Team")} />
            {id ? <Outlet /> :
                <div className="team-content-container">
                    {employees.map((employee, index) =>
                        <TeamCard key={index} employee={employee} />
                    )}
                </div>}
        </>)
}

export default Team