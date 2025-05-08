import LastSeenPropertiesCard from "./LastSeenPropertiesCard"

import "./LastSeenProperties.css"
import { useEffect, useState } from "react"
import { Property, fetchProperties } from "../../../Apis"
import { useTranslation } from "react-i18next"

type Props = {
    lastSeenIds: string[]
}

const LastSeen = ({ lastSeenIds }: Props) => {
    const [properties, setProperties] = useState<Property[]>([])
    const { t } = useTranslation()

    useEffect(()=>{

        fetchProperties(setProperties)
       
    },[])

    const lastSeenProperties = properties.filter(p => lastSeenIds.includes(p.id))

    return (
        <div className="lastseen-properties-container">
            
            <h2 className="text-center mb-8 text-2xl font-bold" >{t("Last_seen")}</h2>
            {lastSeenProperties.map((property, index) =>
                <LastSeenPropertiesCard key={index} property={property} />)}
         
        </div>
    )
}

export default LastSeen