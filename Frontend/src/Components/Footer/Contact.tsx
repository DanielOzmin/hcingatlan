const Contact = ({t} :any) => {
    return (
        <div className="footer-section">
            <h4>{t("Contact")}</h4>
            <p>📍 1111 Budapest, exmaple street, 99</p>
            <p>📞 <strong><a href="tel:+0000000000">+00 00 000 0000</a></strong></p>
            <p>📧 <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
    )
}

export default Contact