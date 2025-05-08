import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

import "./Header.css"
import Languange from "./Languange"
import Navbar from "./Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const { t, i18n } = useTranslation()
    const [favoritesCount, setFavoritesCount] = useState<number>(0)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

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
            <div className="hidden md:block">
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
            </div>


            <header className="block md:hidden bg-black p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.gif" alt="Logo" className="h-10" />
                </div>
                <div className="flex items-center gap-4">
                    <Languange i18n={i18n} />
                    <button onClick={toggleMenu} className="w-10 h-10 flex items-center justify-center text-white text-2xl border-2 border-yellow-600 rounded-md hover:bg-yellow-400 hover:text-black transition">
                        ☰
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <nav className="absolute top-16 left-0 right-0 z-50 bg-white p-4 flex flex-col gap-4 md:hidden shadow-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("Home")}
                    </NavLink>
                    <NavLink
                        to="/properties"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("Properties")}
                    </NavLink>
                    <NavLink
                        to="/team"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("Team")}
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("Gallery")}
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("About")}
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("Contact")}
                    </NavLink>
                    <NavLink
                        to="/reviews"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("Reviews")}
                    </NavLink>
                    <NavLink
                        to="/careers"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#d3b325] text-white font-bold p-2 rounded"
                                : "text-gray-700 font-bold p-2 rounded"
                        }
                    >
                        {t("Careers")}
                    </NavLink>
                </nav>
            )}
        </>
    )
}

export default Header