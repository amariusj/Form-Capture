import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useEffect } from 'react';

export default function GtmTest() {

    useEffect(() => {

        // Grab the header tag

        const head = document.getElementsByTagName('head')[0];

        // Grab the body tag 

        const body = document.getElementById('body');

        // Grab the h5 element directly above the CD Form div tag

        const h5 = document.getElementsByTagName('h5')[0];

        // Create a script tag element for the header

        const gtmHeaderScript = document.createElement('script')

        // Create a noscript tag element for the body

        const gtmBodyScript = document.createElement('noscript');

        // // Create the first script tag for the ClickDimensions Form Widget

        const cdFormWidgetScript1 = document.createElement('script');

        // // Create the second script tag for the ClickDimensions Form Widget

        const cdFormWidgetScript2 = document.createElement('script');

        // Create an iframe tag that nests inside the noscript tag

        const iframe = document.createElement('iframe');

        // Add the Google Tag Manager code to the header script tag

        gtmHeaderScript.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M8J39MFS');`;

        // Add the necessary attriubtes to the iframe tag

        iframe.setAttribute('src', 'https://www.googletagmanager.com/ns.html?id=GTM-M8J39MFS');
        iframe.setAttribute('height', '0');
        iframe.setAttribute('width', '0');
        iframe.setAttribute('style', 'display:none;visibility:hidden');

        // Add the text content for the first ClickDimensions Widget Script tag

        cdFormWidgetScript1.textContent = `var loc = "https://analytics-eu.clickdimensions.com/clickdimensionscom-ajbfv/pages/";var cdSurveyCdn = "https://cdn-eu.clickdimensions.com/web/newformeditor/";`;

        // Add the type and src attributes to the second ClickDimensions WIdget Script tag

        cdFormWidgetScript2.setAttribute('type', 'text/javascript');
        cdFormWidgetScript2.setAttribute('src', 'https://cdn-eu.clickdimensions.com/web/newformeditor/CDWidget.js');

        // Set the type attribute to text/javascript for the first ClickDimensions Widget Script tag

        cdFormWidgetScript1.setAttribute('type', 'text/javascript');

        // Append the iframe tag to the gtmBodyNoScript tag

        gtmBodyScript.appendChild(iframe);

        // Append the Google Tag Manager script to the top of the header tag

        head.insertBefore(gtmHeaderScript, head.firstChild);

        // Append the Google Tag Manager noscript to the top of the body tag

        body.insertBefore(gtmBodyScript, body.firstChild);

        // Append the CD Widget scripts above the CD div tag

        h5.after(cdFormWidgetScript1);
        cdFormWidgetScript1.after(cdFormWidgetScript2);

    }, [])

  return (
    <Container style={{textAlign: "center"}}>
        <Col className="m-3 pt-5">
            <Row>
                <h1>This page uses Google Tag Manager</h1>
                <hr />
                <h5>The CD Form embedded via widget:</h5>
                <div pageid="xjxfuorpee6osaanoot8xw"></div>
            </Row>
        </Col>
    </Container>
  )
}
