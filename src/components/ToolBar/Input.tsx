import React from 'react';
//@ts-ignore
import classes from '../styles/Input.module.scss'
//const classes = require('../styles/Input.module.scss')

export interface IInputProps{
    title:string,
    secondClassName?:string,
    type?:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    onBlur?:()=>void,
    value?:string
}

const Input = ({title,onChange,secondClassName,type,onBlur,value}:IInputProps) => {
    return (
        <div className={secondClassName}>
            <p>{title}</p>
            <input
                type={type}
                onChange={onChange}
                className={classes.input}
                onBlur={onBlur}
                value={value}
            />
        </div>
    );
};

export default Input;