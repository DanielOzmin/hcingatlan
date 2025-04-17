import { useTranslation } from "react-i18next"
import "./AboutUsFicIntroduction.css"

const AboutUsFixIntroduction = () => {
    const { t } = useTranslation()
    return (
        <div className="intro-container">
            <h1>{t("intro_main_heading")}</h1>

            <p className="intro-highlight">{t("intro_subheading")}</p>

            <p>
                {t("intro_paragraph_1")}
            </p>

            <p>
                {t("intro_paragraph_2")}
            </p>

            <h3>{t("intro_services_heading")}:</h3>

            <ul>
                <li>{t("intro_services_list_1")}</li>
                <li>{t("intro_services_list_2")}</li>
                <li>{t("intro_services_list_3")}</li>
                <li>{t("intro_services_list_4")}</li>
                <li>{t("intro_services_list_5")}</li>
                <li>{t("intro_services_list_6")}</li>
                <li>{t("intro_services_list_7")}</li>
                <li>{t("intro_services_list_8")}</li>
                <li>{t("intro_services_list_9")}</li>
            </ul>

            <p>
            {t("intro_paragraph_3")}
            </p>

            <p>
            {t("intro_paragraph_4")}<br />
                
            </p>

            <p>
            {t("intro_paragraph_5")}<br />
            </p>

            <p className="bold-line">{t("intro_slogan")}</p>
            <p className="highlight italic">{t("intro_closing_message")}</p>

            <p className="warning-text">{t("intro_data_warning")}</p>
        </div>

    )
}

export default AboutUsFixIntroduction