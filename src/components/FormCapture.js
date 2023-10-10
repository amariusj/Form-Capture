import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const FormCapture = () => {

    return(
        <div className="form-capture">
            <h1>Amarius Jones Test Form Capture</h1>
            <hr />
            <Form action="https://analytics.clickdimensions.com/forms/h/azwGgHQgrI0a4DFY7Tm6Mm" method="post">
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
                <Form.Group className="mb-3" controlId="textareatest">
                    <Form.Label>Any comments?</Form.Label>
                    <Form.Control as="textarea" placeholder="Type your thoughts here..." rows={3} name="textareatest" />
                </Form.Group>

                {['amarius-checkbox-1', 'amarius-checkbox-2'].map( (checkbox) => (
                    <Form.Check key={checkbox} type="checkbox" id={checkbox} name={checkbox} label={`${checkbox}`} className="mb-3" />
                ) )}
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
            <h3>Click <a href="https://www.facebook.com/photo/?fbid=579857094175281&set=a.410044504489875">here</a> to access the facebook post.</h3>
        </div>
    )
}

export default FormCapture