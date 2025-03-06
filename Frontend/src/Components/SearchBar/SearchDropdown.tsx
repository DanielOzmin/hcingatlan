import { useState } from "react"
import "./SearchDropdown.css"

type Props = {
    options: string[],
    selectedValues: string[],
    setSelectedValues: (values: string[]) => void
    hasInput?: boolean
}

const SearchDropdown=({ options, selectedValues, setSelectedValues, hasInput }: Props) => {
    const [customInput, setCustomInput] = useState<string | undefined>(undefined)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleOption = (option: string) => {
        setSelectedValues(
            selectedValues.includes(option)
                ? selectedValues.filter((o) => o !== option)
                : [...selectedValues, option]
        )
    }

    const filteredOptions = customInput === undefined ? options : options.filter((option)=> option.toLowerCase().includes(customInput.toLowerCase()))

    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {selectedValues.length > 0 ? selectedValues.join(", ") : "Select..."}
                </button>
                {isOpen && (
                    <div className="dropdown-menu">
                       {hasInput && 
                       <div className="dropdown-input">
                            <input
                                type="text"
                                placeholder="Add custom option..."
                                value={customInput}
                                onChange={(e) => setCustomInput(e.target.value)}
                            />
                        </div>} 
                        {filteredOptions.map((option, index) => (
                            <div key={index} className="dropdown-item" onClick={() => toggleOption(option)}>
                            <span className="option-text">{option}</span>
                            {selectedValues.includes(option) && <span className="checkmark">✔</span>}
                        </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchDropdown