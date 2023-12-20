
import { useState } from 'react';

const CircleCreation=()=>{

    const [initial,setInitial]=useState(false)

    // handleClick=()=>{
    //     setInitial(true)
    // }
    
    return(
        <>
         {
            initial?<div style={
                {
                    width:"300px",
                    height:"300px",
                    borderRadius:"50%",
                    backgroundColor:"red"
                }
             }>
    
             </div>:null
         }
         <button onClick={()=>{setInitial(true)}}>add circle</button>
        </>
    )
}

function Circle (){
    return(
        <>
                  <CircleCreation/>

         
        </>
    )
}

export default Circle