import { useState } from "react"




const Todo =()=>{


    const[list,setList]=useState([])
    const[input,setInput]= useState("")

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        // const newList=[...list,input]
        // setList(newList)
        setList([...list,input])

        setInput("")
    }


    const handleRemoveall=()=>{
        setList([])
    }

    const handelRemove=(index)=>{
     
        setList(list.filter((element,ind)=>ind!==index))
    }

    const handleUpdate=(index)=>{
        const ulist= list.filter((element,ind)=>element[index]=)
    }
 
    return(
        <>

        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}/>
            <button type="submit" >add todo</button>
        </form>
        <button onClick={handleRemoveall}>Remove all</button>

        {
            list.length>0? list.map((element,index)=><ul key={index}>
                    <li>
                    {element}
                    </li>
                    <button onClick={()=>handleUpdate(index)}>update</button>
                    <button onClick={()=>handelRemove(index)}>delete</button>
                </ul>
            ):<h2>no todos</h2>
        }
         
        </>
    )
}

export default Todo