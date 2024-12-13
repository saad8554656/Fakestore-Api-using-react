import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import useFetchapi from '../customhooks/useFetchapi';
import { useDispatch } from 'react-redux';
import { addRecordInCart } from '../Slices/cartslice';

export default function Singleproduct() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

    var {productid} = useParams();
    // console.log(productid);

    var allProducts = useFetchapi(process.env.REACT_APP_FAKESTORE + '/products/'+productid);
    // console.log(allProducts);

    function addToCart(obj){
      var cartRecord = localStorage.getItem('cartRecord');
      console.log(cartRecord);

      var dataToStore = obj;
      
      if(cartRecord === null){
        console.log('First Record');

        var arr =[]
        arr.push(dataToStore)
        localStorage.setItem('cartRecord', JSON.stringify(arr));
        dispatch(addRecordInCart(dataToStore))

        console.log('product Added');
        // navigate("/cart")
      }
      else{
        console.log('2nd Products Onwards');

        cartRecord = JSON.parse(cartRecord);
        console.log(cartRecord);

        var filterData = cartRecord.filter(val=> val.id == dataToStore.id);
        console.log(filterData,filterData.length);

        if(filterData.length == 0){
          dispatch(addRecordInCart(dataToStore))
            cartRecord.push(dataToStore);
            localStorage.setItem('cartRecord', JSON.stringify(cartRecord));
            console.log('product Updated');
            // navigate("/cart")

        }   
        else{
          alert("Product Exist");
        }
  
      }
      
    }

  return (
    <>
    {
      allProducts && Object.keys(allProducts).length>0 && (
        <Container className="pt-4 pb-4">
      <Row className="align-items-center">
        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          <Image 
            src={allProducts.image} 
            fluid 
            style={{ borderRadius: '8px', maxWidth:'500px', objectFit: 'cover', width: '100%' }}
          />
        </Col>

        {/* Product Details */}
        <Col xs={12} lg={6}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.75rem', color: '#333' }}>{allProducts.title}</h2>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
            {allProducts.description}
          </p>
          <h1 style={{ color: 'black', fontWeight: '600', fontSize: '2rem' }}>${allProducts.price}</h1>
          
          <p style={{ fontSize: '1rem', fontWeight: '500' }}>
            CATEGORY: 
            <Link 
              className="ms-2" 
              to={`/fakestore-electronics/${allProducts.category}`}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {allProducts.category.charAt(0).toUpperCase() + allProducts.category.slice(1)}
            </Link>
          </p>

          <Button 
            onClick={() => addToCart(allProducts)} 
            variant="dark" 
            style={{ padding: '10px 20px', fontSize: '1rem' }}
          >
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
      )
    }
    </>
  )
}