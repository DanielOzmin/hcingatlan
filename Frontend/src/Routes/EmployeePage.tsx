import { useState } from "react"
import { Property } from "../Apis"
import EmployeePageDescription from "../Components/Employee/EmployeePageDescription"
import PropertiesList from "../Components/Properties/PropertyListing/PropertiesList"
import { useParams } from "react-router-dom"

const EmployeePage = () => {
    const [properties, setProperties] = useState<Property[]>([])
    const { id } = useParams<{ id: string }>()


    return (
        <>
            <EmployeePageDescription />
            <PropertiesList properties={properties} setProperties={setProperties} id={id}/>
        </>
    )
}

export default EmployeePage