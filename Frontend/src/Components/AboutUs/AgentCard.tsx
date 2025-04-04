import { useNavigate } from "react-router-dom"
import { Customer } from "../../dummyData"

import "./AgentCard.css"

type Props = {
    agent: Customer
}


const AgentCard = ({ agent }: Props) => {
    const navigate = useNavigate()

    const handleClick = (id: string, name: string) => {
        navigate(`/team/${name}/${id}`)
    }

    return (
        <div className="agent-card">
            <img src="/ExamplePic.webp" alt="agent" />
            <div className="agent-info">
                <h1>{agent.name}</h1>
                <p>{agent.position}</p>
                <button onClick={() => handleClick(agent.id, agent.name)}>Introduction →</button>
            </div>

        </div>
    )
}

export default AgentCard