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


const PropertyDetails = () => {
    const { id } = useParams<{ id: string }>()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [property, setProperty] = useState<Property>()
    const [employee, setEmployee] = useState<Employee | null>()
    const { t } = useTranslation()

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

    const parameters = [
        { label: t("Settlement"), value: `${property.zip}, ${property.city} ${property.district}` },
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
                    <span>- {property.transactionType} {property?.propertyType}</span>
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
                        <p>{property.price} Huf</p>
                    </div>
                    <div>
                        <div className="info-title">{t("Listing_id")}</div>
                        <p>{property.propertyId}</p>
                    </div>

                </div>
                <div className="info-short-description">
                    {property.shortDescription}
                </div>
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
                <PropertyGoogleMaps city={property.city} street={property.street} district={convertDistrict(property.district)}/>
                <ContactInfo property={property} employee={employee} textareaRef={textareaRef} />


            </div>
        </div>)
}
export default PropertyDetails