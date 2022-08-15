import React from 'react';
import LoginForm from "./components/Auths/LoginForm";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import AuthPage from "./app/pages/AuthPage";
import MainPage from "./app/pages/MainPage";




const App = () => {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path={'/auth'} element={<AuthPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;