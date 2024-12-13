import React, { useEffect } from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addReacordInCartOnPageLoad } from './Slices/cartslice';


export default function App() {
  let dispatch = useDispatch();

  useEffect(() =>{

    var ansStorage = localStorage.getItem('cartRecord')
    console.log("App");
    console.log(ansStorage);

    if(ansStorage !== null){
      var reacordToDispatch = JSON.parse(ansStorage);
      console.log(reacordToDispatch);
      dispatch(addReacordInCartOnPageLoad(reacordToDispatch))
      
    }
    else{
      
    }
  },[])
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
