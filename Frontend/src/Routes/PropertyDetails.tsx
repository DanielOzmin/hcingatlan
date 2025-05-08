import { useParams } from "react-router-dom"

import "../Routes/RoutesCSS/PropertyDetails.css"
import ImageGallery from "../Components/Property/ImageGallery"
import ShareLikePrint from "../Components/Property/ShareLikePrint"
import ContactInfo from "../Components/Property/ContactInfo"
import { useEffect, useRef, useState } from "react"
import EmployeeCard from "../Components/Employee/EmployeeCard"
import { Employee, Property, fetchEmployeeById, fetchPropertyById } from "../Apis"
import PropertyGoogleMaps from "../Components/Property/PropertyGoogleMaps"
import { convertDistrict } from "../Services/convertDistrict"
import { useTranslation } from "react-i18next"
import { formatNumber } from "../Services/format"


const PropertyDetails = () => {
    const { id } = useParams<{ id: string }>()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [property, setProperty] = useState<Property>()
    const [employee, setEmployee] = useState<Employee | null>()
    const { t } = useTranslation()
    const [showBottomBar, setShowBottomBar] = useState(true)
    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setShowBottomBar(true)

            if (scrollTimeout.current) clearTimeout(scrollTimeout.current)

            scrollTimeout.current = setTimeout(() => {
                setShowBottomBar(false)
            }, 1500)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
        }
    }, [])


    useEffect(() => {
        if (!id) return
        fetchPropertyById(setProperty, id)
    }, [id])

    useEffect(() => {
        if (!property?.employeeId) return
        fetchEmployeeById(property?.employeeId, setEmployee)
    }, [property])

    if (!property || !employee) {
        return <div>No data available</div>
    }

    const handleJumpToTextarea = () => {
        textareaRef.current?.scrollIntoView({ behavior: "smooth" })
        textareaRef.current?.focus()
    }

    const parameters = [
        { label: t("Settlement"), value: `${property.city}` },
        { label: t("District"), value: property.district },
        { label: t("Street"), value: property.street },
        { label: t("Transaction_type"), value: property.transactionType },
        { label: t("Property_type"), value: `${property.propertyType} / ${property.propertyBuildType}` },
        { label: t("Floor_area"), value: property.floorArea ? `${property.floorArea} m²` : null },
        { label: t("Number_of_rooms"), value: property.rooms },
        { label: t("Year_of_construction"), value: property.yearOfConstruction },
        { label: t("Ownership_/_leasehold"), value: property.ownership },
        { label: t("Move-in_ready"), value: property.moveInDate },
        { label: t("Condition"), value: property.conditions },
        { label: t("Comfort_level"), value: property.comfort },
        { label: t("Attic"), value: property.attic },
        { label: t("Number_of_floors_(building)"), value: property.floorsInBuilding },
        { label: t("Floor"), value: property.floor },
        { label: t("Elevator"), value: property.elevator ? t("Igen") : t("Nem") },
        { label: t("Heating"), value: property.heating },
        { label: t("Ceiling_height"), value: property.height ? `${property.height} m` : null },
        { label: t("Toilet_and_bathroom"), value: property.bathroomAndToilet },
        { label: t("Balcony"), value: property.balcony ? t("Yes") : t("No") },
        { label: t("Balcony_size"), value: property.balconySize ? `${property.balconySize} m²` : null },
        { label: t("Accessible_(barrier-free)"), value: property?.accessible ? t("Yes") : t("No") },
        { label: t("Garden_access"), value: property.gardenAccess ? t("Yes") : t("No") },
        { label: t("Entrance_from"), value: property.entrance },
        { label: t("View"), value: property.view },
        { label: t("Orientation"), value: property.orientation },
        { label: t("Parking"), value: property.parking },
        { label: t("Extras"), value: property.extras }
    ]

    return (
        <>
            <div className="hidden md:block">
                <div className="property-details-container">
                    <div className="property-details">
                        <div className="property-image-gallery">
                            <ImageGallery property={property} />
                        </div>
                        <div className="share-like-prints">
                            <ShareLikePrint favId={id} />
                            <EmployeeCard employee={employee} textareaRef={textareaRef} />
                        </div>
                    </div>
                    <div className="property-info-container">
                        <div className="property-info-header">
                            <h1>{property.city}</h1>
                            <span>- {property.transactionType} {property.propertyType}</span>
                        </div>
                        <div className="property-info-base">
                            <div>
                                <div className="info-title">{t("Location")}</div>
                                <p>{property.district} {property.street}</p>
                            </div>
                            <div>
                                <div className="info-title">{t("Floor_area")}</div>
                                <p>{property.floorArea} m²</p>
                            </div>
                            <div>
                                <div className="info-title">{t("Asking_price")}</div>
                                <p>{formatNumber(property.price)} Huf</p>
                            </div>
                            <div>
                                <div className="info-title">{t("Listing_id")}</div>
                                <p>{property.propertyId}</p>
                            </div>
                        </div>
                        <div className="info-short-description">{property.shortDescription}</div>
                        <div className="info-description">
                            <div className="info-description-title">{t("Description")}</div>
                            <div>{property.description}</div>
                        </div>
                        <div className="info-parameters">
                            <div className="info-parameters-title">{t("Parameters")}</div>
                            <div className="info-grid">
                                {parameters.map((item, index) =>
                                    item.value ? (
                                        <div className="info-row" key={index}>
                                            <label>{item.label}: </label>
                                            <span>{item.value}</span>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </div>
                        <PropertyGoogleMaps city={property.city} street={property.street} district={convertDistrict(property.district)} />
                        <ContactInfo property={property} employee={employee} textareaRef={textareaRef} />
                    </div>
                </div>
            </div>

            <div className="block md:hidden px-4 py-6 space-y-6">
                <ImageGallery property={property} />

                <div className="flex items-center gap-2 p-2 rounded text-black">
                    <h1 className="text-3xl font-bold m-0">{property.city}</h1>
                    <span className="text-base text-black mt-4">- {property.transactionType} {property.propertyType}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="bg-gray-100 p-2">
                        <div className="font-bold text-lg text-gray-800">{t("Floor_area")}</div>
                        <p className="text-yellow-600 text-lg">{property.floorArea} m²</p>
                    </div>
                    <div className="bg-gray-100 p-2">
                        <div className="font-bold text-lg text-gray-800">
                            {t("Asking_price")}
                        </div>
                        <p className="text-yellow-600 text-lg">{formatNumber(property.price)} Huf</p>
                    </div>
                    <div className="bg-gray-100 p-2">
                        <div className="font-bold text-lg text-gray-800">{t("Location")}</div>
                        <p className="text-yellow-600 text-lg">{property.street}</p>
                    </div>
                    <div className="bg-gray-100 p-2">
                        <div className="font-bold text-lg text-gray-800">
                            {t("Listing_id")}
                        </div>
                        <p className="text-yellow-600 text-lg">{property.propertyId}</p>
                    </div>
                </div>


                <div className="bg-gray-100 text-left text-xl p-3 font-bold mx-2 mt-5">
                    {property.shortDescription}
                </div>

                <div className="text-left text-base p-3 mx-2">
                    <div className="bg-gray-100 text-lg font-bold p-3 text-center border-b border-gray-300">{t("Description")}
                    </div>
                    <div className="mt-2">
                        {property.description}
                    </div>
                </div>

                <div className="bg-white max-w-3xl mx-auto rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-100 text-center text-lg font-bold p-3 border-b-2 border-gray-300">
                        {t("Parameters")}
                    </div>
                    <div className="info-grid">
                        {parameters.map((item, index) =>
                            item.value ? (
                                <div key={index} className="info-row">
                                    <label>{item.label}:</label>
                                    <span>{item.value}</span>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>

                <PropertyGoogleMaps city={property.city} street={property.street} district={convertDistrict(property.district)} />
                <ContactInfo property={property} employee={employee} textareaRef={textareaRef} />
            </div >

            <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-4 flex justify-around md:hidden z-50 transform transition-transform duration-500 ${showBottomBar ? 'translate-y-0' : 'translate-y-full'}`}>
                <button
                    onClick={handleJumpToTextarea}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md text-sm w-1/3 flex items-center justify-center text-center h-12"
                >
                    {t("Send_message")}
                </button>
                <a
                    href={`tel:${employee.phone}`}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md text-sm w-1/3 flex items-center justify-center text-center h-12"
                >
                    {t("Call")}
                </a>
            </div>
        </>)
}
export default PropertyDetails