import React from 'react';
// @ts-ignore
import classes from './styles/Card.module.scss'

export interface ICardProps{
    children:React.ReactNode
}

const Card = ({children}:ICardProps) => {
    return (
        <div className={classes.border}>
            {children}
        </div>
    );
};

export default Card;
