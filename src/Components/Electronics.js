import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchapi from '../customhooks/useFetchapi';
import { Container } from 'react-bootstrap';
import Showproduct from './Showproduct';

export default function Electronics() {
  let {catname} = useParams()
  console.log(catname);

  let allProducts = useFetchapi(process.env.REACT_APP_FAKESTORE + '/products/category/'+catname ,[catname]);
  console.log(allProducts);
  
  
  return (
    <Container>
      <h1>All Products from : {catname}</h1>
      <Showproduct products={allProducts}/>
    </Container>
  )
}
