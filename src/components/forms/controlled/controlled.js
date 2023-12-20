


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';







const Controlled=()=>{

    const [username,setUsername]=useState("")
    const [userError,setUserError]=useState("")
    const [password,setPassword]= useState("")
    const [passErr,setPassErr]=useState("")


    const handleSubmit=(e)=>{
        e.preventDefault()
        const userdetails={
            username:username,
            password:password
        }

        console.log(userdetails)

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

    const usernameHandler=(e)=>{
        setUsername(e.target.value)
        if(e.target.value.length>6){
            setUserError("enter username <6 characters")
        }else{
            setUserError("")
        }
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
        if(e.target.value.length>10){
            setPassErr("enter password <10")
        }else{
            setPassErr("")
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={username} onChange={usernameHandler}/>
          <Form.Label style={{color:"red"}}>{userError}</Form.Label>
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={passwordHandler}/>
          <Form.Label style={{color:"red"}}>{passErr}</Form.Label>
        </Form.Group>
        
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    )
}

export default Controlled