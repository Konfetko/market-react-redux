import React, {useState} from 'react';
import {IProduct} from "../../models/IProduct";
import Card from "../Card";
// @ts-ignore
import classes from '../styles/Product.module.scss'
import {Link} from "react-router-dom";

export interface IProductProps{
    product:IProduct
}

const Product = ({product}:IProductProps) => {
    const [visibleDescription,setVisibleDescription] = useState(false)
    const showDescription=()=>{
        setVisibleDescription(prev=>!prev)
    }

    return (
        <Card >
            {
                visibleDescription &&
                <div
                    className={classes.description}>

                    {
                        product.description.length>370
                            ?<span>
                                {product.description.substring(0,370)}
                                <Link to={'/'} className={classes.descriptionLink}>...</Link>
                            </span>
                        :product.description
                    }
                </div>}


            <img src={product.image} alt=""/>
            <header className={classes.titleBlock}>{product.title}</header>

            <button
                className={classes.descriptionButton}
                onClick={showDescription}>
                {visibleDescription ? "Закрыть описание" : "Открыть описание"}
            </button>
            <div className={classes.priceBlock}>
                <div>Стоимость:</div>
                <div>{product.price} руб.</div>
            </div>
            <div>
                <button className={classes.addToCartButton}>Добавить в корзину</button>
            </div>
        </Card>
    );
};

export default Product;