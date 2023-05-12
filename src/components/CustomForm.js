import React from 'react'

const CustomForm = () => {
    return(
        <div className="form-capture">
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
        </div>
    )
}

export default CustomForm