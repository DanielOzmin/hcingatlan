import { useEffect, useState } from "react"
import { Employee, Property, fetchEmployeeById, fetchProperties } from "../Apis"
import EmployeePageDescription from "../Components/Employee/EmployeePageDescription"
import PropertiesList from "../Components/Properties/PropertyListing/PropertiesList"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PropertyCard from "../Components/Home/Content/ProperyCard"
import Pagination from "../Components/Properties/PropertyListing/Pagination"

const EmployeePage = () => {
    const [properties, setProperties] = useState<Property[]>([])
    const { id } = useParams<{ id: string }>()
    const [employee, setEmployee] = useState<Employee>()
    const { t } = useTranslation()
    const [current, setCurrent] = useState<Property[]>([])

    useEffect(() => {
        if (id) {
            fetchEmployeeById(id, setEmployee)
        }
    }, [id])

    useEffect(() => {
        if (employee?.id) {
            fetchProperties((all) => {
                const filtered = all.filter(p => p.employeeId === employee.id)
                setProperties(filtered)
            })
        }
    }, [employee])


    return (
        <>
            <EmployeePageDescription />
            <div className="hidden md:block">
            <PropertiesList properties={properties} setProperties={setProperties} id={id}/>
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

export default EmployeePage