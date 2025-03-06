import "./Footer.css"

const SiteMap = () => {
    return(
        <div className="footer-section">
            <h4>Site Map</h4>
            <ul>
                <li><span className="arrow">›</span><a href="/">Home</a></li>
                <li><span className="arrow">›</span><a href="/properties">Properties</a></li>
                <li><span className="arrow">›</span><a href="/team">Team</a></li>
                <li><span className="arrow">›</span><a href="/gallery">Galery</a></li>
                <li><span className="arrow">›</span><a href="/about-us">About</a></li>
                <li><span className="arrow">›</span><a href="/contact">Contact</a></li>
                <li><span className="arrow">›</span><a href="/reviews">Reviews</a></li>
                <li><span className="arrow">›</span><a href="/careers">Careers</a></li>
            </ul>
        </div>
    )
}

export default SiteMap