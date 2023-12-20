import { PureComponent } from "react";








export default class Timer extends PureComponent{
    constructor(){
        super()
        this.state({
            count:0,
            flag:false
        })
    }

    handleStart=()=>{
        setInterval(() => {
            this.setState({
                count:this.state.count+1,
                flag:true
            })
        }, 1000);
    }

    render(){
        return(
            // <>
        //       <button onClick={}>start</button>
        //       <button onClick={}>stop</button>
        {/* //     </> */}
        )
    }
}