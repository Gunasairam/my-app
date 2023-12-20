import { Component } from "react";
import TableHeading, { TableData, TableData1 } from "./table-heading";




class TableComponent extends Component{
    render(){

      
        return(
            <div>
                <table>
                    <TableHeading/>
                    <TableData/>
                    <TableData1/>
                </table>
            </div>
        )
    }
}

export default TableComponent