import { useTranslation } from "react-i18next"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"
import ReviewList from "../Components/Reviews/ReviewList"

const Reviews = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <Highlight title={t("Reviews")} />
            <ReviewList />
        </>)
}

export default Reviews