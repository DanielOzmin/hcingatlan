import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"

const Properties = () => {
    return(<>
        <Header/>
        <div className="content-container">
            <Outlet />
        </div>
        
        </>)
}

export default Properties