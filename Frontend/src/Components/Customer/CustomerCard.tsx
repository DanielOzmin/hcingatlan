import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAward } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope as falEnvelopeRegular } from "@fortawesome/free-regular-svg-icons"

import "./CustomerCard.css"


const CustomerCard = () => {
    return (
        <div className="customer-card-container">
            <h2>Our Sales Associate</h2>
            <div className="customer-line"></div>
            <img src="/ExamplePic.webp" alt="Customer image" />
            <h3>Customer name</h3>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={faAward} />
                <span>Positon</span> 
            </div>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={faPhone} />
                <span>+00 (00) 000 0000</span> 
            </div>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={falEnvelopeRegular}/>
                <span>example@email.com</span> 
            </div>
            <button>Send message</button>
        </div>
    )
}

export default CustomerCard