import React from 'react';
import { Container } from 'react-bootstrap'; 
import useFetchapi from '../customhooks/useFetchapi';
import Showproduct from './Showproduct';


export default function Home() {
    
  let allProducts = useFetchapi(process.env.REACT_APP_FAKESTORE + '/products')
  console.log(allProducts);
  

  return (
    <>
      {
        allProducts && allProducts.length > 0 && (
          <Container>
              <h1 className="d-flex flex-column justify-content-center align-items-center mt-4 mb-5"
              style={{
                fontSize:'50px',
                fontWeight:'bold',
                color:'#212529'
              }}
              >Welcome to FakeStore</h1>
              <Showproduct products={allProducts}/>
          </Container>
        )
      }
    </>
  );
}
