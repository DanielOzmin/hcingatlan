import { NavLink } from "react-router-dom"

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

const Navbar = ({t}:any) => {
    return(
        <nav className="nav-bar">
        <ul>
            {routes.map((item, index)=>
            <li key={index}>
                <NavLink to={item.route} className={({ isActive }) => (isActive ? "active" : "")}>
                {t(item.name)}
                </NavLink>
            </li>)}
        </ul>

    </nav>
    )
}

export default Navbar