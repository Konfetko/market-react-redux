import React from 'react';
//@ts-ignore
import classes from '../styles/SmallCart.module.scss'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getCartState} from "../../store/product/cartSlice";

const SmallCart = () => {
    const cart = useAppSelector(getCartState)
    const dispatch = useAppDispatch()

    return (
        <div className={classes.cart}>
            Корзина:{cart.products.length}
        </div>
    );
};

export default SmallCart;