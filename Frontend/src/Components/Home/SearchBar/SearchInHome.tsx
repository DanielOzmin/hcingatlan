import { useState } from "react"
import MinMaxInput from "./MinMaxInput"
import SearchDropdown from "./SearchDropdown"
import "./SearchInHome.css"

import { Property, Search, fetchPropertiesBySearch } from "../../../Apis"
import { useTranslation } from "react-i18next"

const locations = [
    { label: "1st District – I", value: "District I" },
    { label: "2nd District – II", value: "District II" },
    { label: "3rd District – III", value: "District III" },
    { label: "4th District – IV", value: "District IV" },
    { label: "5th District – V", value: "District V" },
    { label: "6th District – VI", value: "District VI" },
    { label: "7th District – VII", value: "District VII" },
    { label: "8th District – VIII", value: "District VIII" },
    { label: "9th District – IX", value: "District IX" },
    { label: "10th District – X", value: "District X" },
    { label: "11th District – XI", value: "District XI" },
    { label: "12th District – XII", value: "District XII" },
    { label: "13th District – XIII", value: "District XIII" },
    { label: "14th District – XIV", value: "District XIV" },
    { label: "15th District – XV", value: "District XV" },
    { label: "16th District – XVI", value: "District XVI" },
    { label: "17th District – XVII", value: "District XVII" },
    { label: "18th District – XVIII", value: "District XVIII" },
    { label: "19th District – XIX", value: "District XIX" },
    { label: "20th District – XX", value: "District XX" },
    { label: "21st District – XXI", value: "District XXI" },
    { label: "22nd District – XXII", value: "District XXII" },
    { label: "23rd District – XXIII", value: "District XXIII" },
    { label: "Érd", value: "Érd" },
    { label: "Dunaharaszti", value: "Dunaharaszti" }
]

type Props = {
    setProperties: React.Dispatch<React.SetStateAction<Property[]>>
}

const SearchInHome = ({ setProperties }: Props) => {
    const { t } = useTranslation()
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
        buildType: ""
    })

    const handleChange = (key: keyof Search, value: string) => {
        setSearch((prev) => ({ ...prev, [key]: value }))
    }

    const handleClick = () => {
        fetchPropertiesBySearch(setProperties, search)
        console.log(search)
    }

    const homeTypes = [
        { label: t("Apartman"), value: "apartment" },
        { label: t("House"), value: "house" },
        { label: t("Land"), value: "land" },
        { label: t("Rental_space"), value: "rental_space" }
    ]

    const loans = [
        { label: `CSOK PLUS: ${t("No")}`, value: "CSOK PLUS: No" },
        { label: `CSOK PLUS: ${t("Yes")}`, value: "CSOK PLUS: Yes" }
    ]

    return (
        <div className="search-container">
            <div className="upper-row">
                <div className="sale-rent-button">
                    <button
                        className={`sale-btn ${search.selectedCategory === "Sale" ? "active" : ""}`}
                        onClick={() => handleChange("selectedCategory", "Sale")}
                    >
                        {t("Sale")}
                    </button>
                    <button
                        className={`rent-btn ${search.selectedCategory === "Rent" ? "active" : ""}`}
                        onClick={() => handleChange("selectedCategory", "Rent")}
                    >
                        {t("Rent")}
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
                        onChange={(e) => handleChange("typedId", e.target.value)} />
                </div>
            </div>
            <div className="lower-row">
                <MinMaxInput
                    label={t("Price")}
                    fieldKeys={["minPrice", "maxPrice"]}
                    setSearch={setSearch} unitOfMeasurement={search.selectedCategory == "Sale" ? "M Huf" : "E Huf"} />
                <MinMaxInput
                    label={t("Floor_area")}
                    fieldKeys={["minFloorArea", "maxFloorArea"]}
                    setSearch={setSearch}
                    unitOfMeasurement="m²" />
                <MinMaxInput
                    label={t("Room_number")}
                    fieldKeys={["minRoomNumber", "maxRoomNumber"]}
                    setSearch={setSearch} />
                <button className="search-btn" onClick={handleClick}>{t("Search")}</button>
            </div>
        </div>
    )
}

export default SearchInHome