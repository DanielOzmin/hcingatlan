import "./PropertiesList.css"
import properties from "../../dummyData"
import PropertyCard from "../Home/Content/ProperyCard"

const PropertiesList = () => {
    return (
        <div className="list-container">
            <div className="list-header">
                <div>
                    <h1>Properties: 5 found.</h1>
                    <span>1-12</span>
                </div>
                <div className="list-filters">
                    <div>filter element</div>
                    <div>order element</div>
                    <div>order element</div>
                </div>
            </div>

            <div className="list-property-container">
                {properties.map((property, index) => <PropertyCard key={index} property={property} />)}
            </div>
        </div>
    )
}

export default PropertiesList