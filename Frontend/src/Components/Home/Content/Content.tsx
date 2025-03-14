import PropertyCard from "./ProperyCard"
import "./Content.css"
import properties from "../../../dummyData"

const Content = () => {
return(
    <div className="content-container">
        <h2>FEATURED PROPERTIES</h2>
        <div className="cards-container">
            {properties.map((property, index)=> <PropertyCard key={index} property={property} />)}

        </div>
    </div>
)
}
export default Content