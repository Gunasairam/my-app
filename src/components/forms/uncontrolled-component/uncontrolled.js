import { createRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Uncontrolled() {

  const emailref=createRef()
  const passref=createRef()

  const handleSubmit=(e)=>{
    e.preventDefault()
  
    const userdetails={
      username:emailref.current.value,
      password:passref.current.value
    }
    // console.log(userdetails)

    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userdetails)
})
.then(res => res.json())
.then(res=>{
  if(res.message){
    alert(res.message)
  }else{
    alert("login success")
  }
});
            
  }

  
  return (
    <>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" ref={emailref} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passref}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Uncontrolled;