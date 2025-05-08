import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import "./ContactForm.css"
import PrivacyPolicyModal from "../PrivacyPolicy/PrivacyPolicyModal"
import { MessageFormData, SendMessage } from "../../Apis"
import { useTranslation } from "react-i18next"

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const ContactForm = () => {
    const { t } = useTranslation()
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const [IsModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [formData, setFormData] = useState<MessageFormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
        termsAccepted: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target

        const newValue =
            type === "checkbox" && e.target instanceof HTMLInputElement
                ? e.target.checked
                : value

        setFormData(prev => ({
            ...prev,
            [name]: newValue,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!recaptchaToken) {
            return alert("pls confirm you are not a robot!")
        }

        const data = {...formData, recaptchaToken}

        SendMessage(data)
    }

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>{t("Write_us")}</h2>
                <div className="form-grid">
                    <input type="text" name="name" placeholder="Name*" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email*" required onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone*" required onChange={handleChange} />
                    <textarea name="message" placeholder="Your message" rows={4} onChange={handleChange} required />
                </div>
                <div className="scale-[0.83] origin-top-left sm:scale-100">
                <div className="recaptcha-container">
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => {
                            console.log("ReCAPTCHA token:", token);
                            setRecaptchaToken(token);
                        }}
                        ref={recaptchaRef}
                    />
                </div>
                </div>


                <div className="terms">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                        id="terms"
                    />
                    <label htmlFor="terms" className="text-lg text-gray-700 leading-relaxed">
                        {t("Accept")} <button className="link-style" onClick={() => setIsModalOpen(true)} type="button">
                        {t("Privacy_policy")}
                        </button>.
                    </label>
                </div>

                <button type="submit" className="submit-button">{t("Send")}</button>
            </form>
            {IsModalOpen && <PrivacyPolicyModal onClose={() => setIsModalOpen(false)} />}
        </>
    )
}

export default ContactForm
