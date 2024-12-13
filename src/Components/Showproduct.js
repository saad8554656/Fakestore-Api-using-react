import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Showproduct({ products }) {
  return (
    <Container className="py-4">
      <Row>
        {products && products.length > 0 && products.map(({ image, title, price, id }) => (
          <Col xs={12} sm={6} lg={3} className="mb-4" key={id}>
            <div
              style={{
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center',
              }}
              className="hover-shadow"
            >
              <Image 
                fluid 
                src={image} 
                alt={title} 
                style={{ height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
              />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '10px' }}>
                <Link 
                  to={`/productpage/${id}`} 
                  style={{ color: '#333', textDecoration: 'none' }}
                >
                  {title}
                </Link>
              </h3>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#007bff' }}>Price: ${price}</h4>
              <Link to={`/productpage/${id}`}>
                <Button variant="dark" style={{ marginTop: '10px', width: '100%' }}>
                  View
                </Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
