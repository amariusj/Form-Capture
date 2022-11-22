import React from 'react'

const FormCapture = () => {
    return(
        <div className="form-capture">
            <h1>Amarius Jones Test Form Capture</h1>
            <hr />
            <form action="https://analytics.clickdimensions.com/forms/h/aJ1QGzkaUytIzc4DGFZg" method="post">
                <fieldset>
                    <div className="field">
                        <span>Email Address</span>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <span>First Name</span>
                        <input type="text" name="first" id="firstname" />
                    </div>
                    <div className="field">
                        <span>Last Name</span>
                        <input type="text" name="last" id="lastname" />
                    </div>
                    <div className="field">
                        <span>Subscription test</span>
                        <input type="checkbox" name="subscription" id="subscription" leadfield="donotallowbulkemail" contactfield="donotallowbulkemail" />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default FormCapture