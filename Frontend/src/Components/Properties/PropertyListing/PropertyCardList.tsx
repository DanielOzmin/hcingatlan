import "./PropertyCardList.css"
import { useNavigate } from "react-router-dom"

import { Property } from "../../../dummyData"
import { formatNumber } from "../../../Services/format"

type Props = {
    property: Property
}

const PropertyCardList = ({ property }: Props) => {
    const navigate = useNavigate()

    const propertyDescritpion =
        property.description.length > 38 ?
            property.description.slice(0, 38) + "..." :
            property.description

    const handleCardClick = (id: string, city: string, district: string, propertyType: string, street: string) => {
        const storeId = localStorage.getItem("lastSeen")
        const seen = storeId ? JSON.parse(storeId) : []

        const savePropertyId = [property.id, ...seen.filter((id: string) => id !== property.id).slice(0, 10)]
        localStorage.setItem("lastSeen", JSON.stringify(savePropertyId))
        navigate(`/properties/${city}-${district}-${propertyType}-${street}/${id}`)
    }

    return (
        <div className="property-list-item">
            <div>
                <img src="/Testpic.jpg" alt="testpic" />
            </div>
            <div className="property-list-content">
                <div className="property-list-header" onClick={() => handleCardClick(property.id, property.city, property.district, property.propertyType, property.street)}>
                    {property.city} {property.district} ({property.area}) {property.street}
                </div>

                <div className="property-list-type-price-container">
                    <div>
                        <div className="property-list-type">
                            <p>{property.propertyType} / {property.propertyBuildType} </p>
                        </div>
                        <p>{propertyDescritpion}</p>
                    </div>
                    <div className="price-list-container">
                        <span className="price-list">{formatNumber(property.price)}</span><span className="currency-list"> Ft</span>
                    </div>
                </div>
                <div className="property-list-features">
                    <div className="property-list-box">
                        <p className="feature-label">SIZE</p>
                        <p className="feature-value">{property.floorArea}m²</p>
                    </div>
                    <div className="property-list-box">
                        <p className="feature-label">FLOOR</p>
                        <p className="feature-value">{property.floor}</p>
                    </div>
                    <div className="property-list-box">
                        <p className="feature-label">ROOM</p>
                        <p className="feature-value">{property.rooms}</p>
                    </div>
                    <div className="favorite-icon">❤️</div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCardList