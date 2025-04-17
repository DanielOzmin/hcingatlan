import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

import "./ContactMainInfo.css"
import { useTranslation } from "react-i18next"

const ContactMainInfo = () => {
    const { t } = useTranslation()
    return (
        <div className="contact-section">
            <div>
                <h1>{t("Address")}</h1>
                <div className="info-card">
                    <FaMapMarkerAlt />
                    <div>
                        <h2>Home Change Ingatlaniroda</h2>
                        <p>zipcode, city, street</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>{t("Phone")}</h1>
                <div className="info-card">
                    <FaPhoneAlt />
                    <div>
                        <h2>+00 (00) 000 0000</h2>
                    </div>
                </div>
            </div>
            <div>
                <h1>{t("Email")}</h1>
                <div className="info-card">
                    <FaEnvelope />
                    <div>
                        <h2><a href="mailto:info@example.com">info@example.com</a></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMainInfo