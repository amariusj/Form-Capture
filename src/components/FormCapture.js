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
            <h1>Convergia Inc ticket #328892 Form Capture</h1>
            <hr />
            <form action="https://analytics-ca.clickdimensions.com/forms/h/apNahnbzUWU6sXhOwt0Ji9" method="post">
                <fieldset>
                    <div className="field">
                        <span>Products</span>
                        <input type="text" name="FC_Products" id="FC_Products" />
                    </div>
                    <div className="field">
                        <span>Message</span>
                        <textarea id="FC_Message" name="FC_Message" rows="4" cols="50" />
                    </div>
                    <div className="field">
                        <span>First Name</span>
                        <input type="text" name="FC_FirstName" id="FC_FirstName" />
                    </div>
                    <div className="field">
                        <span>Last Name</span>
                        <input type="text" name="FC_LastName" id="FC_LastName" />
                    </div>
                    <div className="field">
                        <span>Email</span>
                        <input type="email" name="FC_Email" id="FC_Email" />
                    </div>
                    
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            <hr />
            <h3>Click <a href="https://www.facebook.com/photo/?fbid=579857094175281&set=a.410044504489875">here</a> to access the facebook post.</h3>
        </div>
    )
}

export default FormCapture