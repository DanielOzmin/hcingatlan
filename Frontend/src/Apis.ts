export type Employee = {
    id: string,
    publicId: string,
    name: string,
    position: string,
    phone: string,
    email: string,
    description?: string,
    properties?: string[],
    img: string
} | null

export type MessageFormData = {
    name: string,
    email: string,
    phone: string,
    message: string,
    termsAccepted: boolean,
    employeeId?: string | null,
    recaptchaToken?: string | null,
    propertyId?: string
}

export type Property = {
    id: string,
    shortDescription: string,
    propertyId: string,
    description: string,
    price: number,
    city: string,
    zip: number,
    area: string,
    balconySize: number | null,
    orientation: string,
    district: string,
    neighborhood: string,
    street: string,
    transactionType: string,
    propertyType: string,
    propertyBuildType: string,
    floorArea: number,
    rooms: number,
    yearOfConstruction: number,
    ownership: string,
    moveInDate: string,
    conditions: string,
    comfort: string,
    attic: string,
    floorsInBuilding: number,
    floor: number,
    elevator: string,
    heating: string,
    height: number,
    bathroomAndToilet: string,
    balcony: string,
    terrace: number,
    accessible: string,
    gardenAccess: string,
    entrance: string,
    view: string,
    parking: string,
    extras: string[]
    uploadDate: Date,
    featured?: boolean,
    employeeId: string,
    img?: string[],
    parcel?: number
}

export type Search = {
    selectedCategory: string,
    selectedType: string[],
    location: string[],
    loan: string[],
    typedId: string,
    minPrice: number | null,
    maxPrice: number | null,
    minFloorArea: number | null,
    maxFloorArea: number | null,
    minRoomNumber: number | null,
    maxRoomNumber: number | null,
    buildType: string
}


export const SendMessage = async (data: MessageFormData) => {
    try {

        const response = await fetch("/api/MessageUs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error("Something went wrong while posting the message.")
        }

        const answer = await response.json()
        console.log(answer)
        alert("Message sent successfully!")

    } catch (error) {
        console.error("Error:", error)
        alert("Error sending message.")
    }
}


export const SearchFromBar = async (search: Search) => {
    try {
        const response = await fetch("/api/Property/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(search)
        })
        if (!response.ok) {
            throw new Error("Something went wrong while posting the message.")
        }

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error("Error:", error)
        alert("Error in searching try again later.")
    }
}

export const fetchProperties = async (setProperties: (props: Property[]) => void) => {
    try {
        const response = await fetch("/api/Property")
        if (!response.ok) throw new Error("Can't fecth properties")
        const data = await response.json()
        setProperties(data)
    } catch (error) {
        console.error("Error:", error)
        alert("Error to get properties, try again later.")
    }
}

export const fetchPropertyById = async (setProperty: (props: Property) => void, id: string) => {
    try {
        const response = await fetch(`/api/Property/${id}`)
        if (!response.ok) throw new Error("Can't get property by id")
        const data = await response.json()
        setProperty(data)
    } catch (error) {
        console.error("Error:", error)
        alert("Error to get property, try again later.")
    }
}

export const fetchEmployeeById = async (id: string, setEmployee: (props: Employee) => void) => {
    if(!id) return
    try {
        const response = await fetch(`/api/Employee/${id}`)
        if (!response.ok) throw new Error("Can't get employee by id")
        const data = await response.json()
        setEmployee(data)
    } catch (error) {
        console.error("Error:", error)
        alert("Error to get employee, try again later.")
    }
}

export const fetchAllEmployee = async (setEmployees: (props: Employee[]) => void) => {
    try {
        const response = await fetch("/api/Employee")
        if (!response.ok) throw new Error("Can't load employees")
        const data = await response.json()
        setEmployees(data)
    } catch (error) {
        console.log("Error: ", error)
        alert("Something go wrong while fetching employees")
    }
}

export const fetchPropertiesBySearch = async (setProperties: (props: Property[])=> void, search: Search) => {
    try {
        const response = await fetch("/api/Property/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(search)
        })
        if (!response.ok) throw new Error("Something go wrong while fetch")
        const data = await response.json()
        console.log(data)
        setProperties(data)
    } catch (error) {
        console.log("Error: ", error)
        alert("Can't do search right now! try again later")
    }

}