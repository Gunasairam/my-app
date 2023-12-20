


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample(props) {
    
  return (
    <Card style={{ width: '16rem' , height:"28rem", display:"relative"}}>
      <Card.Img variant="top" src={props.image} style={
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
        }}>{props.title}</Card.Title>
        <Card.Text style={
            
            {
                overflow:'hidden',
                width:"auto",
                height:"5rem",
                lineHeight:"1.2",
                textOverflow:"ellipsis"
             
        }
            
        }>
          {props.description}
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
        }>Rs.{props.price}</p>
        <Button variant="primary">Buynow</Button>
        {/* <Button variant="danger" onClick={this.document.remove()}>Remove</Button> */}
        </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;