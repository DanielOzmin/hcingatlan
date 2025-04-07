import { useTranslation } from "react-i18next";

import "./Header.css"
import Languange from "./Languange"
import Navbar from "./Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Header = () => {
    const { t, i18n } = useTranslation()
    const [favoritesCount, setFavoritesCount] = useState<number>(0)
    const navigate = useNavigate()

    useEffect(() => {
        const updateFavorites = () => {
            const stored = localStorage.getItem("favorites")
            const favorites = stored ? JSON.parse(stored) : []
            setFavoritesCount(favorites.length)
        }

        updateFavorites()

        window.addEventListener("favoritesUpdated", updateFavorites)

        return () => {
            window.removeEventListener("favoritesUpdated", updateFavorites)
        }
    }, [])

    const handleFavClick = (count: number) => {
        navigate(`/properties/favorites/${count}`)
    }

    return (
        <>
            <header className="header">
                <div className="top-bar">
                    <div className="logo">
                        <img src="/logo.gif" alt="Logo" />
                    </div>
                    <div className="contact-info">
                        <span>📞 +00 (00) 000 0000</span>
                        <div className="header-heart-container" onClick={() => handleFavClick(favoritesCount)}>
                            <FontAwesomeIcon icon={faHeart} className="header-heart" /> <span>({favoritesCount})</span>
                        </div>
                        <Languange i18n={i18n} />
                    </div>
                </div>
            </header>
            <Navbar t={t} />
        </>
    )
}

export default Header