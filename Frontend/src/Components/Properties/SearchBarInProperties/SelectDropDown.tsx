import { useEffect, useRef, useState } from "react"

import "./SelectDropDown.css"

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
    options: string[]
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

    const toggleOption = (option: string) => {
        if (selectedValue == option) {
            setSelectedValue("")
            setIsOpen(false)
        } else {
            setSelectedValue(option)
            setIsOpen(false)
        }
        if (fieldKey == "loan") {

        } else {
            setSearch(prevSearch => ({
                ...prevSearch, [fieldKey]: selectedValue
            }))
        }

    }

    return (
        <div className="select-dropdown-container" ref={dropdownRef}>
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                {selectedValue == "" ? title : selectedValue}
            </button>
            {isOpen && (
                <div className="select-dropdown-menu">
                    {options.map((option, index) => (
                        <div key={index} className="select-dropdown-item" onClick={() => toggleOption(option)}>
                            <span>{option}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SelectDropDown