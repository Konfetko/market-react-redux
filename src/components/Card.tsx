import React from 'react';
// @ts-ignore
import classes from './styles/Card.module.scss'

export interface ICardProps{
    children:React.ReactNode,
    onClick?:()=>void,
    classNames?:string[]
}

const Card = ({children,onClick,classNames}:ICardProps) => {
    return (
        <div
            className={classes.border +" "+classNames}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
