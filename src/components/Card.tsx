import React from 'react';

const classes = require('../styles/Card.module.scss')

export interface ICardProps{
    children:React.ReactNode,
    onClick?:()=>void,
    classNames?:string[]
}

const Card = ({children,onClick,classNames}:ICardProps) => {
    return (
            <div
                className={classes.border +" "+classNames}
            >
                {children}
            </div>

    );
};

export default Card;
