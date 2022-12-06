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
            <h1>Below Form Capture is for Ticket #320010</h1>
            <form action="https://analytics.clickdimensions.com/forms/h/aUUFZfbfP00yW5gm6F8zFg" method="post">
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
                        <span>Zip Code</span>
                        <input type="number" name="Zip/PostalCode" id="Zip/PostalCode" />
                    </div>
                    <div className="field">
                        <span>Impact Testimonial</span>
                        <input type="text" name="ImpactTestimonial" id="ImpactTestimonial" />
                    </div>
                    <div className="field">
                        <span>Alumni Newslettert</span>
                        <input type="checkbox" name="AlumniNewsletter" id="AlumniNewsletter" leadfield="donotallowbulkemail" contactfield="donotallowbulkemail" />
                    </div>
                    <div className="field">
                        <span>First Close Up Year</span>
                        <input type="number" name="FirstCUYear" id="FirstCUYear" />
                    </div>
                    <div className="field">
                        <span>Most Recent Close Up Year</span>
                        <input type="number" name="MostRecentCloseUpYear" id="MostRecentCloseUpYear" />
                    </div>
                    <div className="field">
                        <span>Street Address</span>
                        <input type="text" name="StreetAddress" id="StreetAddress" />
                    </div>
                    <div className="field">
                        <span>Phone Number</span>
                        <input type="number" name="Phone" id="Phone" />
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