import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import TeamCard from "../Components/Team/TeamCard"
import { customers } from "../dummyData"
import "./RoutesCSS/Team.css"
import Highlight from "../Components/DefaultHighLight/Highlights"

const Team = () => {
    const { id } = useParams()

    return (
        <>
            <Header />
            <Highlight title="Team" />
            {id ? <Outlet /> :
                <div className="team-content-container">
                    {customers.map((customer, index) =>
                        <TeamCard key={index} customer={customer} />
                    )}
                </div>}
        </>)
}

export default Team