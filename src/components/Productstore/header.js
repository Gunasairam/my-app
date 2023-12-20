import { Component } from "react";
import Nav from 'react-bootstrap/Nav';



class Header extends Component{
    render(){
        return(
            <>
              <div style={
                {
                    backgroundColor:"black",
                    height:"4rem",
                    display:"flex",
                    justifyContent:"flex-end",
                    alignItems:"center"
                }
              }>
              <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        </Nav>
              </div>
            </>
        )
    }
}

export default Header