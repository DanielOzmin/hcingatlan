import PropertiesList from "./PropertyListing/PropertiesList"
import PropertiesSearchBar from "./SearchBarInProperties/PropertiesSearchBox"
import "./PropertiesMain.css"
import LastSeen from "./PropertiesLastSeen/LastSeen"
import { Property } from "../../Apis"
import { useState } from "react"

const PropertiesMain = () => {
    const [properties, setProperties] = useState<Property[]>([])

    const lastSeenRow = localStorage.getItem("lastSeen")
    const lastSeenIds = lastSeenRow? JSON.parse(lastSeenRow) : []

    return (
        <div className="properties-main-container">
            <div>
                <PropertiesSearchBar setProperties={setProperties}/>
                {lastSeenIds.length > 0 && <LastSeen lastSeenIds={lastSeenIds} />}
            </div>

            <PropertiesList properties={properties} setProperties={setProperties}/>
        </div>
    )
}

export default PropertiesMain
