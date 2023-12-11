import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            <h1>Ticket #340700: CBY Mailing List Sign Up</h1>
            <hr />
            <Form action="https://analytics-ca.clickdimensions.com/forms/h/au94ZpP8jEq2D7hxusDupA" method="post">
                <Form.Group className="mb-3" controlId="first-name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="first-name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="last-name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="last-name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailaddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="emailaddress1" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
            <h1>Ticket #340700: Area X.o - Mailing List Sign Up</h1>
            <Form action="https://analytics-ca.clickdimensions.com/forms/h/ahhhvJBXydHEyYTdj3rTw" method="post">
                <Form.Group className="mb-3" controlId="first-name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="first-name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="last-name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="last-name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailaddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="emailaddress1" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 pb-2" controlId="io_emailconsent">
                    <Form.Check type="checkbox" label="Email consent" name="io_emailconsent" />
                </Form.Group>
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default CustomForm