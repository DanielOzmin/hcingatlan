import "./PropertyCardList.css"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"

import { formatNumber } from "../../../Services/format"
import { useState } from "react"
import { Property } from "../../../Apis"
import { useTranslation } from "react-i18next"

type Props = {
    property: Property
}

const PropertyCardList = ({ property }: Props) => {
    const { t } = useTranslation()
    const [isFavorite, setIsFavorite] = useState<boolean>(() => {
        const favorites: string[] = JSON.parse(localStorage.getItem("favorites") || "[]")
        return favorites.includes(property.id)
    })
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
        <div className="property-list-item">
            <div>
                {property.img && property.img.length > 0 && (
                    <img src={property.img[0]} alt="property-img" />
                )}
            </div>
            <div className="property-list-content">
                <div className="property-list-header" onClick={() => handleCardClick(property.id, property.city, property.district, property.propertyType, property.street)}>
                    {property.city} {property.district} ({property.area}) {property.street}
                </div>

                <div className="property-list-type-price-container">
                    <div>
                        <div className="property-list-type">
                            <p>{t(property.propertyType)} / {property.propertyBuildType} </p>
                        </div>
                        <p>{propertyDescritpion}</p>
                    </div>
                    <div className="price-list-container">
                        <span className="price-list">{formatNumber(property.price)}</span><span className="currency-list"> Ft</span>
                    </div>
                </div>
                <div className="property-list-features">
                    <div className="property-list-box">
                        <p className="feature-label">{t("SIZE")}</p>
                        <p className="feature-value">{property.floorArea}m²</p>
                    </div>
                    <div className="property-list-box">
                        {property.propertyType == "House" ? <p className="feature-label">{t("PARCEL")}</p> : <p className="feature-label">{t("FLOOR")}</p>}
                        {property.propertyType == "House" ? <p className="feature-value">{property.parcel}</p> : <p className="feature-value">{property.floor}</p>}
                    </div>
                    <div className="property-list-box">
                        <p className="feature-label">{t("ROOM")}</p>
                        <p className="feature-value">{property.rooms}</p>
                    </div>
                    <FontAwesomeIcon onClick={handleFavorite} icon={isFavorite ? faHeartSolid : faHeartRegular} className={`list-heart ${isFavorite ? "favorite" : ""}`} size="2x" />
                </div>
            </div>
        </div>
    )
}

export default PropertyCardList