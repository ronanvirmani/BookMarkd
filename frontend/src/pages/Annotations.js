import React, {useEffect, useState} from 'react';
// import Container from 'react-bootstrap/Container';
import {Card, Col, Row} from "react-bootstrap";
import {useAppContext} from "../AppContext";
import { useParams } from 'react-router-dom';

function Annotations() {
    const { userBookId } = useParams(); // This will extract userBookId from the URL
    const { user, supabase, loading } = useAppContext();
    const [annotations, setAnnotations] = useState([]);
    const [sort, setSort] = useState("ascendingPage"); // Default sort order
    const user_book_id = 2; // Assuming user_book_id is constant for this component
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        if(!user && !loading){
            window.location.href = "/";
        }
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('annotation')
                    .select()
                    .eq('user_book_id', userBookId); // Assuming user_book_id is constant for this component
                if (error) {
                    console.error("Error fetching annotations:", error);
                } else {
                    let sortedData = data;
                    //apply sort
                    if (sort === "ascendingPage") {
                        sortedData = data.sort((a, b) => a.page_number - b.page_number);
                    }
                    else if (sort === "descendingPage") {
                        sortedData = data.sort((a, b) => b.page_number - a.page_number);
                    }
                    else if (sort === "mostRecent") {
                        sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    }
                    else if (sort === "leastRecent") {
                        sortedData = data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                    }
                    setAnnotations(sortedData || []);
                }
            } catch (error) {
                console.error("Error fetching annotations:", error);
            }
        }
        fetchData();
    }, [supabase, sort, loading, user]);

    async function handleAdd(event) {
        const pageNumber = document.getElementById("pageNumber").value;
        const annotationText = document.getElementById("annotationText").value;
        console.log("Fetching annotations for ID handleAdd:", userBookId); // Check the ID value

        try {
            const { error } = await supabase
                .from('annotation')
                .insert({ user_book_id: userBookId, text: annotationText, page_number: pageNumber });
            if (error) {
                console.error("Error adding annotation:", error);
            }
            else {
                console.log("successfully added annotation");
            }
        }
        catch (error) {
            console.error("Error adding annotation:", error);
        }
    }

    function handleSort(event) {
        event.preventDefault();
        setSort(document.getElementById("sort").value);
        setKeywords(document.getElementById("searchKeywords").value.split(",").map(keyword => keyword.trim()));
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
                    <form onSubmit={handleAdd}>
                        <div className="mb-4">
                            <label htmlFor="pageNumber" className="block mb-2">Page Number</label>
                            <input type="text" id="pageNumber" className="w-full rounded py-2 px-3" placeholder="i.e. 123" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="annotationText" className="block mb-2">Annotation Text</label>
                            <textarea id="annotationText" rows="2" className="rounded w-full py-2 px-3" placeholder="i.e. your thoughts, quotes, etc."></textarea>
                        </div>
                        <div className="text-center">
                            <button className="bg-brown text-white px-4 py-2 rounded-full" type="submit">Add Annotation</button>
                        </div>
                    </form>
                </div>
                <div className="rounded bg-green p-4">
                    <h3 className="text-center text-2xl">Filter / Search</h3>
                    <form onSubmit={handleSort}>
                        <div className="mb-4">
                            <label htmlFor="sort" className="block mb-2">Sort:</label>
                            <select id="sort" className="form-select w-full">
                                <option value="ascendingPage">Ascending Page Order</option>
                                <option value="descendingPage">Descending Page Order</option>
                                <option value="mostRecent">Most Recently Added</option>
                                <option value="leastRecent">Least Recently Added</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="searchKeywords" className="block mb-2">Search Keywords:</label>
                            <textarea id="searchKeywords" rows={2} className="rounded w-full py-2 px-3" placeholder="keywords and phrases here" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-brown text-white px-4 py-2 rounded-full">Apply Filters</button>
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
                    {annotations
                        .filter(annotation => {
                            const annotationText = annotation.text.toLowerCase();
                            return keywords.every(keyword => annotationText.includes(keyword.toLowerCase()));
                        })
                        .map(annotation => (
                        <Col xs={12} md={6} lg={4} className="mb-4" key={annotation.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Page {annotation.page_number}</Card.Subtitle>
                                    <Card.Text>
                                        {annotation.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Annotations;