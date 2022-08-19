import React, { useState} from 'react';
//@ts-ignore
import classes from '../styles/SmallCart.module.scss'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getCartState} from "../../store/product/cartSlice";
import {dropState,removeFromCart} from '../../store/product/cartSlice'
import {Link} from "react-router-dom";

const SmallCart = () => {
    const cart = useAppSelector(getCartState)
    const dispatch = useAppDispatch()
    const [listVisible,setListVisible] = useState(false)

    const showCart=()=>setListVisible(true)
    const closeCart=()=>setListVisible(false)
    const clearCart = ()=>{
        dispatch(dropState())
    }
    const removeItem=(id:number)=>{
        dispatch(removeFromCart(id))
    }



    return (
        <>
            <div className={classes.cartButton}>
                <Link
                    onMouseEnter={showCart}
                    to={'/'}
                >
                    Корзина:{cart.products.length}
                </Link>
            </div>
            <div className={classes.cart +" "+((listVisible)?classes.visible:classes.hidden)}>
                <header>
                    <div>
                        Товаров: {cart.products.length}
                    </div>
                    <button
                        className={classes.closeCartButton}
                        onClick={closeCart}>
                        X
                    </button>
                </header>
                <div className={classes.items}>
                    {
                        cart.products.map(x=>
                            <div
                                key={x.product.id}
                                className={classes.item}>
                                <div className={classes.details}>
                                    <div><img src={x.product.image} alt=""/></div>
                                    <header>{x.product.title}</header>
                                    <button
                                        onClick={()=>removeItem(x.product.id)}
                                        className={classes.removeItemButton}
                                    >X
                                    </button>
                                </div>
                                <div
                                    className={classes.details}>
                                    <div>Цена:{x.totalProductPrice}</div>
                                    <div>Количество:{x.count}</div>
                                </div>

                            </div>
                        )
                    }
                </div>
                <header>
                    <div
                        className={classes.divCenterTitle}
                    >Итого: {cart.totalPrice}
                    </div>
                    <button
                        className={classes.clearCartButton}
                        onClick={clearCart}>
                        Очистить корзину
                    </button>
                </header>
            </div>
        </>

    );
};

export default SmallCart;
