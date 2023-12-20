import { Component } from "react";
import BasicExample from "./cards";
import "./cards.css"




class FlexCards extends Component{
    render(){
        return(
            <>
            <div className="flexContainer">
                <BasicExample/>
                <BasicExample/>
                <BasicExample/>
                <BasicExample/>
                <BasicExample/>
                <BasicExample/>
            </div>
            </>
        )
    }
}

export default FlexCards