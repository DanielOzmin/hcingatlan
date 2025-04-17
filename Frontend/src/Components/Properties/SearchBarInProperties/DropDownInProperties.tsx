import { useEffect, useRef, useState } from "react"
import "./DropDownInProperties.css"

type OptionItem = {
    label: string
    value: string
}

type Props = {
    title: string,
    options: OptionItem[],
    selectedValues: string[],
    setSelectedValues: (values: string[]) => void,
    hasInput?: boolean,
}

const DropDownInProperties = ({ title, options, selectedValues, setSelectedValues, hasInput }: Props) => {
    const [customInput, setCustomInput] = useState<string>("")
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

    const toggleOption = (value: string) => {
        setSelectedValues(
            selectedValues.includes(value)
                ? selectedValues.filter((v) => v !== value)
                : [...selectedValues, value]
        )
    }

    const handleAddCustomOption = () => {
        const trimmedInput = customInput.trim()
        if (
            trimmedInput &&
            !options.some(opt => opt.value.toLowerCase() === trimmedInput.toLowerCase()) &&
            !selectedValues.includes(trimmedInput)
        ) {
            setSelectedValues([...selectedValues, trimmedInput])
            setCustomInput("")
        }
    }

    const mergedOptions: OptionItem[] = [
        ...options,
        ...selectedValues
            .filter(val => !options.some(opt => opt.value === val))
            .map(val => ({ label: val, value: val }))
    ]

    const filteredOptions = customInput === ""
        ? mergedOptions
        : mergedOptions.filter((option) =>
            option.label.toLowerCase().includes(customInput.toLowerCase())
        )

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleAddCustomOption()
        }
    }

    return (
        <div className="property-dropdown-container" ref={dropdownRef}>
            <div className="property-dropdown">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {selectedValues.length > 0
                        ? options
                            .filter(opt => selectedValues.includes(opt.value))
                            .map(opt => opt.label)
                            .join(", ")
                        : title}
                </button>
                {isOpen && (
                    <div className="property-dropdown-menu">
                        {hasInput &&
                            <div className="property-dropdown-input">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={customInput}
                                    onChange={(e) => setCustomInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                {customInput.trim() &&
                                    !mergedOptions.some(opt => opt.value.toLowerCase() === customInput.toLowerCase()) && (
                                        <div className="dropdown-item add-new-option" onClick={handleAddCustomOption}>
                                            Add "{customInput.trim()}"
                                        </div>
                                    )}
                            </div>
                        }
                        {filteredOptions.map((option, index) => (
                            <div key={index} className="property-dropdown-item" onClick={() => toggleOption(option.value)}>
                                <span className="property-option-text">{option.label}</span>
                                {selectedValues.includes(option.value) && <span className="checkmark">✔</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDownInProperties