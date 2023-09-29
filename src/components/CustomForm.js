import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            <h1>Elementor Form Capture for Ticket #336903</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/apZjBWCEJH0OgLkfZ8XWPw" method="post">
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="firstname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="lastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="emailAddress" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="+1 (123) 456-7890" name="phoneNumber" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="text_area">
                    <Form.Label>Any comments?</Form.Label>
                    <Form.Control as="textarea" placeholder="Type your thoughts here..." rows={3} name="text_area" />
                </Form.Group>
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
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