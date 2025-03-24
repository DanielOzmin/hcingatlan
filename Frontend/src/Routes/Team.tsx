import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import TeamCard from "../Components/Team/TeamCard"
import { customers } from "../dummyData"
import "./RoutesCSS/Team.css"

const Team = () => {
    const { id } = useParams()

    return (<>
        <Header />
        <div className="team-highlight-container">
            <img src="/highlight.jpg" alt="highlight" />
            <div className="team-highlight-text">Team</div>
        </div>
        { id ? <Outlet /> : 
        <div className="team-content-container">
            {customers.map((customer, index) =>
                <TeamCard key={index} customer={customer} />
            )}
        </div> }
        
        

    </>)
}

export default Team