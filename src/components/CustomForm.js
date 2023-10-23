import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            <h1>Elementor Form Capture for Ticket #338271</h1>
            <hr />
            <Form action="https://analytics-ca.clickdimensions.com/forms/h/aszGebAH2OEmSJ3BCEA07d" method="post">
                <Form.Group className="mb-3" controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="first_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="last_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email Address">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="Email Address" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="United States of America" name="Country" />
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