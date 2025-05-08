import PropertiesList from "./PropertyListing/PropertiesList"
import PropertiesSearchBar from "./SearchBarInProperties/PropertiesSearchBox"
import "./PropertiesMain.css"
import LastSeen from "./PropertiesLastSeen/LastSeen"
import { Employee, Property, fetchEmployeeById, fetchProperties } from "../../Apis"
import { useEffect, useState } from "react"
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
    const location = searchParams.getAll("location")
    const loan = searchParams.getAll("loan")
    const typedId = searchParams.get("typedId") ?? ""
    const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null
    const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null
    const minFloorArea = searchParams.get("minFloorArea") ? Number(searchParams.get("minFloorArea")) : null
    const maxFloorArea = searchParams.get("maxFloorArea") ? Number(searchParams.get("maxFloorArea")) : null
    const minRoomNumber = searchParams.get("minRoomNumber") ? Number(searchParams.get("minRoomNumber")) : null
    const maxRoomNumber = searchParams.get("maxRoomNumber") ? Number(searchParams.get("maxRoomNumber")) : null
    console.log(selectedCategory,selectedType,location,loan,typedId,minPrice,maxPrice,minFloorArea,maxFloorArea,minRoomNumber,maxRoomNumber)

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

    

    //useEffect(() => {
        let filtered = properties
        console.log(filtered)
      
        if (selectedCategory) {
          filtered = filtered.filter(p => p.transactionType === selectedCategory) // good
        }
        if (selectedType.length > 0) {
          filtered = filtered.filter(p => selectedType.includes(p.propertyType)) // good
        }
        if (location.length > 0) {
          filtered = filtered.filter(p => location.includes(p.city)) // nooo empty array
        }
        if (loan.includes("CSOK PLUS: Yes")) {
          filtered = filtered.filter(p => p.csok === true) // good
        }
        if (typedId) {
          filtered = filtered.filter(p => p.propertyId === typedId) // good
        }
        if (minPrice !== null) {
          filtered = filtered.filter(p => p.price >= minPrice) // missing multiplier
        }
        if (maxPrice !== null) {
          filtered = filtered.filter(p => p.price <= maxPrice) // missing multiplier
        }
        if (minFloorArea !== null) {
          filtered = filtered.filter(p => p.floorArea >= minFloorArea) // good 
        }
        if (maxFloorArea !== null) {
          filtered = filtered.filter(p => p.floorArea <= maxFloorArea) // good
        }
        if (minRoomNumber !== null) {
          filtered = filtered.filter(p => p.rooms >= minRoomNumber) // good
        }
        if (maxRoomNumber !== null) {
          filtered = filtered.filter(p => p.rooms <= maxRoomNumber) // good
        }
        
        
        
        
        
      
    //     setCurrent(filtered)
    //   }, [
    //     selectedCategory,
    //     selectedType,
    //     location,
    //     loan,
    //     typedId,
    //     minPrice,
    //     maxPrice,
    //     minFloorArea,
    //     maxFloorArea,
    //     minRoomNumber,
    //     maxRoomNumber,
    //     buildType,
    //     properties
    //   ])


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

                    <PropertiesList properties={properties} setProperties={setProperties} />
                </div>
            </div>

            <div className="block md:hidden">
                <div className="w-full">
                    <h1 className="text-lg font-bold m-4">{t("Properties")}: {properties.length} {t("Found")}.</h1>
                    <div className="flex flex-wrap justify-center p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center p-4">
                            {current.map((prop, index) =>
                                <PropertyCard key={index} property={prop} />)}
                        </div>
                    </div>
                    <div className="mb-4">
                        <Pagination current={properties} setCurrent={setCurrent} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PropertiesMain
