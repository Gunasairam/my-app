import { Component } from "react";





class YoutubeButton extends Component{

    state={
        isSubscribe:false,
        text1:"please subscribe",
        text2:"thanks for subscribing"

    }

    handleclick=()=>{
        this.setState({
            isSubscribe:!this.state.isSubscribe
        })
    }
    render(){
        return(
            <>
             <button onClick={this.handleclick} style={
                {
                    backgroundColor:this.state.isSubscribe?"green":"red"
                }
             }>
                 {this.state.isSubscribe?this.state.text2:this.state.text1}
             </button>
            </>
        )
    }
}




export default YoutubeButton