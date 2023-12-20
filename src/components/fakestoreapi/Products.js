import { Component } from "react"

import axios from "axios"
import BasicExample from "./productCard"
import "./productCard.css"



class ProductsComponent extends Component{
    state={
        products:[]
    }

    handleClick=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{

            console.log(res)
            if(res.status==200){
                this.setState({
                    products:res.data
                })
            }
        })
    }

 
    render(){
        return(
            <>
            
              <button onClick={this.handleClick}>click me</button>
              <div className="cardsflex">
              {
                this.state.products.map((element)=>{
                    return(
                        <div key={element.id} >
                           
                           <BasicExample title={element.title} image={element.image} description={element.description} price={element.price} />
                           
                        </div>
                    )
                })
              }
              </div>
            </>
            )
    }
   
}


export default ProductsComponent