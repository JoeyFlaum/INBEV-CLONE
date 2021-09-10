import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import Mission from "../../Components/Mission/Mission"
import Stories from "../../Components/Stories/Stories"
import Footer from "../../Components/Footer/Footer"
import MobileHeader from "../../Components/Header/MobileHeader"
import "./HomePage.css"
import { useState } from "react"
import { useEffect } from "react"


export default function HomePage(){

    const [scrollY, setscrollY] = useState(0);
    const [windowWidth,setwindowWidth]=useState(window.innerWidth)
    const [scrollDirection, setscrollDirection] = useState("up");
    
    const scrollPath = (e) => {
        window.scrollY < scrollY
        ? setscrollDirection("up")
        : setscrollDirection("down");
        setscrollY(window.scrollY);
    };
    useEffect(()=>{
    window.addEventListener('resize', ()=>setwindowWidth(window.innerWidth));
    window.addEventListener("scroll", scrollPath);
    return(()=>{
    window.removeEventListener('resize', ()=>setwindowWidth(window.innerWidth));
    window.removeEventListener("scroll", scrollPath);} 
    )})

    console.log(windowWidth)
    return(
        <>
        {windowWidth>1250?<Header scrollDirection ={scrollDirection}/> :<MobileHeader scrollDirection ={scrollDirection}/>}
        <Hero/>
        <Mission/>
        <Stories/>
        <div className = "home-page__divider"></div>
        <Footer/>
        </>
        )
    
}
