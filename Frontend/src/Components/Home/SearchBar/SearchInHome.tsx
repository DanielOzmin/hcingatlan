import { useState } from "react"
import MinMaxInput from "./MinMaxInput"
import SearchDropdown from "./SearchDropdown"
import "./SearchInHome.css"
import properties from "../../../dummyData"

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

const SearchInHome = () => {
    const [search, setSearch ] = useState<Search>({
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

    const handleChange = (key: keyof Search, value: string) =>{
        setSearch((prev)=>({...prev,[key]: value}))
    }

    const handleClick=()=>{
       alert("u are searching")
    }

    return (
        <div className="search-container">
            <div className="upper-row">
                <div className="sale-rent-button">
                <button
                        className={`sale-btn ${search.selectedCategory === "Sale" ? "active" : ""}`}
                        onClick={() => handleChange("selectedCategory","Sale")}
                    >
                        Sale
                    </button>
                    <button
                        className={`rent-btn ${search.selectedCategory === "Rent" ? "active" : ""}`}
                        onClick={() => handleChange("selectedCategory","Rent")}
                    >
                        Rent
                    </button>
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
                <div>
                <input 
                    type="text" 
                    className="input-dropdown listing-input"
                    placeholder="Listing ID" 
                    value={search.typedId} 
                    onChange={(e)=>handleChange("typedId",e.target.value)} />
                </div>
            </div>
            <div className="lower-row">
                <MinMaxInput 
                    label="Price" 
                    fieldKeys={["minPrice","maxPrice"]} 
                    setSearch={setSearch} unitOfMeasurement={search.selectedCategory == "Sale" ? "M Huf" : "E Huf"} />
                <MinMaxInput 
                    label="Floor area" 
                    fieldKeys={["minFloorArea","maxFloorArea"]} 
                    setSearch={setSearch} 
                    unitOfMeasurement="m²" />
                <MinMaxInput 
                    label="Room number" 
                    fieldKeys={["minRoomNumber","maxRoomNumber"]} 
                    setSearch={setSearch} />
                <button className="search-btn" onClick={handleClick}>Search ({properties.length})</button>
            </div>
        </div>
    )
}

export default SearchInHome