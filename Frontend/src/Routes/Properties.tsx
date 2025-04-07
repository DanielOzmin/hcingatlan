import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import PropertiesMain from "../Components/Properties/PropertiesMain"

const Properties = () => {
    const { id } = useParams()

    return (
        <>
            <Header />
            <div className="content-container">
                {id ? <Outlet /> : <PropertiesMain />}
            </div>
        </>)
}

export default Properties