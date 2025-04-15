import { useState } from "react"
import "./PropertiesSearchBox.css"
import DropDownInProperties from "./DropDownInProperties"
import PropertyMinMax from "./PropertyMinMax"
import SelectDropDown from "./SelectDropDown"
import { Property, Search, fetchPropertiesBySearch } from "../../../Apis"

const homeTypes: string[] = ["Apartman", "House", "Land", "Rental space"]
const locations: string[] = [
    "1st District – I",
    "2nd District – II",
    "3rd District – III",
    "4th District – IV",
    "5th District – V",
    "6th District – VI",
    "7th District – VII",
    "8th District – VIII",
    "9th District – IX",
    "10th District – X",
    "11th District – XI",
    "12th District – XII",
    "13th District – XIII",
    "14th District – XIV",
    "15th District – XV",
    "16th District – XVI",
    "17th District – XVII",
    "18th District – XVIII",
    "19th District – XIX",
    "20th District – XX",
    "21st District – XXI",
    "22nd District – XXII",
    "23rd District – XXIII",
    "Érd",
    "Dunaharaszti"
]

type Props = {
    setProperties: React.Dispatch<React.SetStateAction<Property[]>>
}


const PropertiesSearchBox = ({setProperties}: Props ) => {
    const [search, setSearch] = useState<Search>({
        selectedCategory: "",
        selectedType: [],
        location: [],
        loan: [],
        typedId: "",
        minPrice: null,
        maxPrice: null,
        minFloorArea: null,
        maxFloorArea: null,
        minRoomNumber: null,
        maxRoomNumber: null,
        buildType: "",
    })

    const handleSearchClick = () => {
        fetchPropertiesBySearch(setProperties,search)
        console.log(search)
    }

    return (
        <div className="filter-container">
            <h1>Filter</h1>
            <div className="filter-search-box">
                <div className="filter-id-container">
                    <input type="text" id="id" placeholder="Id:" />
                </div>
                <SelectDropDown
                    title="--- Sale/Rent ---"
                    options={["Rent", "Sale"]}
                    setSearch={setSearch}
                    fieldKey="selectedCategory" 
                />

                <DropDownInProperties
                    title="--- Type ---"
                    options={homeTypes}
                    selectedValues={search.selectedType}
                    setSelectedValues={(values) => setSearch({ ...search, selectedType: values })}
                />

                <SelectDropDown
                    title="--- New/Resale ---"
                    options={["New construction", "Resale"]}
                    setSearch={setSearch}
                    fieldKey="buildType" 
                />

                <DropDownInProperties
                    title="--- Town/District ---"
                    options={locations}
                    selectedValues={search.location}
                    setSelectedValues={(values) => setSearch({ ...search, location: values })}
                    hasInput
                />

                <PropertyMinMax
                    label="Price:"
                    fieldKeys={["minPrice", "maxPrice"]}
                    setSearch={setSearch} 
                    unitOfMeasurement={search.selectedCategory == "Sale" ? "M Huf" : "E Huf"}
                />

                <PropertyMinMax
                    label="Floor area:"
                    fieldKeys={["minFloorArea", "maxFloorArea"]}
                    setSearch={setSearch}
                    unitOfMeasurement="m²"
                />

                <PropertyMinMax
                    label="Room number:"
                    fieldKeys={["minRoomNumber", "maxRoomNumber"]}
                    setSearch={setSearch}
                />

                <SelectDropDown
                    title="--- CSOK PLUS ---"
                    options={["CSOK PLUS: Yes", "CSOK PLUS: No"]}
                    setSearch={setSearch}
                    fieldKey="loan" 
                />
                <button className="box-button" onClick={handleSearchClick}>Search</button>
            </div>
            
        </div>
    )
}

export default PropertiesSearchBox