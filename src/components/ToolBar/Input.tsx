import React from 'react';
//@ts-ignore
import classes from '../styles/Input.module.scss'

export interface IInputProps{
    title:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = ({title,onChange}:IInputProps) => {
    return (
        <div>
            {title} <br/>
            <input
                type="text"
                onChange={onChange}
                className={classes.input}
            />
        </div>
    );
};

export default Input;