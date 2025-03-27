import PropertiesList from "./PropertyListing/PropertiesList"
import PropertiesSearchBar from "./SearchBarInProperties/PropertiesSearchBox"
import "./PropertiesMain.css"
import LastSeen from "./PropertiesLastSeen/LastSeen"

const PropertiesMain = () => {

    const lastSeenRow = localStorage.getItem("lastSeen")
    const lastSeenIds = lastSeenRow? JSON.parse(lastSeenRow) : []

    return (
        <div className="properties-main-container">
            <div>
                <PropertiesSearchBar />
                {lastSeenIds.length > 0 && <LastSeen lastSeenIds={lastSeenIds} />}
            </div>

            <PropertiesList />
        </div>
    )
}

export default PropertiesMain
