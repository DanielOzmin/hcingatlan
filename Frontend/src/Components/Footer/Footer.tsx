import Contact from "./Contact"
import FamousLocations from "./FamousLocations"
import Information from "./Information"
import SiteMap from "./SiteMap"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-components">
                <Information/>
                <SiteMap/>
                <FamousLocations/>
                <Contact/>
            </div>
            <div className="footer-made-bar">
                Created By: Me!!!
            </div>
        </div>
    )
}

export default Footer