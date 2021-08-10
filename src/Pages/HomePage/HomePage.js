import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import Mission from "../../Components/Mission/Mission"
import Stories from "../../Components/Stories/Stories"
import Footer from "../../Components/Footer/Footer"
import Search from "../../Components/DesignElements/Search"

export default function HomePage(){
    
    return(
        <>
        <Header/>
        <Hero/>
        <Mission/>
        <Stories/>
        <div>grey divider</div>
        <Footer/>
        <Search/>
        <h1>HOME PAGE</h1>
        </>
        )
    
}
