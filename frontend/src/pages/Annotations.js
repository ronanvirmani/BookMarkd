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
            <h2 className="text-center text-3xl">SampleTitle Annotations</h2>
            <br/>
            <hr/>
            <br/>

            {/* User Actions */}
            <div className="container">
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded bg-green p-4">
                    <h3 className="text-center text-2xl">Add New Annotation</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="pageNumber" className="block mb-2">Page Number</label>
                            <input type="text" id="pageNumber" className="w-full rounded py-2 px-3" placeholder="i.e. 123" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="annotationText" className="block mb-2">Annotation Text</label>
                            <textarea id="annotationText" rows="2" className="rounded w-full py-2 px-3" placeholder="i.e. your thoughts, quotes, etc."></textarea>
                        </div>
                        <div className="text-center">
                            <button className="bg-brown text-white px-4 py-2 rounded-full">Add Annotation</button>
                        </div>
                    </form>
                </div>
                <div className="rounded bg-green p-4">
                    <h3 className="text-center text-2xl">Filter / Search</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="sort" className="block mb-2">Sort:</label>
                            <select id="sort" className="form-select w-full">
                                <option value="1">Ascending Page Order</option>
                                <option value="2">Descending Page Order</option>
                                <option value="3">Most Recently Added</option>
                                <option value="4">Least Recently Added</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="searchKeywords" className="block mb-2">Search Keywords:</label>
                            <textarea id="searchKeywords" rows={2} className="rounded w-full py-2 px-3" placeholder="keywords and phrases here" />
                        </div>
                        <div className="text-center">
                            <button className="bg-brown text-white px-4 py-2 rounded-full">Apply Filters</button>
                        </div>
                    </form>
                </div>
            </div>
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