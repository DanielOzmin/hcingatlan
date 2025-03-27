import { useEffect, useRef, useState } from "react"

import "./DropDownInProperties.css"


type Props = {
    title: string,
    options: string[],
    selectedValues: string[],
    setSelectedValues: (values: string[]) => void,
    hasInput?: boolean,
}

const DropDownInProperties = ({title, options, selectedValues, setSelectedValues, hasInput }: Props) => {

    const [customInput, setCustomInput] = useState<string | undefined>(undefined)
    const [isOpen, setIsOpen] = useState<boolean>(false)
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
        setSelectedValues(
            selectedValues.includes(option)
                ? selectedValues.filter((o) => o !== option)
                : [...selectedValues, option]
        )
    }

    const filteredOptions = customInput === undefined ? options : options.filter((option) => option.toLowerCase().includes(customInput.toLowerCase()))

    return (
        <div className="property-dropdown-container" ref={dropdownRef}>
            <div className="property-dropdown">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {selectedValues.length > 0 ? selectedValues.join(", ") : title}
                </button>
                {isOpen && (
                    <div className="property-dropdown-menu">
                        {hasInput &&
                            <div className="property-dropdown-input">
                                <input
                                    type="text"
                                    placeholder="Add custom option..."
                                    value={customInput}
                                    onChange={(e) => setCustomInput(e.target.value)}
                                />
                            </div>}
                        {filteredOptions.map((option, index) => (
                            <div key={index} className="property-dropdown-item" onClick={() => toggleOption(option)}>
                                <span className="property-option-text">{option}</span>
                                {selectedValues.includes(option) && <span className="checkmark">✔</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDownInProperties