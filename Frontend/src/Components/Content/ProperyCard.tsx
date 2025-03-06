import { useNavigate } from "react-router-dom"

import "./PropertyCard.css"
import { Property } from "../../dummyData"

type Props = {
    property: Property
}

const PropertyCard = ({ property }: Props) => {
    const navigate = useNavigate()

    const propertyDescritpion =
        property.description.length > 64 ?
            property.description.slice(0, 64) + "..." :
            property.description

    const handleClick = (id: string, city: string, district: string, propertyType: string, street: string) => {
        navigate(`/properties/${city}-${district}-${propertyType}-${street}/${id}`)
    }
    return (
        <div className="property-card" onClick={() => handleClick(property.id, property.city, property.district, property.propertyType, property.street)}>
            <div className="img-container">
                <img src="/Testpic.jpg" alt="property-img" />
                <span className="status">
                    {property.transactionType}
                </span>
                <span className="img-count">
                    <img src="/imgicon.jpg" alt="img-icon" />
                    {property.img?.length}
                </span>
            </div>
            <div className="property-details">
                <h3>{property.city} {property.district} (Albertfalva), {property.street}</h3>
            </div>
            <p>{propertyDescritpion}</p>
            <div className="price-type-container">
                <div className="price-container">
                    <span className="price">{property.price} Ft</span>
                </div>
                <span className="property-type">{property.propertyType}</span>
            </div>
            <div className="property-features">
                <div className="property-box">
                    <p className="feature-label">SIZE</p>
                    <p className="feature-value">{property.floorArea}m²</p>
                </div>
                <div className="property-box">
                    <p className="feature-label">FLOOR</p>
                    <p className="feature-value">{property.floor}.</p>
                </div>
                <div className="property-box">
                    <p className="feature-label">ROOM</p>
                    <p className="feature-value">{property.floor}</p>
                </div>
                <div className="favorite-icon">
                    ❤️
                </div>
            </div>

        </div>
    )
}

export default PropertyCard