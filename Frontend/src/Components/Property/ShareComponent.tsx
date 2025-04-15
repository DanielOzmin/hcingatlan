import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton, EmailShareButton } from "react-share"
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon, EmailIcon } from "react-share"
import ShareLikePrint from "./ShareLikePrint.css"

const ShareComponent = () => {
    const shareUrl = window.location.href
    const title = "Check this!"

    return (
        <div className="shares">
            <FacebookShareButton url={shareUrl} hashtag="#Share">
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <EmailShareButton url={shareUrl} subject={title} body={shareUrl}>
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}

export default ShareComponent
