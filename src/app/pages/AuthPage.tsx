import React from 'react';
import LoginForm from "../../components/Auths/LoginForm";
import RegistrationForm from "../../components/Auths/RegistrationForm";

const AuthPage = () => {
    return (
        <div>
            <LoginForm/>
            <RegistrationForm/>
        </div>
    );
};

export default AuthPage;