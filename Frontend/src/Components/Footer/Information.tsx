import "./Footer.css"

const Information = () => {
    return (
        <div className="footer-section">
            <img src="/logo.gif" alt="Company Logo" className="footer-logo" />
            <p>Our office hours:</p>
            <p>Mon-Fri: 10:00-16:00 (Phone NON-STOP)</p>
            <p>Sat-Sun: CLOSED (Phone NON-STOP)</p>
            <p>
                Please note that property visits on weekends require prior phone
                arrangement with the property owner.
            </p>
        </div>
    )
}

export default Information