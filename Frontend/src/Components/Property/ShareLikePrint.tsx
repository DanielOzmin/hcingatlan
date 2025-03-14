import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrint, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"

import "./ShareLikePrint.css"

const ShareLikePrint = () => {

    const handleClick = () => {
        alert("still in progress")
    }
    return (
        <div className="share-like-print-container">
            <div className="share-like-print-icons" onClick={handleClick}>
                <FontAwesomeIcon icon={faPrint} size="2x" />
                <p>Print</p>
            </div>
            <div className="share-like-print-icons" onClick={handleClick}>
                <FontAwesomeIcon icon={faHeartRegular} size="2x" />
                <p>Favorite</p>
            </div>
            <div className="share-like-print-icons" onClick={handleClick}>
                <FontAwesomeIcon icon={faShareNodes} size="2x" />
                <p>Share</p>
            </div>
        </div>
    )
}

export default ShareLikePrint