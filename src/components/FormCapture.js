import React from 'react'

const FormCapture = () => {
    return(
        <div className="form-capture">
            <h1>Amarius Jones Test Form Capture</h1>
            <hr />
            <form action="https://analytics.clickdimensions.com/forms/h/azwGgHQgrI0a4DFY7Tm6Mm" method="post">
                <fieldset>
                    <div className="field">
                        <span>Email Address</span>
                        <input type="text" name="Email" id="Email" />
                    </div>
                    <div className="field">
                        <span>First Name</span>
                        <input type="text" name="FirstName" id="FirstName" />
                    </div>
                    <div className="field">
                        <span>Last Name</span>
                        <input type="text" name="LastName" id="LastName" />
                    </div>
                    <div className="field">
                        <span>Your Enquiry</span>
                        <textarea id="textareatest" name="textareatest" rows="4" cols="50" />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default FormCapture