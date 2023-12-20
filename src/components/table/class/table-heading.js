import { Component } from "react"




class TableHeading extends Component{
    render(){
        return(
            <div>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Extended</th>
            </div>
        )
    }
}


class TableData extends Component{
    render(){
        return(
            <div>
                <td>HardDisk</td>
                <td>1</td>
                <td>500$</td>
                <td>400$</td>
            </div>
        )
    }
}

class TableData1 extends Component{
    render(){
        return(
            <div>
                <td>Cd drive</td>
                <td>1</td>
                <td>200$</td>
                <td>500$</td>
            </div>
        )
    }
}

export default TableHeading

export {TableData}
export {TableData1}