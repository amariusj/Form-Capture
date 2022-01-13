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
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <span>First Name</span>
                        <input type="text" name="firstname" id="firstname" />
                    </div>
                    <div className="field">
                        <span>Last Name</span>
                        <input type="text" name="lastname" id="lastname" />
                    </div>
                    <div className="field">
                        <span>Amarius Checkbox 1</span>
                        <input type="checkbox" name="amarius-checkbox-1" id="amarius-checkbox-1" leadfield="cdi_allowtextmessages" contactfield="cdi_allowtextmessages" />
                    </div>
                    <div className="field">
                        <span>Amarius Checkbox 2</span>
                        <input type="checkbox" name="amarius-checkbox-2" id="amarius-checkbox-2" />
                    </div>
                    <textarea rows="4" cols="50" name="Details of work">Enter text here...</textarea>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default FormCapture