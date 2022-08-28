import React from 'react';
//@ts-ignore
import classes from '../components/styles/Card.module.scss'
//const classes = require('../components/styles/Card.module.scss')

export interface ICardProps{
    children:React.ReactNode,
    onClick?:()=>void,
    classNames?:string[]
}

const Card = ({children,onClick,classNames}:ICardProps) => {
    return (
            <div
                onClick={onClick}
                className={classes.border +" "+classNames}
            >
                {children}
            </div>

    );
};

export default Card;
