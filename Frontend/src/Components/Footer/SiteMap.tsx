import "./Footer.css"

const SiteMap = ({t} :any) => {
    return(
        <div className="footer-section">
            <h4>{t("Site_map")}</h4>
            <ul>
                <li><span className="arrow">›</span><a href="/">{t("Home")}</a></li>
                <li><span className="arrow">›</span><a href="/properties">{t("Properties")}</a></li>
                <li><span className="arrow">›</span><a href="/team">{t("Team")}</a></li>
                <li><span className="arrow">›</span><a href="/gallery">{t("Gallery")}</a></li>
                <li><span className="arrow">›</span><a href="/about-us">{t("About")}</a></li>
                <li><span className="arrow">›</span><a href="/contact">{t("Contact")}</a></li>
                <li><span className="arrow">›</span><a href="/reviews">{t("Reviews")}</a></li>
                <li><span className="arrow">›</span><a href="/careers">{t("Careers")}</a></li>
            </ul>
        </div>
    )
}

export default SiteMap