import { useTranslation } from "react-i18next"
import CareerDetails from "../Components/Careers/CareerDetails"
import Highlight from "../Components/DefaultHighLight/Highlights"
import Header from "../Components/Header/Header"

const Careers = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <Highlight title={t("Careers")} />
            <CareerDetails/>
        </>
    )
}

export default Careers