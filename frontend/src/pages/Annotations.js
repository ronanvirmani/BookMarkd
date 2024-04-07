import React from 'react';
import Container from 'react-bootstrap/Container';
import {Card, Col, Row} from "react-bootstrap";

function Annotations() {
    return (
        <Container>
            <h2 className="text-center">SampleBook Annotations</h2>

            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4} className="mb-4">
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
                    </Col>
                </Row>
            </Container>

        </Container>
    );
}

export default Annotations;