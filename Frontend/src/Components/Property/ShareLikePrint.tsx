import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrint, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import ShareComponent from "./ShareComponent"

import "./ShareLikePrint.css"


const ShareLikePrint = () => {
    const [showShare, setShowShare] = useState<boolean>(false)

    const handlePrint = () => {
        window.print()
    }

    const handleShare = async () => {
        setShowShare(!showShare)
        // if(navigator.share){
        //     try {
        //         await navigator.share({
        //             title: "Share",
        //             text: "Check the site",
        //             url: window.location.href,
        //         })
        //     } catch (error) {
        //         console.error("share is not possible: ", error)
        //     }
        // }else{
        //     alert("Your browser doesnt support this share function")
        // }
    }

    return (
        <div className="share-like-print-container">
            <div className="share-like-print-icons" onClick={handlePrint}>
                <FontAwesomeIcon icon={faPrint} size="2x" />
                <p>Print</p>
            </div>
            <div className="share-like-print-icons" onClick={handleShare}>
                <FontAwesomeIcon icon={faHeartRegular} size="2x" />
                <p>Favorite</p>
            </div>
            <div className="share-like-print-icons" onClick={handleShare}>
                <FontAwesomeIcon icon={faShareNodes} size="2x" />
                <p>Share</p>
                {showShare && <ShareComponent />}
            </div>
        </div>
    )
}

export default ShareLikePrint