import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import Mission from "../../Components/Mission/Mission"
import Stories from "../../Components/Stories/Stories"
import Footer from "../../Components/Footer/Footer"
import Search from "../../Components/DesignElements/Search"
import "./HomePage.css"
export default function HomePage(){
    
    return(
        <>
        <Header/>
        <Hero/>
        <Mission/>
        <Stories/>
        <div className = "home-page__divider"></div>
        <Footer/>
        <Search/>
        <h1>HOME PAGE</h1>
        </>
        )
    
}
