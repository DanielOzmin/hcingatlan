import { useNavigate } from "react-router-dom"
import { Customer } from "../../dummyData"
import "./TeamCard.css"

type Props = {
    customer: Customer
}

const TeamCard = ({customer}: Props) => {
    const navigate = useNavigate()

    const handleIntoduceClick = (id: string, name: string) => {
        console.log(`/team/${name}/${id}`)
        navigate(`/team/${name}/${id}`)
    }

    const handlePropertiesClick = (customerId: string) => {
        navigate(`/properties/${customerId}`)
    }

    return (
        <div className="team-card-container">
            <div>
                <img src="/ExamplePic.webp" alt="Customer Image" className="team-card-img" />
            </div>
            <div className="team-card-details">
                <h1>{customer.name}</h1>
                <p>{customer.position}</p>
                <div className="team-card-info">
                    <div className="team-card-info-phone">
                        <label>Phone: </label>
                        <span>{customer.phone}</span>
                    </div>
                    <div className="team-card-info-email">
                        <label>Email: </label>
                        <span>{customer.email}</span>
                    </div>
                </div>
                <div className="team-card-buttons">
                    <button className="team-card-introducing-button" onClick={()=>handleIntoduceClick(customer.id,customer.name)}>Introducing</button>
                    <button className="team-card-properties-button" onClick={()=>handlePropertiesClick(customer.id)}>Properties ({customer.properties?.length})</button>
                </div>

            </div>
        </div>
    )
}

export default TeamCard