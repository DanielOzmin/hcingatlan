import { NavLink } from "react-router-dom";

import "./Header.css"

const routes: {route: string, name: string}[] = [
    {route: "/", name: "Home"},
    {route: "/properties", name: "Properties"},
    {route: "/team", name: "Team"},
    {route: "/gallery", name: "Gallery"},
    {route: "/about-us", name: "About"},
    {route: "/contact", name: "Contact"},
    {route: "/reviews", name: "Reviews"},
    {route: "/careers", name: "Careers"},
]

const Header=()=>{
    return(
        <header className="header">
            <div className="top-bar">
                <div className="logo">
                    <img src="/logo.gif" alt="Logo" />
                </div>
                <div className="contact-info">
                <span>📞 +00 (00) 000 0000</span>
                <select className="languanges">
                    <option value="hu">🇭🇺 HU</option>
                    <option value="en">🇬🇧 EN</option>
                    <option value="de">🇩🇪 DE</option>
                    <option value="sk">🇸🇰 SK</option>
                </select>
                </div>
            </div>
            <nav className="nav-bar">
                <ul>
                    {routes.map((item, index)=>
                    <li key={index}>
                        <NavLink to={item.route} className={({ isActive }) => (isActive ? "active" : "")}>
                            {item.name}
                        </NavLink>
                    </li>)}
                </ul>

            </nav>
        </header>
    )
}

export default Header