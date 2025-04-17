import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrint, faShareNodes, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import ShareComponent from "./ShareComponent"

import "./ShareLikePrint.css"
import { useTranslation } from "react-i18next"


type Props = {
    favId: string | undefined
}

const ShareLikePrint = ({ favId }: Props) => {
    const { t } = useTranslation()
    const [showShare, setShowShare] = useState<boolean>(false)
    const [isFavorite, setIsFavorite] = useState<boolean>(() => {
        const favorites: string[] = JSON.parse(localStorage.getItem("favorites") || "[]")
        return favorites.includes(favId || "")
    })

    const handlePrint = () => {
        window.print()
    }

    const handleShare = async () => {
        setShowShare(!showShare)
    }
    const handleFavorite = () => {
        setIsFavorite(prev => {
            const updated = !prev

            const storeId = localStorage.getItem("favorites")
            const favorites = storeId ? JSON.parse(storeId) : []

            if (updated) {
                const updatedFavorites = [favId, ...favorites.filter((id: string) => id !== favId)]
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
            } else {
                const updatedFavorites = favorites.filter((id: string) => id !== favId)
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
            }
            window.dispatchEvent(new Event("favoritesUpdated"))

            return updated
        })
        console.log(favId)
        console.log(localStorage.getItem("favorites"))
    }

    return (
        <div className="share-like-print-container">
            <div className="share-like-print-icons" onClick={handlePrint}>
                <FontAwesomeIcon icon={faPrint} size="2x" />
                <p>{t("Print")}</p>
            </div>
            <div className="share-like-print-icons" onClick={handleFavorite}>
                <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} className={`heart ${isFavorite ? "favorite" : ""}`} size="2x" />
                <p>{t("Favorite")}</p>
            </div>
            <div className="share-like-print-icons" onClick={handleShare}>
                <FontAwesomeIcon icon={faShareNodes} size="2x" />
                <p>{t("Share")}</p>
                {showShare && <ShareComponent />}
            </div>
        </div>
    )
}

export default ShareLikePrint