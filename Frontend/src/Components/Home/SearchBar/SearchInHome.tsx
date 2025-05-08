import { useState } from "react"
import MinMaxInput from "./MinMaxInput"
import SearchDropdown from "./SearchDropdown"
import "./SearchInHome.css"

import { Property, Search, fetchPropertiesBySearch } from "../../../Apis"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate()
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

    const handleSearchInPhone = () => {
        const params = new URLSearchParams()

        if (search.selectedCategory) params.append("category", search.selectedCategory)
        search.selectedType.forEach(type => params.append("type", type))
        search.location.forEach(loc => params.append("loc", loc))
        search.loan.forEach(loan => params.append("loan", loan))
        if (search.typedId) params.append("typedId", search.typedId)
        if (search.minPrice !== null) params.append("minPrice", String(search.minPrice))
        if (search.maxPrice !== null) params.append("maxPrice", String(search.maxPrice))
        if (search.minFloorArea !== null) params.append("minFloorArea", String(search.minFloorArea))
        if (search.maxFloorArea !== null) params.append("maxFloorArea", String(search.maxFloorArea))
        if (search.minRoomNumber !== null) params.append("minRoomNumber", String(search.minRoomNumber))
        if (search.maxRoomNumber !== null) params.append("maxRoomNumber", String(search.maxRoomNumber))
        
        navigate(`/properties?${params.toString()}`)
    }

    const homeTypes = [
        { label: t("Apartman"), value: "Apartman" },
        { label: t("House"), value: "House" },
        { label: t("Land"), value: "Land" },
        { label: t("Rental_space"), value: "Rental Space" }
    ]

    const loans = [
        { label: `CSOK PLUS: ${t("No")}`, value: "CSOK PLUS: No" },
        { label: `CSOK PLUS: ${t("Yes")}`, value: "CSOK PLUS: Yes" }
    ]

    return (
        <>
            <div className="hidden md:block">
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
                            title={`--- ${t("Type")} ---`}
                            options={homeTypes}
                            selectedValues={search.selectedType}
                            setSelectedValues={(values) => setSearch({ ...search, selectedType: values })}
                        />
                        <SearchDropdown
                            title={`--- ${t("Town_district")} ---`}
                            options={locations}
                            selectedValues={search.location}
                            setSelectedValues={(values) => setSearch({ ...search, location: values })}
                            hasInput
                        />
                        <SearchDropdown
                            title="--- CSOK PLUS ---"
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
            </div>
            <div className="block md:hidden p-4 bg-gray-100">
                <div className="flex gap-4 mb-4">
                    <button
                        className={`flex-1 p-3 font-bold rounded shadow-md ${search.selectedCategory === "Sale" ? "bg-[#e5b835] text-white" : "bg-white border"
                            }`}
                        onClick={() => handleChange("selectedCategory", "Sale")}
                    >
                        {t("Sale")}
                    </button>
                    <button
                        className={`flex-1 p-3 font-bold rounded shadow-md ${search.selectedCategory === "Rent" ? "bg-[#e5b835] text-white" : "bg-white border"
                            }`}
                        onClick={() => handleChange("selectedCategory", "Rent")}
                    >
                        {t("Rent")}
                    </button>
                </div>

                <div className="flex flex-col gap-4 mb-4">
                    <SearchDropdown
                        title={`--- ${t("Type")} ---`}
                        options={homeTypes}
                        selectedValues={search.selectedType}
                        setSelectedValues={(values) => setSearch({ ...search, selectedType: values })}
                    />
                    <SearchDropdown
                        title={`--- ${t("Town_district")} ---`}
                        options={locations}
                        selectedValues={search.location}
                        setSelectedValues={(values) => setSearch({ ...search, location: values })}
                        hasInput
                    />
                    <SearchDropdown
                        title="--- CSOK PLUS ---"
                        options={loans}
                        selectedValues={search.loan}
                        setSelectedValues={(values) => setSearch({ ...search, loan: values })}
                    />
                </div>

                <input
                    type="text"
                    className="w-full p-3 border rounded mb-4"
                    placeholder="Listing ID"
                    value={search.typedId}
                    onChange={(e) => handleChange("typedId", e.target.value)}
                />

                <div className="flex flex-col gap-4 mb-4">
                    <MinMaxInput
                        label={t("Price")}
                        fieldKeys={["minPrice", "maxPrice"]}
                        setSearch={setSearch}
                        unitOfMeasurement={search.selectedCategory === "Sale" ? "M Huf" : "E Huf"}
                    />
                    <MinMaxInput
                        label={t("Floor_area")}
                        fieldKeys={["minFloorArea", "maxFloorArea"]}
                        setSearch={setSearch}
                        unitOfMeasurement="m²"
                    />
                    <MinMaxInput
                        label={t("Room_number")}
                        fieldKeys={["minRoomNumber", "maxRoomNumber"]}
                        setSearch={setSearch}
                    />
                </div>

                <button
                    className="w-full h-[45px] mt-2 bg-[#d3b325] text-white text-[16px] font-bold border-0 cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-[#e6c400] hover:scale-105 hover:shadow-lg active:scale-98 active:shadow-sm disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none rounded"
                    onClick={handleSearchInPhone}
                >
                    {t("Search")}
                </button>
            </div>
        </>

    )
}

export default SearchInHome