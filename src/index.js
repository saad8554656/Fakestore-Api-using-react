import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import fakeStore from './Components/Fakestore'
import { Provider } from 'react-redux';
import { mystore } from './mystore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={mystore}>
<RouterProvider router={fakeStore} />
</Provider>
);


