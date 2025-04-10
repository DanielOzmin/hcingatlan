import { useParams } from "react-router-dom"
import { employees } from "../../dummyData"

import "./EmployeePageDescription.css"


const EmployeePageDescription = () => {
    const { id } = useParams<{ id: string }>()

    const customer = employees.find(e => e.publicId == id)

    return (
        <div>
            <div className="agent-card-container">
                <div className="agent-card-header">
                    <img src="/ExamplePic.webp" alt={customer?.name} />
                    <div className="agent-card-header-info">
                        <h1>{customer?.name}</h1>
                        <p>{customer?.position}</p>
                        <div className="team-card-info">
                            <div>
                                <label>Phone:</label>
                                <span>{customer?.phone}</span>
                            </div>
                            <div>
                                <label>Email:</label>
                                <span>{customer?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agent-description-title">
                    Description
                </div>
                <div className="agent-description">
                    {customer?.description}
                </div>
            </div>


        </div>
    )
}

export default EmployeePageDescription