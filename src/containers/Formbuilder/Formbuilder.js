import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import UpdateFormData from './UpdateForm';


const FormBuilder = props => {
    const initialFormData = {id:null,title:null,ftype:null,description:null,createdon:new Date(),isactive:true}
    
    const [formData, setFormData] = useState(initialFormData);
    
    const inputHandler = event =>{
        const {name, value} = event.target

        setFormData({...formData,[name]:value})
    }

    return (
        <Form onSubmit={event =>{
            event.preventDefault()
            if(!formData.id || !formData.title || !formData.title || !formData.description) return
            props.addData(formData)
            setFormData(initialFormData)
        }}>
            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Id
                </Form.Label>
                <Col sm="10">
                    <Form.Control name="id"
                     value={formData.id}
                     type="text"
                     onChange = {inputHandler}
                     />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Ftype
                </Form.Label>
                <Col sm="10">
                    <Form.Control 
                    name="ftype"
                    value={formData.ftype}
                    onChange={inputHandler}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Title
                </Form.Label>
                <Col sm="10">
                    <Form.Control 
                    name="title"
                    value={formData.title}
                    onChange={inputHandler}
                   />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Description
                </Form.Label>
                <Col sm="10">
                    <Form.Control 
                    name="description"
                    value={formData.description}
                    onChange={inputHandler}
                    />
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
                AddData
  </Button>
  <Button onClick = {()=>props.setShowAddForm(false) }variant="danger" type="submit">
            Cancel
  </Button>
        </Form>
    )
}

export default FormBuilder;