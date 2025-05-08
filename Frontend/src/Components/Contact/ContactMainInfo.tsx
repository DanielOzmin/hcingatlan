import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const ContactMainInfo = () => {
    const { t } = useTranslation()


    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <div className="w-full">
                    <h1 className="text-xl font-semibold mb-2">{t("Address")}</h1>
                    <div className="w-full max-w-[450px] pt-6 bg-white border border-gray-100 shadow-md rounded-lg p-6 flex items-start gap-4 h-[100px]">
                        <FaMapMarkerAlt className="text-yellow-600 text-3xl" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Home Change Ingatlaniroda</h2>
                            <p className="text-gray-700">Zip, Example street. 1</p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="text-xl font-semibold mb-2">{t("Phone")}</h1>
                    <div className="w-full max-w-[450px] pt-8 bg-white border border-gray-100 shadow-md rounded-lg p-6 flex items-start gap-4 h-[100px]">
                        <FaPhoneAlt className="text-yellow-600 text-3xl" />
                        <div>
                            <h2 className="text-xl text-gray-900">
                                <a href="tel:+00000000000" className="hover:text-yellow-600 transition">
                                    +00 (00) 0 000 000
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="text-xl font-semibold mb-2">{t("Email")}</h1>
                    <div className="w-full max-w-[450px] pt-8 bg-white border border-gray-100 shadow-md rounded-lg p-6 flex items-start gap-4 h-[100px]">
                        <FaEnvelope className="text-yellow-600 text-3xl" />
                        <div>
                            <h2 className="text-xl text-gray-900">
                                <a href="mailto:example@example.com" className="hover:text-yellow-600 transition">
                                    example@example.com
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactMainInfo
