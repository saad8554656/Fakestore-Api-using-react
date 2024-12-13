import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "./Home"
import Electronics from "./Electronics"
import Search from "./Search"
import Filter from "./Filter"
import Singleproduct from "./Singleproduct"
import Cart from "./Cart"



const fakeStore = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'productpage/:productid',
                element: <Singleproduct/>
            },
            {
                path: 'fakestore-electronics/:catname',
                element: <Electronics/>
            },
            {
                path: 'search',
                element: <Search/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'filter',
                element: <Filter/>
            }

        ]
    }
])

export default fakeStore