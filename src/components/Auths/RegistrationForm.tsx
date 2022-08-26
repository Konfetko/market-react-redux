import React, {ChangeEvent,useReducer, useRef, useState} from 'react';

import Card from "../Card";
import Input from "../ToolBar/Input";
import Error from "../Error"
import {IAuthFormProps} from "./LoginForm";
import formReducer, {initialFormState} from "../../app/reducers/formReducer";
import formValidateReducer, {initialFormValidityState} from "../../app/reducers/formValidateReducer";

const classes = require('../styles/AuthForm.module.scss')

const RegistrationForm = ({onSubmit,children}:IAuthFormProps) => {
    const [formState,dispatchForm] = useReducer(formReducer,initialFormState)
    const [formValidate,dispatchFormValidate] = useReducer(formValidateReducer,initialFormValidityState)

    const [passVisible,setPassVisible] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changePassVisibility = (e?:ChangeEvent<HTMLInputElement>)=>{
        setPassVisible(prev=>!prev)
        // @ts-ignore
        inputRef.current.checked=!passVisible
    }
    const registration = (e:React.FormEvent)=>{
        e.preventDefault()
        dispatchFormValidate({type:"VALIDATE_FORM",payload:formState})

        if(!formValidate.isFormValidity)
            return

        onSubmit({username:formState.username,password:formState.password,fio:formState.fio,email:formState.email})
    }
    return (
        <div className={classes.form}>
            {
                <Card>
                    <div className={classes.inputBlock}>
                        <Input
                            title={"Введите ваше ФИО"}
                            onChange={
                                (e)=>dispatchForm({type:"UPDATE_FIO",payload:e.target.value})
                            }
                            onBlur={()=>dispatchFormValidate({type:"VALIDATE_FIO",payload:formState})}
                            secondClassName={classes.second}/>
                        <Error error={formValidate.fioError}/>
                        <Input
                            title={"Введите логин"}
                            onChange={
                                (e)=>dispatchForm({type:"UPDATE_USERNAME",payload:e.target.value})
                            }
                            onBlur={()=>dispatchFormValidate({type:"VALIDATE_USERNAME",payload:formState})}
                            secondClassName={classes.second}/>
                        <Error error={formValidate.usernameError}/>
                        <Input
                            title={"Введите пароль"}
                            onChange={
                                (e)=>dispatchForm({type:"UPDATE_PASSWORD",payload:e.target.value})
                            }
                            onBlur={()=>dispatchFormValidate({type:"VALIDATE_PASSWORD",payload:formState})}
                            secondClassName={classes.second}
                            type={(passVisible)?"text":"password"}
                        />
                        <Error error={formValidate.passwordError}/>
                        <div
                            className={classes.showPass}
                            onClick={()=>changePassVisibility()}
                        >
                            <input
                                type="checkbox"
                                ref={inputRef}
                            />Показать пароль
                        </div>
                        <Input
                            title={"Введите почту"}
                            onChange={
                                (e)=>dispatchForm({type:"UPDATE_EMAIL",payload:e.target.value})
                            }
                            onBlur={()=>dispatchFormValidate({type:"VALIDATE_EMAIL",payload:formState})}
                            secondClassName={classes.second}
                        />
                        <Error error={formValidate.emailError}/>
                        <div className={classes.buttons}>
                            <div>
                                <button
                                    onClick={registration} >
                                    Зарегистрироваться
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

export default RegistrationForm;