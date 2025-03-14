import { useTranslation } from "react-i18next";

import "./Header.css"
import Languange from "./Languange";
import Navbar from "./Navbar";


const Header=()=>{
    
    const {t, i18n} = useTranslation()

    return(
        <>
        <header className="header">
            <div className="top-bar">
                <div className="logo">
                    <img src="/logo.gif" alt="Logo" />
                </div>
                <div className="contact-info">
                <span>📞 +00 (00) 000 0000</span>
                <Languange i18n={i18n}/>
                </div>
            </div>
        </header>
        <Navbar t={t}/>
        </>
    )
}

export default Header