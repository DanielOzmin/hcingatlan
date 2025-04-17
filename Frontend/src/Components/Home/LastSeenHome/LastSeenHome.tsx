import { useEffect, useState } from "react"
import PropertyCard from "../Content/ProperyCard"
import "./LastSeenHome.css"
import { Property, fetchProperties } from "../../../Apis"
import { useTranslation } from "react-i18next"


const LastSeenHome = () => {
    const [startIndex, setStartIndex] = useState<number>(0)
    const [properties, setProperties] = useState<Property[]>([])
    const { t } = useTranslation()

    useEffect(()=>{
        fetchProperties(setProperties)
    },[])

    const lastSeenRow = localStorage.getItem("lastSeen")
    const lastSeenIds = lastSeenRow ? JSON.parse(lastSeenRow) : []

    const lastSeenProperties = properties.filter(p => lastSeenIds.includes(p.id))

    const cardsPerShow = 3
    const currentCards = lastSeenProperties.slice(startIndex, startIndex + cardsPerShow)

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - cardsPerShow)
        }
    }

    const handleNext = () => {
        if (startIndex + cardsPerShow < lastSeenProperties.length) {
            setStartIndex(prev => prev + cardsPerShow)
        }
    }

    return (
        <div className="last-seen-home">
            <h1>{t("Last_seen")}</h1>
            <div className="last-seen-carousel">
                <button className="nav-button left"  onClick={handlePrev} disabled={startIndex === 0}>{'<'}</button>
                <div className="last-seen-cards">
                    {currentCards.map((property, index) => (
                        <PropertyCard key={index} property={property} />
                    ))}
                </div>
                <button className="nav-button right" onClick={handleNext} disabled={startIndex + cardsPerShow >= lastSeenProperties.length}>{'>'}</button>
            </div>
        </div>
    )
}

export default LastSeenHome