import React from 'react';
import useFetchapi from '../customhooks/useFetchapi';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Showproduct from './Showproduct';
import { Link } from 'react-router-dom'; // Import the Link component

export default function Searchresult({ catname }) {
    const result = useFetchapi(`${process.env.REACT_APP_FAKESTORE}/products/category/${catname}`, [catname]);
    console.log(result);

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4" style={{ color: '#343a40' }}>
                Search Results for: <span className="text-primary">{catname}</span>
            </h1>
            <Row className="g-4">
                {result.length > 0 ? (
                    result.map((product) => (
                        <Col md={6} lg={4} key={product.id}> 
                            <Card className="shadow-sm h-100 hover-shadow">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '300px',
                                        objectFit: 'contain',
                                        borderRadius: '8px 8px 0 0',
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title className="text-truncate" title={product.title}>
                                        {product.title}
                                    </Card.Title>
                                    <Card.Text className="text-muted">${product.price.toFixed(2)}</Card.Text>
                                    <Showproduct product={product} />
                                    <Link to={`/productpage/${product.id}`}> {/* Use product.id for the link */}
                                        <Button variant="dark" style={{ marginTop: '10px', width: '100%' }}>
                                            View
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <h5 className="text-center text-muted">No products found for "{catname}"</h5>
                )}
            </Row>
        </Container>
    );
}
