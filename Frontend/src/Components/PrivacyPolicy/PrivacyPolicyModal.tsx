import { useTranslation } from "react-i18next"
import "./PrivacyPolicyModal.css"

type Props = {
    onClose: ()=> void
}

const PrivacyPolicyModal = ({onClose} : Props) => {
    const { t } = useTranslation()
    return (
        <div className="policy-modal-container" onClick={onClose}>
            <div className="policy-modal">
                <h1>{t("privacy_heading")}</h1>
                <p>{t("privacy_line_1")}</p>
                <p>{t("privacy_line_2")},</p>
                <p>{t("privacy_line_3")}</p>
                <p>{t("privacy_line_4")}</p>
            </div>
        </div>
    )
}

export default PrivacyPolicyModal