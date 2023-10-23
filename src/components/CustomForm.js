import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            <h1>Form Capture for Ticket #338271</h1>
            <hr />
            <Form action="https://analytics-ca.clickdimensions.com/forms/h/a6MXkgx4Nv0iRrZKJwHgHK" method="post">
                <Form.Group className="mb-3" controlId="firstnametest">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="firstnametest" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="testlastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="testlastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="testemail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="testemail" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
            <h1>Amarius Jones Form Capture On-Prem 8.2.x environment</h1>
            <Form action="https://analytics.clickdimensions.com/forms/h/aoKjj2zyC3key7yZHs4uuE" method="post">
                <Form.Group className="mb-3" controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="FirstName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="LastName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="Email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
        </div>
    )
}

export default CustomForm