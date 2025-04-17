import { useState } from "react"
import "./PropertiesSearchBox.css"
import DropDownInProperties from "./DropDownInProperties"
import PropertyMinMax from "./PropertyMinMax"
import SelectDropDown from "./SelectDropDown"
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


const PropertiesSearchBox = ({ setProperties }: Props) => {
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
        buildType: "",
    })

    const handleSearchClick = () => {
        fetchPropertiesBySearch(setProperties, search)
        console.log(search)
    }

    const homeTypes = [
        { label: t("Apartment"), value: "apartment" },
        { label: t("House"), value: "house" },
        { label: t("Land"), value: "land" },
        { label: t("Rental space"), value: "rental_space" },
    ]

    return (
        <div className="filter-container">
            <h1>{t("Filter")}</h1>
            <div className="filter-search-box">
                <div className="filter-id-container">
                    <input type="text" id="id" placeholder="Id:" />
                </div>
                <SelectDropDown
                    title={`--- ${t("Sale")}/${t("Rent")} ---`}
                    options={[
                        { label: t("Sale"), value: "Sale" },
                        { label: t("Rent"), value: "Rent" }
                    ]}
                    setSearch={setSearch}
                    fieldKey="selectedCategory"
                />

                <DropDownInProperties
                    title={`--- ${t("Type")} ---`}
                    options={homeTypes}
                    selectedValues={search.selectedType}
                    setSelectedValues={(values) => setSearch({ ...search, selectedType: values })}
                />

                <SelectDropDown
                    title={`--- ${t("New_Resale")}`}
                    options={[
                        { label: t("New_construction"), value: "New construction" },
                        { label: t("Resale"), value: "Resale" }
                    ]}
                    setSearch={setSearch}
                    fieldKey="buildType"
                />

                <DropDownInProperties
                    title={`--- ${t("Town_district")} ---`}
                    options={locations}
                    selectedValues={search.location}
                    setSelectedValues={(values) => setSearch({ ...search, location: values })}
                    hasInput
                />

                <PropertyMinMax
                    label={`${t("Price")}:`}
                    fieldKeys={["minPrice", "maxPrice"]}
                    setSearch={setSearch}
                    unitOfMeasurement={search.selectedCategory == "Sale" ? "M Huf" : "E Huf"}
                />

                <PropertyMinMax
                    label={`${t("Floor_area")}:`}
                    fieldKeys={["minFloorArea", "maxFloorArea"]}
                    setSearch={setSearch}
                    unitOfMeasurement="m²"
                />

                <PropertyMinMax
                    label={`${t("Room_number")}:`}
                    fieldKeys={["minRoomNumber", "maxRoomNumber"]}
                    setSearch={setSearch}
                />

                <SelectDropDown
                    title="--- CSOK PLUS ---"
                    options={[
                        { label: `CSOK PLUS: ${t("Yes")}`, value: "CSOK PLUS: Yes" },
                        { label: `CSOK PLUS: ${t("No")}`, value: "CSOK PLUS: No" }
                    ]}
                    setSearch={setSearch}
                    fieldKey="loan"
                />

                <button className="box-button" onClick={handleSearchClick}>{t("Search")}</button>
            </div>

        </div>
    )
}

export default PropertiesSearchBox