import "./RoutesCSS/HomeScreen.css"
import "../App.css"

import Header from "../Components/Header/Header"
import Slider from "../Components/Slider/Slider"
import SearchInHome from "../Components/SearchBar/SearchInHome"
import Content from "../Components/Content/Content"
import PropertyHighLight from "../Components/Highlights/PropertyHighLight"


const HomeScreen = () => {


    return (
        <>
            <Header />
            <div className="slider">
                <Slider />
            </div>
            <div>
                <SearchInHome />
            </div>
            <div>
                <Content />
            </div>
            <div>
                <PropertyHighLight/>
            </div>
        </>

    )
}

export default HomeScreen