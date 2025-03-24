import { useState } from "react"
import SearchDropdown from "../Home/SearchBar/SearchDropdown"
import MinMaxInput from "../Home/SearchBar/MinMaxInput"
import "./PropertiesSearchBox.css"

const homeTypes: string[] = ["Apartman", "House", "Land", "Rental space"]
const loans: string[] = ["CSOK PLUS: No","CSOK PLUS: Yes"]
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

type Search = {
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
    maxRoomNumber: number | null
}

const PropertiesSearchBox = () => {
    const [ search, setSearch ] = useState<Search>({
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
        maxRoomNumber: null
    })

    return(
        <div className="filter-container">
            <h1>Filter</h1>
            <div>
                <div>
                <label>Id:</label>
                <input type="text" /> 
                </div>
                <div>
                <select onChange={(e)=>setSearch({...search,selectedCategory: e.target.value})}>
                    <option value="">--- Choose an option ---</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                </select>
                </div>
                <SearchDropdown
                    options={homeTypes}
                    selectedValues={search.selectedType}
                    setSelectedValues={(values) => setSearch({ ...search, selectedType: values })}
                />
                <SearchDropdown
                    options={locations}
                    selectedValues={search.location}
                    setSelectedValues={(values) => setSearch({ ...search, location: values })}
                    hasInput
                />
                <SearchDropdown
                    options={loans}
                    selectedValues={search.loan}
                    setSelectedValues={(values) => setSearch({ ...search, loan: values })}
                />
                <MinMaxInput 
                    label="Price" 
                    fieldKeys={["minPrice","maxPrice"]} 
                    setSearch={setSearch} unitOfMeasurement={search.selectedCategory == "Sale" ? "M Huf" : "E Huf"}
                    variant="properties" />
                <MinMaxInput 
                    label="Floor area" 
                    fieldKeys={["minFloorArea","maxFloorArea"]} 
                    setSearch={setSearch} 
                    unitOfMeasurement="m²"
                    variant="properties" />
                <MinMaxInput 
                    label="Room number" 
                    fieldKeys={["minRoomNumber","maxRoomNumber"]} 
                    setSearch={setSearch}
                    variant="properties" />
            </div>
        </div>
    )
}

export default PropertiesSearchBox