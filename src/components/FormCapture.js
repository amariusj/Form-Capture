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
            <hr />
            <h1>Below Form Capture is for Ticket #321108</h1>
            <form action="https://analytics.clickdimensions.com/forms/h/aFuCahKzxT0CG2u9AJkpuh" method="post">
                <fieldset>
                    <div className="field">
                        <span>Email Address</span>
                        <input type="text" name="email-address" id="email-address" />
                    </div>
                    <div className="field">
                        <span>First Name</span>
                        <input type="text" name="first-name" id="first-name" />
                    </div>
                    <div className="field">
                        <span>Last Name</span>
                        <input type="text" name="last-name" id="last-name" />
                    </div>
                    <div className="field">
                        <span>Yes</span>
                        <input type="radio" value="true" name="require-transportation" id="require-transportation" />
                        <span>No</span>
                        <input type="radio" value="false" name="require-transportation" id="require-transportation" />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default FormCapture