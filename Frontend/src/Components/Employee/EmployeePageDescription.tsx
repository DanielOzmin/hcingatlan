import { useParams } from "react-router-dom"


import "./EmployeePageDescription.css"
import { useEffect, useState } from "react"
import { Employee, fetchEmployeeById } from "../../Apis"
import { useTranslation } from "react-i18next"


const EmployeePageDescription = () => {
    const { id } = useParams<{ id: string }>()
    const [employee, setEmployee] = useState<Employee>()
    const { t } = useTranslation()

    if (!id) return

    useEffect(() => {
        fetchEmployeeById(id, setEmployee)
    }, [id])

    if (!employee) return


    return (
        <div>
            <div className="agent-card-container">
                <div className="agent-card-header">
                    <img src="/ExamplePic.webp" alt={employee.name} />
                    <div className="agent-card-header-info">
                        <h1>{employee.name}</h1>
                        <p>{employee.position}</p>
                        <div className="team-card-info">
                            <div>
                                <label>{t("Phone")}:</label>
                                <span>{employee.phone}</span>
                            </div>
                            <div>
                                <label>{t("Email")}:</label>
                                <span>{employee.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {employee.description && <>
                    <div className="agent-description-title">
                        {t("Introducing")}
                    </div>
                    <div className="agent-description">
                        {employee.description}
                    </div>
                </>}

            </div>


        </div>
    )
}

export default EmployeePageDescription