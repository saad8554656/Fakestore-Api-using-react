import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setSelectedCategory, setProducts } from '../Slices/categorySlice';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const products = useSelector((state) => state.category.products);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCategories(data));
      });
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setProducts(data));
        });
    }
  }, [selectedCategory, dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Categories and Products</h1>
      <Row>
        {/* Category List */}
        <Col xs={12} md={3} className="border p-3">
          <h3 className="mb-3 border-bottom pb-2">Categories</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {categories && categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                style={{
                  padding: '8px 12px',
                  marginBottom: '8px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  backgroundColor: selectedCategory === category ? 'black' : 'white',
                  color: selectedCategory === category ? '#fff' : '#333',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </Col>

        {/* Product Grid */}
        <Col xs={12} md={9} className="border p-3">
          <Row>
            {products && products.length > 0 ? (
              products.map((product) => (
                <Col xs={12} sm={6} md={4} className="mb-4" key={product.id}>
                  <div
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                      backgroundColor: '#fff',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <Image fluid src={product.image} alt={product.title} style={{ height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                    <h5 className="mt-3" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>{product.title}</h5>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#007bff' }}>${product.price}</p>
                    <Button variant='dark' >
                       <Link to={"/productpage/"+product.id} style={{color: 'white', textDecoration:'none'}}>View </Link>
                    </Button>
                  </div>
                </Col>
              ))
            ) : (
              <p className="text-center">Select a category to view products</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
