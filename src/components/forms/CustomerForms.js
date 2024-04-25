import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CustomerForms() {
  return (
    <div>
        <div className="form-capture">
            <h1>Ticket #347129 - Home Journey</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/ali81VIo3R0uKNO7yMbblY" method="post">
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="firstname" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="lastname" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="+1 USA" name="phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Ex: ClickDimensions" name="company" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="StreetAddress">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type="text" placeholder="123 Rainbow Rd" name="StreetAddress" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Atlanta" name="city" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="GA" name="state" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ZipCode">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="30342" name="ZipCode" />
                </Form.Group>

                
                <Button variant="primary" type="submit" className="mt-2" >Submit</Button>
            </Form>
        </div>
    </div>
  )
}
