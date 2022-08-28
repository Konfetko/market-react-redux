import React from 'react';
import {IProduct} from "../../models/IProduct";
import Card from "../Card";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {addToCart} from '../../store/product/cartSlice'
//@ts-ignore
import classes from '../styles/Product.module.scss'
import {useNavigate} from "react-router";

//const classes = require('../styles/Product.module.scss')

export interface IProductProps{
    product:IProduct
}

const Product = ({product}:IProductProps) => {
   const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const addProductToCart=()=>{
       dispatch(addToCart(product))
    }
    const navigateToProductPage=()=>{
       navigate('/product&'+product.id)
    }

    return (
        <Card classNames={[classes.card]}>
            <div
                className={classes.productBlock}
                onClick={navigateToProductPage}
            >
                <div className={classes.card+" "+classes.center}>
                    <div className={classes.front}>
                        <img src={product.image} className={classes.image} alt=""/>
                    </div>
                    <div className={classes.back}>
                        <div className={classes.backContent+" "+classes.center}>
                            {
                                <div
                                    className={classes.description}>
                                    {
                                        product.description.length>370
                                            ?<span>
                                            {product.description.substring(0,370)}
                                                <Link
                                                    to={'/'}
                                                    className={classes.descriptionLink}>
                                                ...
                                            </Link>
                                    </span>
                                            :product.description
                                    }
                                </div>
                            }

                        </div>
                    </div>
                </div>

                <div >
                    <header
                        className={classes.titleBlock}>
                        {
                            product.title.length > 63
                                ?product.title.substring(0,63)
                                :product.title
                        }
                    </header>

                    <div className={classes.priceBlock}>
                        <div>Стоимость:</div>
                        <div>{product.price} руб.</div>
                    </div>

                </div>
            </div>
            <div>
                <button
                    onClick={addProductToCart}
                    className={classes.addToCartButton}>
                    Добавить в корзину
                </button>
            </div>
        </Card>
    );
};

export default Product;