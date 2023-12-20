import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class AddCarousel extends Component{
    state={
        src:[
           {
            src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFlc3RoZXRpYyUyMGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
            id:1
           },
           {
            src:"https://plus.unsplash.com/premium_photo-1669879374816-4aece0ad3bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFlc3RoZXRpYyUyMGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
            id:2
           },
           {
            src:"https://images.unsplash.com/photo-1610536385218-b8d64e1ceedc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFlc3RoZXRpYyUyMGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
            id:3
           }
        ]
    }

    handleClick=()=>{
        this.setState({src:[...this.state.src,{src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFlc3RoZXRpYyUyMGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",id:4}]})
    }
    render(){
        return(
            <>
            
               <Carousel>
                {
                    this.state.src.map((val,ind,arr)=>{
                        return(
                            <div key={val.id}>
                            <div >
                               <img src= {val.src}/>
                              </div>
                
                            </div>
                        )
                    })
                }
                
            </Carousel>
            <button onClick={this.handleClick}>add image</button>
            </>
        )
    }
}

export default AddCarousel