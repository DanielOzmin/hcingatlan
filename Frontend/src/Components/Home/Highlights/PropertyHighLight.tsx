import { useTranslation } from "react-i18next"
import "./PropertyHighLight.css"

const PropertyHighLight = () => {
    const { t } = useTranslation()
    return (
    <div className="highlight-container">
        <div className="highlight-text">
            <h4>{t("THE_WAY_TO_YOUR_HOME")}</h4>
        </div>
    </div>
    )
}

export default PropertyHighLight