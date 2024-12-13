import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecordFromCart } from '../Slices/cartslice';
import { Link } from 'react-router-dom';

export default function Cart() {
    const dispatch = useDispatch();
    const storageData = useSelector(state => state.cart.value);

    function deleteFromCart(proid) {
        console.log(proid);

        // Get cart data from local storage
        var dataFromStorage = JSON.parse(localStorage.getItem('cartRecord'));

        if (dataFromStorage) {
            // Filter out the item to be deleted
            var filterData = dataFromStorage.filter(val => val.id !== proid);

            // Update local storage with the filtered data
            localStorage.setItem('cartRecord', JSON.stringify(filterData));
            dispatch(deleteRecordFromCart(proid));
        }
    }

    return (
        <Container>
             <h1 className="text-center mt-4 fw-bold">Cart</h1> <hr/>
            <Row>
                {storageData && storageData.length > 0 && storageData.map(({ image, title, price, id }) =>
                    <Col xs={6} lg={3} key={id}>
                        <Image fluid src={image} />
                        <h4>{price}</h4>
                        <p>
                            <Link to={"/productpage/" + id}>{title}</Link>
                        </p>
                        <Button onClick={() => { deleteFromCart(id) }}>Delete</Button>
                    </Col>
                )}
            </Row>
        </Container>
    );
}