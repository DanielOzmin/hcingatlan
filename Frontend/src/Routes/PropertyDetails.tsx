import { useParams } from "react-router-dom"

import "../Routes/RoutesCSS/PropertyDetails.css"
import properties, { Property, employees } from "../dummyData"
import ImageGallery from "../Components/Property/ImageGallery"
import ShareLikePrint from "../Components/Property/ShareLikePrint"
import ContactInfo from "../Components/Property/ContactInfo"
import { useRef } from "react"
import EmployeeCard from "../Components/Employee/EmployeeCard"




const PropertyDetails = () => {
    const { id } = useParams<{ id: string }>()
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const property: Property = properties.filter((property) => property.id === id)[0]
    const employee = employees.filter((emp)=> property.employeeId === emp.publicId)[0]

    const parameters = [
        { label: "Settlement", value: `${property.zip}, ${property.city} ${property.district}` },
        { label: "District", value: property.district },
        { label: "Street", value: property.street },
        { label: "Transaction Type", value: property.transactionType },
        { label: "Property Type", value: `${property.propertyType} / ${property.propertyBuildType}` },
        { label: "Floor Area", value: property.floorArea ? `${property.floorArea} m²` : null },
        { label: "Number of Rooms", value: property.rooms },
        { label: "Year of Construction", value: property.yearOfConstruction },
        { label: "Ownership / Leasehold", value: property.ownership },
        { label: "Move-in Ready", value: property.moveInDate },
        { label: "Condition", value: property.conditions },
        { label: "Comfort Level", value: property.comfort },
        { label: "Attic", value: property.attic },
        { label: "Number of Floors (Building)", value: property.floorsInBuilding },
        { label: "Floor", value: property.floor },
        { label: "Elevator", value: property.elevator ? "Yes" : "No" },
        { label: "Heating", value: property.heating },
        { label: "Ceiling Height", value: property.height ? `${property.height} m` : null },
        { label: "Toilet and Bathroom", value: property.bathroomAndToilet },
        { label: "Balcony", value: property.balcony ? "Yes" : "No" },
        { label: "Balcony Size", value: property.balconySize ? `${property.balconySize} m²` : null },
        { label: "Accessible (Barrier-Free)", value: property.accessible ? "Yes" : "No" },
        { label: "Garden Access", value: property.gardenAccess ? "Yes" : "No" },
        { label: "Entrance From", value: property.entrance },
        { label: "View", value: property.view },
        { label: "Orientation", value: property.orientation },
        { label: "Parking", value: property.parking },
        { label: "Extras", value: property.extras },
    ]

    return (
        <div className="property-details-container">
            <div className="property-details">
                <div className="property-image-gallery">
                    <ImageGallery property={property} />
                </div>
                <div className="share-like-prints">
                    <ShareLikePrint favId={id}/>
                    <EmployeeCard employee={employee} textareaRef={textareaRef}/>
                </div>

            </div>
            <div className="property-info-container">
                <div className="property-info-header">
                    <h1>{property.city}</h1>
                    <span>- {property.transactionType} {property.propertyType}</span>
                </div>
                <div className="property-info-base">
                    <div>
                        <div className="info-title">Location</div>
                        <p>{property.district}, {property.street}</p>
                    </div>
                    <div>
                        <div className="info-title">Floor area</div>
                        <p>{property.floorArea} m²</p>
                    </div>
                    <div>
                        <div className="info-title">Asking Price</div>
                        <p>{property.price} Huf</p>
                    </div>
                    <div>
                        <div className="info-title">Listing Id</div>
                        <p>{property.id}</p>
                    </div>

                </div>
                <div className="info-short-description">
                    {property.shortDescription}
                </div>
                <div className="info-description">
                    <div className="info-description-title">Description</div>
                    <div>{property.description}</div>
                </div>
                <div className="info-parameters">
                    <div className="info-parameters-title">Parameters</div>
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
                <div className="google-map">Google maps HERE!!!</div>
                <ContactInfo property={property} employee={employee} textareaRef={textareaRef}/>


            </div>
        </div>)
}
export default PropertyDetails