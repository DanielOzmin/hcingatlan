import PropertiesList from "./PropertyListing/PropertiesList"
import PropertiesSearchBar from "./SearchBarInProperties/PropertiesSearchBox"
import "./PropertiesMain.css"
import LastSeen from "./PropertiesLastSeen/LastSeen"
import { Employee, Property, fetchEmployeeById, fetchProperties } from "../../Apis"
import { useEffect, useMemo, useState } from "react"
import PropertyCard from "../Home/Content/ProperyCard"
import Pagination from "./PropertyListing/Pagination"
import { useTranslation } from "react-i18next"
import { useParams, useSearchParams } from "react-router-dom"

const PropertiesMain = () => {
    const [properties, setProperties] = useState<Property[]>([])
    const [employee, setEmployee] = useState<Employee>()
    const [current, setCurrent] = useState<Property[]>([])
    const { t } = useTranslation()
    const { employeeId } = useParams()
    const [searchParams] = useSearchParams()

    const selectedCategory = searchParams.get("category") ?? ""
    const selectedType = searchParams.getAll("type")
    const location = searchParams.getAll("loc")
    const loan = searchParams.getAll("loan")
    const typedId = searchParams.get("typedId") ?? ""
    const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null
    const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null
    const minFloorArea = searchParams.get("minFloorArea") ? Number(searchParams.get("minFloorArea")) : null
    const maxFloorArea = searchParams.get("maxFloorArea") ? Number(searchParams.get("maxFloorArea")) : null
    const minRoomNumber = searchParams.get("minRoomNumber") ? Number(searchParams.get("minRoomNumber")) : null
    const maxRoomNumber = searchParams.get("maxRoomNumber") ? Number(searchParams.get("maxRoomNumber")) : null
    

    useEffect(() => {
 
        fetchProperties(setProperties)
    
    }, []) 

    useEffect(() => {
        if (employeeId) {
            fetchEmployeeById(employeeId, setEmployee)
        }
    }, [employeeId])

    useEffect(() => {
        if (employee?.id) {
            fetchProperties((all) => {
                const filtered = all.filter(p => p.employeeId === employee.id)
                setProperties(filtered)
            })
        }
    }, [employee])

    const filtered = useMemo(()=>{

        let filtered = properties
      
        if (selectedCategory) {
          filtered = filtered.filter(p => p.transactionType === selectedCategory)
        }
        if (selectedType.length > 0) {
          filtered = filtered.filter(p => selectedType.includes(p.propertyType)) 
        }
        if (location.length > 0) {
            location.forEach((loc)=>{
                if(loc.includes("District")){
                    filtered = filtered.filter(p => location.includes(p.district))  
                }else{
                    filtered = filtered.filter(p => location.includes(p.city)) 
                }
            })
        }
        if (loan.includes("CSOK PLUS: Yes")) {
          filtered = filtered.filter(p => p.csok === true)
        }
        if (typedId) {
          filtered = filtered.filter(p => p.propertyId === typedId) 
        }
        let multiplier = selectedCategory == "Sale" ? 1000000 : 1000
        if (minPrice !== null) {
          filtered = filtered.filter(p => p.price >= minPrice * multiplier)
        }
        if (maxPrice !== null) {
          filtered = filtered.filter(p => p.price <= maxPrice * multiplier) 
        }
        if (minFloorArea !== null) {
          filtered = filtered.filter(p => p.floorArea >= minFloorArea)
        }
        if (maxFloorArea !== null) {
          filtered = filtered.filter(p => p.floorArea <= maxFloorArea) 
        }
        if (minRoomNumber !== null) {
          filtered = filtered.filter(p => p.rooms >= minRoomNumber) 
        }
        if (maxRoomNumber !== null) {
          filtered = filtered.filter(p => p.rooms <= maxRoomNumber) 
        }
        console.log(filtered)
        return filtered
       },[properties])
        


    const lastSeenRow = localStorage.getItem("lastSeen")
    const lastSeenIds = lastSeenRow ? JSON.parse(lastSeenRow) : []

    return (
        <>
            <div className="hidden md:block">
                <div className="properties-main-container">
                    <div>
                        <PropertiesSearchBar setProperties={setProperties} />
                        {lastSeenIds.length > 0 && <LastSeen lastSeenIds={lastSeenIds} />}
                    </div>

                    <PropertiesList properties={properties} />
                </div>
            </div>

            <div className="block md:hidden">
                <div className="w-full">
                    <h1 className="text-lg font-bold m-4">{t("Properties")}: {filtered.length} {t("Found")}.</h1>
                    <div className="flex flex-wrap justify-center p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center p-4">
                            {current.map((prop, index) =>
                                <PropertyCard key={index} property={prop} />)}
                        </div>
                    </div>
                    <div className="mb-4">
                        <Pagination current={filtered} setCurrent={setCurrent} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PropertiesMain
