import PropertyCard from "./ProperyCard"
import "./Content.css"
import properties from "../../../dummyData"

const Content = () => {

    const featureProperties = properties.filter((p) => p.featured === true).slice(0,6)

return(
    <div className="content-container">
        <h2>FEATURED PROPERTIES</h2>
        <div className="cards-container">
            {featureProperties.map((property, index)=> <PropertyCard key={index} property={property} />)}

        </div>
    </div>
)
}
export default Content