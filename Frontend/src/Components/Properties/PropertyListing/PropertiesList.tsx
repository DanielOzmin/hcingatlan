import "./PropertiesList.css"
import PropertyCard from "../../Home/Content/ProperyCard"
import Pagination from "./Pagination"
import { useEffect, useState } from "react"
import { FaTh, FaList } from "react-icons/fa"
import PropertyCardList from "./PropertyCardList"
import FilterDropdown from "./FilterDropdown"
import { useParams } from "react-router-dom"
import { Property, fetchProperties } from "../../../Apis"


type View = "grid" | "list"
type OrderBy = "dateUp" | "dateDown" | "priceUp" | "priceDown"

type Props = {
    setProperties: React.Dispatch<React.SetStateAction<Property[]>>
    properties: Property[]
}

const PropertiesList = ({properties, setProperties} : Props) => {
  const [current, setCurrent] = useState<Property[]>([])
  const [view, setView] = useState<View>("grid")
  const [orderBy, setOrderBy] = useState<OrderBy>("dateUp")
  const { employeeId, count, city, district } = useParams<{ employeeId?: string, count?: string, city?: string, district?: string }>()

  useEffect(() => {
    fetchProperties(setProperties)
  }, [])

  useEffect(() => {
    let filtered = properties

    if (employeeId) {
      filtered = filtered.filter(p => p.employeeId === employeeId)
    } else if (count) {
      const stored = localStorage.getItem("favorites")
      const favorites = stored ? JSON.parse(stored) : []

      filtered = properties.filter(p => favorites.includes(p.id))
    } else if (city && district) {
      filtered = properties.filter(
        (p) =>
          p.city.toLowerCase() === city.toLowerCase() &&
          p.district.toLowerCase().replace("district ", "") === district.toLowerCase()
      )
    }

    switch (orderBy) {
      case "dateUp":
        filtered.sort((a, b) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime())
        break;
      case "dateDown":
        filtered.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
        break;
      case "priceDown":
        filtered.sort((a, b) => b.price - a.price)
        break;
      case "priceUp":
        filtered.sort((a, b) => a.price - b.price)
        break;
    }

    setCurrent(filtered)
  }, [orderBy, properties, employeeId, count, city, district])


  return (
    <div className="list-container">
      <div className="list-header">
        <div>
          <h1>Properties: {current.length} found.</h1>
        </div>
        <div className="list-filters">
          <div>Order by:
            <FilterDropdown setOrderBy={setOrderBy} />
          </div>
          <FaTh size={24} className="grid-icon" onClick={() => setView("grid")} />
          <FaList size={24} className="list-icon" onClick={() => setView("list")} />
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