import { Component } from "react";
import "./TextComponent.css"
import styles from "./TextComponent.module.css"





class TextComponent extends Component{
    render(){
        return(
            <>
            <h1 className="heading">Hello user</h1>
            <h2 className={styles.heading}>Helloo User</h2>
            </>
        )
    }
}


export default TextComponent