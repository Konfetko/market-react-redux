import React, {useEffect, useState} from 'react';
import LoginForm from "../../components/Auths/LoginForm";
import RegistrationForm from "../../components/Auths/RegistrationForm";
import Layout from "../../components/Layout/Layout";
//@ts-ignore
import constClasses from '../../components/styles/Consts.module.scss';
import {useAppDispatch, useAppSelector} from "../hooks";
import {authorization, getUserState, registration} from "../../store/user/userSlice";
import {useNavigate} from "react-router";
import {IUser} from "../../models/IUser";

const AuthPage = () => {
    const userState = useAppSelector(getUserState)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [loginFormVisible,setLoginFormVisible] = useState(true)

    const switchForm=()=>setLoginFormVisible(prev=>!prev)

    const authorizationUser = (user:IUser)=>{
        dispatch(authorization(user))
    }
    const registrationUser = (user:IUser)=>{
        dispatch(registration(user))
        navigate('/')
    }


    useEffect(()=>{
        if(userState.user.username)
            navigate('/')
    },[])

    const switchButton=()=>{
        return (
            <button
                onClick={switchForm}
            >
                {loginFormVisible?"Создать учётную запись":"Уже есть учётная запись?"}
            </button>
        )
    }

    return (
        <Layout>
            <form className={constClasses.content}>
                {
                    loginFormVisible
                    ?<div>
                            <LoginForm onSubmit={authorizationUser}>
                                {switchButton()}
                            </LoginForm>

                    </div>
                    :<div>
                            <RegistrationForm onSubmit={registrationUser}>
                                {switchButton()}
                            </RegistrationForm>

                    </div>
                }
            </form>
        </Layout>
    );
};

export default AuthPage;