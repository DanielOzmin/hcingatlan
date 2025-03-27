import properties from "../../../dummyData"
import LastSeenPropertiesCard from "./LastSeenPropertiesCard"

import "./LastSeenProperties.css"

type Props = {
    lastSeenIds: string[]
}

const LastSeen = ({ lastSeenIds }: Props) => {

    const lastSeenProperties = properties.filter(p => lastSeenIds.includes(p.id))

    return (
        <div className="lastseen-properties-container">
            <h2>Last Seen</h2>
            {lastSeenProperties.map((property, index) =>
                <LastSeenPropertiesCard key={index} property={property} />)}
        </div>
    )
}

export default LastSeen