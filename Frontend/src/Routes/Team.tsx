import { useNavigate, useParams } from "react-router-dom"
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
    const navigate = useNavigate()

    const handleIntoduceClick = (id: string, name: string) => {
        navigate(`/team/${name}/${id}`)
    }

    const handlePropertiesClick = (employeeId: string) => {
        navigate(`/properties/employee/${employeeId}`)
    }

    useEffect(() => {

        fetchAllEmployee(setEmployees)

    }, [id])

    return (
        <>

            <Header />
            <Highlight title={t("Team")} />
            <div className="hidden md:block">
                {id ? <Outlet /> :
                    <div className="team-content-container">
                        {employees.map((employee, index) =>
                            <TeamCard key={index} employee={employee} />
                        )}
                    </div>}
            </div>

            <div className="bloc md:hidden">
                {id ? <Outlet /> : <div>
                {employees.map((employee, index) =>
                    employee &&
                    <div key={index} className="border border-gray-200 shadow-md rounded-lg p-4 m-4 bg-white">
                        <img className="w-full h-auto px-4" src={employee.img} />
                        <div className="mt-8 ml-2">
                            <h1 className="text-xl">{employee.name}</h1>
                            <p className="text-gray-400">{employee.position}</p>
                        </div>
                        <div className="p-8">
                            <div className="mb-1">
                                <label>{t("Phone")}: </label>
                                <span>{employee.phone}</span>
                            </div>
                            <div className="mb-1">
                                <label>{t("Email")}: </label>
                                <span>{employee.email}</span>
                            </div>
                        </div>
                        <div>
                            <button className="w-1/2 p-2 bg-[#48b9e0]" onClick={() => handleIntoduceClick(employee.publicId, employee.name)}>{t("Introducing")}</button>
                            {employee.properties != null && employee.properties?.length > 0 && <button className="w-1/2 p-2 bg-[#f4a746]" onClick={() => handlePropertiesClick(employee.publicId)}>{t("Properties")} ({employee.properties?.length})</button>}
                        </div>
                    </div>)}
                </div>}
            </div>
        </>)
}

export default Team