import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import Login from '../component/Login'
 import Register from  '../Register'
// import Login from './component/Login'
import CreateProduct from '../CreateProduct'
import Login from '../Login'
import List from '../List'
export default function Router(props) {
    return (

        
        <BrowserRouter>
            <Route path={'/'} exact component={Login} />
            <Route path={'/register'} exact component={Register} />
            {/* <Route path={'/register'} exact component={Register} /> */}
            <Route path={'/home'} exact component={List} />

            <Route path={'/createproduct'} exact component={CreateProduct} />

            </BrowserRouter>
    );
}