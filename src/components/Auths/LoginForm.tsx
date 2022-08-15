import React, {useEffect, useState} from 'react';
import {authorization, registration, logout, getUserState} from "../../store/user/userSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {IUserState} from "../../models/IUserState";

const LoginForm = () => {
    const state = useAppSelector(getUserState)
    const dispatch = useAppDispatch()

    const[user,setUser] = useState<IUserState>({login:'',password:'',email:''})
    const setLogin=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,login:e.target.value})
    }
    const setPassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,password:e.target.value})
    }

    return (
        <div>
            {
                state.login?<div>Вы авторизованы <button onClick={()=>dispatch(logout())}>Выйти</button></div>:
               <div>
                   <input type="text" onChange={setLogin}/>
                   <input type="text" onChange={setPassword}/>
                   <button onClick={()=>dispatch(authorization(user))} >авторизация</button>
               </div>
            }
        </div>
    );
};

export default LoginForm;