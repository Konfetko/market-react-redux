import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import AuthPage from "./app/pages/AuthPage";
import MainPage from "./app/pages/MainPage";
import ProfilePage from "./app/pages/ProfilePage";
import CartPage from "./app/pages/CartPage";
import ProductPage from "./app/pages/ProductPage";


const App = () => {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path={'/auth'} element={<AuthPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/cart'} element={<CartPage/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/product&:id'} element={<ProductPage/>}/>
            </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;