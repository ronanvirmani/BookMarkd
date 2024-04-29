import React from "react";
import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Form, Button } from "react-bootstrap";

function Settings() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container className="light-style flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-4">
                Account settings
            </h4>

            <Tab.Container defaultActiveKey="#general">
                <Row>
                    <Col md={3} className="pt-0">
                        <Nav variant="pills" className="flex-column account-settings-links">
                            <Nav.Item>
                                <Nav.Link href="#general">General</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#change-password">Change password</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#info">Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#notifications">Notifications</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#general">
                                <hr className="border-light m-0" />

                                <div className="card-body">
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" defaultValue="" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue="" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="text" defaultValue="" />
                                    </Form.Group>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#change-password">
                                <hr className="border-light m-0" />

                                <div className="card-body">
                                    <Form.Group>
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control type="text" defaultValue="" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control type="text" defaultValue="" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Confirm New Password</Form.Label>
                                        <Form.Control type="text" defaultValue="" />
                                    </Form.Group>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#info">
                                <hr className="border-light m-0" />

                                <div className="card-body">
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" defaultValue="123 Main Street" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue="John Smith" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" defaultValue="(555) 555-5555" />
                                    </Form.Group>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#notifications">
                                <hr className="border-light m-0" />

                                <div className="card-body">
                                    <Form.Group>
                                        <Form.Label>Push Notifications</Form.Label>
                                        <Form.Check type="switch" />
                                    </Form.Group>
                                </div>
                            </Tab.Pane>
                            {/* Other Tab.Pane components go here */}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

            <div className="text-right mt-3">
                <Button variant="primary">Save changes</Button>
                <Button variant="default" className="ml-2">Cancel</Button>
            </div>
        </Container>
    );
}


export default Settings;

