import { useNavigate } from "react-router-dom"

import "./TeamCard.css"
import { Employee } from "../../Apis"

type Props = {
    employee: Employee
}

const TeamCard = ({employee}: Props) => {
    const navigate = useNavigate()

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
                        <label>Phone: </label>
                        <span>{employee.phone}</span>
                    </div>
                    <div className="team-card-info-email">
                        <label>Email: </label>
                        <span>{employee.email}</span>
                    </div>
                </div>
                <div className="team-card-buttons">
                    <button className="team-card-introducing-button" onClick={()=>handleIntoduceClick(employee.publicId,employee.name)}>Introducing</button>
                    <button className="team-card-properties-button" onClick={()=>handlePropertiesClick(employee.publicId)}>Properties ({employee.properties?.length})</button>
                </div>

            </div>
        </div>
    )
}

export default TeamCard