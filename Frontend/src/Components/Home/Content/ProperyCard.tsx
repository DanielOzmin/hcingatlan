import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"

import "./PropertyCard.css"
import { Property } from "../../../dummyData"
import { formatNumber } from "../../../Services/format"
import { useState } from "react"

type Props = {
    property: Property
}

const PropertyCard = ({ property }: Props) => {
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState<boolean>(() => {
        const favorites: string[] = JSON.parse(localStorage.getItem("favorites") || "[]")
        return favorites.includes(property.id)
    })

    const propertyDescritpion =
        property.description.length > 64 ?
            property.description.slice(0, 64) + "..." :
            property.description

    const handleClick = (id: string, city: string, district: string, propertyType: string, street: string) => {
        const storeId = localStorage.getItem("lastSeen")
        const seen = storeId ? JSON.parse(storeId) : []

        const savePropertyId = [property.id, ...seen.filter((id: string) => id !== property.id).slice(0, 10)]
        localStorage.setItem("lastSeen", JSON.stringify(savePropertyId))

        console.log(localStorage.getItem("lastSeen"))

        navigate(`/properties/${city}-${district}-${propertyType}-${street}/${id}`)
    }

    const handleFavorite = () => {
        setIsFavorite(prev => {
            const updated = !prev

            const storeId = localStorage.getItem("favorites")
            const favorites = storeId ? JSON.parse(storeId) : []

            if (updated) {
                const updatedFavorites = [property.id, ...favorites.filter((id: string) => id !== property.id)]
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
            } else {
                const updatedFavorites = favorites.filter((id: string) => id !== property.id)
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
            }
            window.dispatchEvent(new Event("favoritesUpdated"))

            return updated
        })
        console.log(property.id)
        console.log(localStorage.getItem("favorites"))
    }

    return (
        <div className="property-card">
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
            <div className="property-details" onClick={() => handleClick(property.id, property.city, property.district, property.propertyType, property.street)}>
                <h3>{property.city} {property.district} (Albertfalva), {property.street}</h3>
            </div>
            <p>{propertyDescritpion}</p>
            <div className="price-type-container">
                <div className="price-container">
                    <span className="price">{formatNumber(property.price)}</span><span className="currency"> Ft</span>
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
                <FontAwesomeIcon onClick={handleFavorite} icon={isFavorite ? faHeartSolid : faHeartRegular} className={`card-heart ${isFavorite ? "favorite" : ""}`} size="2x" />
            </div>

        </div>
    )
}

export default PropertyCard