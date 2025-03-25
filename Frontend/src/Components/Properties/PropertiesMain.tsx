import PropertiesList from "./PropertiesList"
import PropertiesSearchBar from "./PropertiesSearchBox"
import "./PropertiesMain.css"

const PropertiesMain = () => {
    return (
    <div className="properties-main-container">
        <PropertiesSearchBar/>
        <PropertiesList/>
    </div>
    )
}

export default PropertiesMain
