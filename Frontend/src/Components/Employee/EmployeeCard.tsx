import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAward } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope as falEnvelopeRegular } from "@fortawesome/free-regular-svg-icons"

import "./EmployeeCard.css"
import { Employee } from "../../Apis"
import { useTranslation } from "react-i18next"



type Props = {
    employee: Employee,
    textareaRef: React.RefObject<HTMLTextAreaElement | null>
}

const EmployeeCard = ({ employee, textareaRef }: Props) => {
    const { t } = useTranslation()
    const handleJumpToTextarea = () => {
        textareaRef.current?.scrollIntoView({ behavior: "smooth" })
        textareaRef.current?.focus()
    }

    if(!employee) return

    return (
        <div className="customer-card-container">
            <h2 className="text-lg font-bold mb-3">{t("Our_sales_associate")}</h2>
            <div className="customer-line"></div>
            <img src={employee.img} alt="Customer image" />
            <h3>{employee.name}</h3>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={faAward} />
                <span>{employee.position}</span>
            </div>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={faPhone} />
                <span><a href={`tel:${employee.phone}`}>{employee.phone}</a></span>
            </div>
            <div className="customer-card-details">
                <FontAwesomeIcon icon={falEnvelopeRegular} />
                <span><a href={`mailto:${employee.email}`}>{employee.email}</a></span>
            </div>
            <button onClick={handleJumpToTextarea}>{t("Send_message")}</button>
        </div>
    )
}

export default EmployeeCard