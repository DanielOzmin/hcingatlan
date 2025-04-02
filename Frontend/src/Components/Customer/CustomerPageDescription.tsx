import { useParams } from "react-router-dom"
import { customers } from "../../dummyData"

import "./CustomerPageDescription.css"


const CustomerPageDescription = () => {
    const { id } = useParams<{ id: string }>()

    const customer = customers.find(c => c.id == id)

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

export default CustomerPageDescription