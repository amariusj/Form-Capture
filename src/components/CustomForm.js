import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            
            <h1>Ticket #347063: Contact Us</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/aoEbZm1ZpgEu2Q1Im1F0YI" method="post">

                <Form.Group className="mb-3" controlId="first name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="John" name="first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Doe" name="lastname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required={true} type="text" placeholder="johndoe@example.com" name="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control required={true} type="text" placeholder="ClickDimensions" name="message" />
                </Form.Group>

                <Form.Group controlId="message" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textarea" required={true} name="message" placeholder='Add some notes...' />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />


            <h1>Ticket #346062: 2024: AI and HR Landing Page</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/aoLyaCnXQ6Uej2G6puvd7k" method="post">

                <Form.Group className="mb-3" controlId="txtFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="John" name="txtFirstName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="txtLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Doe" name="txtLastName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="txtEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required={true} type="text" placeholder="johndoe@example.com" name="txtEmailAddress" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="txtJobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Project Manager" name="txtJobTitle" />
                </Form.Group>

                <Form.Group controlId="txtCompanyName" className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control required={true} type="text" name="txtCompanyName" placeholder='Your Company' />
                </Form.Group>

                <Form.Group controlId="question_AIHR" className="mb-3">
                    <Form.Label>My question about AI and HR</Form.Label>
                    <Form.Control type="textarea" required={true} name="question_AIHR" placeholder='Add some notes...' />
                </Form.Group>

                <Form.Check
                    id="AI_consultation"
                    type="checkbox"
                    label="Check to speak with a Gallagher representative"
                    className="mb-3"
                />
                    
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />

        </div>
    )
}

export default CustomForm