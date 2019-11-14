import React from 'react';
import {Button, Table} from 'react-bootstrap';

const Data = props =>{
    // console.log(props.data)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Ftype</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Creation Date</th>
                    <th>IsActive</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.data.length>0 ?(
                   props.data.map(datas =>(
                    <tr key = {datas.id}>
                    <td>{datas.id}</td>
                    <td>{datas.ftype}</td>
                    <td>{datas.title}</td>
                    <td>{datas.description}</td>
                    <td>{datas.createdon.toString().slice(0, 24)}</td>
                    <td>{datas.isactive.toString()}</td>
                    <td>
                        <Button 
                        onClick = {()=>{
                            props.editData(datas)
                        }}
                        variant="success">Edit</Button>
                        <Button
                         onClick = {()=>props.deleteData(datas.id)}
                         variant="danger">Delete</Button>
                    </td>
                </tr>
                   ))) 
                    :(
                        "No data")}
                
            </tbody>
        </Table>
    )
}
 
export default Data;