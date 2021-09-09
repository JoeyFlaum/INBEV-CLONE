import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import Mission from "../../Components/Mission/Mission"
import Stories from "../../Components/Stories/Stories"
import Footer from "../../Components/Footer/Footer"
import Search from "../../Components/DesignElements/Search"
import MobileHeader from "../../Components/Header/MobileHeader"
import "./HomePage.css"
import { useState } from "react"
import { useEffect } from "react"
export default function HomePage(){

    const [windowWidth,setwindowWidth]=useState();

    useEffect(()=>{
    window.addEventListener('resize', ()=>setwindowWidth(window.innerWidth))
    return(()=>{
    window.removeEventListener('resize', ()=>setwindowWidth(window.innerWidth))} 
    )})

    console.log(windowWidth)
    return(
        <>
        {windowWidth>1250?<Header/>:<MobileHeader/>}
        <Hero/>
        <Mission/>
        <Stories/>
        <div className = "home-page__divider"></div>
        <Footer/>
        </>
        )
    
}
