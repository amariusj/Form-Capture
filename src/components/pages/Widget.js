import { useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AUForm() {

    useEffect(() => {

        // Create the first script tag for the ClickDimensions Form Widget

        const cdFormWidgetScript1 = document.createElement('script');

        // Create the second script tag for the ClickDimensions Form Widget

        const cdFormWidgetScript2 = document.createElement('script');

        // Add the text content for the first ClickDimensions Widget Script tag

        cdFormWidgetScript1.textContent = `var loc = "https://web-eu.amariusjones.com/clickdimensionscom-ajbfv/pages/";var cdSurveyCdn = "https://web-eu.amariusjones.com/web/newformeditor/";`;

        // Add the type to each widget script

        cdFormWidgetScript1.setAttribute('type', 'text/javascript');
        cdFormWidgetScript2.setAttribute('type', 'text/javascript');

        // Add the src attributes to the second widget script

        cdFormWidgetScript2.setAttribute('src', 'https://web-eu.amariusjones.com/web/newformeditor/CDWidget.js');

        // Grab the hr element above the div tag

        const hr = document.getElementsByTagName('hr')[0];

        // Append the CD widget scripts above the CD div tag and below the hr tag

        hr.after(cdFormWidgetScript1);
        cdFormWidgetScript1.after(cdFormWidgetScript2);
    }, []);

  return (
    <Container style={{textAlign: "center"}}>
        <Col className="m-3 pt-5">
            <Row>
                <h1>CD Google Captcha Widget Embedded</h1>
                <hr />
                <div pageid="8yishlx2efcotqanoot8xw"></div>
            </Row>
        </Col>
    </Container>
  )
}
