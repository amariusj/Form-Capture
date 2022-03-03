import React from 'react'

const CustomForm = () => {
    return(
        <div className="form-capture">
            <h1>Join the VIP Test Form Capture</h1>
            <hr />
            <form action="https://analytics.clickdimensions.com/forms/h/aEa5zbjPd3kGh2OzLvO9me" method="post">
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
                        <span>Do you need an interpreter?</span>
                        <input type="checkbox" name="interpreterneeded" id="interpreterneeded" leadfield="cdi_allowtextmessages" contactfield="cdi_allowtextmessages" />
                    </div>
                    <div className="field">
                        <span>Brain injury</span>
                        <input type="checkbox" name="braininjury" id="braininjury" />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default CustomForm