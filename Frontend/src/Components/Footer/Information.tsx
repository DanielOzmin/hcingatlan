import "./Footer.css"

const Information = ({t} :any) => {
    return (
        <div className="footer-section">
            <img src="/logo.gif" alt="Company Logo" className="footer-logo" />
            <p>{t("Our_office_hours")}:</p>
            <p>{t("Mon_fri")}</p>
            <p>{t("Sat_sun")}</p>
            <p>
                {t("Footer_description")}
            </p>
        </div>
    )
}

export default Information