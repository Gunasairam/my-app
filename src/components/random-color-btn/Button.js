import useGenerateRandomColor from "./Randomcolorgenerator"





function ButtonComp (){

    const { color, generateColor } = useGenerateRandomColor();

    return(
        <>
        <div>
         <button onClick={generateColor} style={
        {
            backgroundColor:"#"+color,

        }
         }>CLick me</button>
         </div>
        </>
    )
}

export default ButtonComp