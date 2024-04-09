import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CustomerForms() {
  return (
    <div>
        <div className="form-capture">
            <h1>2024: AI and HR Landing Page</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/aoLyaCnXQ6Uej2G6puvd7k" method="post">
                <Form.Group className="mb-3" controlId="txtFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="txtFirstName" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="txtLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="txtLastName" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="txtEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="johndoe@example.com" name="txtEmailAddress" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="txtJobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Current position" name="txtJobTitle" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="txtCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="ClickDimensions" name="txtCompanyName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="question_AIHR">
                    <Form.Label>My question about AI and HR</Form.Label>
                    <Form.Control as="textarea" placeholder="Type your message here..." rows={3} name="question_AIHR" />
                </Form.Group>

                <Form.Check  type="checkbox" id="AI_consultation" name="AI_consultation" label="Check to speak with a Gallagher representative" className="mb-3" />

                <Form.Select size="md" name='AI_consultation' id="AI_consultation">
                    <option>Choose whether or not to speak with a Gallagher representative</option>
                    <option value="on">Yes</option>
                    <option value="off">No</option>
                </Form.Select>
                
                <Button variant="primary" type="submit" className="mt-2" >Submit</Button>
            </Form>
        </div>
    </div>
  )
}
