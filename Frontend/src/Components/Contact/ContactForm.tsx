import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import "./ContactForm.css"
import PrivacyPolicyModal from "../PrivacyPolicy/PrivacyPolicyModal"

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const ContactForm = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const [IsModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [formData, setFormData] = useState({
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

        console.log("Sending data:", formData)
    }

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Write us!</h2>
                <div className="form-grid">
                    <input type="text" name="name" placeholder="Name*" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email*" required onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone*" required onChange={handleChange} />
                    <textarea name="message" placeholder="Your message" rows={4} onChange={handleChange} />
                </div>

                <div className="recaptcha-container">
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                        ref={recaptchaRef}
                    />
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
                    <label htmlFor="terms">
                        Accept <button className="link-style" onClick={() => setIsModalOpen(true)} type="button">
                            Privacy Policy
                        </button>.
                    </label>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
            {IsModalOpen && <PrivacyPolicyModal onClose={() => setIsModalOpen(false)} />}
        </>
    )
}

export default ContactForm
