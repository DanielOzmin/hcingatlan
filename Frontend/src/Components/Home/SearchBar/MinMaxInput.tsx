import "./MinMaxInput.css"
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
    buildType: string,
}

type Props ={
    label: string,
    fieldKeys: [keyof Search,keyof Search],
    setSearch: React.Dispatch<React.SetStateAction<Search>>,
    unitOfMeasurement?: string,
}

const MinMaxInput=({label, fieldKeys, setSearch ,unitOfMeasurement} : Props)=>{

    const handleChange = (key: keyof Search, value: number) => {
        let finalValue = value == 0 ? null : value
        setSearch((prev)=>({...prev, [key]: finalValue}))
    }

    return(
        <div className="input-container">
            <label>{label}: </label>
            <input type="number" placeholder="min" onChange={(e)=>handleChange(fieldKeys[0], Number(e.target.value))}/> 
            <span> - </span>
            <input type="number" placeholder="max" onChange={(e)=>handleChange(fieldKeys[1], Number(e.target.value))}/>
            {unitOfMeasurement && <span> {unitOfMeasurement} </span>}
        </div>
    )
}

export default MinMaxInput