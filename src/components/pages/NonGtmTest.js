import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useEffect } from 'react';

export default function NonGtmTest() {

    useEffect(() => {

        // Grab the h5 element directly above the CD Form div tag

        const h5 = document.getElementsByTagName('h5')[0];

        // Create the first script tag for the ClickDimensions Form Widget

        const cdFormWidgetScript1 = document.createElement('script');

        // Create the second script tag for the ClickDimensions Form Widget

        const cdFormWidgetScript2 = document.createElement('script');

        // Add the text content for the first ClickDimensions Widget Script tag

        cdFormWidgetScript1.textContent = `var loc = "https://analytics-eu.clickdimensions.com/clickdimensionscom-ajbfv/pages/";var cdSurveyCdn = "https://cdn-eu.clickdimensions.com/web/newformeditor/";`;

        // Add the type and src attributes to the second ClickDimensions WIdget Script tag

        cdFormWidgetScript2.setAttribute('type', 'text/javascript');
        cdFormWidgetScript2.setAttribute('src', 'https://cdn-eu.clickdimensions.com/web/newformeditor/CDWidget.js');

        // Set the type attribute to text/javascript for the first ClickDimensions Widget Script tag

        cdFormWidgetScript1.setAttribute('type', 'text/javascript');

        // Append the CD Widget scripts above the CD div tag

        h5.after(cdFormWidgetScript1);
        cdFormWidgetScript1.after(cdFormWidgetScript2);

    }, [])
  return (
    <Container style={{textAlign: "center"}}>
        <Col className="m-3 pt-5">
            <Row>
                <h1>This page does not use Google Tag Manager</h1>
                <hr />
                <h5>The CD Form embedded via widget:</h5>
                <div pageid="xjxfuorpee6osaanoot8xw"></div>
            </Row>
        </Col>
    </Container>
  )
}
