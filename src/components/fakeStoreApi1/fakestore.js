import axios from "axios";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




class ApiComponent extends Component{

    state={
        products:[]
    }
    
    handleClick=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((resolve)=>{

            if(resolve.status===200){
                this.setState({
                    products:resolve.data
                })
            }
        })
       
    }

    handleRemove=(id)=>{
        let remove= this.state.products.filter((value)=>value.id!==id
        )

        this.setState({
            products:remove
        })
    }
    handleRemoveAll=()=>{
        let removeall= this.state.products.filter((value)=>{
            value.id=[]
        })
        this.setState({
            products:removeall
            
        })
    }
    render(){
        return(
            <>
             <button onClick={this.handleClick}>View Products</button>
             <button onClick={()=>{this.handleRemoveAll()}}>remove all</button>
             <div className="cardsflex">
              {
                this.state.products.map((element)=>{
                    return(
                        <div key={element.id} >
                           

                           <Card style={{ width: '16rem' , height:"28rem", display:"relative"}}>
      <Card.Img variant="top" src={element.image} style={
        {
            height:"250px"
        }
      }/>
      <Card.Body style={
        {
            height:"10rem"
        }
      }>
        <Card.Title style={{
            overflow:'hidden',
            width:"100%",
            height: "1.5rem",
            textOverflow:"ellipsis",
            lineHeight:"1.2"
        }}>{element.title}</Card.Title>
        <Card.Text style={
            
            {
                overflow:'hidden',
                width:"auto",
                height:"5rem",
                lineHeight:"1.2",
                textOverflow:"ellipsis"
             
        }
            
        }>
          {element.description}
        </Card.Text>
        <div style={{
            display:"absolute",
            bottom:"1rem"
        }}>
        <div style={
            {
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                alignContent:"center"
                
            }
        }>
        <p style={
            {
              marginTop:"1rem"
            }
        }>Rs.{element.price}</p>
        <Button variant="primary">Buynow</Button>
        <Button variant="danger" onClick={()=>{this.handleRemove(element.id)}}>Remove</Button>
        </div>
        </div>
      </Card.Body>
    </Card>
                           
                        </div>
                    )
                })
              }
              </div>
            </>
        )
    }


}


export default ApiComponent