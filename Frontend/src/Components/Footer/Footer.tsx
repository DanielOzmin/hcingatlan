import { useTranslation } from "react-i18next"
import Contact from "./Contact"
import FamousLocations from "./FamousLocations"
import Information from "./Information"
import SiteMap from "./SiteMap"

const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="hidden md:block">
                <div className="footer-container">
                    <div className="footer-components">
                        <Information t={t} />
                        <SiteMap t={t} />
                        <FamousLocations t={t} />
                        <Contact t={t} />
                    </div>
                    <div className="footer-made-bar">
                        Created By: Me!!!
                    </div>
                </div>
            </div>

            <footer className="block md:hidden">
                <div className="bg-[#222222] text-white">
                    <div className="p-6 space-y-4">
                        <Contact t={t} />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer