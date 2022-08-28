import React from 'react';
import Layout from "../../components/Layout/Layout";
//@ts-ignore
import classes from '../../components/styles/CartPage.module.scss'
import {useAppDispatch, useAppSelector} from "../hooks";
import {getCartState, removeFromCart,decrementItemCount,addToCart} from "../../store/product/cartSlice";
import {IProduct} from "../../models/IProduct";

//const classes = require('../../components/styles/CartPage.module.scss')

const CartPage = () => {
    const cart = useAppSelector(getCartState)
    const dispatch = useAppDispatch()

    const decrementItem=(id:number)=>{
        dispatch(decrementItemCount(id))
    }
    const incrementItem=(product:IProduct)=>{
        dispatch(addToCart(product))
    }
    const removeItem=(id:number)=>{
        console.log(id)
        dispatch(removeFromCart(id))
    }


    return (
        <Layout>
            <div
                className={classes.content}
            >
                <div
                    className={classes.cart}>
                    <div
                        className={classes.cartList}>
                        <div
                            className={classes.cartCount}>
                            <h2>Корзина ({cart.products.length})</h2>
                        </div>
                        <div
                            className={classes.cartItems}>
                            {
                                cart.products.map(product=>{
                                    return(
                                        <div className={classes.item} key={product.product.title}>
                                            <img src={product.product.image} alt=""/>
                                            <div className={classes.details}>
                                                <div className={classes.detail}>
                                                    <h2 className={classes.title}>{product.product.title}</h2>
                                                    <h3 className={classes.price}>Цена: {product.product.price}</h3>
                                                    <div className={classes.count}>
                                                        <h3 >Количество:</h3>
                                                        <div className={classes.buttons}>
                                                            <button
                                                                onClick={()=>decrementItem(product.product.id)}
                                                                disabled={product.count === 1}
                                                            >
                                                                -
                                                            </button>
                                                            <h3> {product.count}</h3>
                                                            <button
                                                                onClick={()=>incrementItem(product.product)}
                                                            >
                                                                +
                                                            </button>
                                                            <button
                                                                onClick={()=>removeItem(product.product.id)}
                                                            >
                                                                <img src={require('../../components/images/trash.png')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                   <div>
                       <div
                           className={classes.cartOffer}>
                           <div>
                               <h2>Сумма заказа</h2>
                               <div
                                   className={classes.cartPrice}>
                                   <div>
                                       Стоимость
                                   </div>
                                   <div>
                                       {cart.totalPrice} руб.
                                   </div>
                               </div>
                               <hr/>
                               <div
                                   className={classes.cartPrice}>
                                   <div>
                                       <h3>К оплате</h3>
                                   </div>
                                   <div>
                                       <h3>{cart.totalPrice} руб.</h3>
                                   </div>
                               </div>
                               <div className={classes.orderButton}>
                                   <button>Купить ({cart.products.length})</button>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;