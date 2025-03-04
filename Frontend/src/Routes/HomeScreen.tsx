import "./RoutesCSS/HomeScreen.css"
import "../App.css"

import Header from "../Components/Header/Header"
import Slider from "../Components/Slider/Slider"
import SearchInHome from "../Components/SearchBar/SearchInHome"

const HomeScreen=()=>{

    
    return (
        <>
            <Header/>
        <div className="slider">
            <Slider/>
        </div>
        <div>
            <SearchInHome/> 
        </div>
      
        <div className="content-container">
        
        </div>
        </>
           
    )
}

export default HomeScreen