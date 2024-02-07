import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            
            <h1>Ticket #343226: Contact Us</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/ax8tveSxNEk2D6vYr94mYf" method="post">

                <Form.Group className="mb-3" controlId="First Name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="John" name="First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Last Name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Doe" name="Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required={true} type="text" placeholder="johndoe@example.com" name="Email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control required={true} type="text" placeholder="ClickDimensions" name="Company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control required={true} type="text" placeholder="ClickDimensions" name="Phone" />
                </Form.Group>

                <Form.Group controlId="Project Needs" className="mb-3">
                    <Form.Label>Project Needs</Form.Label>
                    <Form.Control type="textarea" required={true} name="Project Needs" placeholder='Add some notes...' />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />

        </div>
    )
}

export default CustomForm