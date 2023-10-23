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
            <h1>Amarius Jones Form Capture CA Opt Out Environment</h1>
            <Form action="https://analytics-ca.clickdimensions.com/forms/h/a7Qddz9e0hkC4cSsXH9sxQ" method="post">
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="firstname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="lastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="email" />
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