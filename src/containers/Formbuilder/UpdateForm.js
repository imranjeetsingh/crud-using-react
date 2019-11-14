import React, { useState,useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const UpdateFormData = props => {
    useEffect(()=>{
        setFormData(props.currentData)
    },[props])

    const [formData, setFormData] = useState(props.currentData);

    // console.log(formData.id)
    const inputHandler = event =>{
        const {name, value} = event.target

        setFormData({...formData,[name]:value})
    }

    return (
        <Form onSubmit={event =>{
            event.preventDefault()
            props.updateData(formData.id,formData)
            // console.log(formData)
        }}>
            <Form.Group as={Row} >
                <Form.Label column sm="2">
                    Id
                </Form.Label>
                <Col sm="10">
                    <Form.Control name="id" disabled
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
                UpdateData
  </Button>
  <Button 
  onClick = {()=>props.setEditMode(false)}
  variant="danger" type="submit">Cancel</Button>
        </Form>
    )
}

export default UpdateFormData;