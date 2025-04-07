import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAward, faUser } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope as falEnvelopeRegular } from "@fortawesome/free-regular-svg-icons"

import "./ContactInfo.css"
import { Customer, Property } from "../../dummyData"

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

type Props = {
    customer: Customer,
    property: Property,
    textareaRef: React.RefObject<HTMLTextAreaElement | null>
}
const ContactInfo = ({ customer, property, textareaRef }: Props) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: `Dear Sales Associate,\nI am contacting you regarding the property with listing ID #${property.propertyId}.`,
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
        <div className="contact-info-container">
            <div className="contact-info-card">
                <h1>Contact Info</h1>
                <div className="contact-info-row">
                    <img src="/ExamplePic.webp" alt="agent" />
                    <div className="contact-info-text">
                        <div className="contact-info-details">
                            <FontAwesomeIcon icon={faUser} />
                            <span>{customer.name}</span>
                        </div>
                        <div className="contact-info-details">
                            <FontAwesomeIcon icon={faAward} />
                            <span>{customer.position}</span>
                        </div>
                        <div className="contact-info-details">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>{customer.phone}</span>
                        </div>
                        <div className="contact-info-details">
                            <FontAwesomeIcon icon={falEnvelopeRegular} />
                            <span>{customer.email}</span>
                        </div>
                    </div>
                </div>
            </div>

            <form className="contact-info-form" onSubmit={handleSubmit}>
                <h2 className="contact-info-title">Contact us about the property via email!</h2>

                <div className="contact-info-grid">
                    <input type="text" name="name" placeholder="Name*" required onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone*" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="E-mail*" required onChange={handleChange} />
                </div>

                <textarea
                    ref={textareaRef}
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-info-textarea"
                />

                <div className="contact-info-recaptcha">
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                        ref={recaptchaRef}
                    />
                </div>

                <div className="contact-info-terms">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                        id="terms"
                    />
                    <label htmlFor="terms">
                        Accept <a href="/adatvedelem" target="_blank">Privacy Policy</a>.
                    </label>
                </div>

                <button type="submit" className="contact-info-submit">Submit</button>
            </form>
        </div>

    )
}

export default ContactInfo