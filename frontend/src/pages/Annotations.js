import React from 'react';
// import Container from 'react-bootstrap/Container';
import {Card, Col, Row, Image, Form, Button} from "react-bootstrap";

function Annotations() {

    const annotations = [];
    for (let i = 0; i < 10; i++) {
        // get from database
        let pageNumber = 302;
        let text = "Some quick example text to build on the card title and make up the bulk of the card's content. \"Here is an example quote.\"";

        // perform search filters here?

        annotations.push(
            <Col xs={12} md={6} lg={4} className="mb-4" key={i}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Page {pageNumber}</Card.Subtitle>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    return (
        <div className="bg-beige">
            {/* Title details */}
            <hr/>
            <br/>
            <h2 className="text-center">SampleTitle Annotations</h2>
            <br/>
            <hr/>
            <br/>

            {/* Actions user can perform */}
            <div className="container">
                <Row>
                    <Col xs={12} md={6}>
                        <Card class="bg-green">
                            <Card.Body>
                                <Card.Title className="text-center">Add New Annotation</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Page Number</Form.Label>
                                            <Form.Control type="text" placeholder="123" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Annotation Text</Form.Label>
                                            <Form.Control as="textarea" rows={2} />
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button className="btn-custom" variant="dark">Add Annotation</Button>
                                        </div>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className="card-custom">
                            <Card.Body>
                                <Card.Title className="text-center">Filter / Search</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Sort: </Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Search Keywords: </Form.Label>
                                            <Form.Control type="text" as="textarea" rows={2} placeholder="keywords and phrases here" />
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button className="btn-custom" variant="dark">Apply Filters</Button>
                                        </div>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <br/>
            <hr/>
            <br/>

            {/* Annotations */}
            <div className="container">
                <Row>
                    {annotations}
                </Row>
            </div>
        </div>
    );
}

export default Annotations;