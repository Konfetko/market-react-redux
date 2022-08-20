import React, {ChangeEvent, useReducer, useRef, useState} from 'react';
import {IUser} from "../../models/IUser";
//@ts-ignore
import classes from '../styles/AuthForm.module.scss'
import Input from "../ToolBar/Input";
import Card from "../Card";
import formReducer, {initialFormState} from "../../app/reducers/formReducer";

export interface IAuthFormProps {
    onSubmit:(user:IUser)=>void,
    children:React.ReactNode
}

const LoginForm = ({onSubmit,children}:IAuthFormProps) => {
    const [state,dispatchState] = useReducer(formReducer,initialFormState)
    const [passVisible,setPassVisible] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)


    const changePassVisibility = (e?:ChangeEvent<HTMLInputElement>)=>{
        setPassVisible(prev=>!prev)
        // @ts-ignore
        inputRef.current.checked=!passVisible
    }
    const authorization = ()=>{
        onSubmit({username:state.username,password:state.password,email:''})
    }
    return (
        <div className={classes.form}>
            {
               <Card>
                   <div>
                       <Input
                           title={"Введите логин"}
                           onChange={
                            (e)=>
                                dispatchState({type:"UPDATE_USERNAME",payload:e.target.value})
                            }
                           secondClassName={classes.second}/>
                       <Input
                           title={"Введите пароль"}
                           onChange={
                                (e)=>
                                    dispatchState({type:"UPDATE_PASSWORD",payload:e.target.value})
                           }
                           secondClassName={classes.second}
                            type={(passVisible)?"text":"password"}
                       />
                       <div
                           className={classes.showPass}
                           onClick={()=>changePassVisibility()}
                       >
                           <input
                               type="checkbox"
                               ref={inputRef}
                           />Показать пароль
                       </div>
                      <div className={classes.buttons}>
                          <div>
                              <button
                                  onClick={authorization} >
                                  Авторизоваться
                              </button>
                          </div>
                          <div>
                              {children}
                          </div>
                      </div>

                   </div>
               </Card>
            }
        </div>
    );
};

export default LoginForm;