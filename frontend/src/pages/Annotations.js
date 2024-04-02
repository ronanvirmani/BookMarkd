import React from 'react';
import Container from 'react-bootstrap/Container';
import {Card} from "react-bootstrap";

function Annotations() {
    return (
        <Container>
            <h2 className="text-center">SampleBook Annotations</h2>

        {/*    Annotation Card - will be own component*/}
            <Card>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Page 302</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content. "Here is an example quote."
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    );
}

export default Annotations;