import React from 'react';
//@ts-ignore
import classes from '../styles/Input.module.scss'

export interface IInputProps{
    title:string,
    secondClassName?:string,
    type?:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    onBlur?:()=>void
}

const Input = ({title,onChange,secondClassName,type,onBlur}:IInputProps) => {
    return (
        <div className={secondClassName}>
            <p>{title}</p>
            <input
                type={type}
                onChange={onChange}
                className={classes.input}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;