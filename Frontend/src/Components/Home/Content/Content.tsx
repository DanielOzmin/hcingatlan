import PropertyCard from "./ProperyCard"
import "./Content.css"
import { useEffect } from "react"
import { Property, fetchProperties } from "../../../Apis"
import { useTranslation } from "react-i18next"

type Props = {
    properties: Property[]
    setProperties: React.Dispatch<React.SetStateAction<Property[]>>
}

const Content = ({properties, setProperties}: Props) => {
    const { t } = useTranslation()

    useEffect(() => {
        fetchProperties(setProperties)
    }, [])

    const featureProperties = properties.filter((p) => p.featured === true).slice(0, 6)

    return (
        <div className="content-container">
            <h2>{t("Featured_properties")}</h2>
            <div className="cards-container">
                {featureProperties.map((property, index) => <PropertyCard key={index} property={property} />)}

            </div>
        </div>
    )
}
export default Content