import { useTranslation } from "react-i18next"
import Contact from "./Contact"
import FamousLocations from "./FamousLocations"
import Information from "./Information"
import SiteMap from "./SiteMap"

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className="footer-container">
            <div className="footer-components">
                <Information t={t}/>
                <SiteMap t={t}/>
                <FamousLocations t={t}/>
                <Contact t={t}/>
            </div>
            <div className="footer-made-bar">
                Created By: Me!!!
            </div>
        </div>
    )
}

export default Footer