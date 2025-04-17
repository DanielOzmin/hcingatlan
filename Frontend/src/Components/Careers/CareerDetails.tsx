import { useTranslation } from "react-i18next"
import "./CareerDetails.css"

const CareerDetails = () => {
    const { t } = useTranslation()
    return (
        <div className="career-container">
            <h1 className="career-title">{t("career_title")}</h1>
            <div className="career-subtitle">{t("career_subtitle")}</div>

            <div className="career-highlight-box">
                <img src="/CareersPic.jpg" alt={t("career_image_alt")} />
            </div>
            <p className="career-family-phrase">{t("career_family_phrase")}</p>

            <p className="career-intro">{t("career_intro")}</p>

            <h3>{t("you_we_seek")}</h3>
            <ul>
                <li>{t("condition_1")}</li>
                <li>{t("condition_2")}</li>
                <li>{t("condition_3")}</li>
                <li>{t("condition_4")}</li>
                <li>{t("condition_5")}</li>
            </ul>

            <h3>{t("not_you_we_seek")}</h3>
            <ul>
                <li>{t("exclude_1")}</li>
                <li>{t("exclude_2")}</li>
                <li>{t("exclude_3")}</li>
                <li>{t("exclude_4")}</li>
                <li>{t("exclude_5")}</li>
            </ul>

            <p className="career-note">{t("career_note")}</p>

            <p>{t("career_description")}</p>

            <p className="career-contact">
                <strong>{t("Email")}:</strong> <a href="mailto:info@example.hu">info@example.hu</a><br />
                {t("or_call")} <strong><a href="tel:+0000000000">+00 00 000 0000</a></strong>
            </p>
        </div>
    )
}

export default CareerDetails
