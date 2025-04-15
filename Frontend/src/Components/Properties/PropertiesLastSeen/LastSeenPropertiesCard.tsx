import { useNavigate } from "react-router-dom"
import { Property } from "../../../Apis"

type Props = {
    property: Property
}

const LastSeenPropertiesCard = ({ property }: Props) => {
    const navigate = useNavigate()

    const handlePropertyClick = (id: string, city: string, district: string, propertyType: string, street: string) => {
        const storeId = localStorage.getItem("lastSeen")
        const seen = storeId ? JSON.parse(storeId) : []

        const savePropertyId = [property.id, ...seen.filter((id: string) => id !== property.id).slice(0, 10)]
        localStorage.setItem("lastSeen", JSON.stringify(savePropertyId))

        console.log(localStorage.getItem("lastSeen"))

        navigate(`/properties/${city}-${district}-${propertyType}-${street}/${id}`)
    }

    return (
        <div className="last-seen-card">
            {property.img && property.img.length > 0 && (
                <img src={property.img[0]} alt="property-img" />
            )}
            <div className="last-seen-info" onClick={() => handlePropertyClick(property.id, property.city, property.district, property.propertyType, property.street)}>
                <h1>{property.transactionType} {property.propertyType}</h1>
                <h1>{property.city} {property.district ? property.district : "" }</h1>
                <p>{property.price.toLocaleString()} Ft</p>
            </div>
        </div>
    )
}

export default LastSeenPropertiesCard