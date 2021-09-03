import Facebook from "./DesignElements/Facebook"
import TwitterSimple from "./DesignElements/TwitterSimple"
import LinkedIn from "./DesignElements/LinkedIn"
import Instagram from "./DesignElements/Instagram"
import Youtube from "./DesignElements/Youtube"

export default function Social({fill}){
    console.log(fill)
    return(
        <div className = "social__container">
            <Facebook fill = {fill}/>
            <TwitterSimple fill = {fill}/>
            <LinkedIn fill = {fill}/>
            <Instagram fill = {fill}/>
            <Youtube fill = {fill}/>
        </div>
    )
}