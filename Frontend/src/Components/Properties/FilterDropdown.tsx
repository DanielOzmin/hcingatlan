import "./FilterDropdown.css"
type OrderBy = "dateUp" |  "dateDown" | "priceUp" | "priceDown"

type Props = {
    setOrderBy: React.Dispatch<React.SetStateAction<OrderBy>>
}

const FilterDropdown=({setOrderBy} : Props)=>{
    return(
        <select className="filter" defaultValue="dateUp" onChange={(e)=>setOrderBy(e.target.value as OrderBy)}>
            <option value="dateUp">Date {'>'}</option>
            <option value="dateDown">Date {'<'}</option>
            <option value="priceDown">Price {'<'}</option>
            <option value="priceUp">Price {'>'}</option>
        </select>
    )
}

export default FilterDropdown