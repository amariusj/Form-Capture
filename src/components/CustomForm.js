import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            
            <h1>Ticket #342288: OBHG news email alert subscription (Sign Up For Our Blog)</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/a5R8zjpyqhUGeGsur5kHAA" method="post">

                <Form.Group className="mb-3" controlId="Firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="John" name="Firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Doe" name="Lastname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Emailaddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required={true} type="text" placeholder="johndoe@example.com" name="Emailaddress" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Company_name">
                    <Form.Label>Company</Form.Label>
                    <Form.Control required={true} type="text" placeholder="ClickDimensions" name="Company_name" />
                </Form.Group>

                <Form.Group controlId="Comments" className="mb-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="textarea" required={true} name="Comments" placeholder='Add some notes...' />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />

        </div>
    )
}

export default CustomForm