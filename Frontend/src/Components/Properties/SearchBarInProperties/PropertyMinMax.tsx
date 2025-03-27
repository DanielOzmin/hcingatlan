import "./PropertyMinMax.css"

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
    maxRoomNumber: number | null,
    buildType: string
}

type Props = {
    label: string,
    fieldKeys: [keyof Search, keyof Search],
    setSearch: React.Dispatch<React.SetStateAction<Search>>,
    unitOfMeasurement?: string,
}

const PropertyMinMax = ({ label, fieldKeys, setSearch, unitOfMeasurement }: Props) => {

    const handleChange = (key: keyof Search, value: number) => {
        setSearch((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <div className="property-minmax-container">
            <label className="property-label">{label}</label>
            <div className="property-minmax-inputs">
                <input type="number" placeholder="Min" onChange={(e) => handleChange(fieldKeys[0], Number(e.target.value))} />
                <span> - </span>
                <input type="number" placeholder="Max" onChange={(e) => handleChange(fieldKeys[1], Number(e.target.value))} />
                {unitOfMeasurement && <span className="unit">{unitOfMeasurement}</span>}
            </div>
        </div>
    )
}

export default PropertyMinMax