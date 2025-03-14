import "./RoutesCSS/HomeScreen.css"
import "../App.css"

import Header from "../Components/Header/Header"
import Slider from "../Components/Home/Slider/Slider"
import SearchInHome from "../Components/Home/SearchBar/SearchInHome"
import Content from "../Components/Home/Content/Content"
import PropertyHighLight from "../Components/Home/Highlights/PropertyHighLight"


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