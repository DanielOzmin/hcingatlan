import { useEffect, useRef, useState } from "react"
import "./SelectDropDown.css"

type OptionItem = {
    label: string,
    value: string
}

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
    title: string,
    options: OptionItem[],
    setSearch: React.Dispatch<React.SetStateAction<Search>>,
    fieldKey: keyof Search
}

const SelectDropDown = ({ title, options, setSearch, fieldKey }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<string>("")
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleOption = (value: string) => {
        const isReset = selectedValue === value
        const newValue = isReset ? "" : value

        setSelectedValue(newValue)
        setIsOpen(false)

        setSearch(prevSearch => ({
            ...prevSearch,
            [fieldKey]: fieldKey === "loan"
                ? (isReset ? [] : [value])
                : value
        }))
    }

    return (
        <div className="select-dropdown-container" ref={dropdownRef}>
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                {selectedValue === "" 
                    ? title 
                    : options.find(o => o.value === selectedValue)?.label}
            </button>
            {isOpen && (
                <div className="select-dropdown-menu">
                    {options.map((option, index) => (
                        <div key={index} className="select-dropdown-item" onClick={() => toggleOption(option.value)}>
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SelectDropDown
