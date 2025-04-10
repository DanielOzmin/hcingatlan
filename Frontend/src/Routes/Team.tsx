import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import TeamCard from "../Components/Team/TeamCard"
import { employees } from "../dummyData"
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
                    {employees.map((employee, index) =>
                        <TeamCard key={index} employee={employee} />
                    )}
                </div>}
        </>)
}

export default Team