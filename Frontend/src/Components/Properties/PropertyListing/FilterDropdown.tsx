import { useTranslation } from "react-i18next"
import "./FilterDropdown.css"
type OrderBy = "dateUp" |  "dateDown" | "priceUp" | "priceDown"

type Props = {
    setOrderBy: React.Dispatch<React.SetStateAction<OrderBy>>
}

const FilterDropdown=({setOrderBy} : Props)=>{
    const { t } = useTranslation()
    return(
        <select className="filter" defaultValue="dateUp" onChange={(e)=>setOrderBy(e.target.value as OrderBy)}>
            <option value="dateUp">{t("Date")} {'>'}</option>
            <option value="dateDown">{t("Date")} {'<'}</option>
            <option value="priceDown">{t("Price")} {'<'}</option>
            <option value="priceUp">{t("Price")} {'>'}</option>
        </select>
    )
}

export default FilterDropdown