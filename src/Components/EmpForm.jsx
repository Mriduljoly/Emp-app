import React from 'react'
import Navigation from './Navigation'
import "./Efo"
const  EmpForm = ()=> {
  return (
    <>
    <Navigation />
    <div class="conatiner">
      <Card>
        <h3>Employee Form</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
	        <Form.Label>Name</Form.Label>
	        <Form.Control type="text"  />
	        <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
	        <Form.Label>Designation</Form.Label>
	        <Form.Control type="text"/>
	        </Form.Group>
           
          <Form.Group className="mb-3" controlId="formBasicPassword">
	        <Form.Label>Location</Form.Label>
	        <Form.Control type="text"/>
	        </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
	        <Form.Label>Salary</Form.Label>
	        <Form.Control type="text"/>
	        </Form.Group>

          <Button variant="bg-primary" type="submit" > Submit </Button>
	     
          
	       
      </Card>
    </div>
    </>
  )
}

export default EmpForm