import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CustomForm = () => {
    return(
        <div className="form-capture">
            
            <h1>Ticket #340737: Website Contact Us</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/ame9CgwV0fEWPH5CGAtTgT" method="post">

                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="John" name="firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Doe" name="lastname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailaddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required={true} type="text" placeholder="johndoe@example.com" name="emailaddress1" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="companyname">
                    <Form.Label>Company</Form.Label>
                    <Form.Control required={true} type="text" placeholder="ClickDimensions" name="companyname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telephone1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="(123) 456-7890" name="telephone1" />
                </Form.Group>

                <Form.Label aria-label='hiit_inquirytype'>Select an inquiry</Form.Label>
                <Form.Select required={true} aria-label="hiit_inquirytype" controlId="hiit_inquirytype" name="hiit_inquirytype" className='mb-3'>
                    <option>Select an inquiry</option>
                    <option value="Subcontractor Inquiry">Subcontractor Inquiry</option>
                    <option value="Careers Inquiry">Careers Inquiry</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="General Inquiry">General Inquiry</option>
                </Form.Select>

                <Form.Group controlId='hiit_webformattachment' className="mb-3">
                    <Form.Label>Form Attachment</Form.Label>
                    <Form.Control type="file" name="hiit_webformattachment" />
                </Form.Group>

                <Form.Group controlId="notes_description" className="mb-3">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="textarea" required={true} name="notes_description" placeholder='Add some notes...' />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            <hr />
            <h1>Ticket #340737: Test Form Capture</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/aRKo1E5ltNk6EMPzZgyA" method="post">

                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="John" name="firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Doe" name="lastname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailaddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required={true} type="text" placeholder="johndoe@example.com" name="emailaddress1" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="telephone1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="(123) 456-7890" name="telephone1" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            <h1>Ticket #340215: Test Form Capture</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/aBOI8RC3yaESB0gSHDKdDK" method="post">

                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="John" name="firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required={true} type="text" placeholder="Doe" name="lastname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailaddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required={true} type="text" placeholder="johndoe@example.com" name="emailaddress1" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Select multiple className="mb-3" controlId="amarius-multiselect" name="amarius-multiselect">
                    <option>Multi-Select</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                </Form.Select>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

        </div>
    )
}

export default CustomForm