import Facebook from "./DesignElements/Facebook"
import TwitterSimple from "./DesignElements/TwitterSimple"
import LinkedIn from "./DesignElements/LinkedIn"
import Instagram from "./DesignElements/Instagram"
import Youtube from "./DesignElements/Youtube"

export default function Social({fill}){
    console.log(fill)
    return(
        <div className = "social__container">
            <a href = "https://www.facebook.com/abinbev" target="_blank" rel = "noreferrer"><Facebook fill = {fill}/></a>
            <a href = "https://twitter.com/abinbev" target="_blank" rel = "noreferrer"><TwitterSimple fill = {fill}/></a>
            <a href = "https://www.linkedin.com/company/anheuser-busch-inbev" target="_blank" rel = "noreferrer"> <LinkedIn fill = {fill}/></a>
            <a href = "https://www.instagram.com/abinbev/" target="_blank" rel = "noreferrer"> <Instagram fill = {fill}/></a>
            <a href = "https://www.youtube.com/user/ABInBevNews" target="_blank" rel = "noreferrer"><Youtube fill = {fill}/></a>
        </div>
    )
}