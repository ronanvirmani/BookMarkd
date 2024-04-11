import React from "react";
import { Container, Row, Col, Tab, Nav, Form, Button } from "react-bootstrap";

function Settings() {
    return (
        <Container className="light-style flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-4">
                Account settings
            </h4>

            <Tab.Container defaultActiveKey="#account-general">
                <Row>
                    <Col md={3} className="pt-0">
                        <Nav variant="pills" className="flex-column account-settings-links">
                            <Nav.Item>
                                <Nav.Link href="#account-general">General</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#account-change-password">Change password</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#account-info">Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#account-social-links">Social links</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#account-connections">Connections</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#account-notifications">Notifications</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#account-general">
                                <hr className="border-light m-0" />

                                <div className="card-body">
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" defaultValue="test" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue="test" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="text" defaultValue="test@example.com" />
                                        <div className="alert alert-warning mt-3">
                                            Your email is not confirmed. Please check your inbox.<br />
                                            <a href="javascript:void(0)">Resend confirmation</a>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control type="text" defaultValue="BookMarkd" />
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

