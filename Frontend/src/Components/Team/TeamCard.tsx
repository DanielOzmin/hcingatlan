import { useNavigate } from "react-router-dom"

import "./TeamCard.css"
import { Employee } from "../../Apis"
import { useTranslation } from "react-i18next"

type Props = {
    employee: Employee
}

const TeamCard = ({employee}: Props) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    if(!employee) return

    const handleIntoduceClick = (id: string, name: string) => {
        navigate(`/team/${name}/${id}`)
    }

    const handlePropertiesClick = (customerId: string) => {
        navigate(`/properties/${customerId}`)
    }

    return (
        <div className="team-card-container">
            <div>
                <img src={employee.img} alt="Customer Image" className="team-card-img" />
            </div>
            <div className="team-card-details">
                <h1>{employee.name}</h1>
                <p>{employee.position}</p>
                <div className="team-card-info">
                    <div className="team-card-info-phone">
                        <label>{t("Phone")}: </label>
                        <span>{employee.phone}</span>
                    </div>
                    <div className="team-card-info-email">
                        <label>{t("Email")}: </label>
                        <span>{employee.email}</span>
                    </div>
                </div>
                <div className="team-card-buttons">
                    <button className="team-card-introducing-button" onClick={()=>handleIntoduceClick(employee.publicId,employee.name)}>{t("Introducing")}</button>
                    {employee.properties != undefined && employee.properties?.length > 0 && <button className="team-card-properties-button" onClick={()=>handlePropertiesClick(employee.publicId)}>{t("Properties")} ({employee.properties?.length})</button>}
                </div>

            </div>
        </div>
    )
}

export default TeamCard