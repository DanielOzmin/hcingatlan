import "./PropertiesList.css"
import properties, { Property } from "../../../dummyData"
import PropertyCard from "../../Home/Content/ProperyCard"
import Pagination from "./Pagination"
import { useEffect, useState } from "react"
import { FaTh, FaList } from "react-icons/fa"
import PropertyCardList from "./PropertyCardList"
import FilterDropdown from "./FilterDropdown"
import { useParams } from "react-router-dom"


type View = "grid" | "list"
type OrderBy = "dateUp" |  "dateDown" | "priceUp" | "priceDown"

const PropertiesList = () => {
    const [current, setCurrent] = useState<Property[]>([])
    const [view, setView] = useState<View>("grid")
    const [orderBy, setOrderBy] = useState<OrderBy>("dateUp")
    const params = useParams<{customerId: string}>()
    const customerId = params.customerId
    console.log(params)

    useEffect(() => {
        let filtered = properties
      
        if (customerId) {
          filtered = filtered.filter(p => p.customerId === customerId)
        }
      
        switch (orderBy) {
          case "dateUp":
            filtered.sort((a, b) => a.uploadDate.getTime() - b.uploadDate.getTime())
            break;
          case "dateDown":
            filtered.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime())
            break;
          case "priceDown":
            filtered.sort((a, b) => b.price - a.price)
            break;
          case "priceUp":
            filtered.sort((a, b) => a.price - b.price)
            break;
        }
      
        setCurrent(filtered)
      }, [orderBy, properties, customerId])


    return (
        <div className="list-container">
            <div className="list-header">
                <div>
                    <h1>Properties: {current.length} found.</h1>
                </div>
                <div className="list-filters">
                    <div>Order by: 
                        <FilterDropdown setOrderBy={setOrderBy}/>
                    </div>
                    <FaTh size={24} className="grid-icon" onClick={()=>setView("grid")} />
                    <FaList size={24} className="list-icon" onClick={()=>setView("list")} />
                </div>
            </div>

            <div className={`list-property-container ${view}`}>
                {current.map((property, index) =>
                    view === "grid" ?
                        <PropertyCard key={index} property={property} /> :
                        <PropertyCardList key={index} property={property} />
                )}
            </div>
            <Pagination properties={properties} setCurrent={setCurrent} />
        </div>
    )
}

export default PropertiesList