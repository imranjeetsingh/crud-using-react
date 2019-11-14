import React, { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../../UI/NavigationItems/Navigationitems';
import Tabledata from '../../components/Data/Data';
import UpdateFormData from '../../containers/Formbuilder/UpdateForm';
import FormBuilder from '../../containers/Formbuilder/Formbuilder';

function Layout() {
    const dummyData = [
        {
            id: 1, ftype: 'lorem ipsum', title: 'lorem ipsum', description: 'lorem ipsum', createdon: new Date(), isactive: true,
        }
    ]

    const [showAddform, setShowAddForm] = useState(false)

    const initialFormData = {id:null,title:null,ftype:null,description:null,createdon:new Date(),isactive:true}

    const [editMode, setEditMode] = useState(false)

    // console.log(dummyData[0].createdon)
    const [data, setData] = useState(dummyData);

    const addData = newData => {
        setData([...data, newData])
        setShowAddForm(!showAddform)
    }

    const [currentData, setCurrentData] = useState(initialFormData);

    const editData = data =>{
        console.log(data)
        setEditMode(true)
        console.log(currentData)
        setCurrentData({id:data.id,title:data.title,ftype:data.ftype,description:data.description,createdon:data.createdon,isactive:data.isactive})
        console.log(currentData)
    }

    const updateData = (id, updateData) =>{
        setEditMode(false)
        // console.log(id, updateData)
        // console.log(data)
        // var naam = "ranjeet"
        // setData(data.map(datas =>(datas.id === id ? {naam:"hello"} : datas)))

        setData(data.map(datas =>(datas.id === id ? updateData : datas)))
        // console.log(data)
    }


    const deleteData = id =>{
        setEditMode(false)
        setData(data.filter(datas => datas.id !== id))
    }

    const enableAddData = () =>{
        setShowAddForm(!showAddform)
    }

    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col sm={2}>
                        <h3>Features</h3>
                        <p>Feature 1 </p>
                        <p>Feature 2 </p>
                        <p>Feature 3 </p>
                        </Col>
                    
                    <Col sm={10}>
                        <h3>Data</h3>
                        <Tabledata data={data} deleteData = {deleteData} editData = {editData}/>
                        {editMode ?(
                            <UpdateFormData 
                                editMode={editMode}
                                setEditMode={setEditMode}
                                currentData={currentData}
                                updateData={updateData}
                            />):" "
                        }
                        {showAddform?(<FormBuilder setShowAddForm={setShowAddForm} addData = {addData} />):""}
                        {!showAddform && !editMode ?<Button onClick={enableAddData}>AddData</Button>:""}
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Layout;
