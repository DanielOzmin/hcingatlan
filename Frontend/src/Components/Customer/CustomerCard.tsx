import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAward } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope as falEnvelopeRegular } from "@fortawesome/free-regular-svg-icons"

import "./CustomerCard.css"
import { Customer } from "../../dummyData"


type Props = {
    customer: Customer,
    textareaRef: React.RefObject<HTMLTextAreaElement | null>
}

const CustomerCard = ({ customer, textareaRef }: Props) => {
    const handleJumpToTextarea = () => {
        textareaRef.current?.scrollIntoView({ behavior: "smooth" })
        textareaRef.current?.focus()
    }

    return (
        <div className="customer-card-container">
            <h2>Our Sales Associate</h2>
            <div className="customer-line"></div>
            <img src="/ExamplePic.webp" alt="Customer image" />
            <h3>{customer.name}</h3>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={faAward} />
                <span>{customer.position}</span>
            </div>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={faPhone} />
                <span>{customer.phone}</span>
            </div>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={falEnvelopeRegular} />
                <span>{customer.email}</span>
            </div>
            <button onClick={handleJumpToTextarea}>Send message</button>
        </div>
    )
}

export default CustomerCard