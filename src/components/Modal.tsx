import React from 'react';
import Card from "./Card";

const classes = require('../styles/Modal.module.scss')

export interface IModalProps{
    children:React.ReactNode,
    onCloseModal:()=>void
}
const Modal = ({children,onCloseModal}:IModalProps) => {
    return (
        <div >
            <div
                className={classes.background}
                onClick={onCloseModal}
            ></div>
            <Card classNames={[classes.card]}>
                {children}
            </Card>
        </div>
    );
};

export default Modal;