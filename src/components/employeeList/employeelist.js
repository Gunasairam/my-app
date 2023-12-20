import { Component } from "react";




class EmployeeTable extends Component{

     state={
        header:[
        {
            Employeename:"Employeename",
            Emplpoyeeid:"Emplpoyeeid",
            Employeesalary:"Employeesalary",
            Employeedesignation:"Employeedesignation"

        }],
        data:[
        {
            name:"John",
            id:"1",
            salary:"20000",
            designation:"Angular developer"

        },
        {
            name:"sai",
            id:"2",
            salary:"25000",
            designation:"React developer"
        },{
            name:"Venu",
            id:"3",
            salary:"30000",
            designation:"Javascript developer"
        },{
            name:"raghu",
            id:"4",
            salary:"15000",
            designation:"React developer"
        },{
            name:"Tagore",
            id:"5",
            salary:"28000",
            designation:"Fullstack developer"
        },{
            name:"Guna",
            id:"6",
            salary:"30000",
            designation:"React developer"
        },{
            name:"ram",
            id:"7",
            salary:"18000",
            designation:"Angular developer"
        },{
            name:"rajesh",
            id:"8",
            salary:"20000",
            designation:"Angular developer"
        },{
            name:"chandu",
            id:"9",
            salary:"27000",
            designation:"Fullstack developer"
        },{
            name:"Bhaanu",
            id:"10",
            salary:"24000",
            designation:"React developer"
        },{
            name:"pavan",
            id:"11",
            salary:"20000",
            designation:"Javascript developer"
        },{
            name:"charan",
            id:"12",
            salary:"30000",
            designation:"Fullstack developer"
        },{
            name:"rohith",
            id:"13",
            salary:"18000",
            designation:"Javascript developer"
        },{
            name:"subbu",
            id:"14",
            salary:"25000",
            designation:"Angular developer"
        },
        {
            name:"somu",
            id:"1",
            salary:"20000",
            designation:"Fullstack developer"
        }
    ]}
    

    render(){
        
        return(
            <>
              {
                this.state.data.map((val)=>{
                    return(
                        <>
                        <table>
                           <tr>
                            <th>Emplpoyeeid</th>
                            <th>Employeename</th>
                            <th>Employeesalary</th>
                            <th>Employeedesignation</th>
                           </tr>
                           <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.salary}</td>
                            <td>{val.designation}</td>
                            </tr>
                        </table>
                        </>
                    )
                })
                
              }
            </>
        )
    }

}

export default EmployeeTable

