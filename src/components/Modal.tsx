import React from 'react';
//@ts-ignore
import classes from '../components/styles/Modal.module.scss'
import Card from "./Card";

export interface IModalProps{
    children:React.ReactNode,
    onCloseModal:()=>void
}
const Modal = ({children,onCloseModal}:IModalProps) => {
    return (
        <div>
            <div
                className={classes.background}
                onClick={onCloseModal}
            ></div>
            <Card classNames={[classes.a]}>
                {children}
            </Card>
        </div>
    );
};

export default Modal;